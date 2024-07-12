import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
export default function SealingLetterTable() {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewSealingLetter = useDisclosure();
  const [sealingLetter, setSealingLetter] = useState([]);
  const [selectedSealingLetter, setSelectedSealingLetter] = useState({});

  const fetchSealingLetter = async (page, id) => {
    if (isUsers) {
      let url = "";
      if (user.userAuth.authorities[0].authority === "Manager") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/sealing-letter/get/all?page=${page}`;
      } else if (user.userAuth.authorities[0].authority === "Customer") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/sealing-letter/customer/get?page=${page}&id=${id}`;
      }
      await axios.get(url).then(function (response) {
        console.log(response.data);
        setSealingLetter(response.data.content);
        setTotalPages(response.data.totalPages);
      });
    }
  };
  useEffect(() => {
    fetchSealingLetter(currentPage, user.userAuth.id);
  }, []);
  useEffect(() => {
    fetchSealingLetter(currentPage, user.userAuth.id);
  }, [currentPage]);
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Sealing Letter
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No sealing letter to show</Center>
        ) : (
          <Skeleton isLoaded={sealingLetter.length > 0} height={"200px"}>
            <TableContainer shadow="md" borderRadius="md">
              <Table >
                <Thead bg="gray.600" color="white" mb={5} boxShadow="sm" borderRadius="md" maxW="100%" minW="100%">
                  <Tr>
                    <Th color="white">ID</Th>
                    <Th color="white">Request ID</Th>
                    {isUsers &&
                      user.userAuth.authorities[0].authority === "Manager" && (
                        <Th color="white">Customer Name</Th>
                      )}
                    <Th color="white">Created Date</Th>
                    <Th color="white">Sealing Date</Th>
                    <Th color="white">View</Th>
                  </Tr>
                </Thead>
                <Tbody variant="simple" bg="gray.200" color="black">
                  {sealingLetter.map((item, index) => (
                    <Tr key={index} _hover={{ bg: "gray.100" }}>
                      <Td>{item?.id}</Td>
                      <Td>{item?.valuationRequestId || "N/A"}</Td>
                      {isUsers &&
                        user.userAuth.authorities[0].authority ===
                          "Manager" && <Td>{item?.customerName || "N/A"}</Td>}
                      <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                      <Td>{item?.sealingDate?.slice(0, 10) || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bg={"transparent"}
                          color="black"
                          onClick={() => {
                            setSelectedSealingLetter(item);
                            viewSealingLetter.onOpen();
                          }}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center m={"50px 0 0 0"}>
              <PageIndicator
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </Center>
          </Skeleton>
        )}
      </Flex>
      <Modal
        isOpen={viewSealingLetter.isOpen}
        onClose={viewSealingLetter.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton isLoaded={selectedSealingLetter !== null}>
              <Flex gap={5}>
                <Icon as={GiDiamondTrophy} w={16} h={16} />
                <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                  DiamondVal
                </Text>
              </Flex>
            </Skeleton>
          </ModalHeader>
          <ModalBody>
            <Skeleton isLoaded={selectedSealingLetter !== null}>
              <Flex direction={"column"} gap={5} p={5}>
                <Center>
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Sealing Letter
                  </Text>
                </Center>
                <Text>
                  <strong>Company</strong>: DiamondVal
                </Text>
                <Text>
                  <strong>Date</strong>:{" "}
                  {selectedSealingLetter?.createdDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text>
                  <strong>RE</strong>: Unclaimed Diamond
                </Text>
                <Text>
                  <strong>Customer Name</strong>:{" "}
                  {selectedSealingLetter?.customerName || "N/A"}
                </Text>
                <Text>Dear {selectedSealingLetter?.customerName},</Text>
                <Text>{selectedSealingLetter?.content}.</Text>
                <Text>
                  Our records indicate that you left a diamond with us on{" "}
                  <strong>
                    {selectedSealingLetter?.receivedDate?.slice(0, 10)}
                  </strong>
                  . We have attempted to contact you on{" "}
                  <strong>
                    {selectedSealingLetter?.finishDate?.slice(0, 10)}
                  </strong>{" "}
                  to discuss the return of your diamond, but have been 30 days
                  from that time you didn't come to get your diamond and your
                  valuation result.
                </Text>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Please note that:
                </Text>
                <UnorderedList spacing={5}>
                  <ListItem>
                    Your diamond will be held securely for a period of 30 days
                    from the date of this letter.
                  </ListItem>
                  <ListItem>
                    After 30 days, if we have not received a response or your
                    diamond remains unclaimed, we reserve the right to [State
                    your company policy on unclaimed items. This could be
                    storing the item for a longer period with a storage fee,
                    selling the item through auction, or donating it to
                    charity].
                  </ListItem>
                </UnorderedList>
                <Text marginBottom={20}>Sincerely,</Text>
                <Text>Manager</Text>
                <Text>DiamondVal</Text>
              </Flex>
            </Skeleton>
          </ModalBody>
          <ModalFooter>
            <Skeleton isLoaded={selectedSealingLetter !== null}>
              i
              {isUsers &&
                user.userAuth.authorities[0].authority === "Manager" && (
                  <Button
                    onClick={() => {
                      window.print();
                    }}
                  >
                    Print
                  </Button>
                )}
            </Skeleton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

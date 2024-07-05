import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PageIndicator from "../../../components/PageIndicator";
import {
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
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
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";

export default function CommitmentTable() {
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewCommitment = useDisclosure();
  const viewPrintCommitment = useDisclosure();
  const [commitment, setCommitment] = useState([]);
  const [selectedCommitment, setSelectedCommitment] = useState({});
  const fetchCommitment = async (page) => {
    let url = "";
    if (user.userAuth.roleid === 2) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/commitment/get/all?page=${page}`;
    } else if (user.userAuth.roleid === 5) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/commitment/customer/get/all?page=${page}&id=${user.userAuth.id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response.data);
      setCommitment(response.data.content);
      setTotalPages(response.data.totalPages);
    });
  };
  useEffect(() => {
    fetchCommitment(currentPage);
  }, []);
  useEffect(() => {
    fetchCommitment(currentPage);
  }, [currentPage]);

  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Commitment
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No commitment to show</Center>
        ) : (
          <Skeleton isLoaded={commitment.length > 0} height={"200px"}>
            <TableContainer>
              <Table size={"sm"} colorScheme="blue">
                <Thead bg={"blue.400"}>
                  <Tr>
                    <Th>No</Th>
                    <Th>Request ID</Th>
                    {user.userAuth.roleid === 2 && <Th>Customer Name</Th>}
                    <Th>Created Date</Th>
                    <Th>View</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {commitment.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item?.valuationRequestId || "N/A"}</Td>
                      {user.userAuth.roleid === 2 && (
                        <Td>{item?.customerName || "N/A"}</Td>
                      )}
                      <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bg={"transparent"}
                          onClick={() => {
                            setSelectedCommitment(item);
                            viewCommitment.onOpen();
                          }}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Skeleton>
        )}
        <Center>
          <PageIndicator
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Center>
      </Flex>
      <Modal isOpen={viewCommitment.isOpen} onClose={viewCommitment.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Commitment ID: {selectedCommitment?.id || "N/A"}
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>
                <strong>Created Date</strong>:{" "}
                {selectedCommitment?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>Request ID</strong>:{" "}
                {selectedCommitment?.valuationRequestId || "N/A"}
              </Text>
              <Text>
                <strong>Customer Name</strong>:{" "}
                {selectedCommitment?.customerName || "N/A"}
              </Text>
              <Text>
                <strong>Transaction No</strong>:{" "}
                {selectedCommitment?.transactionNo || "N/A"}
              </Text>
              <Text>
                <strong>Date of purchase</strong>:{" "}
                {selectedCommitment?.paymentDate?.slice(0, 16) || "N/A"}
              </Text>
              <Text>
                <strong>Bank</strong>: {selectedCommitment?.bank || "N/A"}
              </Text>
              <Text>
                <strong>Amount</strong>: {selectedCommitment?.amount || "N/A"}{" "}
                vnd
              </Text>
              <Text>
                <strong>Order Info</strong>{" "}
                {selectedCommitment?.orderInfo || "N/A"}
              </Text>
            </Flex>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button
                colorScheme="teal"
                onClick={() => {
                  viewPrintCommitment.onOpen();
                }}
              >
                View
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={viewPrintCommitment.isOpen}
        onClose={viewPrintCommitment.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex gap={5}>
              <Icon as={GiDiamondTrophy} w={16} h={16} />
              <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                DiamondVal
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5} p={5}>
              <Flex direction={"column"} align={"center"} gap={5}>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Commitment
                </Text>
              </Flex>
              <Text>
                <strong>Company</strong>: DiamondVal
              </Text>
              <Text>
                <strong>Date</strong>{" "}
                {selectedCommitment?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>RE</strong>: Lost Receipt
              </Text>
              <Text>Dear {selectedCommitment?.customerName || "N/A"},</Text>
              <Text>
                This letter acknowledges that we are currently in possession of
                a diamond belonging to you. We understand that you have
                misplaced the original receipt for this item.
              </Text>
              <Text>
                To ensure the safe return of your diamond, we require a signed
                statement confirming your ownership and agreeing to the
                following:
              </Text>
              <Text fontWeight={"bold"}>Confirmation of Ownership:</Text>
              <Text>
                By signing below, you confirm that the diamond described above
                is your property.
              </Text>
              <Text fontWeight={"bold"}>Verification Process:</Text>
              <Text>
                To further verify your ownership, we may ask you to provide
                additional details about the diamond, such as:
              </Text>
              <UnorderedList spacing={5}>
                <Text>Transaction No:</Text>
                <Text>Date of purchase:</Text>
                <Text>Bank:</Text>
                <Text>Amount:</Text>
              </UnorderedList>
              <Text fontWeight={"bold"}>Return Process:</Text>
              <Text>
                Once we have verified your ownership, you can schedule an
                appointment to pick up your diamond. Please note that a valid
                form of photo ID will be required at the time of pick-up.
              </Text>
              <Text fontWeight={"bold"}>Commitment:</Text>
              <Text>
                Once we have verified your ownership, you can schedule an
                appointment to pick up your diamond. Please note that a valid
                form of photo ID will be required at the time of pick-up.
              </Text>
              <Text fontWeight={"bold"}>
                Please sign and return this letter at your earliest convenience.
              </Text>
              <Flex justify={"space-around"}>
                <Flex direction={"column"}>
                  <Text>Sincerely,</Text>
                  <Text marginTop={"200px"}>Manager</Text>
                  <Text>DiamondVal</Text>
                </Flex>
                <Text>Your signature</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={window.print}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

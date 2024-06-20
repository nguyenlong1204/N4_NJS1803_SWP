import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";
export default function ManagePage() {
  const viewSealingLetterDetail = useDisclosure();
  const [sealingLetter, setSealingLetter] = useState([]);
  const [selectedSealingLetter, SetSelectedSealingLetter] = useState({}); //[1
  const [isUpdate, setIsUpdate] = useState(false);
  const viewSealingLetter = () => {
    axios
      .get(`http://localhost:8081/api/process-sealing/get/all?page=1`)
      .then(function (response) {
        console.log(response.data);
        setSealingLetter(response.data.content);
      });
  };
  const handleAcceptSealing = (id, type) => {
    axios
      .get(
        `http://localhost:8081/api/process-sealing/update?id=${id}&type=${type}`
      )
      .then(function (response) {
        setIsUpdate(true);
        console.log(response.data);
      });
  };
  useEffect(() => {
    viewSealingLetter();
  }, []);
  useEffect(() => {
    if (isUpdate) {
      viewSealingLetter();
      setIsUpdate(false);
    }
  }, [isUpdate]);

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"70vh"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Manager</Text>
        <TableContainer>
          <Table size={"sm"} colorScheme="blue">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Content</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sealingLetter.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item?.sealingLetterContent || "N/A"}</Td>
                  <Td>{item?.status || "N/A"}</Td>
                  <Td>
                    <IconButton
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        SetSelectedSealingLetter(item);
                        viewSealingLetterDetail.onOpen();
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal
        isOpen={viewSealingLetterDetail.isOpen}
        onClose={viewSealingLetterDetail.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Sealing Letter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>
                Content: {selectedSealingLetter?.sealingLetterContent || "N/A"}
              </Text>
              <Text>Status: {selectedSealingLetter?.status || "N/A"}</Text>
              <Text>
                Sealing date:{" "}
                {selectedSealingLetter?.valuationRequestSealingDate || "N/A"}
              </Text>
              <Text fontWeight={"bold"}>Customer</Text>
              <Text>Name: {selectedSealingLetter?.customerName || "N/A"}</Text>
              <Text fontWeight={"bold"}>Service</Text>
              <Text>Type: {selectedSealingLetter?.serviceName || "N/A"}</Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-around"}>
            {selectedSealingLetter?.status === "Not resolved yet" && (
              <>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    viewSealingLetterDetail.onClose();
                    handleAcceptSealing(selectedSealingLetter.id, "accept");
                  }}
                >
                  Accept
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    viewSealingLetterDetail.onClose();
                    handleAcceptSealing(selectedSealingLetter.id, "reject");
                  }}
                >
                  Reject
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

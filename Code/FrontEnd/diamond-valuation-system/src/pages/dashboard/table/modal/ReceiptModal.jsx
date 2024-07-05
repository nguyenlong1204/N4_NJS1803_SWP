import {
  Button,
  Flex,
  Icon,
  ListItem,
  Modal,
  ModalBody,
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
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { GiDiamondTrophy } from "react-icons/gi";

export default function ReceiptModal({
  viewReceipt,
  selectedValuationReceipt,
}) {
  return (
    <>
      <Modal
        isOpen={viewReceipt.isOpen}
        onClose={viewReceipt.onClose}
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
                  Receipt
                </Text>
              </Flex>
              <Text>
                <strong>Company</strong>: DiamondVal
              </Text>
              <Text>
                <strong>Date</strong>:{" "}
                {selectedValuationReceipt?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>RE</strong>: Diamond Valuation Receipt
              </Text>
              <Text>We include: </Text>
              <Flex gap={10}>
                <Flex direction={"column"} align={"start"} gap={5}>
                  <Text fontWeight={"bold"}>Customer side (Send diamond)</Text>
                  <UnorderedList spacing={2}>
                    <ListItem>
                      Name: {selectedValuationReceipt?.customerName || "N/A"}
                    </ListItem>
                    <ListItem>
                      Phone Number:{" "}
                      {selectedValuationReceipt?.customerPhone || "N/A"}
                    </ListItem>
                  </UnorderedList>
                </Flex>
                <Flex direction={"column"} align={"start"} gap={5}>
                  <Text fontWeight={"bold"}>
                    Company side (Receive diamond)
                  </Text>
                  <UnorderedList spacing={2}>
                    <ListItem>
                      Name:{" "}
                      {selectedValuationReceipt?.consultingStaffName || "N/A"}
                    </ListItem>
                    <ListItem>
                      Phone Number:{" "}
                      {selectedValuationReceipt?.consultingStaffPhone || "N/A"}
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
              <Text>
                Both are agree to about give and receive the diamond below
              </Text>
              <TableContainer>
                <Table size={"sm"} colorScheme="blue">
                  <Thead bg={"blue.400"}>
                    <Tr>
                      <Th>No</Th>
                      <Th>Type</Th>
                      <Th>Quantity</Th>
                      <Th>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>Diamond</Td>
                      <Td>1</Td>
                      <Td>{selectedValuationReceipt?.description || "N/A"}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Text>
                Company side confirmed that Customer side has given to Company
                side the right diamond with that quantity.
              </Text>
              <Text>
                Both are agreed to the above information and signed below & the
                receipt will be copied for both sides. Each will receive a copy
                and they both have the same validity.
              </Text>
              <Flex justify={"space-between"} p={10}>
                <Flex direction={"column"} align={"start"} gap={5}>
                  <Text>Customer side</Text>
                  <Text>Signature</Text>
                </Flex>
                <Flex direction={"column"} align={"end"} gap={5}>
                  <Text>Company side</Text>
                  <Text>Signature</Text>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify={"flex-end"} p={5}>
              <Button
                onClick={() => {
                  window.print();
                }}
              >
                Print
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

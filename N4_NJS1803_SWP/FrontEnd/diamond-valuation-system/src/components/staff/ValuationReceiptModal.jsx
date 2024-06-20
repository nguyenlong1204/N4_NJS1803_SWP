import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function ValuationReceiptModal({
  viewValuationReceipt,
  receipt,
}) {
  return (
    <Modal
      isOpen={viewValuationReceipt.isOpen}
      onClose={viewValuationReceipt.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Valuation Receipt</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap={3}>
            <Text>
              <strong>Receipt ID</strong>: {receipt.id}
            </Text>
            <Text>
              <strong>Receipt Status</strong>: {receipt.status}
            </Text>
            <Text>
              <strong>Customer name</strong>: {receipt.customerName}
            </Text>
            <Text>
              <strong>Customer email</strong>: {receipt.customer}
            </Text>
            <Text>
              <strong>Diamond ID</strong>: {receipt.diamondId}
            </Text>
            <Text>
              <strong>Valuation Price</strong>: {receipt.price}
            </Text>
            <Text>
              <strong>Receipt Description</strong>: {receipt.description}
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter>Created Date: {receipt.createDate}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}

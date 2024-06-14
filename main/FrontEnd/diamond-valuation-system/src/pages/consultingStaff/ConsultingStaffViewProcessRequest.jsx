import {
  Button,
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

export default function ConsultingStaffViewProcessRequest({
  isOpen,
  onClose,
  processRequest,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View Process Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Customer</Text>
          <Text>Name: {processRequest?.customerName}</Text>
          <Text>Email: {processRequest?.customerEmail}</Text>
          <Text>Phone: {processRequest?.customerPhone}</Text>
          <Text>Service</Text>
          <Text>Type: {processRequest?.serviceName}</Text>
          <Text>Price: {processRequest?.servicePrice}</Text>
          <Text>Time: {processRequest?.serviceTime}</Text>
          <Text>Will valuate: {processRequest?.statisticName}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue">Receive</Button>
          <Button colorScheme="red">Reject</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

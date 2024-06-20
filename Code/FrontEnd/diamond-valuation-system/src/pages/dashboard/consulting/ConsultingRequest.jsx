import {
  Button,
  Center,
  Divider,
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
import { handleProcessRequest } from "./ConsultingStaffService";
import React from "react";
import ZaloChat from "../../../components/zalo/ZaloChat";

export default function ConsultingRequest({
  isOpen,
  onClose,
  processRequest,
  setIsProcessRequest,
  viewProcessRequest,
  toast,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View Process Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap={5}>
            <Center>
              <Text fontWeight={"bold"}>Customer</Text>
            </Center>
            <Text>Name: {processRequest?.customerName}</Text>
            <Text>Email: {processRequest?.customerEmail}</Text>
            <Text>Phone: {processRequest?.customerPhone}</Text>
            <Text>Description: {processRequest?.description}</Text>
            <Divider />
            <Center>
              <Text fontWeight={"bold"}>Service</Text>
            </Center>
            <Text>Type: {processRequest?.serviceName}</Text>
            <Text>Price: {processRequest?.servicePrice}</Text>
            <Text>Time: {processRequest?.serviceTime}</Text>
            <Text>Will valuate: {processRequest?.statisticName}</Text>
            <Divider />
          </Flex>
        </ModalBody>
        {processRequest?.type === "Not resolved yet" ? (
          <ModalFooter justifyContent={"space-around"}>
            <Button
              colorScheme="green"
              onClick={() => {
                handleProcessRequest(
                  toast,
                  "receive",
                  processRequest?.type,
                  processRequest?.consultingStaffId,
                  processRequest?.valuationRequestId
                ).then(() => {
                  setIsProcessRequest(true);
                  viewProcessRequest.onClose();
                });
              }}
            >
              Receive
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleProcessRequest(
                  toast,
                  "reject",
                  processRequest?.type,
                  processRequest?.consultingStaffId,
                  processRequest?.valuationRequestId
                ).then(() => {
                  setIsProcessRequest(true);
                  viewProcessRequest.onClose();
                });
              }}
            >
              Reject
            </Button>
          </ModalFooter>
        ) : (
          <ModalFooter justifyContent={"space-evenly"}>
            <Flex direction={"row"} gap={5} align={"center"}>
              {processRequest?.type !== "Diamond Received" ? (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    handleProcessRequest(
                      toast,
                      "diamond",
                      processRequest?.type,
                      processRequest?.consultingStaffId,
                      processRequest?.valuationRequestId
                    ).then(() => {
                      setIsProcessRequest(true);
                      viewProcessRequest.onClose();
                    });
                  }}
                >
                  Diamond Received
                </Button>
              ) : (
                <></>
              )}
              <ZaloChat customerPhone={processRequest?.customerPhone} />
            </Flex>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}


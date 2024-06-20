import {
  Flex,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";

export default function AdminViewUsers({
  isOpen,
  onClose,
  currentAcc,
  setUpdateAcc,
  updateUser,
  setDeleteId,
  confirmDeleteUser,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap={5}>
            <Text>
              <strong>Role</strong>: {currentAcc?.roleName}
            </Text>
            <Text>
              <strong>Username</strong>: {currentAcc?.username}
            </Text>
            <Text>
              <strong>Full name</strong>: {currentAcc?.fullName}
            </Text>
            <Text>
              <strong>Email</strong>: {currentAcc?.email}
            </Text>
            <Text>
              <strong>Phone number</strong>: {currentAcc?.phoneNumber}
            </Text>
            <Text>
              <strong>Address</strong>: {currentAcc?.address}
            </Text>
            <Center>
              <Flex direction={"row"} gap={5}>
                <IconButton
                  aria-label="update user"
                  icon={<GrUpdate />}
                  bgColor={"transparent"}
                  onClick={() => {
                    setUpdateAcc(currentAcc);
                    updateUser.onOpen();
                  }}
                />
                <IconButton
                  aria-label="delete user"
                  icon={<MdDeleteOutline size={25} color="red" />}
                  bgColor={"transparent"}
                  onClick={() => {
                    setDeleteId(currentAcc?.id);
                    confirmDeleteUser.onOpen();
                  }}
                />
              </Flex>
            </Center>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

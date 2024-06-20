import { ViewIcon } from "@chakra-ui/icons";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
export default function AdminTable({
  accounts,
  setCurrentAcc,
  viewUser,
  setUpdateAcc,
  updateUser,
  setDeleteId,
  confirmDeleteUser,
}) {
  return (
    <>
      <TableContainer
        display={{ base: "block", md: "none", lg: "none" }}
        whiteSpace={"wrap"}
      >
        <Table size={"sm"} colorScheme="blue">
          <Thead bgColor={"blue.400"}>
            <Tr>
              <Th>No</Th>
              <Th>Role</Th>
              <Th>Full Name</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accounts.map((account, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{account?.roleName}</Td>
                <Td>{account?.fullName}</Td>
                <Td>
                  <Center>
                    <IconButton
                      aria-label="view user"
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setCurrentAcc(account);
                        viewUser.onOpen();
                      }}
                    />
                  </Center>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer
        display={{ base: "none", md: "block", lg: "block" }}
        whiteSpace={"wrap"}
      >
        <Table size={"sm"} colorScheme="blue">
          <Thead bgColor={"blue.400"}>
            <Tr>
              <Th>No</Th>
              <Th>Role</Th>
              <Th>Username</Th>
              <Th>Password</Th>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone number</Th>
              <Th>Address</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accounts.map((account, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{account?.roleName}</Td>
                <Td>{account?.username}</Td>
                <Td>***</Td>
                <Td>{account?.fullName}</Td>
                <Td>{account?.email}</Td>
                <Td>{account?.phoneNumber}</Td>
                <Td
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  maxW={"300px"}
                >
                  {account?.address}
                </Td>
                <Td>
                  <Center>
                    <IconButton
                      aria-label="update user"
                      icon={<GrUpdate />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setUpdateAcc(account);
                        updateUser.onOpen();
                      }}
                    />
                  </Center>
                </Td>
                <Td>
                  <Center>
                    <IconButton
                      aria-label="delete user"
                      icon={<MdDeleteOutline size={25} color="red" />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setDeleteId(account.id);
                        confirmDeleteUser.onOpen();
                      }}
                    />
                  </Center>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

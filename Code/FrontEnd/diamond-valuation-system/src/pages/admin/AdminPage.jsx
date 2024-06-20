import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdCreate } from "react-icons/md";
import ConfirmAlert from "../../components/ConfirmAlert";
import axios from "axios";
import { Form, Formik } from "formik";
import { validateSignUp } from "../../utils/ValidateSignUp";
export default function AdminPage() {
  const bgColor = useColorModeValue("white", "black");

  const toast = useToast();

  const createUser = useDisclosure();
  const updateUser = useDisclosure();
  const confirmDeleteUser = useDisclosure();
  const cancelRef = useRef();

  const [accounts, setAccounts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [updateAcc, setUpdateAcc] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const pageIndicator = [];
  for (let i = 1; i <= totalPage; i++) {
    pageIndicator.push(
      <Button
        key={i}
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setCurrentPage(i);
          console.log("current:" + currentPage);
        }}
      >
        {i}
      </Button>
    );
  }
  useEffect(() => {
    fetchAccounts(currentPage);
  }, [currentPage]);

  const fetchAccounts = async (pageId) => {
    try {
      const res = await axios
        .get(`http://localhost:8081/api/admin/get?page=${pageId}`)
        .then(function (response) {
          setAccounts(response.data.content);
          setTotalPage(response.data.totalPages);
        });
    } catch (err) {
      console.log(err);
      toast({
        title: "User fetch failed.",
        description: "Failed to fetch user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const createAccount = async (
    roleid,
    username,
    password,
    fullname,
    email,
    phonenumber,
    address
  ) => {
    try {
      await axios
        .post("http://localhost:8081/api/admin/create", {
          roleid: roleid,
          username: username,
          password: password,
          fullname: fullname,
          email: email,
          phonenumber: phonenumber,
          address: address,
        })
        .then(function (response) {
          toast({
            title: "User created.",
            description: "User has been created successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchAccounts(currentPage);
        });
    } catch (err) {
      toast({
        title: "User creation failed.",
        description: "Failed to create user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const updateAccount = async (
    id,
    roleid,
    fullname,
    email,
    phonenumber,
    address
  ) => {
    try {
      await axios
        .post("http://localhost:8081/api/admin/update", {
          id: id,
          roleid: roleid,
          fullname: fullname,
          email: email,
          phonenumber: phonenumber,
          address: address,
        })
        .then(function (response) {
          toast({
            title: "User updated.",
            description: "User has been updated successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchAccounts(currentPage);
        });
    } catch (err) {
      toast({
        title: "User update failed.",
        description: "Failed to update user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const deleteAccount = async (id) => {
    try {
      await axios
        .post("http://localhost:8081/api/admin/delete", { id: id })
        .then(function (response) {
          fetchAccounts(currentPage);
          toast({
            title: "User deleted.",
            description: "User has been deleted successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        });
    } catch (err) {
      toast({
        title: "User deletion failed.",
        description: "Failed to delete user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"99vw"}
        h={"92vh"}
        gap={10}
        bg={bgColor}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: ADMIN
        </Text>
        <Flex direction={"row"} gap={5}>
          <InputGroup w={"40vw"}>
            <InputLeftElement pointerEvents={"none"}>
              <Search2Icon color={"gray.300"} />
            </InputLeftElement>
            <Input name="search" placeholder="Search..." />
          </InputGroup>
          <Tooltip
            hasArrow
            label="Create a new user"
            bg={"teal"}
            placement="right"
          >
            <IconButton
              aria-label="create user"
              colorScheme="teal"
              icon={<MdCreate />}
              onClick={() => createUser.onOpen()}
            />
          </Tooltip>
        </Flex>
        <TableContainer whiteSpace={"wrap"}>
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
                  <Td>{account.role.name}</Td>
                  <Td>{account.username}</Td>
                  <Td>***</Td>
                  <Td>{account.fullname}</Td>
                  <Td>{account.email}</Td>
                  <Td>{account.phone_number}</Td>
                  <Td>{account.address}</Td>
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
                      <ConfirmAlert
                        isOpen={confirmDeleteUser.isOpen}
                        onClose={confirmDeleteUser.onClose}
                        cancelRef={cancelRef}
                        header={"Delete User"}
                        body={"Are you sure you want to delete this user?"}
                        action={"Delete"}
                        colorScheme={"red"}
                        onClickFunc={() => {
                          deleteAccount(deleteId);
                          confirmDeleteUser.onClose();
                        }}
                      />
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex direction={"row"} gap={5}>
          <Flex
            position={"fixed"}
            bottom={"80px"}
            left={"45%"}
            direction={"row"}
            gap={2}
          >
            {pageIndicator}
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={createUser.isOpen} onClose={createUser.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                role: "",
                username: "",
                password: "",
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              }}
              validate={(values) => {
                return validateSignUp(values, "createAdmin");
              }}
              onSubmit={(values, { setSubmitting }) => {
                createAccount(
                  values.role,
                  values.username,
                  values.password,
                  values.fullName,
                  values.email,
                  values.phoneNumber,
                  values.address
                )
                  .then(() => {
                    setSubmitting(false);
                    createUser.onClose();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Select
                      name="role"
                      placeholder="Select a role"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.role}
                    >
                      <option value="1">Admin</option>
                      <option value="2">Manager</option>
                      <option value="3">Consulting Staff</option>
                      <option value="4">Valuation Staff</option>
                      <option value="5">Customer</option>
                      <option value="6">Guest</option>
                    </Select>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.username && touched.username && errors.username
                    }
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      name="username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <FormErrorMessage>
                      {errors.username && touched.username && errors.username}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.password && touched.password && errors.password
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <FormErrorMessage>
                      {errors.password && touched.password && errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.username && touched.username && errors.username
                    }
                  >
                    <FormLabel>Full name</FormLabel>
                    <Input
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    <FormErrorMessage>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={errors.email && touched.email && errors.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <FormErrorMessage>
                      {errors.email && touched.email && errors.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                  >
                    <FormLabel>Phone number</FormLabel>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    <FormErrorMessage>
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      name="address"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </FormControl>
                  <Center>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      w={"inherit"}
                      m={"10px 0 0 0"}
                      disabled={isSubmitting}
                    >
                      Create
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={updateUser.isOpen} onClose={updateUser.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                role: updateAcc.role?.id || "",
                fullName: updateAcc.fullname,
                email: updateAcc.email,
                phoneNumber: updateAcc?.phone_number || "",
                address: updateAcc.address,
              }}
              validate={(values) => {
                return validateSignUp(values, "updateAdmin");
              }}
              onSubmit={(values, { setSubmitting }) => {
                updateAccount(
                  updateAcc.id,
                  values.role,
                  values.fullName,
                  values.email,
                  values.phoneNumber,
                  values.address
                )
                  .then(() => {
                    updateUser.onClose();
                    setSubmitting(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Select
                      name="role"
                      placeholder="Select a role"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.role}
                    >
                      <option value="1">Admin</option>
                      <option value="2">Manager</option>
                      <option value="3">Consulting Staff</option>
                      <option value="4">Valuation Staff</option>
                      <option value="5">Customer</option>
                      <option value="6">Guest</option>
                    </Select>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.fullName && touched.fullName && errors.fullName
                    }
                  >
                    <FormLabel>Full name</FormLabel>
                    <Input
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    <FormErrorMessage>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={errors.email && touched.email && errors.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <FormErrorMessage>
                      {errors.email && touched.email && errors.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                  >
                    <FormLabel>Phone number</FormLabel>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    <FormErrorMessage>
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      name="address"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </FormControl>
                  <Center>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      w={"inherit"}
                      m={"10px 0 0 0"}
                      disabled={isSubmitting}
                    >
                      Update
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ConfirmAlert
        isOpen={confirmDeleteUser.isOpen}
        onClose={confirmDeleteUser.onClose}
        cancelRef={cancelRef}
        header={"Delete User"}
        body={"Are you sure you want to delete this user?"}
        action={"Delete"}
        colorScheme={"red"}
        onClickFunc={() => {
          confirmDeleteUser.onClose();
          deleteAccount(deleteId);
        }}
      />
    </>
  );
}

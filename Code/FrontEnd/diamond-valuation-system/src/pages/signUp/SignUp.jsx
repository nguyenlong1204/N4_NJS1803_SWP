import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  FormErrorMessage,
  useToast,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { validateSignUp } from "../../utils/ValidateSignUp";
import Http from "../../utils/Http";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
export default function SignUp({ signUp, signIn }) {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [confirmshow, setConfirmShow] = useState(false);
  const handleShowPassWord = () => setShow(!show);
  const handleShowConfirmPw = () => setConfirmShow(!confirmshow);
  async function signUpApi(username, fullname, email, phonenumber, password) {
    try {
      const res = await Http.httpRequest.post("api/account/save", {
        username,
        fullname,
        email,
        phonenumber,
        password,
      });
      if (res.data.includes("exist")) {
        toast({
          title: "Sign up failed.",
          description: res.data,
          position: "top-right",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        throw new Error(res.data);
      } else {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Sign up failed.",
        description: "Please try again.",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Login failed:", error);
    }
  }
  return (
    <Modal isOpen={signUp.isOpen} onClose={signUp.onClose}>
      <ModalOverlay />
      <ModalContent pb={"30px"}>
        <ModalHeader>
          <Text fontSize={"ls"}>Sign up to DiamondVal</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              fullName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              return validateSignUp(values);
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              signUpApi(
                values.username,
                values.fullName,
                values.email,
                values.phoneNumber,
                values.password
              );
              setSubmitting(false);
              signUp.onClose();
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
                  isRequired
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
                  isRequired
                  isInvalid={
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber
                  }
                >
                  <FormLabel>Phone number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>+84</InputLeftAddon>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                  </InputGroup>
                  <FormHelperText>
                    Please fill in with your Zalo's phone number
                  </FormHelperText>
                  <FormErrorMessage>
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={
                    errors.password && touched.password && errors.password
                  }
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      name="password"
                      type={show ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <InputRightElement>
                      <Text onClick={handleShowPassWord} cursor={"pointer"}>
                        {show ? <IoEyeOffOutline /> : <FiEye />}
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && touched.password && errors.password}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                >
                  <FormLabel>Confirm password</FormLabel>
                  <InputGroup>
                    <Input
                      name="confirmPassword"
                      type={confirmshow ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    <InputRightElement>
                      <Text onClick={handleShowConfirmPw} cursor={"pointer"}>
                        {confirmshow ? <IoEyeOffOutline /> : <FiEye />}
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={"20px"}
                  alignItems={"center"}
                >
                  <Button
                    onClick={() => {
                      signIn.onOpen();
                      signUp.onClose();
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    w={"inherit"}
                    disabled={isSubmitting}
                  >
                    Sign up
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

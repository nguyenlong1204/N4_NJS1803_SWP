import React from "react";
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
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../service/Login";
import { validateSignUp } from "../../utils/ValidateSignUp";
import { register } from "./../../service/SignUp";
export default function SignUp({ signUp }) {
  async function signUpApi(username, fullName, phone, password) {
    try {
      const result = await register(username, fullName, phone, password);
      console.log(result);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <Modal isOpen={signUp.isOpen} onClose={signUp.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={"ls"}>Sign up to DiamondVal</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              fullName: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              return validateSignUp(values);
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                signUpApi(
                  values.username,
                  values.fullName,
                  values.phoneNumber,
                  values.password
                );
                setSubmitting(false);
              }, 400);
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
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                >
                  <FormLabel>Confirm password</FormLabel>
                  <Input
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  w={"inherit"}
                  m={"10px 0 0 0"}
                  disabled={isSubmitting}
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

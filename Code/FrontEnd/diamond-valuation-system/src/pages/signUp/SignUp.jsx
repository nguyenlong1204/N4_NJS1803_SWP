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
    useToast,
    InputGroup,
    InputLeftAddon,
    FormHelperText,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { validateSignUp } from "../../utils/ValidateSignUp";
import Http from "../../utils/Http";
export default function SignUp({ signUp }) {
    const toast = useToast();
    // async function signUpApi(username, fullName, phone, password) {
    //   try {
    //     const result = await register(username, fullName, phone, password).then(()=>{
    //       // signUp.onClose();
    //       toast({
    //         title: "Account created.",
    //         description: "We've created your account for you.",
    //         status: "success",
    //         duration: 9000,
    //         isClosable: true,
    //       });
    //     });
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Login failed:", error);
    //   }
    // }
    async function signUpApi(username, fullname, phonenumber, password) {
        try {
            const res = await Http.httpRequest.post("api/account/save", {
                username,
                fullname,
                phonenumber,
                password,
            });
            if (res.data.includes("exist")) {
                toast({
                    title: "Sign up failed.",
                    description: res.data,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                throw new Error(res.data);
            } else {
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: "Sign up failed.",
                description: "Please try again.",
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
                            console.log(values);
                            signUpApi(
                                values.username,
                                values.fullName,
                                values.phoneNumber,
                                values.password
                            );
                            setSubmitting(false);
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
                                        errors.username &&
                                        touched.username &&
                                        errors.username
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
                                        {errors.username &&
                                            touched.username &&
                                            errors.username}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isRequired
                                    isInvalid={
                                        errors.fullName &&
                                        touched.fullName &&
                                        errors.fullName
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
                                        {errors.fullName &&
                                            touched.fullName &&
                                            errors.fullName}
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
                                        Ex: 0832428279
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
                                        errors.password &&
                                        touched.password &&
                                        errors.password
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
                                        {errors.password &&
                                            touched.password &&
                                            errors.password}
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

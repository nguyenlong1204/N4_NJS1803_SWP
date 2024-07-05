import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../service/Login";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "../signUp/SignUp";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import { jwtDecode } from "jwt-decode";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
export default function Login({ signIn, signUp }) {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowPassWord = () => setShow(!show);
  async function fetchApi(username, password) {
    setIsLoading(true);
    try {
      console.log(username, password);
      const result = await login(username, password);
      if (!result.data?.status) {
        toast.error("Login failed. Try again later", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        setTimeout(() => {
          window.location.reload();
        }, [200]);
        setIsLogin(true);
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.setItem("user", JSON.stringify(result.data.accountDTO));
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }
  const handleCredentialResponse = (response) => {
    var decoded = jwtDecode(response.credential);
    auth.loginUser(decoded);
    setIsLogin(true);
    console.log(decoded);
    document.getElementById("buttonDiv").hidden = true;
  };
  useEffect(() => {
    if (signIn.isOpen) {
      const timer = setTimeout(() => {
        google.accounts.id.initialize({
          client_id:
            "1032521199225-r9jgfsi47aoon2vmocalcld8qtfhrk33.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
          theme: "outline",
          size: "large",
        });
        google.accounts.id.prompt();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [signIn.isOpen]);
  return (
    <>
      <ToastContainer />
      {!isLogin && (
        <Modal isOpen={signIn.isOpen} onClose={signIn.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize={"ls"}>Sign in to DiamondVal</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    fetchApi(values.username, values.password);
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                      <FormLabel>Username</FormLabel>
                      <Input
                        name="username"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                    </FormControl>
                    <FormControl isRequired>
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
                    </FormControl>
                    <Flex
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      m={"10px"}
                    >
                      <Text fontSize={"sm"}>Forgot password ?</Text>
                      <Button
                        isLoading={isLoading}
                        type="submit"
                        colorScheme="blue"
                        disabled={isSubmitting}
                      >
                        Sign in
                      </Button>
                    </Flex>
                  </Form>
                )}
              </Formik>
            </ModalBody>
            <ModalFooter justifyContent={"space-between"}>
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"100%"}
                gap={5}
              >
                <Text>
                  <div id="buttonDiv"></div>
                </Text>
                <Text fontSize={"sm"} display={"flex"} gap={2}>
                  <div>Don't have an account? </div>
                  <Link>
                    <Text
                      fontSize={"sm"}
                      _hover={{ color: "blue.400" }}
                      onClick={() => {
                        signUp.onOpen();
                        signIn.onClose();
                      }}
                    >
                      Sign up
                    </Text>
                  </Link>
                </Text>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <SignUp signUp={signUp} signIn={signIn} />
    </>
  );
}

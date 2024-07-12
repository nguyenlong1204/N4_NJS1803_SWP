import {
  Divider,
  Flex,
  FormControl,
  Center,
  Textarea,
  useColorModeValue,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Title from "../../components/Title";
import { Form, Formik } from "formik";
import axios from "axios";
import { UserContext } from "../../components/GlobalContext/AuthContext";
export default function DiamondValuationRequest() {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const bgColor = useColorModeValue("white", "black");
  const toast = useToast();
  const createPendingRequest = async (customerId, description, token) => {
    await axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/pending-request/create`,
        {
          customerId: customerId,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          toast({
            title: response.data,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };
  const checkCustomerPendingRequest = async (customerId, description) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/customer/check?id=${customerId}`
      )
      .then(function (response) {
        if (response.data.includes("already")) {
          toast({
            title: response.data,      position: "top-right",

            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        } else {
          createPendingRequest(customerId, description, user.userAuth.token);
        }
      });
  };
  return (
    <>
      <Flex
        direction={"column"}
        h={"80vh"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={bgColor}
      >
        <Title
          title={"Diamond Valuation Request"}
          description={
            "Please fill in the form below to request a diamond valuation."
          }
          width={"80vw"}
        />
        <Divider m={"20px 0 20px 0"} />
        <Center mt={5} mb={5}>
          <Formik
            initialValues={{ description: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                setSubmitting(true);
                if (localStorage.getItem("user") === null) {
                  toast({
                    title: "Please login first !",
                    status: "error",
                    duration: 3000,
                    position: "top-right",
                    isClosable: true,
                  });
                  // setSubmitting(false);
                } else if (
                  isUsers &&
                  user.userAuth.authorities[0].authority !== "Customer"
                ) {
                  toast({
                    title: "Just customer can make a request !",
                    status: "warning",
                    duration: 3000,
                    position: "top-right",
                    isClosable: true,
                  });
                  // setSubmitting(false);
                } else {
                  setSubmitting(true);
                  checkCustomerPendingRequest(
                    user.userAuth.id,
                    values.description
                  );
                }
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Flex direction={"column"} align={"center"} gap={10}>
                  <FormControl>
                    <Textarea
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      h={"200px"}
                      w={{ base: "70vw", md: "50vw", lg: "40vw" }}
                      placeholder="Please write your request description here..."
                    />
                  </FormControl>
                  {console.log(isSubmitting)}
                  <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                    m={"0 0 100px 0"}
                  >
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Center>
      </Flex>
    </>
  );
}

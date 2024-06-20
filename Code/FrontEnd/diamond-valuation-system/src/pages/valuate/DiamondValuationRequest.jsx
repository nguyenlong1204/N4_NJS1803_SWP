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
import React from "react";
import Title from "../../components/Title";
import { Form, Formik } from "formik";
import axios from "axios";
import { useLocation } from "react-router-dom";
import routes from "../../config/Config";
export default function DiamondValuationRequest() {
  const bgColor = useColorModeValue("white", "black");

  const location = useLocation();

  const toast = useToast();
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={"30px"}
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
            onSubmit={(values, { setSubmitting }) => {
              try {
                if (location.state?.serviceId === undefined) {
                  toast({
                    title: "Please select a service first.",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
                  setTimeout(() => {
                    window.location.href = routes.diamondService;
                  }, 2000);
                }
                if (localStorage.getItem("user") === null) {
                  console.log("Please login first.");
                  toast({
                    title: "Please login first.",
                    status: "error",
                    duration: 500,
                    isClosable: true,
                  });
                    setSubmitting(false);
                } else {
                  const res = axios
                    .post(
                      "http://localhost:8081/api/valuation-request/create",
                      {
                        username: JSON.parse(localStorage.getItem("user"))
                          .username,
                        serviceId: location.state?.serviceId,
                        createdDate: "",
                        description: values.description,
                      }
                    )
                    .then(() => {
                      console.log(res.data);
                      setSubmitting(false);
                      toast({
                        title: "Successful. Our team will contact you soon.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                      // setTimeout(() => {
                      //   window.location.href = routes.home;
                      // }, 2000);
                    });
                }
              } catch (e) {
                console.log(e);
              }
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
                <Flex direction={"column"} align={"center"} gap={10}>
                  <FormControl>
                    <Textarea
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      h={"200px"}
                      w={{ base: "70vw", md: "50vw", lg: "40vw" }}
                      placeholder="Please write your request description here..."
                    />
                  </FormControl>
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

import {
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { Form, Formik } from "formik";
import routes from "../../config/Config";
import { useNavigate } from "react-router-dom";
export default function DiamondCheck() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("white", "black");
  return (
    <Container maxW="100vw">
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
        p={{ base: 10, md: 15, lg: 20 }}
        gap={20}
      >
        <Flex direction={"column"}>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight={"bold"}
          >
            Check any diamond's
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight={"bold"}
            color={"blue.400"}
          >
            price & quality
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            m={"30px 0 50px 0"}
          >
            Transact with confidence — get fair price, cut score, visual carat
            and more
          </Text>
          <Formik
            initialValues={{ id: "", diamond: {} }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values.id);
              axios
                .get(
                  `http://localhost:8081/api/valuated-diamond/check?id=${values.id}`
                )
                .then(function (response) {
                  console.log(response.data);
                  if (response.data === false) {
                    navigate("/diamond-not-found");
                  } else {
                    navigate(routes.diamondCheck + `/${values.id}`, {
                      state: { diamondId: values.id },
                    });
                  }
                });
              setSubmitting(false);
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
                <Flex
                  direction={{ base: "column", md: "row", lg: "row" }}
                  gap={2}
                >
                  <FormControl>
                    <Input
                      name="id"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.id}
                      placeholder="Enter Valuate ID"
                      size={{ base: "sm", md: "md", lg: "lg" }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="blue"
                    size={{ base: "sm", md: "md", lg: "lg" }}
                  >
                    Run free check
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
        <LazyLoadImage
          width={"300px"}
          src="../images/diamond-check.png"
          effect="blur"
        />
      </Flex>
    </Container>
  );
}

import {
  Box,
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
import { Form, Formik } from "formik";
import routes from "../../config/Config";
import { useNavigate } from "react-router-dom";
export default function DiamondCheck() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("blue.400", "#DBA843");
  return (
    <Box bg={bgColor}>
      <Container maxW="100vw" h={"90vh"}>
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
              color={fontColor}
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
                navigate(routes.diamondCheck + `/${values.id}`, {
                  state: { valuationResultId: values.id },
                });
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    gap={2}
                  >
                    <FormControl isRequired>
                      <Input
                        name="id"
                        onChange={handleChange}
                        value={values.id}
                        placeholder="Enter Valuate ID"
                        size={{ base: "sm", md: "md", lg: "lg" }}
                      />
                    </FormControl>
                    <Button
                      colorScheme="blue"
                      type="submit"
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
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
    </Box>
  );
}

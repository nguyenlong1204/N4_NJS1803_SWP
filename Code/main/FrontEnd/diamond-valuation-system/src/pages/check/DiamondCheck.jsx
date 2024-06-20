import {
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function DiamondCheck() {
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
          <Flex direction={{ base: "column", md: "row", lg: "row" }} gap={2}>
            <Input
              placeholder="Enter Valuate ID"
              size={{ base: "sm", md: "md", lg: "lg" }}
            />
            <Button
              colorScheme="blue"
              size={{ base: "sm", md: "md", lg: "lg" }}
            >
              Run free check
            </Button>
          </Flex>
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

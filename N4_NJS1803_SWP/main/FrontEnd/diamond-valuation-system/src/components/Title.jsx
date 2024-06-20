import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Title({ title, description, width }) {
  return (
    <>
      <Flex direction={"column"} align={"center"} justify={"center"} w={width}>
        <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold">
          {title}
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          fontWeight="light"
          fontStyle={"italic"}
        >
          {description}
        </Text>
      </Flex>
    </>
  );
}

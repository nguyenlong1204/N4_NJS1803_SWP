import { Button, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import routes from "../../config/Config";
export default function Error() {
  return (
    <div>
      <Flex
        direction={"column"}
        h={"100vh"}
        fontFamily={"'Gloria Hallelujah', cursive"}
      >
        <Image
          src="./images/error/error.jpg"
          w={"100vw"}
          h={"100vh"}
          backgroundSize={"cover"}
        ></Image>
        <Flex
          direction={"column"}
          alignItems={"center"}
          position={"absolute"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
          color={"blue.600"}
          gap={5}
        >
          <Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}>
            404
          </Heading>
          <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Page Not Found
          </Text>
          <RouterLink to={routes.home}>
            <Button
              size={{ base: "sm", md: "md", lg: "lg" }}
              colorScheme="blue"
              border={"4px solid #FFF"}
              borderRadius={"50px"}
            >
              Return Home
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </div>
  );
}

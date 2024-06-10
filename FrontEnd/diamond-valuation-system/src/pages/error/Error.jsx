import { Button, Heading, Link, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Home from "../Home/Home";
import { color } from "framer-motion";
export default function Error() {
  return (
    <div>
      <Flex
        direction={"column"}
        h={"100vh"}
        overflow={"hidden"}
        fontFamily={"'Gloria Hallelujah', cursive"}
      >
        <Image
          src="https://th.bing.com/th/id/R.20cbab281f06cb46658da1c8e03ab8d8?rik=tZPlxNVQ1H0zJw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fDimond-wallpapers-HD.jpg&ehk=NHTFjZ20tJrDZn%2bAOjbw2N%2bFeR1LBmxT0LJdD0K48OY%3d&risl=&pid=ImgRaw&r=0"
          w={"100%"}
          backgroundSize={"cover"}
        ></Image>
        <Flex
          direction={"column"}
          alignItems={"center"}
          position={"absolute"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
          background="rgba( 0, 0, 0, 0.3)"
          color={"blue.100"}
        >
          <Heading fontSize={"100px"} >404</Heading>
          <Text fontSize={"50px"}>Page Not Found</Text>
          <Button
            border={"4px solid #FFF"}
            borderRadius={"50px"}
            borderX={"none"}
          >
            Return Home
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

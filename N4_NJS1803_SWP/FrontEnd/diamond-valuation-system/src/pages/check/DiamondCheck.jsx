import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function DiamondCheck() {
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "white");
  return (
    <Flex
      direction={"row"}
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      w={"99vw"}
      h={"92vh"}
      gap={20}
    >
      <Flex direction={"column"}>
        <Text fontSize="6xl" fontWeight={"bold"}>
          Check any diamond's
        </Text>
        <Text fontSize="6xl" fontWeight={"bold"} color={"blue.400"}>
          price & quality
        </Text>
        <Text fontSize="xl" m={"30px 0 50px 0"}>
          Transact with confidence — get fair price, cut score, visual carat and
          more
        </Text>
        <Flex direction={"row"}>
          <Input placeholder="Enter Valuate ID" size={"lg"} />
          <Button colorScheme="blue" size="lg" m={"0 0 0 20px"}>
            Run free check
          </Button>
        </Flex>
      </Flex>
      <Image src="../images/diamond-check.png" w={"300px"} />
    </Flex>
  );
}

import React from "react";
import { Flex, Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
const FeaturedCard = ({ imageSrc, title1, title2, title3 }) => {
  const bgColor = useColorModeValue("white", "gray.900");
  const fontColor = useColorModeValue("teal.500", "yellow.200");
  return (
    <Flex
      align="center"
      p={4}
      bg={useColorModeValue("gray.200", "gray.900")}
      borderRadius="md"
      boxShadow="md"
      m={4}
      minW="400px"
      _hover={{ bg: "blue.100" }}
    >
      <Image
        boxSize="100px"
        src={imageSrc}
        alt="Diamond"
        borderRadius="full"
        mr={4}
      />
      <Box>
        <Text fontSize="lg" color={fontColor}>
          {title1}
        </Text>
        <Text fontSize="lg" color={fontColor}>
          {title2}
        </Text>
        <Text fontSize="md" color={fontColor}>
          {title3}
        </Text>
      </Box>
    </Flex>
  );
};

export default FeaturedCard;

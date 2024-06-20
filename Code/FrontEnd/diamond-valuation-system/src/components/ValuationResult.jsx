import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { GiDiamondTrophy } from "react-icons/gi";

export const ValuationResult = forwardRef((props, ref) => {
  return (
    <Flex
    ref={ref}
      direction="column"
      alignItems="center"
      gap={5}
      p={10}
    >
      <Flex
        direction={"row"}
        flex={{ base: 6, md: 1, lg: 1 }}
        alignItems={"center"}
        justify={{ base: "center", md: "start", lg: "start" }}
      >
        <Icon
          as={GiDiamondTrophy}
          w={{ base: 5, md: 8, lg: 10 }}
          h={{ base: 5, md: 8, lg: 10 }}
        />
        <Text
          fontFamily={"The Nautigal"}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight={"bold"}
          m={"10px "}
        >
          DiamondVal
        </Text>
      </Flex>
    <Text fontSize="xl" fontWeight="bold">DiamondVal Report: 123456</Text>
    <Text fontSize="md" color={"gray"}>Valuated Date: $1000</Text>
    <Text fontSize="md" color={"gray"}>Valuation Time: 3 days</Text>
    <Text fontSize="md" color={"gray"}>Valuation Attributes:</Text>
    <Text fontSize="md" color={"gray"}>1. Cut</Text>
    <Text fontSize="md" color={"gray"}>2. Color</Text>
    <Text fontSize="md" color={"gray"}>3. Clarity</Text>
    <Text fontSize="md" color={"gray"}>4. Carat</Text>
    <Text fontSize="md" color={"gray"}>5. Certificate</Text>
    </Flex>
  );
});

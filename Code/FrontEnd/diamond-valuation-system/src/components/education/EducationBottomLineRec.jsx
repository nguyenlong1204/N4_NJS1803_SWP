import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
export default function EducationBottomLineRec({
  content,
  whatToLookFor,
  whatToAvoid,
}) {
  return (
    <Box border={"1px solid"} borderColor={"gray"} p={10} m={"20px 0 20px 0"}>
      <Text fontSize="2xl" fontWeight={"bold"}>
        Bottom Line Recommendation:
      </Text>
      <Text fontSize="lg" m={"20px 0 20px 0"}>
        {content}
      </Text>
      <Flex direction={"row"} justifyContent={"space-between"} m={"50px 0 0 0"}>
        <Flex direction={"column"}>
          <Text fontSize="lg" fontWeight={"bold"}>
            WHAT TO LOOK FOR
          </Text>
          {whatToLookFor.map((item, index) => (
            <Flex key={index} direction={"row"} p={4} gap={2}>
              <FaCheck color="green" size={50} />
              <Text fontSize={"lg"}>{item}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction={"column"}>
          <Text fontSize="lg" fontWeight={"bold"}>
            WHAT TO AVOID
          </Text>
          {whatToAvoid.map((item, index) => (
            <Flex key={index} direction={"row"} p={4} gap={2}>
              <GrClose color={"red"} size={50} />
              <Text fontSize={"lg"}>{item}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

import React from "react";
import { Box, Text, VStack, StackDivider, Button } from "@chakra-ui/react";
import { IoIosCreate } from "react-icons/io";
export default function ConsultingDashBoard() {
  return (
    <div>
      <Box bg="rgb(67 56 202)" w="100%" pl={1} color="white">
        <Text py={3} fontSize="lg">
          APPOINTMENTS
        </Text>
        <VStack
          pl={4}
          background={"rgb(239 246 255)"}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={1}
          align="stretch"
          justifyContent={"center"}
        >
          <Box lineHeight={"40px"} h="40px" color={"#000"}>
            There's one appointment
          </Box>
          <Box lineHeight={"40px"} h="40px" color={"#000"}>
            There's one appointment
          </Box>
          <Box lineHeight={"40px"} h="40px" color={"#000"}>
            There's one appointment
          </Box>
        </VStack>
      </Box>
      <Button
        mt={5}
        leftIcon={<IoIosCreate />}
        colorScheme="teal"
        variant="solid"
      >
        Make an appointment
      </Button>
    </div>
  );
}

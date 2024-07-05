import React from "react";
import { IoIosCreate } from "react-icons/io";
import {
    Box,
    Button,
    Container,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
export default function CustomerPage() {
    return (
        <Container maxW="80%">
            <Box bg="rgb(67 56 202)" w="100%" color="white" mb={"30px"}>
                <Text py={3} fontSize="lg" pl={"18px"}>
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
            <Box bg="rgb(67 56 202)" w="100%" color="white">
                <Text py={3} fontSize="lg" pl={"18px"}>
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
        </Container>
    );
}

import React from "react";
import {
  Box,
  StackDivider,
  Text,
  VStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import routes from "../../config/Config";

export default function DashBoard() {
  return (
    <div>
      <Flex justifyContent={"flex-end"}>
        <Link to={routes.dasboardNotification}>
          <IconButton
            icon={<IoNotificationsOutline size={"25px"} />}
            bg={"#fff"}
            borderRadius={"150px"}
          ></IconButton>
        </Link>
        <Link to={"#"}>
          <IconButton
            icon={<FiSettings size={"25px"} />}
            bg={"#fff"}
            borderRadius={"150px"}
          />
        </Link>
      </Flex>
      <Box
        bg="rgb(67 56 202)"
        w="90%"
        pl={1}
        color="white"
        m={"30px 40px 20px 70px"}
      >
        <Text py={3} fontSize="lg" ml={"15px"}>
          APPOINTMENT
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
        </VStack>
      </Box>
      {/* <Button
        mt={5}
        leftIcon={<IoIosCreate />}
        colorScheme="teal"
        variant="solid"
      >
        Make an appointment
      </Button> */}
      <Flex>
        <Box
          bg="rgb(67 56 202)"
          w="90%"
          pl={1}
          color="white"
          m={" 0 10px 0 70px"}
        >
          <Text py={3} fontSize="lg" ml={"15px"}>
            PRICE ALERTS
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
              No Price Alerts
            </Box>
            <Box lineHeight={"40px"} h="40px" color={"#000"}>
              No Price Alerts
            </Box>
          </VStack>
        </Box>
      </Flex>
    </div>
  );
}

import React, { useContext } from "react";
import {
  Flex,
  WrapItem,
  Avatar,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserContext } from "./GlobalContext/AuthContext";
export default function Profile() {
  const auth = useContext(UserContext);
  const bgColor = useColorModeValue("gray.800", "black");
  return (
    <>
      <Flex align={"center"} p={3} pr={0} bg={bgColor}>
        <WrapItem mr={3}>
          <Avatar
            name={auth.userAuth.fullname}
            src="https://bit.ly/tioluwani-kolawole"
          />
        </WrapItem>
        <Text>{auth.userAuth.fullname}</Text>
      </Flex>
    </>
  );
}

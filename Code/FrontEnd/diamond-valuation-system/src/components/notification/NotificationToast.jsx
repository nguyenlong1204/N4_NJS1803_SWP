import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function NotificationToast({type,processRequestId}) {
  return (
    <Box color={"black"} bg={"green.400"} p={3} borderRadius={10}>
      <Flex align={"center"} gap={2}>
        <Image w={"40px"} src="../images/notification/notification.png" />
        <Flex direction={"column"}>
          <Text fontWeight={"bold"}>Request has been {type}</Text>
          <Text>Request ID: {processRequestId}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

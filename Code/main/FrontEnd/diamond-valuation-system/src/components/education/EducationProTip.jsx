import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function EducationProTip({ content }) {
  return (
    <Box m={"20px 0 20px 0"} p={4} bg={"blue.100"}>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        <strong>Pro Tip:</strong> {content}
      </Text>
    </Box>
  );
}

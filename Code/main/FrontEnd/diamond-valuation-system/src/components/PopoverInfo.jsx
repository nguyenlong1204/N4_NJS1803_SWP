import {
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
export default function PopoverInfo({ content, header, body }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex direction={"column"} alignItems={"center"}>
          <Flex direction={"row"} gap={2}>
            <Text fontSize={{ base: "sm", md: "md", lg: "md" }}>{header}</Text>
            <InfoOutlineIcon boxSize={3} />
          </Flex>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "md" }}
            fontWeight={"bold"}
          >
            {content}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{header}</PopoverHeader>
        <PopoverBody>{body}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

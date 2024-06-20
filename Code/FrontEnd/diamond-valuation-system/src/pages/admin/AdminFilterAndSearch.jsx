import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tooltip,
  Select,
} from "@chakra-ui/react";
import { MdCreate } from "react-icons/md";
import { Search2Icon } from "@chakra-ui/icons";
export default function AdminFilterAndSearch({
  handleFilterChange,
  handleSearchChange,
  createUser,
}) {
  return (
    <Flex direction={"row"} gap={5}>
      <Select
        name="filter"
        w={"120px"}
        placeholder="Filter"
        onChange={handleFilterChange}
      >
        <option value="fullname">Name</option>
        <option value="email">Email</option>
        <option value="phone_number">Phone</option>
      </Select>
      <InputGroup w={"40vw"}>
        <InputLeftElement pointerEvents={"none"}>
          <Search2Icon color={"gray.300"} />
        </InputLeftElement>
        <Input
          name="search"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Tooltip hasArrow label="Create a new user" bg={"teal"} placement="right">
        <IconButton
          aria-label="create user"
          colorScheme="teal"
          icon={<MdCreate />}
          onClick={() => createUser.onOpen()}
        />
      </Tooltip>
    </Flex>
  );
}

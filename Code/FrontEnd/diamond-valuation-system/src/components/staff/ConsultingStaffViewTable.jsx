import { ViewIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function ConsultingStaffViewTable({ data, onClickFunc }) {
  return (
    <TableContainer whiteSpace={"wrap"}>
      <Table size={"sm"} colorScheme="blue">
        <Thead bgColor={"blue.400"}>
          <Tr>
            <Th>No</Th>
            <Th>ID</Th>
            <Th>Created Date</Th>
            <Th>Status</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{item.id}</Td>
              <Td>{item.createdDate}</Td>
              <Td>{item.status}</Td>
              <Td>
                <IconButton
                  icon={<ViewIcon />}
                  bgColor={"transparent"}
                  onClick={onClickFunc}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

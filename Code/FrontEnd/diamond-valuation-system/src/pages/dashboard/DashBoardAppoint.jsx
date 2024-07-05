import { IoIosCreate } from "react-icons/io";
import {
  Box,
  Button,
  StackDivider,
  Text,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Skeleton,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { viewCustomerRequest } from "../../service/ViewRequest";
import { UserContext } from "../../components/GlobalContext/AuthContext";
export default function DashBoardAppoint() {
  const user = useContext(UserContext);
  const [request, SetRequest] = useState([]);
  useEffect(() => {
    const fetchApi = async (id) => {
      try {
        const result = await viewCustomerRequest(1, id);
        SetRequest(result.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi(user.userAuth.id);
  }, []);
  return (
    <div>
      <Text py={3} fontSize="lg">
        APPOINTMENTS
      </Text>
      {request.length === 0 ? (
        <Box>There's no API available</Box>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Description</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {request.map((req, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{req.customerName}</Td>
                    <Td>{req.createdDate?.slice(0,10)}</Td>
                    <Td>{req.customerEmail}</Td>
                    <Td>{req.customerPhone}</Td>
                    <Td>{req.description}</Td>
                    <Td>Contacting...</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

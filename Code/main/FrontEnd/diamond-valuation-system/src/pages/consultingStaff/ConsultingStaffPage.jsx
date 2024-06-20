import {
  Flex,
  Text,
  useDisclosure,
  Input,
  useToast,
  InputGroup,
  InputLeftElement,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Search2Icon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import ConsultingStaffViewProcessRequest from "./ConsultingStaffViewProcessRequest";

export default function ConsultingStaffPage() {
  const viewProcessRequest = useDisclosure();
  const [viewSelectProcessRequest, setViewSelectProcessRequest] = useState(0);
  const [processRequest, setProcessRequest] = useState([]);
  const handleSubmit = async () => {
    try {
      const res = await axios
        .get("http://localhost:8081/api/process-request/get?staffId=138")
        .then(function (response) {
          setProcessRequest(response.data.content);
          console.log(response.data.content);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={"99vw"}
        m={"100px 0 0 0"}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Consulting Staff</Text>
        <Flex direction={"row"} gap={5}>
          <InputGroup w={"40vw"}>
            <InputLeftElement pointerEvents={"none"}>
              <Search2Icon color={"gray.300"} />
            </InputLeftElement>
            <Input name="search" type="text" placeholder="Search..." />
          </InputGroup>
          <Select
            id="select"
            w={"10vw"}
            onChange={() => {
              setSelectData(document.getElementById("select").value);
              console.log(selectData);
            }}
            onClick={() => {
              console.log(processRequest);
            }}
          >
            <option value={"request"}>Request</option>
            <option value={"receipt"}>Receipt</option>
            <option value={"result"}>Result</option>
          </Select>
          <TableContainer>
            <Table size={"sm"} colorScheme="blue">
              <Thead bg={"blue.400"}>
                <Tr>
                  <Th>No</Th>
                  <Th>Customer</Th>
                  <Th>Service</Th>
                  <Th>Created Date</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {processRequest.map((item, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{item.customerName}</Td>
                    <Td>{item.serviceName}</Td>
                    <Td>{item.createdDate}</Td>
                    <Td>
                      <IconButton
                        icon={<ViewIcon />}
                        bgColor={"transparent"}
                        onClick={() => {
                          setViewSelectProcessRequest(index);
                          viewProcessRequest.onOpen();
                        }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
      <ConsultingStaffViewProcessRequest
        isOpen={viewProcessRequest.isOpen}
        onClose={viewProcessRequest.onClose}
        processRequest={processRequest[viewSelectProcessRequest]}
      />
    </>
  );
}

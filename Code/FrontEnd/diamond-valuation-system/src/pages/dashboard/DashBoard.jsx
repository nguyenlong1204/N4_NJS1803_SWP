import { IoIosCreate } from "react-icons/io";
import {
  Box,
  Button,
  StackDivider,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardHeader,
  Flex,
  CardBody,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { viewCustomerRequest } from "../../service/ViewRequest";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import axios from "axios";
import { PiPiggyBankBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import LazyLoad from "../../components/lazyload/LazyLoad";
import DashBoardTransaction from "./DashBoardTransaction";
export default function DashBoardAppoint() {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [request, SetRequest] = useState([]);
  const [income, setIncome] = useState(null);
  const [doneRequest, setDoneRequest] = useState(null);
  const [valuatedDiamond, setValuatedDiamond] = useState(null);
  const fetchTotalIncome = async () => {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/payment/income`)
      .then((res) => {
        setIncome(res.data);
      });
  };
  const fetchTotalDoneRequest = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/total/done`
      )
      .then((res) => {
        setDoneRequest(res.data);
      });
  };
  const fetchTotalValuatedDiamond = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/valuation-result/total`
      )
      .then((res) => {
        setValuatedDiamond(res.data);
      });
  };
  useEffect(() => {
    if (isUsers && user.userAuth.authorities[0].authority === "Customer") {
      const fetchApi = async (id) => {
        try {
          const result = await viewCustomerRequest(1, id);
          SetRequest(result.content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchApi(user.userAuth.id);
    } else {
      fetchTotalIncome();
      fetchTotalDoneRequest();
      fetchTotalValuatedDiamond();
    }
  }, []);
  return (
    <>
      {isUsers && user.userAuth.authorities[0].authority === "Customer" ? (
        <Box>
            <Box  bg="gray.600" color="white" mb={5} boxShadow="sm" borderRadius="md" maxW="100%" minW="100%">
            <Text py={3} fontSize="lg" pl={4}>
              APPOINTMENTS
            </Text>
            {request.length === 0 ? (
              <Box variant="simple" bg="gray.200" color="black" p={3}>There's no API available</Box>
            ) : (
                <TableContainer>
                    <Table variant="simple" bg="gray.200" color="black">
                        <Thead >
                            <Tr >
                                <Th color="black">No</Th>
                                <Th color="black">Name</Th>
                                <Th color="black">Date Create Request</Th>
                                
                                <Th color="black">Description</Th>
                                <Th color="black">Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {request.map((req, i) => {
                                return (
                                    <Tr key={i}>
                                        <Td>{i + 1}</Td>
                                        <Td>{req.customerName}</Td>
                                        <Td>{req.createdDate?.slice(0, 10)}</Td>
                                        
                                        <Td>{req.description}</Td>
                                        <Td>Contacting...</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}
          </Box>
          <DashBoardTransaction />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box
              bg="gray.600"
              color="white"
              borderRadius="md"
              maxW="100%"
              minW="100%"
            >
              <Text py={3} fontSize="lg" pl={4}>
                SAVED DIAMONDS
              </Text>
              <VStack
                background="rgb(239 246 255)"
                divider={<StackDivider borderColor="gray.200" />}
                spacing={1}
                align="stretch"
                justifyContent="center"
                px={4}
                py={2}
              >
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
              </VStack>
            </Box>

            <Box
              bg="gray.600"
              color="white"
              borderRadius="md"
              maxW="100%"
              minW="100%"
            >
              <Text py={3} fontSize="lg" pl={4}>
                RECENT DIAMONDS
              </Text>
              <VStack
                background="rgb(239 246 255)"
                divider={<StackDivider borderColor="gray.200" />}
                spacing={2}
                align="stretch"
                justifyContent="center"
                px={4}
                py={2}
              >
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
              </VStack>
              <Button
                backgroundColor="gray.400"
                size="sm"
                border="1px solid"
                borderColor="gray."
                ml="auto"
                mt={1}
                mb={1}
                display="flex"
              >
                View All
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      ) : (
        <>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <PiPiggyBankBold size={30} />
                  <Text fontSize={"2xl"}>INCOME</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{income}</Text>vnd
                </Center>
              </CardBody>
            </Card>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <MdDone size={30} style={{ background: "green" }} />
                  <Text fontSize={"2xl"}>DONE REQUEST</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{doneRequest}</Text>
                </Center>
              </CardBody>
            </Card>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <IoDiamond size={30} />
                  <Text fontSize={"2xl"}>VALUATED DIAMOND</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{valuatedDiamond}</Text>
                </Center>
              </CardBody>
            </Card>
          </SimpleGrid>
        </>
      )}
    </>
  );
}

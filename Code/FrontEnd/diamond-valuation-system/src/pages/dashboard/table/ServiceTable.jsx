import { ViewIcon } from "@chakra-ui/icons";
import {
  Badge,
  Center,
  Flex,
  FormControl,
  GridItem,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { UserContext } from "../../../components/GlobalContext/AuthContext";

export default function ServiceTable() {
  const user = useContext(UserContext);
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [service, setService] = useState([]);
  const serviceStatisticNames = [];
  const fetchService = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/service/get/all`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setService(response.data);
          setTotalPages(response.data?.totalPages);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  try {
    for (let i = 0; i < service.length; i++) {
      serviceStatisticNames.push(service[i].statisticName);
      serviceStatisticNames[i] = serviceStatisticNames[i]
        .split(",")
        .map((item) => item.trim());
    }
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    fetchService();
  }, []);
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Service
          </Text>
        </Center>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Statistics:
        </Text>
        <SimpleGrid columns={4} w={"30vw"} spacing={2}>
          <GridItem>
            <Badge colorScheme="green">Carat</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="green">Color</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="green">Cut</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="green">Clarity</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="purple">Shape</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="purple">Symmetry</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="purple">Polish</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="purple">Fluorescence</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="yellow">Measurements</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="yellow">Diamond Table</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="yellow">Depth</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="yellow">L/W Ratio</Badge>
          </GridItem>
          <GridItem>
            <Badge colorScheme="red">Origin</Badge>
          </GridItem>
        </SimpleGrid>
        {totalPages === 0 ? (
          <Center>No service to show</Center>
        ) : (
          <Skeleton isLoaded={service?.length > 0} height={"200px"}>
            {service?.map((item, index) => (
              <Formik
                initialValues={{
                  id: item?.id,
                  name: item?.name,
                  price: item?.price,
                  time: item?.time,
                  statisticId: item?.statisticId,
                  statisticName: item?.statisticName,
                }}
                onSubmit={(values, { setSubmitting }) => {
                  axios
                    .put(
                      `${
                        import.meta.env.VITE_REACT_APP_BASE_URL
                      }/api/service/update`,
                      values,
                      {
                        headers: {
                          Authorization: `Bearer ${user.userAuth.token}`,
                        },
                      }
                    )
                    .then((response) => {
                      if (response.status === 200) {
                        if (response.data.includes("successful")) {
                          setSubmitting(false);
                          toast({
                            title: "Update successfully",
                            message: response.data,
                            position: "top-right",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                          });
                        }
                      }
                    })
                    .catch((error) => {
                      setSubmitting(false);
                      toast({
                        title: "Update failed",
                        message: error.response.data,
                        position: "top-right",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      });
                    });
                }}
              >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <TableContainer shadow={"md"} borderRadius={"md"}>
                        <Table size={"sm"}>
                          <Thead>
                            <Tr>
                              <Th></Th>
                              <Th></Th>
                              <Th></Th>
                              <Th></Th>
                              <Th></Th>
                              <Th></Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr key={index} _hover={{ bg: "gray.100" }}>
                              <Td>{item?.id}</Td>
                              <Td>
                                <FormControl isRequired>
                                  <Input
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.name}
                                    w={"100px"}
                                  />
                                </FormControl>
                              </Td>
                              <Td>
                                <FormControl isRequired>
                                  <Input
                                    name="price"
                                    type="number"
                                    onChange={handleChange}
                                    value={values.price}
                                    w={"100px"}
                                  />{" "}
                                  vnd
                                </FormControl>
                              </Td>
                              <Td>
                                <Flex align={"center"}>
                                  <Field name="time">
                                    {({ field, form }) => (
                                      <FormControl w={"110px"}>
                                        <NumberInput
                                          w={"100px"}
                                          min={10}
                                          max={60}
                                          step={1}
                                          {...field}
                                          onChange={(value) => {
                                            form.setFieldValue(
                                              field.name,
                                              value
                                            );
                                          }}
                                        >
                                          <NumberInputField />
                                          <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                          </NumberInputStepper>
                                        </NumberInput>
                                      </FormControl>
                                    )}
                                  </Field>
                                  days
                                </Flex>
                              </Td>
                              <Td>
                                <Tooltip label={item?.statisticName} hasArrow>
                                  <FormControl isRequired>
                                    <Input
                                      name="statisticName"
                                      type="text"
                                      onChange={handleChange}
                                      value={values.statisticName}
                                    />
                                  </FormControl>
                                </Tooltip>
                              </Td>
                              <Td>
                                <IconButton
                                  type="submit"
                                  icon={<GrUpdate />}
                                  bgColor={"transparent"}
                                  isLoading={isSubmitting}
                                  isDisabled={isSubmitting}
                                />
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Form>
                  </>
                )}
              </Formik>
            ))}
          </Skeleton>
        )}
      </Flex>
    </>
  );
}

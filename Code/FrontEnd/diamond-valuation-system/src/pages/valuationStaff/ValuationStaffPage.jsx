import { Search2Icon, ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import UploadImage from "../../components/UploadImage";

export default function ValuationStaffPage() {
  const viewValuationResult = useDisclosure();
  const [processResult, setProcessResult] = useState([]);
  const [selectProcessResult, setSelectProcessResult] = useState({});
  const [isValuated, setIsValuated] = useState(false);
  const fetchProcessResult = async () => {
    try {
      await axios
        .get("http://localhost:8081/api/process-result/get?staffId=5")
        .then(function (response) {
          setProcessResult(response.data.content);
          console.log(response.data.content);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const valuateDiamond = async (values) => {
    try {
      await axios
        .post("http://localhost:8081/api/valuation-result/valuate", {
          id: selectProcessResult.valuationResultId,
          origin: values.origin,
          shape: values.shape,
          carat_weight: values.caratWeight,
          color: values.color,
          cut: values.cut,
          clarity: values.clarity,
          measurements: values.measurements,
          polish: values.polish,
          symmetry: values.symmetry,
          fluorescence: values.fluorescence,
          proportions: values.proportions,
          price: values.price,
        })
        .then(function (response) {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProcessResult();
  }, []);
  useEffect(() => {
    if (isValuated) {
      fetchProcessResult();
      setIsValuated(false);
    }
  }, [isValuated]);
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h={"100vh"}
        // paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Valuation Staff</Text>
        <InputGroup w={"40vw"}>
          <InputLeftElement pointerEvents={"none"}>
            <Search2Icon color={"gray.300"} />
          </InputLeftElement>
          <Input name="search" placeholder="Search..." />
        </InputGroup>
        <TableContainer whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Service</Th>
                <Th>Created Date</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {processResult.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item?.serviceName}</Td>
                  <Td>{item?.createdDate}</Td>
                  <Td>{item?.type}</Td>
                  <Td>
                    <IconButton
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setSelectProcessResult(item);
                        viewValuationResult.onOpen();
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal
        isOpen={viewValuationResult.isOpen}
        onClose={viewValuationResult.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Valuation Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                origin: selectProcessResult?.origin,
                shape: selectProcessResult?.shape,
                caratWeight: selectProcessResult?.caratWeight,
                color: selectProcessResult?.color,
                cut: selectProcessResult?.cut,
                clarity: selectProcessResult?.clarity,
                measurements: selectProcessResult?.measurements,
                polish: selectProcessResult?.polish,
                symmetry: selectProcessResult?.symmetry,
                fluorescence: selectProcessResult?.fluorescence,
                proportions: selectProcessResult?.proportions,
                price: selectProcessResult?.price,
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                valuateDiamond(values).then(() => {
                  console.log("Valuation success");
                  setSubmitting(false);
                  viewValuationResult.onClose();
                  setIsValuated(true);
                });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Flex direction={"column"} gap={5}>
                    <SimpleGrid columns={2} spacing={5}>
                      <FormControl>
                        <FormLabel>Origin</FormLabel>
                        <Select
                          name="origin"
                          placeholder="Select a origin"
                          value={values.origin == null ? "" : values.origin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="Natural">Natural</option>
                          <option value="Lab Grown">Lab Grown</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Shape</FormLabel>
                        <Select
                          name="shape"
                          placeholder="Select a shape"
                          value={values.shape || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="Round">Round</option>
                          <option value="Triangle">Triangle</option>
                          <option value="Oval">Oval</option>
                          <option value="Pear">Pear</option>
                          <option value="Marquise">Marquise</option>
                          <option value="Heart">Heart</option>
                          <option value="Emerald">Emerald</option>
                          <option value="Princess">Princess</option>
                          <option value="Asscher">Asscher</option>
                          <option value="Radiant">Radiant</option>
                          <option value="Cushion">Cushion</option>
                          <option value="Baguette">Baguette</option>
                        </Select>
                      </FormControl>
                    </SimpleGrid>
                    <Field name="caratWeight">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel>Carat Weight</FormLabel>
                          <NumberInput
                            defaultValue={1}
                            min={0}
                            max={10}
                            step={0.1}
                            {...field}
                            onChange={(val) => {
                              form.setFieldValue(
                                field.name,
                                val == null ? 0 : val
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
                    <SimpleGrid columns={2} spacing={5}>
                      <FormControl>
                        <FormLabel>Color</FormLabel>
                        <Select
                          name="color"
                          placeholder="Select a color"
                          value={values.color == null ? "" : values.color}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="D">D</option>
                          <option value="E">E</option>
                          <option value="F">F</option>
                          <option value="G">G</option>
                          <option value="H">H</option>
                          <option value="I">I</option>
                          <option value="J">J</option>
                          <option value="K">K</option>
                          <option value="L">L</option>
                          <option value="M">M</option>
                          <option value="N">N</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Cut</FormLabel>
                        <Select
                          name="cut"
                          placeholder="Select a cut"
                          value={values.cut == null ? "" : values.cut}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="Excellent">Excellent</option>
                          <option value="Very Good">Very Good</option>
                          <option value="Good">Good</option>
                          <option value="Fair">Fair</option>
                          <option value="Poor">Poor</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Clarity</FormLabel>
                        <Select
                          name="clarity"
                          placeholder="Select a clarity"
                          value={values.clarity == null ? "" : values.clarity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value={"IF"}>IF</option>
                          <option value={"VVS1"}>VVS1</option>
                          <option value={"VVS2"}>VVS2</option>
                          <option value={"VS1"}>VS1</option>
                          <option value={"VS2"}>VS2</option>
                          <option value={"SI1"}>SI1</option>
                          <option value={"SI2"}>SI2</option>
                          <option value={"I1"}>I1</option>
                          <option value={"I2"}>I2</option>
                          <option value={"I3"}>I3</option>
                        </Select>
                      </FormControl>
                      {selectProcessResult?.serviceName === "Pro" ||
                      selectProcessResult?.serviceName === "Premium" ? (
                        <>
                          <FormControl>
                            <FormLabel>Measurement</FormLabel>
                            <Input
                              name="measurements"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.measurements == null
                                  ? ""
                                  : values.measurements
                              }
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Polish</FormLabel>
                            <Select
                              name="polish"
                              placeholder="Select a polish"
                              value={values.polish == null ? "" : values.polish}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="Excellent">Excellent</option>
                              <option value="VeryGood">Very Good</option>
                              <option value="Good">Good</option>
                              <option value="Fair">Fair</option>
                              <option value="Poor">Poor</option>
                            </Select>
                          </FormControl>
                        </>
                      ) : null}
                      {selectProcessResult?.serviceName === "Premium" ? (
                        <>
                          <FormControl>
                            <FormLabel>Symmetry</FormLabel>
                            <Select
                              name="symmetry"
                              placeholder="Select a symmetry"
                              value={
                                values.symmetry == null ? "" : values.symmetry
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="Excellent">Excellent</option>
                              <option value="Very Good">Very Good</option>
                              <option value="Good">Good</option>
                              <option value="Fair">Fair</option>
                              <option value="Poor">Poor</option>
                            </Select>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Fluorescence</FormLabel>
                            <Select
                              name="fluorescence"
                              placeholder="Select a fluorescence"
                              value={
                                values.fluorescence == null
                                  ? ""
                                  : values.fluorescence
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="None">None</option>
                              <option value="Faint">Faint</option>
                              <option value="Medium">Medium</option>
                              <option value="Strong">Strong</option>
                              <option value="very Strong">Very Strong</option>
                            </Select>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Proportion</FormLabel>
                            <Input
                              name="proportions"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.proportions == null
                                  ? ""
                                  : values.proportions
                              }
                            />
                          </FormControl>
                        </>
                      ) : null}
                    </SimpleGrid>
                    <FormControl>
                      <FormLabel>Price</FormLabel>
                      <InputGroup>
                        <Input
                          name="price"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price == null ? 0 : values.price}
                        />
                        <InputRightElement children="$" />
                      </InputGroup>
                    </FormControl>
                    <Center>
                      <Button
                        type="submit"
                        colorScheme="blue"
                        isLoading={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Center>
                  </Flex>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

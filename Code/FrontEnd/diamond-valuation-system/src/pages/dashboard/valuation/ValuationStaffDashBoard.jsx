import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
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
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import UploadImage from "../../../components/UploadImage";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { sha1 } from "js-sha1";
import PageIndicator from "../../../components/PageIndicator";
export default function ValuationStaffDashboard() {
  const bgColor = useColorModeValue("white", "gray.800");
  const navigate = useNavigate();
  const toast = useToast();
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewValuationResult = useDisclosure();
  const [processResult, setProcessResult] = useState([]);
  const [selectedProcessResult, setSelectedProcessResult] = useState({});
  const fetchProcessResult = (page, valuationStaffId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-result/get/valuation-staff?page=${page}&valuationStaffId=${valuationStaffId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setProcessResult(response.data.content);
          setTotalPages(response.data.totalPages);
        }
      });
  };
  useEffect(() => {
    fetchProcessResult(currentPage, user.userAuth.id);
  }, []);
  useEffect(() => {
    fetchProcessResult(currentPage, user.userAuth.id);
  }, [currentPage]);
  const valuateDiamond = (id, values) => {
    axios
      .put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/valuate?id=${id}`,
        {
          origin: values?.origin,
          shape: values?.shape,
          carat: values?.carat,
          color: values?.color,
          cut: values?.cut,
          clarity: values?.clarity,
          measurements: values?.measurements,
          polish: values?.polish,
          symmetry: values?.symmetry,
          fluorescence: values?.fluorescence,
          diamondTable: values?.diamondTable,
          depth: values?.depth,
          lengthToWidthRatio: values?.lengthToWidthRatio,
          price: values?.price,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchProcessResult(currentPage, user.userAuth.id);
        }
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.response.data,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(error.response.data);
      });
  };
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });
  const [diamondImages, setDiamondImages] = useState([]);
  const fetchValuatedDiamondImages = (valuationResultId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/image/get?id=${valuationResultId}`
      )
      .then(function (response) {
        console.log(response.data);
        setDiamondImages(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deleteImages = async (imageId) => {
    const timestamp = Date.now() / 1000;
    const formData = new FormData();
    formData.append("public_id", imageId);
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
    formData.append("timestamp", timestamp);
    formData.append(
      "signature",
      sha1(
        `public_id=${imageId}&timestamp=${timestamp}${
          import.meta.env.VITE_CLOUDINARY_API_SECRET
        }`
      )
    );
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (res) {
      const data = await res.json();
      console.log(data);
      axios
        .delete(
          `${
            import.meta.env.VITE_REACT_APP_BASE_URL
          }/api/valuation-result/image/delete?id=${imageId}`
        )
        .then(function (response) {
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setTimeout(() => {
            navigate(0);
          }, 1000);
          console.log(response.data);
        });
    }
  };
  return (
    <>
      <Flex direction="column" gap={10}>
        <Center>
          <Text fontSize="4xl" fontWeight="bold">
            Valuation Diamond
          </Text>
        </Center>
        <TableContainer whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>ID</Th>
                <Th>Service</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {processResult.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item?.valuationResultId}</Td>
                  <Td>{item?.serviceName}</Td>
                  <Td>{item?.status}</Td>
                  <Td>
                    <IconButton
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setSelectedProcessResult(item);
                        fetchValuatedDiamondImages(item?.valuationResultId);
                        viewValuationResult.onOpen();
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Center>
          <PageIndicator
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Center>
      </Flex>

      <Modal
        isOpen={viewValuationResult.isOpen}
        onClose={viewValuationResult.onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Valuation Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                origin: selectedProcessResult?.origin,
                shape: selectedProcessResult?.shape,
                carat: selectedProcessResult?.carat,
                color: selectedProcessResult?.color,
                cut: selectedProcessResult?.cut,
                clarity: selectedProcessResult?.clarity,
                measurements: selectedProcessResult?.measurements,
                polish: selectedProcessResult?.polish,
                symmetry: selectedProcessResult?.symmetry,
                fluorescence: selectedProcessResult?.fluorescence,
                diamondTable: selectedProcessResult?.diamondTable,
                depth: selectedProcessResult?.depth,
                lengthToWidthRatio: selectedProcessResult?.lengthToWidthRatio,
                price: selectedProcessResult?.price,
              }}
              onSubmit={(values, { setSubmitting }) => {
                valuateDiamond(
                  selectedProcessResult?.valuationResultId,
                  values
                );
                setSubmitting(false);
                viewValuationResult.onClose();
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Flex direction={"column"} gap={5}>
                    <SimpleGrid columns={2} spacing={5}>
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Origin"
                      ) && (
                        <FormControl>
                          <FormLabel>Origin</FormLabel>
                          <Select
                            name="origin"
                            placeholder="Select a origin"
                            value={values.origin}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="Natural">Natural</option>
                            <option value="Lab Grown">Lab Grown</option>
                          </Select>
                        </FormControl>
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Shape"
                      ) && (
                        <FormControl>
                          <FormLabel>Shape</FormLabel>
                          <Select
                            name="shape"
                            placeholder="Select a shape"
                            value={values.shape}
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
                      )}
                    </SimpleGrid>
                    {selectedProcessResult?.serviceStatistic?.includes(
                      "Carat"
                    ) && (
                      <Field name="carat">
                        {({ field, form }) => (
                          <FormControl>
                            <FormLabel>Carat</FormLabel>
                            <NumberInput
                              defaultValue={1}
                              min={0}
                              max={10}
                              step={0.1}
                              {...field}
                              onChange={(val) => {
                                form.setFieldValue(field.name, val);
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
                    )}
                    <SimpleGrid columns={2} spacing={5}>
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Color"
                      ) && (
                        <FormControl>
                          <FormLabel>Color</FormLabel>
                          <Select
                            name="color"
                            placeholder="Select a color"
                            value={values.color}
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
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Cut"
                      ) && (
                        <FormControl>
                          <FormLabel>Cut</FormLabel>
                          <Select
                            name="cut"
                            placeholder="Select a cut"
                            value={values.cut}
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
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Clarity"
                      ) && (
                        <FormControl>
                          <FormLabel>Clarity</FormLabel>
                          <Select
                            name="clarity"
                            placeholder="Select a clarity"
                            value={values.clarity}
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
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Symmetry"
                      ) && (
                        <FormControl>
                          <FormLabel>Symmetry</FormLabel>
                          <Select
                            name="symmetry"
                            placeholder="Select a symmetry"
                            value={values.symmetry}
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
                      )}{" "}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Polish"
                      ) && (
                        <FormControl>
                          <FormLabel>Polish</FormLabel>
                          <Select
                            name="polish"
                            placeholder="Select a polish"
                            value={values.polish}
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
                      )}{" "}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Fluorescence"
                      ) && (
                        <FormControl>
                          <FormLabel>Fluorescence</FormLabel>
                          <Select
                            name="fluorescence"
                            placeholder="Select a fluorescence"
                            value={values.fluorescence}
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
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Measurements"
                      ) && (
                        <FormControl>
                          <FormLabel>Measurements</FormLabel>
                          <Input
                            name="measurements"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.measurements}
                          />
                        </FormControl>
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Table"
                      ) && (
                        <Field name="diamondTable">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>Table</FormLabel>
                              <NumberInput
                                defaultValue={1}
                                min={0}
                                max={10}
                                step={0.1}
                                {...field}
                                onChange={(val) => {
                                  form.setFieldValue(field.name, val);
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
                      )}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "Depth"
                      ) && (
                        <Field name="depth">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>Depth</FormLabel>
                              <NumberInput
                                defaultValue={1}
                                min={0}
                                max={10}
                                step={0.1}
                                {...field}
                                onChange={(val) => {
                                  form.setFieldValue(field.name, val);
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
                      )}{" "}
                      {selectedProcessResult?.serviceStatistic?.includes(
                        "L/W Ratio"
                      ) && (
                        <Field name="lenghtToWidthRatio">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>L/W Ratio</FormLabel>
                              <NumberInput
                                defaultValue={1}
                                min={0}
                                max={10}
                                step={0.1}
                                {...field}
                                onChange={(val) => {
                                  form.setFieldValue(field.name, val);
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
                      )}
                    </SimpleGrid>
                    <FormControl>
                      <FormLabel>Price</FormLabel>
                      <InputGroup>
                        <Input
                          name="price"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price}
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
                    <Flex justify={"center"}>
                      <SimpleGrid columns={4}>
                        {diamondImages?.map((image, index) => {
                          return (
                            <>
                              <Flex direction={"column"} key={image}>
                                <AdvancedImage
                                  key={index}
                                  cldImg={cld
                                    .image(image)
                                    .resize(thumbnail().width(200).height(200))}
                                />
                                <Button
                                  colorScheme="red"
                                  onClick={() => {
                                    deleteImages(image);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Flex>
                            </>
                          );
                        })}
                      </SimpleGrid>
                    </Flex>
                  </Flex>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Flex direction={"column"}>
              <UploadImage
                diamondId={selectedProcessResult?.valuationResultId}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

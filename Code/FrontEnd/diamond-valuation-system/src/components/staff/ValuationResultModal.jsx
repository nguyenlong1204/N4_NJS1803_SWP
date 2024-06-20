import {
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";

export default function ValuationResultModal({
  viewValuationResult,
  data,
  pointerEvents,
}) {
  return (
    <Modal
      isOpen={viewValuationResult.isOpen}
      onClose={viewValuationResult.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Valuation Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <strong>Result ID</strong>: {data.id}
          </Text>
          <Text>
            <strong>Created Date</strong>: {data.createdDate}
          </Text>
          <Text>
            <strong>Result Status</strong>: {data.status}
          </Text>
          <Text>
            <strong>Customer Name</strong>: {data.customerName}
          </Text>
          <Formik
            initialValues={{
              origin: data.diamond.origin,
              shape: data.diamond.shape,
              carat_weight: data.diamond.carat_weight,
              color: data.diamond.color,
              cut: data.diamond.cut,
              clarity: data.diamond.clarity,
              polish: data.diamond.polish,
              symmetry: data.diamond.symmetry,
              fluorescence: data.diamond.fluorescence,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, isSubmitiing }) => (
              <Form>
                <Flex direction={"column"} gap={5}>
                  <Flex direction={"row"} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>Origin</FormLabel>
                      <Select
                        name="origin"
                        value={values.origin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="natural">Natural</option>
                        <option value="lab_grown">Lab Grown</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Shape</FormLabel>
                      <Select
                        name="shape"
                        value={values.shape}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="round">Round</option>
                        <option value="cushion">Cushion</option>
                        <option value="emerald">Emerald</option>
                        <option value="oval">Oval</option>
                        <option value="princess">Princess</option>
                        <option value="pear">Pear</option>
                        <option value="radiant">Radiant</option>
                        <option value="asscher">Asscher</option>
                        <option value="marquise">Marquise</option>
                        <option value="heart">Heart</option>
                      </Select>
                    </FormControl>
                  </Flex>
                  <Field>
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel>Carat</FormLabel>
                        <NumberInput
                          {...field}
                          name="carat_weight"
                          defaultValue={values.carat_weight}
                          precision={2}
                          step={0.01}
                          min={0.3}
                          max={5}
                          onChange={(val) =>
                            form.setFieldValue("carat_weight", val)
                          }
                          onBlur={handleBlur}
                          value={values.carat_weight}
                          pointerEvents={pointerEvents || "auto"}
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

                  <Flex direction={"row"} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>Color</FormLabel>
                      <Select
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="d">D</option>
                        <option value="e">E</option>
                        <option value="f">F</option>
                        <option value="j">J</option>
                        <option value="h">H</option>
                        <option value="i">I</option>
                        <option value="j">J</option>
                        <option value="k">K</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Clarity</FormLabel>
                      <Select
                        name="clarity"
                        value={values.clarity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="si1">SI1</option>
                        <option value="si2">SI2</option>
                        <option value="vs1">VS1</option>
                        <option value="vs2">VS2</option>
                        <option value="vvs1">VVS1</option>
                        <option value="vvs2">VVS2</option>
                        <option value="if">IF</option>
                        <option value="fl">FL</option>
                      </Select>
                    </FormControl>
                  </Flex>
                  <Flex direction={"row"} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>Cut</FormLabel>
                      <Select
                        name="cut"
                        value={values.cut}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="v.good">V.Good</option>
                        <option value="ex.">Ex.</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Symmetry</FormLabel>
                      <Select
                        name="symmetry"
                        value={values.symmetry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="v.good">V.Good</option>
                        <option value="ex.">Ex.</option>
                      </Select>
                    </FormControl>
                  </Flex>
                  <Flex direction={"row"} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>Polish</FormLabel>
                      <Select
                        name="polish"
                        value={values.polish}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="v.good">V.Good</option>
                        <option value="ex.">Ex.</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Fluorescence</FormLabel>
                      <Select
                        name="fluorescence"
                        value={values.fluorescence}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        pointerEvents={pointerEvents || "auto"}
                      >
                        <option value="vtsg">VTSG</option>
                        <option value="stg">STG</option>
                        <option value="med">MED</option>
                        <option value="fnt">FNT</option>
                        <option value="non">NON</option>
                      </Select>
                    </FormControl>
                  </Flex>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

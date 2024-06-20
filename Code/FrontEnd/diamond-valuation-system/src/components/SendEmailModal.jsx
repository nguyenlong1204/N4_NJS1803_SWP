import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";

export default function SendEmailModal({
  sendEmailModal,
  sender,
  emailFormRef,
  sendEmailFunc,
}) {
  return (
    <Modal isOpen={sendEmailModal.isOpen} onClose={sendEmailModal.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Send email to customer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              from_name: sender.name,
              from_email: sender.email,
              user_name: "",
              user_email: "",
              message: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form ref={emailFormRef} onSubmit={sendEmailFunc}>
                <Flex direction={"column"} gap={5}>
                  <FormControl isRequired>
                    <FormLabel>Customer Name</FormLabel>
                    <Input
                      name="user_name"
                      type="text"
                      placeholder="Customer Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.user_name}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Customer Email</FormLabel>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="abc@gmail.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.user_email}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      h={"200px"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                  </FormControl>
                  <Input
                    type="hidden"
                    name="from_name"
                    value={values.from_name}
                  />
                  <Input
                    type="hidden"
                    name="from_email"
                    value={values.from_email}
                  />
                  <Center>
                    <Button
                      type="submit"
                      colorScheme="green"
                      leftIcon={<EmailIcon />}
                      isLoading={isSubmitting}
                    >
                      Send Email
                    </Button>
                  </Center>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

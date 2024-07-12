import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function SendEmailModal({ sendEmailModal, message }) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailForm = useRef();
  const sendEmail = (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      emailjs
        .sendForm(`${serviceID}`, `${templateID}`, emailForm.current, {
          publicKey: `${publicKey}`,
        })
        .then(() => {
          setIsLoading(false);
          console.log("SUCCESS");
          toast({
            title: "Email sent successfully",
            description: "Please check your email to see your valuation result",
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        });
    } catch (error) {
      console.log("FAILED", error);
      toast({
        title: "Failed to send email",
        description: "Please try again later",
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      console.log(isLoading);
    }
  };
  return (
    <Modal isOpen={sendEmailModal.isOpen} onClose={sendEmailModal.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please type in your email</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              from_name: "DiamondVal",
              from_email: "lamtienhung0412@gmail.com",
              user_name: "",
              user_email: "",
              message: { message },
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form ref={emailForm} onSubmit={sendEmail}>
                <Flex direction={"column"} gap={5}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="user_email"
                      type="email"
                      onChange={handleChange}
                      value={values.user_email}
                    />
                  </FormControl>
                  <Input
                    type="hidden"
                    name="user_name"
                    value={values.user_name}
                  />
                  <Input
                    type="hidden"
                    name="from_email"
                    value={values.from_email}
                  />
                  <Input
                    type="hidden"
                    name="from_name"
                    value={values.from_name}
                  />
                  <Input type="hidden" name="message" value={message} />
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    leftIcon={<EmailIcon />}
                    colorScheme="blue"
                    disabled={isSubmitting}
                  >
                    Send Email
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

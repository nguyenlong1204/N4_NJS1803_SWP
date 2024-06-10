import {
  Flex,
  Text,
  useDisclosure,
  Input,
  useToast,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Search2Icon } from "@chakra-ui/icons";
import ConfirmAlert from "../../components/ConfirmAlert";
import ConsultingStaffViewTable from "../../components/staff/ConsultingStaffViewTable";
import ValuationRequestModal from "../../components/staff/ValuationRequestModal";
import SendEmailModal from "../../components/SendEmailModal";
import ValuationReceiptModal from "../../components/staff/ValuationReceiptModal";
import ValuationResultModal from "../../components/staff/ValuationResultModal";
export default function ConsultingStaffPage() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toast = useToast();
  const viewValuationRequest = useDisclosure();
  const sendEmailModal = useDisclosure();
  const viewValuationReceipt = useDisclosure();
  const viewValuationResult = useDisclosure();
  const confirmCreateReceipt = useDisclosure();
  const cancelRef = useRef();
  const form = useRef();
  const [selectData, setSelectData] = useState("request");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`${serviceID}`, `${templateID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS");
          toast({
            title: "Email sent successfully",
            description: "We have sent an email to the customer",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
  };
  const handleReceiveRequest = () => {
    console.log("Receive request");
  };
  const handleCancelRequest = () => {
    console.log("Cancel request");
  };
  const requestData = [
    {
      id: "Request 1",
      createdDate: "2021-09-20",
      status: "Pending",
    },
  ];
  const receiptData = [
    {
      id: "Receipt 1",
      createdDate: "2021-09-20",
      status: "Pending",
    },
  ];
  const resultData = [
    {
      id: "Result 1",
      createdDate: "2021-09-20",
      status: "Done",
    },
  ];
  const valuationRequestData = {
    id: 1561341,
    status: "Pending",
    createdDate: "2021-09-20",
    customerName: "Lam Tien Hung",
    customerEmail: "lamtienhung93@gmail.com",
    customerDiamondImage: "../images/diamond-check.png",
    customerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus, justo nec ultrices varius, nisl orci ultricies purus, nec ultricies metus orci vel nunc. Nulla facilisi. Nullam non malesuada elit. Nulla facilisi. Nullam non malesuada elit. Nulla facil",
  };
  const emailSender = {
    name: "Lam Tien Hung A",
    email: "tuannase170164@fpt.edu.vn",
  };
  const valuationReceiptData = {
    id: 15562,
    status: "Pending",
    createdDate: "2021-09-20",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus, justo nec ultrices varius, nisl orci ultricies purus, nec ultricies metus orci vel nunc. Nulla facilisi. Nullam non malesuada elit. Nulla facilisi. Nullam non malesuada elit. Nulla facil",
    diamondId: 262537545,
    customerName: "Lam Tien Hung",
    customerEmail: "lamtienhung0412@gmail.com",
  };
  const valuationResultData = {
    id: 15562,
    status: "Done",
    createdDate: "2021-09-20",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus, justo nec ultrices varius, nisl orci ultricies purus, nec ultricies metus orci vel nunc. Nulla facilisi. Nullam non malesuada elit. Nulla facilisi. Nullam non malesuada elit. Nulla facil",
    diamondId: 262537545,
    customerName: "Lam Tien Hung",
    customerEmail: "lamtienhung93@gmail.com",
    diamond: {
      id: 262537545,
      origin: "natural",
      shape: "round",
      carat_weight: 1.5,
      color: "D",
      cut: "excellent",
      clarity: "IF",
      polish: "excellent",
      symmetry: "excellent",
      fluorescence: "none",
    },
  };
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
          >
            <option value={"request"}>Request</option>
            <option value={"receipt"}>Receipt</option>
            <option value={"result"}>Result</option>
          </Select>
        </Flex>
        {(selectData === "request" && (
          <ConsultingStaffViewTable
            data={requestData}
            onClickFunc={viewValuationRequest.onOpen}
          />
        )) ||
          (selectData === "receipt" && (
            <ConsultingStaffViewTable
              data={receiptData}
              onClickFunc={viewValuationReceipt.onOpen}
            />
          )) ||
          (selectData === "result" && (
            <ConsultingStaffViewTable
              data={resultData}
              onClickFunc={viewValuationResult.onOpen}
            />
          ))}
      </Flex>
      <ValuationRequestModal
        viewValuationRequest={viewValuationRequest}
        data={valuationRequestData}
        onClickReceiveRequestButton={() => {
          handleReceiveRequest();
          viewValuationRequest.onClose();
          sendEmailModal.onOpen();
        }}
        onClickMakeReceiptButton={() => {
          confirmCreateReceipt.onOpen();
        }}
        onClickCancelRequestButton={() => {
          handleCancelRequest();
          viewValuationRequest.onClose();
          sendEmailModal.onOpen();
        }}
      />
      <ValuationReceiptModal
        viewValuationReceipt={viewValuationReceipt}
        receipt={valuationReceiptData}
      />
      <ValuationResultModal
        viewValuationResult={viewValuationResult}
        data={valuationResultData}
        pointerEvents={"none"}
      />
      <SendEmailModal
        sendEmailModal={sendEmailModal}
        sender={emailSender}
        emailFormRef={form}
        sendEmailFunc={sendEmail}
      />
      <ConfirmAlert
        isOpen={confirmCreateReceipt.isOpen}
        onClose={confirmCreateReceipt.onClose}
        cancelRef={cancelRef}
        header={"Create Receipt"}
        body={
          "Are you sure you want to create a receipt for this valuation request?"
        }
        action={"Create"}
        colorScheme={"yellow"}
        onClickFunc={() => {
          viewValuationRequest.onClose();
          viewValuationReceipt.onOpen();
          confirmCreateReceipt.onClose();
        }}
      />
    </>
  );
}

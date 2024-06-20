import { Flex, Text, useDisclosure, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ConsultingRequest from "./ConsultingRequest";
import ConsultingStaffTable from "./ConsultingStaffTable";
import {
  fetchProcessRequest,
  checkSealingDate,
  checkFinishDate,
} from "./ConsultingStaffService";
export default function ConsultingDashBoard() {
  const toast = useToast();
  const viewProcessRequest = useDisclosure();
  const [viewSelectProcessRequest, setViewSelectProcessRequest] = useState(0);
  const [processRequest, setProcessRequest] = useState([]);
  const [isProcessRequest, setIsProcessRequest] = useState(false);
  const [isCheckSealingDate, setIsCheckSealingDate] = useState(false);
  const [isCheckFinishDate, setIsCheckFinishDate] = useState(false);

  const pageIndicator = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  for (let i = 1; i <= totalPage; i++) {
    pageIndicator.push(
      <Button
        key={i}
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setCurrentPage(i);
          console.log("current:" + currentPage);
        }}
      >
        {i}
      </Button>
    );
  }
  useEffect(() => {
    fetchProcessRequest(setProcessRequest, currentPage, setTotalPage, toast);
    checkSealingDate(setIsCheckSealingDate, toast);
    checkFinishDate(setIsCheckFinishDate, toast);
  }, []);
  useEffect(() => {
    if (isProcessRequest) {
      fetchProcessRequest(setProcessRequest, currentPage, setTotalPage, toast);
      setIsProcessRequest(false);
    }
  }, [isProcessRequest]);

  useEffect(() => {
    if (isCheckSealingDate) {
      fetchProcessRequest(setProcessRequest, currentPage, setTotalPage, toast);
      setIsCheckSealingDate(false);
    }
  }, [isCheckSealingDate]);
  useEffect(() => {
    if (isCheckFinishDate) {
      fetchProcessRequest(setProcessRequest, currentPage, setTotalPage, toast);
      setIsCheckFinishDate(false);
    }
  }, [isCheckFinishDate]);

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h={"70vh"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lâm Tiên Hưng
        </Text>
        <Text fontSize="xl">For Consulting Staff</Text>

        <ConsultingStaffTable
          processRequest={processRequest}
          setViewSelectProcessRequest={setViewSelectProcessRequest}
          viewProcessRequest={viewProcessRequest}
        />
        {pageIndicator}
      </Flex>
      <ConsultingRequest
        isOpen={viewProcessRequest.isOpen}
        onClose={viewProcessRequest.onClose}
        processRequest={processRequest[viewSelectProcessRequest]}
        setIsProcessRequest={setIsProcessRequest}
        viewProcessRequest={viewProcessRequest}
        toast={toast}
      />
    </>
  );
}

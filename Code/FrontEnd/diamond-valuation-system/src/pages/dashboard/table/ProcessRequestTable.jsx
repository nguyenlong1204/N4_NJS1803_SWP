import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  useDisclosure,
  useToast,
  Flex,
  Text,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import ValuationRequestModal from "./modal/ValuationRequestModal";
import ValuationResultModal from "./modal/ValuationResultModal";
import ReceiptModal from "./modal/ReceiptModal";
export default function ProcessRequestTable() {
  const toast = useToast();
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [processRequest, setProcessRequest] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedProcessRequest, setSelectedProcessRequest] = useState({});
  const [selectedValuationRequest, setSelectedValuationRequest] = useState({});
  const [selectedValuationResult, setSelectedValuationResult] = useState({});
  const [selectedValuationReceipt, setSelectedValuationReceipt] = useState({});
  const viewValuationRequest = useDisclosure();
  const viewValuationResult = useDisclosure();
  const viewReceipt = useDisclosure();
  const fetchProcessRequest = (page, id) => {
    let url = "";
    if (user.userAuth.roleid === 2) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/all?page=${page}`;
    } else if (user.userAuth.roleid === 3) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/consulting-staff?page=${page}&id=${id}`;
    } else if (user.userAuth.roleid === 5) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/customer?page=${page}&id=${id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        Promise.all(
          response.data.content.map(async (item) => {
            await checkValuationRequestFinished(item.id, setIsChecked);
            await checkValuationRequestSealed(item.id, setIsChecked);
          })
        );

        setProcessRequest(response.data.content);
        setTotalPages(response.data?.totalPages);
      }
    });
  };
  const updateProcessRequest = (processRequestId, status) => {
    axios
      .put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/update?id=${processRequestId}`,
        {
          status: status,
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
          fetchProcessRequest(currentPage, user.userAuth.id);
        }
      });
  };
  const checkValuationRequestFinished = async (
    processRequestId,
    setIsChecked
  ) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/process-request/check-finished?id=${processRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data === "Finished request") {
            setIsChecked(true);
            toast({
              title: "Success",
              description:
                "Valuation request finished. Please contact customer to receive diamond.",
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  const checkValuationRequestSealed = async (
    processRequestId,
    setIsChecked
  ) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/process-request/check-sealed?id=${processRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data === "Sealed request") {
            setIsChecked(true);
            toast({
              title: "Success",
              description:
                "Valuation request sealed. Please contact customer to receive diamond.",
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  useEffect(() => {
    fetchProcessRequest(currentPage, user.userAuth.id);
  }, [currentPage]);

  useEffect(() => {
    if (isChecked) {
      fetchProcessRequest(currentPage, user.userAuth.id);
      setIsChecked(false);
    }
  }, [isChecked]);
  useEffect(() => {
    fetchProcessRequest(currentPage, user.userAuth.id);
  }, [currentPage]);
  const fetchValuationRequest = (pendingRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/pending-request/get?id=${pendingRequestId}`
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setSelectedValuationRequest(response.data);
        }
      });
  };
  const fetchValuationResult = (valuationRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/valuation-request/get?id=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        setSelectedValuationResult(response.data);
      });
  };
  const createSealingLetter = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/sealing-letter/create?valuationRequestId=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  const createReceipt = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-receipt/create?valuationRequestId=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  const fetchValuationReceipt = (valuationRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-receipt/valuation-request/get?id=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setSelectedValuationReceipt(response.data);
        }
      });
  };
  const createCommitment = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/commitment/create?valuationRequestId=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Process Request
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No process request to show</Center>
        ) : (
          <Skeleton isLoaded={processRequest.length > 0} height={"200px"}>
            <TableContainer>
              <Table size={"sm"} colorScheme="blue">
                <Thead bg={"blue.400"}>
                  <Tr>
                    <Th>No</Th>
                    <Th>Customer Name</Th>
                    <Th>Description</Th>
                    <Th>Status</Th>
                    <Th>View</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {processRequest.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item?.customerName || "N/A"}</Td>
                      <Td>{item?.description || "N/A"}</Td>
                      <Td>{item?.status || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bg={"transparent"}
                          onClick={() => {
                            setSelectedProcessRequest(item);
                            viewValuationRequest.onOpen();
                            fetchValuationRequest(item?.pendingRequestId);
                          }}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Skeleton>
        )}
        <Center>
          <PageIndicator
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Center>
      </Flex>
      <ValuationRequestModal
        viewValuationRequest={viewValuationRequest}
        selectedValuationRequest={selectedValuationRequest}
        selectedProcessRequest={selectedProcessRequest}
        createSealingLetter={createSealingLetter}
        updateProcessRequest={updateProcessRequest}
        fetchValuationResult={fetchValuationResult}
        viewValuationResult={viewValuationResult}
        viewReceipt={viewReceipt}
        createReceipt={createReceipt}
        fetchValuationReceipt={fetchValuationReceipt}
        createCommitment={createCommitment}
      />
      <ValuationResultModal
        viewValuationResult={viewValuationResult}
        selectedValuationResult={selectedValuationResult}
      />
      <ReceiptModal
        viewReceipt={viewReceipt}
        selectedValuationReceipt={selectedValuationReceipt}
      />
    </>
  );
}

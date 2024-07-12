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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  SimpleGrid,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
import ZaloChat from "../../../components/zalo/ZaloChat";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import { Link } from "react-router-dom";
import routes from "../../../config/Config";
import { useReactToPrint } from "react-to-print";
export default function ProcessRequestTable() {
  const toast = useToast();
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [processRequest, setProcessRequest] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdateProcess, setIsUpdateProcess] = useState(false);
  const [selectedProcessRequest, setSelectedProcessRequest] = useState(null);
  const [selectedValuationRequest, setSelectedValuationRequest] =
    useState(null);
  const valuationResultRef = useRef();
  const handlePrintValuationResult = useReactToPrint({
    content: () => valuationResultRef.current,
  });
  const [selectedValuationResult, setSelectedValuationResult] = useState(null);
  const [selectedValuationReceipt, setSelectedValuationReceipt] =
    useState(null);
  const viewValuationRequest = useDisclosure();
  const viewValuationResult = useDisclosure();
  const viewReceipt = useDisclosure();
  const fetchProcessRequest = (page, id) => {
    if (isUsers) {
      let url = "";
      if (user.userAuth.authorities[0].authority === "Manager") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/get/all?page=${page}`;
      } else if (
        user.userAuth.authorities[0].authority === "Consulting staff"
      ) {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/get/consulting-staff?page=${page}&id=${id}`;
      } else if (user.userAuth.authorities[0].authority === "Customer") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/get/customer?page=${page}&id=${id}`;
      }
      axios
        .get(url)
        .then(function (response) {
          console.log(response.data);
          if (response.status === 200) {
            Promise.all(
              response.data.content.map(async (item, index) => {
                await checkValuationRequestFinished(item.id, setIsChecked);
                await checkValuationRequestSealed(
                  item.id,
                  setIsChecked,
                  item.customerId,
                  item.consultingStaffId
                );
              })
            );

            setProcessRequest(response.data.content);
            setTotalPages(response.data?.totalPages);
          }
        })
        .catch((error) => {
          toast({
            title: "Failed",
            description: error.response.data,
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  const updateProcessRequest = (processRequestId, status) => {
    setIsUpdateProcess(true);
    axios
      .put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/update?id=${processRequestId}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setIsUpdateProcess(false);
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
          viewValuationRequest.onClose();
          fetchProcessRequest(currentPage, user.userAuth.id);
        }
      })
      .catch((error) => {
        setIsUpdateProcess(false);
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const checkValuationRequestFinished = async (
    processRequestId,
    setIsChecked,
    customerId,
    consultingStaffId
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
            var finishedRequest = [];
            finishedRequest.push({
              customerId: customerId,
              consultingStaffId: consultingStaffId,
              processRequestId: processRequestId,
            });
            localStorage.setItem(
              "finishedRequests",
              JSON.stringify(finishedRequest)
            );
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
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const checkValuationRequestSealed = async (
    processRequestId,
    setIsChecked,
    customerId,
    consultingStaffId
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
            var sealedRequests = [];
            sealedRequests.push({
              customerId: customerId,
              consultingStaffId: consultingStaffId,
              processRequestId: processRequestId,
            });
            localStorage.setItem(
              "sealedRequests",
              JSON.stringify(sealedRequests)
            );
            setIsChecked(true);
            toast({
              title: "Success",
              description:
                "Valuation request sealed. Please contact customer to notify.",
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
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
    setSelectedValuationRequest(null);
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
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const fetchValuationResult = (valuationRequestId) => {
    setSelectedValuationResult(null);
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/valuation-request/get?id=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        setSelectedValuationResult(response.data);
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const createSealingLetter = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/sealing-letter/create?valuationRequestId=${valuationRequestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              position: "top-right",

              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              position: "top-right",

              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const createReceipt = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-receipt/create?valuationRequestId=${valuationRequestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              position: "top-right",

              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              position: "top-right",

              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const fetchValuationReceipt = (valuationRequestId) => {
    setSelectedValuationReceipt(null);
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
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const createCommitment = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/commitment/manager/create?valuationRequestId=${valuationRequestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              position: "top-right",

              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (response.data.includes("already exists")) {
            toast({
              title: "Failed",
              description: response.data,
              position: "top-right",

              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
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
            <TableContainer shadow="md" borderRadius="md">
              <Table>
                <Thead
                  bg="gray.600"
                  color="white"
                  mb={5}
                  boxShadow="sm"
                  borderRadius="md"
                  maxW="100%"
                  minW="100%"
                >
                  <Tr>
                    <Th color="white">ID</Th>
                    {(user.userAuth.roleid === 2 ||
                      user.userAuth.roleid === 3) && (
                      <Th color="white">Customer ID</Th>
                    )}
                    <Th color="white">Customer Name</Th>
                    {(user.userAuth.roleid === 2 ||
                      user.userAuth.roleid === 3) && (
                      <Th color="white">Consulting Staff ID</Th>
                    )}
                    <Th color="white">Consulting Staff Name</Th>
                    <Th color="white">Description</Th>
                    <Th color="white">Status</Th>
                    <Th color="white">View</Th>
                  </Tr>
                </Thead>
                <Tbody variant="simple" bg="gray.200" color="black">
                  {processRequest.map((item, index) => (
                    <Tr key={index} _hover={{ bg: "gray.100" }}>
                      <Td>{item?.id}</Td>
                      {(user.userAuth.roleid === 2 ||
                        user.userAuth.roleid === 3) && (
                        <Td>{item?.customerId || "N/A"}</Td>
                      )}
                      <Td>{item?.customerName || "N/A"}</Td>
                      {(user.userAuth.roleid === 2 ||
                        user.userAuth.roleid === 3) && (
                        <Td>{item?.consultingStaffId || "N/A"}</Td>
                      )}
                      <Td>{item?.consultingStaffName}</Td>
                      <Td>{item?.description || "N/A"}</Td>
                      <Td>{item?.status || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bg={"transparent"}
                          color="black"
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
            <Center m={"50px 0 0 0"}>
              <PageIndicator
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </Center>
          </Skeleton>
        )}
      </Flex>
      <Modal
        isOpen={viewValuationRequest.isOpen}
        onClose={viewValuationRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton
              isLoaded={
                selectedValuationRequest !== null ||
                selectedProcessRequest?.status === "Not resolved yet" ||
                selectedProcessRequest?.status === "Contacted"
              }
            >
              <ModalCloseButton />
              Valuation Request ID: {selectedValuationRequest?.id || "N/A"}
            </Skeleton>
          </ModalHeader>
          <ModalBody>
            <Skeleton
              isLoaded={
                selectedValuationRequest !== null ||
                selectedProcessRequest?.status === "Not resolved yet" ||
                selectedProcessRequest?.status === "Contacted"
              }
            >
              <Flex direction={"column"} gap={5}>
                {isUsers &&
                  (user.userAuth.authorities[0].authority === "Manager" ||
                    user.userAuth.authorities[0].authority ===
                      "Consulting staff") && (
                    <>
                      <Text>
                        <strong>Customer Name</strong>:{" "}
                        {selectedProcessRequest?.customerName || "N/A"}
                      </Text>
                      <Text>
                        <strong>Customer Email</strong>:{" "}
                        {selectedProcessRequest?.customerEmail || "N/A"}
                      </Text>
                      <Text>
                        <strong>Customer Phone</strong>:{" "}
                        {selectedProcessRequest?.customerPhone || "N/A"}
                      </Text>
                    </>
                  )}
                {isUsers &&
                  (user.userAuth.authorities[0].authority === "Manager" ||
                    user.userAuth.authorities[0].authority === "Customer") && (
                    <>
                      <Text>
                        <strong>Staff Name</strong>:{" "}
                        {selectedProcessRequest?.consultingStaffName || "N/A"}
                      </Text>
                      <Text>
                        <strong>Staff Email</strong>:{" "}
                        {selectedProcessRequest?.consultingStaffEmail || "N/A"}
                      </Text>
                      <Text>
                        <strong>Staff Phone</strong>:{" "}
                        {selectedProcessRequest?.consultingStaffPhone || "N/A"}
                      </Text>
                    </>
                  )}
                <Text>
                  <strong>Service Type</strong>:{" "}
                  {selectedValuationRequest?.serviceName || "N/A"}
                </Text>
                <Text>
                  <strong>Price</strong>:{" "}
                  {selectedValuationRequest?.servicePrice || "N/A"} vnd
                </Text>
                <Text>
                  <strong>Will valuate</strong>:{" "}
                  {selectedValuationRequest?.serviceStatistic || "N/A"}
                </Text>
                <Text>
                  <strong>Created Date</strong>:{" "}
                  {selectedValuationRequest?.createdDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text>
                  <strong>Finish Date</strong>:{" "}
                  {selectedValuationRequest?.finishDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text>
                  <strong>Sealing Date</strong>:{" "}
                  {selectedValuationRequest?.sealingDate?.slice(0, 10) || "N/A"}
                </Text>
              </Flex>
            </Skeleton>
          </ModalBody>
          <Skeleton
            isLoaded={
              selectedValuationRequest !== null ||
              selectedProcessRequest?.status === "Not resolved yet" ||
              selectedProcessRequest?.status === "Contacted"
            }
          >
            {(isUsers &&
              user.userAuth.authorities[0].authority === "Manager" && (
                <ModalFooter justifyContent={"space-around"}>
                  {selectedProcessRequest?.status === "Sealed" && (
                    <Button
                      onClick={() => {
                        createSealingLetter(selectedValuationRequest?.id);
                      }}
                    >
                      Create sealing letter
                    </Button>
                  )}
                </ModalFooter>
              )) ||
              (isUsers &&
                user.userAuth.authorities[0].authority ===
                  "Consulting staff" && (
                  <ModalFooter justifyContent={"space-around"}>
                    {(selectedProcessRequest?.status === "Not resolved yet" && (
                      <>
                        <Button
                          isLoading={isUpdateProcess}
                          onClick={() => {
                            updateProcessRequest(
                              selectedProcessRequest?.id,
                              "Contacted"
                            );
                          }}
                        >
                          Contacted
                        </Button>
                        <ZaloChat
                          phone={selectedProcessRequest?.customerPhone}
                          type={"customer"}
                        />
                      </>
                    )) ||
                      (selectedProcessRequest?.status === "Contacted" && (
                        <ZaloChat
                          phone={selectedProcessRequest?.customerPhone}
                          type={"customer"}
                        />
                      )) ||
                      (selectedProcessRequest?.status === "Paid" && (
                        <>
                          <Button
                            isLoading={isUpdateProcess}
                            onClick={() => {
                              updateProcessRequest(
                                selectedProcessRequest?.id,
                                "Diamond Received"
                              );
                              createReceipt(selectedValuationRequest?.id);
                            }}
                          >
                            Diamond Received
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.customerPhone}
                            type={"customer"}
                          />
                        </>
                      )) ||
                      (selectedProcessRequest?.status ===
                        "Diamond Received" && (
                        <>
                          <Button
                            onClick={() => {
                              viewReceipt.onOpen();
                              fetchValuationReceipt(
                                selectedValuationRequest?.id
                              );
                            }}
                          >
                            Receipt
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.customerPhone}
                            type={"customer"}
                          />
                        </>
                      )) ||
                      (selectedProcessRequest?.status === "Valuated" && (
                        <>
                          <Button
                            colorScheme="teal"
                            onClick={() => {
                              fetchValuationResult(
                                selectedValuationRequest?.id
                              );
                              viewValuationResult.onOpen();
                            }}
                          >
                            View
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.customerPhone}
                            type={"customer"}
                          />
                        </>
                      )) ||
                      (selectedProcessRequest?.status === "Finished" && (
                        <>
                          <SimpleGrid columns={2} spacing={5}>
                            <Button
                              colorScheme="teal"
                              onClick={() => {
                                fetchValuationResult(
                                  selectedValuationRequest?.id
                                );
                                viewValuationResult.onOpen();
                              }}
                            >
                              View
                            </Button>
                            <ZaloChat
                              phone={selectedProcessRequest?.customerPhone}
                              type={"customer"}
                            />
                            <Button
                              isLoading={isUpdateProcess}
                              colorScheme="blue"
                              onClick={() => {
                                updateProcessRequest(
                                  selectedProcessRequest?.id,
                                  "Done"
                                );
                              }}
                            >
                              Cust. Received
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => {
                                createCommitment(selectedValuationRequest?.id);
                              }}
                            >
                              Lost Receipt
                            </Button>
                          </SimpleGrid>
                        </>
                      )) ||
                      (selectedProcessRequest?.status === "Done" && (
                        <>
                          <Button
                            colorScheme="teal"
                            onClick={() => {
                              fetchValuationResult(
                                selectedValuationRequest?.id
                              );
                              viewValuationResult.onOpen();
                            }}
                          >
                            View
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.customerPhone}
                            type={"customer"}
                          />
                        </>
                      )) ||
                      (selectedProcessRequest?.status === "Sealed" && (
                        <SimpleGrid columns={2} spacing={5}>
                          <Button
                            colorScheme="teal"
                            onClick={() => {
                              fetchValuationResult(
                                selectedValuationRequest?.id
                              );
                              viewValuationResult.onOpen();
                            }}
                          >
                            View
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.customerPhone}
                            type={"customer"}
                          />
                          <Button
                            isLoading={isUpdateProcess}
                            colorScheme="blue"
                            onClick={() => {
                              updateProcessRequest(
                                selectedProcessRequest?.id,
                                "Done"
                              );
                            }}
                          >
                            Cust. Received
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              createCommitment(selectedValuationRequest?.id);
                            }}
                          >
                            Lost Receipt
                          </Button>
                        </SimpleGrid>
                      ))}
                  </ModalFooter>
                )) ||
              (isUsers &&
                user.userAuth.authorities[0].authority === "Customer" && (
                  <ModalFooter justifyContent={"space-around"}>
                    {(selectedProcessRequest?.status === "Not resolved yet" && (
                      <ZaloChat
                        phone={selectedProcessRequest?.consultingStaffPhone}
                        type={"staff"}
                      />
                    )) ||
                      (selectedProcessRequest?.status === "Contacted" && (
                        <>
                          <Link
                            to={routes.diamondService}
                            state={{
                              pendingRequestId:
                                selectedProcessRequest?.pendingRequestId,
                            }}
                          >
                            <Button colorScheme="teal">Service</Button>
                          </Link>
                          <ZaloChat
                            phone={selectedProcessRequest?.consultingStaffPhone}
                            type={"staff"}
                          />
                        </>
                      )) ||
                      (selectedProcessRequest?.status === "Paid" && (
                        <ZaloChat
                          phone={selectedProcessRequest?.consultingStaffPhone}
                          type={"staff"}
                        />
                      )) ||
                      ((selectedProcessRequest?.status === "Valuated" ||
                        selectedProcessRequest?.status === "Finished" ||
                        selectedProcessRequest?.status === "Done" ||
                        selectedProcessRequest?.status === "Sealed") && (
                        <>
                          <Button
                            colorScheme="teal"
                            onClick={() => {
                              viewValuationResult.onOpen();
                              fetchValuationResult(
                                selectedValuationRequest?.id
                              );
                            }}
                          >
                            View Result
                          </Button>
                          <ZaloChat
                            phone={selectedProcessRequest?.consultingStaffPhone}
                            type={"staff"}
                          />
                        </>
                      ))}
                  </ModalFooter>
                ))}
          </Skeleton>
        </ModalContent>
      </Modal>
      {(isUsers &&
        user.userAuth.authorities[0].authority === "Consulting staff" && (
          <Modal
            isOpen={viewValuationResult.isOpen}
            onClose={viewValuationResult.onClose}
            size={"full"}
          >
            <ModalOverlay />
            <ModalContent ref={valuationResultRef} p={5}>
              <ModalHeader>
                <Skeleton isLoaded={selectedValuationResult !== null}>
                  <Flex direction={"row"} gap={5}>
                    <Icon as={GiDiamondTrophy} w={16} h={16} />
                    <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                      DiamondVal
                    </Text>
                  </Flex>
                </Skeleton>
              </ModalHeader>
              <ModalBody>
                <Skeleton isLoaded={selectedValuationResult !== null}>
                  <Flex direction={"column"} gap={2} p={5}>
                    <Flex direction={"column"} align={"center"} gap={5}>
                      <Text fontSize={"2xl"}>
                        <strong>Valuation Result ID</strong>:{" "}
                        {selectedValuationResult?.id || "N/A"}
                      </Text>
                    </Flex>
                    <SimpleGrid columns={2} spacing={10}>
                      <Flex direction={"column"} bg={"blue.100"} gap={5} p={5}>
                        <Text fontWeight={"bold"} bg={"blue.400"} p={2}>
                          GRADING REPORT
                        </Text>
                        <Text>
                          <strong>ID</strong>: {selectedValuationResult?.id}
                        </Text>
                        <Text>
                          <strong>Valuated Date</strong>:{" "}
                          {selectedValuationResult?.createdDate?.slice(0, 10)}
                        </Text>
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Origin"
                        ) && (
                          <Text>
                            <strong>Origin: </strong>
                            {selectedValuationResult?.origin}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Shape"
                        ) && (
                          <Text>
                            <strong>Shape: </strong>
                            {selectedValuationResult?.shape}
                          </Text>
                        )}
                        <Text>
                          <strong>Price: </strong>
                          {selectedValuationResult?.price}
                        </Text>
                        <Text fontWeight={"bold"} bg={"blue.400"} p={2}>
                          4C GRADING REPORT
                        </Text>
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Carat"
                        ) && (
                          <Text>
                            <strong>Carat: </strong>
                            {selectedValuationResult?.carat}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Color"
                        ) && (
                          <Text>
                            <strong>Color: </strong>
                            {selectedValuationResult?.color}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Cut"
                        ) && (
                          <Text>
                            <strong>Cut: </strong>
                            {selectedValuationResult?.cut}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Clarity"
                        ) && (
                          <Text>
                            <strong>Clarity: </strong>
                            {selectedValuationResult?.clarity}
                          </Text>
                        )}
                      </Flex>
                      <Flex direction={"column"} gap={5} bg={"blue.100"} p={5}>
                        <Text fontWeight={"bold"} bg={"blue.400"} p={2}>
                          ADDITIONAL GRADING INFORMATION
                        </Text>
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Symmetry"
                        ) && (
                          <Text>
                            <strong>Symmetry: </strong>
                            {selectedValuationResult?.symmetry}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Polish"
                        ) && (
                          <Text>
                            <strong>Polish: </strong>
                            {selectedValuationResult?.polish}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Fluorescence"
                        ) && (
                          <Text>
                            <strong>Fluorescence: </strong>
                            {selectedValuationResult?.fluorescence}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Measurements"
                        ) && (
                          <Text>
                            <strong>Measurements: </strong>
                            {selectedValuationResult?.measurements}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Table"
                        ) && (
                          <Text>
                            <strong>Table: </strong>
                            {selectedValuationResult?.diamondTable}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "Depth"
                        ) && (
                          <Text>
                            <strong>Depth: </strong>
                            {selectedValuationResult?.depth}
                          </Text>
                        )}
                        {selectedValuationResult?.serviceStatistic?.includes(
                          "L/W Ratio"
                        ) && (
                          <Text>
                            <strong>L/W Ratio: </strong>
                            {selectedValuationResult?.lengthToWidthRatio}
                          </Text>
                        )}
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                </Skeleton>
              </ModalBody>
              <ModalFooter justifyContent={"space-around"}>
                <Skeleton isLoaded={selectedValuationResult !== null}>
                  <Button onClick={handlePrintValuationResult}>Print</Button>
                </Skeleton>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )) ||
        (isUsers && user.userAuth.authorities[0].authority === "Customer" && (
          <Modal
            isOpen={viewValuationResult.isOpen}
            onClose={viewValuationResult.onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Skeleton isLoaded={selectedValuationResult !== null}>
                  <ModalCloseButton />
                  Valuation Result ID: {selectedValuationResult?.id}
                </Skeleton>
              </ModalHeader>
              <ModalBody>
                <Skeleton isLoaded={selectedValuationResult !== null}>
                  <Flex direction={"column"} gap={5} p={5}>
                    <Text>
                      <strong>ID</strong>: {selectedValuationResult?.id}
                    </Text>
                    <Text>
                      <strong>Valuated Date</strong>:{" "}
                      {selectedValuationResult?.createdDate?.slice(0, 10)}
                    </Text>
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Origin"
                    ) && (
                      <Text>
                        <strong>Origin: </strong>
                        {selectedValuationResult?.origin}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Shape"
                    ) && (
                      <Text>
                        <strong>Shape: </strong>
                        {selectedValuationResult?.shape}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Carat"
                    ) && (
                      <Text>
                        <strong>Carat: </strong>
                        {selectedValuationResult?.carat}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Color"
                    ) && (
                      <Text>
                        <strong>Color: </strong>
                        {selectedValuationResult?.color}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Cut"
                    ) && (
                      <Text>
                        <strong>Cut: </strong>
                        {selectedValuationResult?.cut}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Clarity"
                    ) && (
                      <Text>
                        <strong>Clarity: </strong>
                        {selectedValuationResult?.clarity}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Symmetry"
                    ) && (
                      <Text>
                        <strong>Symmetry: </strong>
                        {selectedValuationResult?.symmetry}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Polish"
                    ) && (
                      <Text>
                        <strong>Polish: </strong>
                        {selectedValuationResult?.polish}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Fluorescence"
                    ) && (
                      <Text>
                        <strong>Fluorescence: </strong>
                        {selectedValuationResult?.fluorescence}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Measurements"
                    ) && (
                      <Text>
                        <strong>Measurements: </strong>
                        {selectedValuationResult?.measurements}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Table"
                    ) && (
                      <Text>
                        <strong>Table: </strong>
                        {selectedValuationResult?.diamondTable}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Depth"
                    ) && (
                      <Text>
                        <strong>Depth: </strong>
                        {selectedValuationResult?.depth}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "L/W Ratio"
                    ) && (
                      <Text>
                        <strong>L/W Ratio: </strong>
                        {selectedValuationResult?.lengthToWidthRatio}
                      </Text>
                    )}
                    <Center>
                      <Text color={"blue.400"} fontSize={"3xl"}>
                        {selectedValuationResult?.price} $
                      </Text>
                    </Center>
                  </Flex>
                </Skeleton>
              </ModalBody>
              <Skeleton isLoaded={selectedValuationResult !== null}>
                <ModalFooter></ModalFooter>
              </Skeleton>
            </ModalContent>
          </Modal>
        ))}
      <Modal
        isOpen={viewReceipt.isOpen}
        onClose={viewReceipt.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton isLoaded={selectedValuationReceipt !== null}>
              <Flex gap={5}>
                <Icon as={GiDiamondTrophy} w={16} h={16} />
                <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                  DiamondVal
                </Text>
              </Flex>
            </Skeleton>
          </ModalHeader>
          <ModalBody>
            <Skeleton isLoaded={selectedValuationReceipt !== null}>
              <Flex direction={"column"} gap={5} p={5}>
                <Flex direction={"column"} align={"center"} gap={5}>
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Receipt
                  </Text>
                </Flex>
                <Text>
                  <strong>Company</strong>: DiamondVal
                </Text>
                <Text>
                  <strong>Date</strong>:{" "}
                  {selectedValuationReceipt?.createdDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text>
                  <strong>RE</strong>: Diamond Valuation Receipt
                </Text>
                <Text>We include: </Text>
                <Flex gap={10}>
                  <Flex direction={"column"} align={"start"} gap={5}>
                    <Text fontWeight={"bold"}>
                      Customer side (Send diamond)
                    </Text>
                    <UnorderedList spacing={2}>
                      <ListItem>
                        Name: {selectedValuationReceipt?.customerName || "N/A"}
                      </ListItem>
                      <ListItem>
                        Phone Number:{" "}
                        {selectedValuationReceipt?.customerPhone || "N/A"}
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex direction={"column"} align={"start"} gap={5}>
                    <Text fontWeight={"bold"}>
                      Company side (Receive diamond)
                    </Text>
                    <UnorderedList spacing={2}>
                      <ListItem>
                        Name:{" "}
                        {selectedValuationReceipt?.consultingStaffName || "N/A"}
                      </ListItem>
                      <ListItem>
                        Phone Number:{" "}
                        {selectedValuationReceipt?.consultingStaffPhone ||
                          "N/A"}
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
                <Text>
                  Both are agree to about give and receive the diamond below
                </Text>
                <TableContainer>
                  <Table size={"sm"} colorScheme="blue">
                    <Thead bg={"blue.400"}>
                      <Tr>
                        <Th>No</Th>
                        <Th>Type</Th>
                        <Th>Quantity</Th>
                        <Th>Description</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>1</Td>
                        <Td>Diamond</Td>
                        <Td>1</Td>
                        <Td>
                          {selectedValuationReceipt?.description || "N/A"}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Text>
                  Company side confirmed that Customer side has given to Company
                  side the right diamond with that quantity.
                </Text>
                <Text>
                  Both are agreed to the above information and signed below &
                  the receipt will be copied for both sides. Each will receive a
                  copy and they both have the same validity.
                </Text>
                <Flex justify={"space-between"} p={10}>
                  <Flex direction={"column"} align={"start"} gap={5}>
                    <Text>Customer side</Text>
                    <Text>Signature</Text>
                  </Flex>
                  <Flex direction={"column"} align={"end"} gap={5}>
                    <Text>Company side</Text>
                    <Text>Signature</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Skeleton>
          </ModalBody>
          <ModalFooter>
            <Skeleton isLoaded={selectedValuationReceipt !== null}>
              <Flex justify={"flex-end"} p={5}>
                <Button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </Button>
              </Flex>
            </Skeleton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

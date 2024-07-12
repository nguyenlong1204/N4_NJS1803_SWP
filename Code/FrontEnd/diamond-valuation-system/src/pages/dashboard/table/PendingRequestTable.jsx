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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Text,
  Button,
  ModalFooter,
  useToast,
  Box,
  Center,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";

export default function PendingRequestTable() {
  const toast = useToast();
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewPendingRequest = useDisclosure();
  const [isLoadedPendingRequest, setIsLoadedPendingRequest] = useState(false);
  const [pendingRequest, setPendingRequest] = useState([]);
  const [selectedPendingRequest, setSelectedPendingRequest] = useState(null);
  const fetchPendingRequest = (page, id) => {
    if(isUsers)
    {

      setIsLoadedPendingRequest(true);
      let url = "";
      if (
      user.userAuth.authorities[0].authority === "Consulting staff" ||
      user.userAuth.authorities[0].authority === "Manager"
    ) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/get/all?page=${page}`;
    } else if (user.userAuth.authorities[0].authority === "Customer") {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/pending-request/customer/get?page=${page}&id=${id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        setPendingRequest(response.data.content);
        setTotalPages(response.data?.totalPages);
        setIsLoadedPendingRequest(false);
      }
    });
  };
}
  const receivePendingRequest = (consultingStaffId, pendingRequestId) => {
    setIsLoadedPendingRequest(true);
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/process-request/create`,
        {
          pendingRequestId: pendingRequestId,
          consultingStaffId: consultingStaffId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        setIsLoadedPendingRequest(false);
        if (response.data === "Have already received !") {
          toast({
            title: response.data,
            status: "warning",      position: "top-right",

            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: response.data,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
          setTimeout(() => {
            fetchPendingRequest(currentPage, user.userAuth.id);
            viewPendingRequest.onClose();
          }, 1000);
        }
      })
      .catch(function (error) {
        setIsLoadedPendingRequest(false);
        toast({
          title: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const cancelPendingRequest = (pendingRequestId) => {
    setIsLoadedPendingRequest(true);
    axios
      .delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/delete?id=${pendingRequestId}`,
        {
          headers: {
            Authorization: `Bearer ${user.userAuth.token}`,
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            setIsLoadedPendingRequest(false);
            toast({
              title: response.data,
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
            setTimeout(() => {
              fetchPendingRequest(currentPage, user.userAuth.id);
              viewPendingRequest.onClose();
            }, 1000);
          } else {
            setIsLoadedPendingRequest(false);
            toast({
              title: response.data,
              status: "error",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  useEffect(() => {
    fetchPendingRequest(currentPage, user.userAuth.id);
  }, [currentPage]);
  return (
    <>
      <Flex direction={"column"} gap={10} >
        <Center>
          <Text fontSize="4xl" fontWeight="bold">
            Pending Request
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center >No pending request to show</Center>
        ) : (
          <Skeleton isLoaded={pendingRequest.length > 0} height={"200px"}>
            <TableContainer shadow="md" borderRadius="md">
              <Table >
                <Thead bg="gray.600" mb={5} boxShadow="sm" borderRadius="md" maxW="100%" minW="100%">
                  <Tr>
                    <Th color="white">ID</Th>
                    <Th color="white">Customer Name</Th>
                    <Th color="white">Email</Th>
                    <Th color="white">Phone Number</Th>
                    <Th color="white">Description</Th>
                    <Th color="white">Created Date</Th>
                    <Th color="white">View</Th>
                  </Tr>
                </Thead>
                <Tbody variant="simple" bg="gray.200" color="black">
                  {pendingRequest.map((item, index) => (
                    <Tr key={index} >
                      <Td>{item?.id}</Td>
                      <Td>{item?.customerName || "N/A"}</Td>
                      <Td>{item?.customerEmail || "N/A"}</Td>
                      <Td>{item?.customerPhone || "N/A"}</Td>
                      <Td>{item?.description || "N/A"}</Td>
                      <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bgColor={"transparent"}
                          color="black"
                          onClick={() => {
                            setSelectedPendingRequest(item);
                            viewPendingRequest.onOpen();
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
        isOpen={viewPendingRequest.isOpen}
        onClose={viewPendingRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton isLoaded={selectedPendingRequest !== null}>
              Pending Request ID: {selectedPendingRequest?.id || "N/A"}
            </Skeleton>
          </ModalHeader>
          <ModalBody>
            <Skeleton isLoaded={selectedPendingRequest !== null}>
              <Flex direction={"column"} gap={5}>
                <Text>
                  <strong>Created Date</strong>:{" "}
                  {selectedPendingRequest?.createdDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text>
                  <strong>Description</strong>:{" "}
                  {selectedPendingRequest?.description || "N/A"}
                </Text>
                <Text>
                  <strong>Customer Name</strong>:{" "}
                  {selectedPendingRequest?.customerName || "N/A"}
                </Text>
                <Text>
                  <strong>Email</strong>:{" "}
                  {selectedPendingRequest?.customerEmail || "N/A"}
                </Text>
                <Text>
                  <strong>Phone Number</strong>:{" "}
                  {selectedPendingRequest?.customerPhone || "N/A"}
                </Text>
              </Flex>
            </Skeleton>
          </ModalBody>
          <Skeleton isLoaded={selectedPendingRequest !== null}>
            {(isUsers &&
              user.userAuth.authorities[0].authority === "Customer" && (
                <ModalFooter justifyContent={"space-around"}>
                  <Button
                    isLoading={isLoadedPendingRequest}
                    colorScheme="red"
                    onClick={() => {
                      cancelPendingRequest(selectedPendingRequest?.id);
                    }}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              )) ||
              (isUsers &&
                user.userAuth.authorities[0].authority ===
                  "Consulting staff" && (
                  <ModalFooter justifyContent={"space-around"}>
                    <Button
                      isLoading={isLoadedPendingRequest}
                      colorScheme="teal"
                      onClick={() => {
                        receivePendingRequest(
                          user?.userAuth?.id,
                          selectedPendingRequest?.id
                        );
                      }}
                    >
                      Receive
                    </Button>
                  </ModalFooter>
                ))}
          </Skeleton>
        </ModalContent>
      </Modal>
    </>
  );
}

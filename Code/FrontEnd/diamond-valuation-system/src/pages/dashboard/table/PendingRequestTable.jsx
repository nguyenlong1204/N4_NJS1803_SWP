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
  const navigate = useNavigate();
  const toast = useToast();
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewPendingRequest = useDisclosure();
  const [isLoadedPendingRequest, setIsLoadedPendingRequest] = useState(false);
  const [pendingRequest, setPendingRequest] = useState([]);
  const [selectedPendingRequest, setSelectedPendingRequest] = useState({});
  const fetchPendingRequest = (page, id) => {
    setIsLoadedPendingRequest(true);
    let url = "";
    if (user.userAuth.roleid === 3 || user.userAuth.roleid === 2) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/pending-request/get/all?page=${page}`;
    } else if (user.userAuth.roleid === 5) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/pending-request/customer/get?page=${page}&id=${id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        setPendingRequest(response.data.content);
        setTotalPages(response.data?.totalPages);
        setIsLoadedPendingRequest(false);
      }
    });
  };
  const receivePendingRequest = (consultingStaffId, pendingRequestId) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/process-request/create`,
        {
          pendingRequestId: pendingRequestId,
          consultingStaffId: consultingStaffId,
        }
      )
      .then(function (response) {
        if (response.data === "Have already received !") {
          toast({
            title: response.data,
            status: "warning",
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
        }
      })
      .catch(function (error) {
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
    axios
      .delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/delete?id=${pendingRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: response.data,
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
            setTimeout(() => {
              fetchPendingRequest(currentPage, user.userAuth.id);
            }, 1000);
          } else {
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
  }, []);
  useEffect(() => {
    fetchPendingRequest(currentPage, user.userAuth.id);
  }, [currentPage]);
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize="4xl" fontWeight="bold">
            Pending Request
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No pending request to show</Center>
        ) : (
          <Skeleton isLoaded={pendingRequest.length > 0} height={"200px"}>
            <TableContainer>
              <Table size={"sm"} colorScheme="blue">
                <Thead bg={"blue.400"}>
                  <Tr>
                    <Th>No</Th>
                    <Th>Customer Name</Th>
                    <Th>Email</Th>
                    <Th>Phone Number</Th>
                    <Th>Description</Th>
                    <Th>Created Date</Th>
                    <Th>View</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pendingRequest.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item?.customerName || "N/A"}</Td>
                      <Td>{item?.customerEmail || "N/A"}</Td>
                      <Td>{item?.customerPhone || "N/A"}</Td>
                      <Td>{item?.description || "N/A"}</Td>
                      <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bgColor={"transparent"}
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
          </Skeleton>
        )}
        <Center>
          <PageIndicator
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Center>
      </Flex>

      <Modal
        isOpen={viewPendingRequest.isOpen}
        onClose={viewPendingRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Pending Request ID: {selectedPendingRequest?.id || "N/A"}
          </ModalHeader>
          <ModalBody>
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
          </ModalBody>
          {(user.userAuth.roleid === 5 && (
            <ModalFooter justifyContent={"space-around"}>
              <Button
                colorScheme="red"
                onClick={() => {
                  cancelPendingRequest(selectedPendingRequest?.id);
                  viewPendingRequest.onClose();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          )) ||
            (user.userAuth.roleid === 3 && (
              <ModalFooter justifyContent={"space-around"}>
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    receivePendingRequest(
                      user?.userAuth?.id,
                      selectedPendingRequest?.id
                    );
                    viewPendingRequest.onClose();
                  }}
                >
                  Receive
                </Button>
              </ModalFooter>
            ))}
        </ModalContent>
      </Modal>
    </>
  );
}

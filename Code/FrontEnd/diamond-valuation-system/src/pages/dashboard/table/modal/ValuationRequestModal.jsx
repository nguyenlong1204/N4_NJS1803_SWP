import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../../../../components/GlobalContext/AuthContext";
import ZaloChat from "../../../../components/zalo/ZaloChat";
import { Link } from "react-router-dom";
import routes from "../../../../config/Config";
export default function ValuationRequestModal({
  viewValuationRequest,
  selectedValuationRequest,
  selectedProcessRequest,
  createSealingLetter,
  updateProcessRequest,
  fetchValuationResult,
  viewValuationResult,
  viewReceipt,
  createReceipt,
  fetchValuationReceipt,
  createCommitment,
}) {
  const user = useContext(UserContext);
  return (
    <Modal
      isOpen={viewValuationRequest.isOpen}
      onClose={viewValuationRequest.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
          Valuation Request ID: {selectedValuationRequest?.id || "N/A"}
        </ModalHeader>
        <ModalBody>
          <Flex direction={"column"} gap={5}>
            {(user.userAuth.roleid === 2 || user.userAuth.roleid === 3) && (
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
            {(user.userAuth.roleid === 2 || user.userAuth.roleid === 5) && (
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
        </ModalBody>
        {(user.userAuth.roleid === 2 && (
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
          (user.userAuth.roleid === 3 && (
            <ModalFooter justifyContent={"space-around"}>
              {(selectedProcessRequest?.status === "Not resolved yet" && (
                <>
                  <Button
                    onClick={() => {
                      viewValuationRequest.onClose();
                      updateProcessRequest(
                        selectedProcessRequest?.id,
                        "Contacted"
                      );
                    }}
                  >
                    Contacted
                  </Button>
                  <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                </>
              )) ||
                (selectedProcessRequest?.status === "Contacted" && (
                  <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                )) ||
                (selectedProcessRequest?.status === "Paid" && (
                  <>
                    <Button
                      onClick={() => {
                        viewValuationRequest.onClose();
                        updateProcessRequest(
                          selectedProcessRequest?.id,
                          "Diamond Received"
                        );
                        createReceipt(selectedValuationRequest?.id);
                      }}
                    >
                      Diamond Received
                    </Button>
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  </>
                )) ||
                (selectedProcessRequest?.status === "Diamond Received" && (
                  <>
                    <Button
                      onClick={() => {
                        viewReceipt.onOpen();
                        fetchValuationReceipt(selectedValuationRequest?.id);
                      }}
                    >
                      Receipt
                    </Button>
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  </>
                )) ||
                (selectedProcessRequest?.status === "Valuated" && (
                  <>
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        fetchValuationResult(selectedValuationRequest?.id);
                        viewValuationResult.onOpen();
                      }}
                    >
                      View
                    </Button>
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  </>
                )) ||
                (selectedProcessRequest?.status === "Finished" && (
                  <>
                    <SimpleGrid columns={2} spacing={5}>
                      <Button
                        colorScheme="teal"
                        onClick={() => {
                          fetchValuationResult(selectedValuationRequest?.id);
                          viewValuationResult.onOpen();
                        }}
                      >
                        View
                      </Button>
                      <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                      <Button
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
                        fetchValuationResult(selectedValuationRequest?.id);
                        viewValuationResult.onOpen();
                      }}
                    >
                      View
                    </Button>
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  </>
                )) ||
                (selectedProcessRequest?.status === "Sealed" && (
                  <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                ))}
            </ModalFooter>
          )) ||
          (user.userAuth.roleid === 5 && (
            <ModalFooter justifyContent={"space-around"}>
              {(selectedProcessRequest?.status === "Not resolved yet" && (
                <ZaloChat
                  phone={selectedProcessRequest?.consultingStaffPhone}
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
                    />
                  </>
                )) ||
                (selectedProcessRequest?.status === "Paid" && (
                  <ZaloChat
                    phone={selectedProcessRequest?.consultingStaffPhone}
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
                        fetchValuationResult(selectedValuationRequest?.id);
                      }}
                    >
                      View Result
                    </Button>
                    <ZaloChat
                      phone={selectedProcessRequest?.consultingStaffPhone}
                    />
                  </>
                ))}
            </ModalFooter>
          ))}
      </ModalContent>
    </Modal>
  );
}

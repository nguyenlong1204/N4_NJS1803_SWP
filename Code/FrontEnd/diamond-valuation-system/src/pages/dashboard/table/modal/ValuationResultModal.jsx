import React, { useContext, useRef } from "react";
import { UserContext } from "../../../../components/GlobalContext/AuthContext";
import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GiDiamondTrophy } from "react-icons/gi";

export default function ValuationResultModal({
  viewValuationResult,
  selectedValuationResult,
}) {
  const user = useContext(UserContext);
  return (
    <>
      {(user.userAuth.roleid === 3 && (
        <Modal
          isOpen={viewValuationResult.isOpen}
          onClose={viewValuationResult.onClose}
          size={"full"}
        >
          <ModalOverlay />
          <ModalContent p={5}>
            <ModalHeader>
              <Flex direction={"row"} gap={5}>
                <Icon as={GiDiamondTrophy} w={16} h={16} />
                <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                  DiamondVal
                </Text>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <Flex direction={"column"} gap={2} p={5}>
                <Flex direction={"column"} align={"center"} gap={5}>
                  <Text fontSize={"2xl"}>
                    <strong>Valuation Result ID</strong>:{" "}
                    {selectedValuationResult?.id || "N/A"}
                  </Text>
                </Flex>
                <SimpleGrid columns={2} spacing={10}>
                  <Flex direction={"column"} bg={"blue.100"} gap={5} p={5}>
                    <Text bg={"blue.400"} p={2}>
                      Grading Report
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
                    <Text bg={"blue.400"} p={2}>
                      4C Grading Result
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
                    <Text bg={"blue.400"} p={2}>
                      Additional Grading Information
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
            </ModalBody>
            <ModalFooter justifyContent={"space-around"}>
              <Button onClick={()=>{
                window.print();
              }}>Print</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )) ||
        (user.userAuth.roleid === 5 && (
          <Modal
            isOpen={viewValuationResult.isOpen}
            onClose={viewValuationResult.onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton />
                Valuation Result ID: {selectedValuationResult?.id}
              </ModalHeader>
              <ModalBody>
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
                  <Text>
                    <strong>Price: </strong>
                    {selectedValuationResult?.price}
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
              </ModalBody>
            </ModalContent>
          </Modal>
        ))}
    </>
  );
}

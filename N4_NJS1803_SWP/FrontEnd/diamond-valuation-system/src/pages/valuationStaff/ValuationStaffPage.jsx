import { Search2Icon, ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function ValuationStaffPage() {
  const viewValuationResult = useDisclosure();
  const viewDiamondDetails = useDisclosure();
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
        <InputGroup w={"40vw"}>
          <InputLeftElement pointerEvents={"none"}>
            <Search2Icon color={"gray.300"} />
          </InputLeftElement>
          <Input name="search" placeholder="Search..." />
        </InputGroup>
        <TableContainer whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Valuation Result ID</Th>
                <Th>Created Date</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>VR001</Td>
                <Td>2021-09-01</Td>
                <Td>Pending</Td>
                <Td>
                  <IconButton
                    aria-label="view valuation result"
                    icon={<ViewIcon />}
                    bgColor={"transparent"}
                    onClick={() => {
                      viewValuationResult.onOpen();
                    }}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal
        isOpen={viewValuationResult.isOpen}
        onClose={viewValuationResult.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Valuation Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={3}>
              <Text>
                <strong>Result ID</strong>: 1561341
              </Text>
              <Text>
                <strong>Diamond ID</strong>: 1561341
              </Text>
              <Text>
                <strong>Result Description</strong>:
                <IconButton
                  aria-label="view diamod details"
                  icon={<ViewIcon />}
                  bgColor={"transparent"}
                  onClick={() => {
                    viewDiamondDetails.onOpen();
                  }}
                />
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rhoncus, justo nec ultrices varius, nisl orci ultricies purus,
                nec ultricies metus orci vel nunc. Nulla facilisi. Nullam non
                malesuada elit. Nulla facilisi. Nullam non malesuada elit. Nulla
                facil
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>Created Date: 2021/02/04</ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={viewDiamondDetails.isOpen}
        onClose={viewDiamondDetails.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Diamond Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={3}>
              <Text>
                <strong>Origin</strong>:
              </Text>
              <Input type="text" placeholder="Origin" />
              <Text>
                <strong>Shape</strong>:
              </Text>
              <Input type="text" placeholder="Shape" />
              <Text>Carat Weight</Text>
              <Input type="text" placeholder="Carat Weight" />
              <Text>Color</Text>
              <Input type="text" placeholder="Color" />
              <Text>Clarity</Text>
              <Input type="text" placeholder="Clarity" />
              <Text>Cut</Text>
              <Input type="text" placeholder="Cut" />
              <Text>Measurements</Text>
              <Input type="text" placeholder="Measurements" />
              <Text>Polish</Text>
              <Input type="text" placeholder="Polish" />
              <Text>Symmetry</Text>
              <Input type="text" placeholder="Symmetry" />
              <Text>Fluorescence</Text>
              <Input type="text" placeholder="Fluorescence" />
              <Text>Proportions</Text>
              <Input type="text" placeholder="Proportions" />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

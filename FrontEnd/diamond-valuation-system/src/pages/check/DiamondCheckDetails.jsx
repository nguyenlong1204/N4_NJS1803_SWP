import {
  Badge,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,

} from "@chakra-ui/react";
import React from "react";

export default function DiamondCheckDetails() {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      direction={"row"}
      alignItems="center"
      justifyContent="center"
      w={"99vw"}
      h={"100vh"}
      gap={20}
      bg={bgColor}
    >
      <Image
        src="https://stonealgo.b-cdn.net/img/img_53d827c57a7a0d79f823a43c226fca6b.jpg?width=900&height=900"
        w={"40%"}
        borderRadius={"20px"}
      />

      <Flex direction={"column"} gap={5}>
        <Flex direction={"row"} alignItems={"center"} gap={5}>
          <Text fontSize="xl" fontWeight={"bold"}>
            GIA ID 2474506136
          </Text>
          <Badge colorScheme="green">Natural Diamond</Badge>
        </Flex>
        <Text fontSize="sm" color={"gray"}>
          Valuated Date: 20/05/2024
        </Text>
        <UnorderedList>
          <ListItem>
            Fair Price Estimate:{" "}
            <Text display={"inline"} color={"blue.400"} fontWeight={"bold"}>
              $7178
            </Text>
          </ListItem>
          <ListItem>
            Estimate Range:{" "}
            <Text display={"inline"} color={"blue.400"} fontWeight={"bold"}>
              $5,563 - $8,929
            </Text>
          </ListItem>
        </UnorderedList>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"2px solid"}
          borderColor={"blue.400"}
          borderRadius={"10px"}
          m={"20px 0 20px 0"}
        >
          <Flex direction={"column"} p={4}>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Fair Price
              </Text>
              <Text fontSize="sm" fontWeight={"bold"} color={"blue.400"}>
                $7,178
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Shape
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                Round
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Carat
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                1.14 ct.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} p={4}>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Cut Score
              </Text>
              <Text fontSize="sm" fontWeight={"bold"} color={"blue.400"}>
                9.4
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Color
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                G
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Clarity
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                VS2
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} p={4}>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Origin
              </Text>
              <Text fontSize="sm" fontWeight={"bold"} color={"blue.400"}>
                Natural
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Fluorescence
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                None
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Symmetry
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                Excellent
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} p={4}>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Cert. Lab
              </Text>
              <Text fontSize="sm" fontWeight={"bold"} color={"blue.400"}>
                GIA
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Polish
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                Excellent
              </Text>
            </Flex>
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
                Proportions
              </Text>
              <Text fontSize="sm" fontWeight={"bold"}>
                1.01
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Button colorScheme="blue" size="lg">
          Run another check
        </Button>
      </Flex>
    </Flex>
  );
}

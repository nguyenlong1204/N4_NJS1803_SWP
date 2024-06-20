import {
  Badge,
  Button,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function DiamondCheckDetails() {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      direction={{ base: "column", md: "row", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      height={{ base: "", md: "100vh", lg: "100vh" }}
      gap={{ base: 10, md: 15, lg: 20 }}
      p={10}
      bg={bgColor}
    >
      <LazyLoadImage
        style={{ borderRadius: "20px" }}
        width={{ base: "300px", md: "400px", lg: "500px" }}
        src="https://stonealgo.b-cdn.net/img/img_53d827c57a7a0d79f823a43c226fca6b.jpg?width=900&height=900"
        effect="blur"
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
        <Grid
          templateColumns="repeat(4, 1fr)"
          border={"2px solid"}
          borderRadius={"10px"}
          borderColor={"blue.400"}
          p={5}
          gap={5}
        >
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Price
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              $7,178
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Cut
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              9.4
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Origin
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              Natural
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Measurement
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              Good
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Shape
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              Round
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Color
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              G
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Fluorescence
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              None{" "}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Polish
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              Excellent
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Carat
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              1.14 ct.
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Clarity
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              VS2
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Symmetry
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              Excellent
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Proportions
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              1.01
            </Text>
          </GridItem>
        </Grid>
        <Button colorScheme="blue" size={{ base: "sm", md: "md", lg: "lg" }}>
          Run another check
        </Button>
      </Flex>
    </Flex>
  );
}

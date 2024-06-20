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
import React, { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function DiamondCheckDetails() {
  const location = useLocation();
  const bgColor = useColorModeValue("white", "black");
  const diamondId = location.state?.diamondId;
  const [diamond, setDiamond] = useState({});
  const formattedDate = new Date(diamond?.createdDate).toLocaleDateString();
  const fetchValuatedDiamond = () => {
    axios
      .get(`http://localhost:8081/api/valuated-diamond/get?id=${diamondId}`)
      .then(function (response) {
        // console.log(response.data);
        if (response.data === null) {
        } else {
          setDiamond(response.data);
          console.log(diamond);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchValuatedDiamond();
  }, []);
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
            ID {diamond?.id}
          </Text>
          <Badge colorScheme="green">{diamond?.origin} Diamond</Badge>
        </Flex>
        <Text fontSize="sm" color={"gray"}>
          Valuated Date: {formattedDate}
        </Text>
        <UnorderedList>
          <ListItem>
            Fair Price Estimate:{" "}
            <Text display={"inline"} color={"blue.400"} fontWeight={"bold"}>
              ${diamond?.price}
            </Text>
          </ListItem>
          {/* <ListItem>
            Estimate Range:{" "}
            <Text display={"inline"} color={"blue.400"} fontWeight={"bold"}>
              $5,563 - $8,929
            </Text> 
          </ListItem> */}
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
              ${diamond?.price || "0"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Cut
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.cut || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Origin
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.origin || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Measurement
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.measurements || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Shape
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.shape || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Color
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.color || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Fluorescence
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.fluorescence || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Polish
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.polish || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Carat
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.carat_weight || "0"} ct.
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Clarity
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.clarity || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Symmetry
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.symmetry || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Proportions
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.proportions || "N/A"}
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

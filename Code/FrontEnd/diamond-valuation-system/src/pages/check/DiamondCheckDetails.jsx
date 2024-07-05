import {
  Badge,
  Button,
  Flex,
  Grid,
  GridItem,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
export default function DiamondCheckDetails() {
  const navigate = useNavigate();
  const toast = useToast();
  const { valuationResultId } = useParams();
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });
  const bgColor = useColorModeValue("white", "black");
  const [diamond, setDiamond] = useState({});
  const [diamondImages, setDiamondImages] = useState([]);

  const fetchValuationResult = (id) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/get?id=${id}`
      )
      .then(function (response) {
        if (response.data === null) {
          navigate("/error");
        }
        console.log(response.data);
        setDiamond(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Diamond not found",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const fetchValuatedDiamondImages = (valuationResultId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/image/get?id=${valuationResultId}`
      )
      .then(function (response) {
        console.log(response.data);
        setDiamondImages(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(valuationResultId);
    fetchValuationResult(valuationResultId);
    fetchValuatedDiamondImages(valuationResultId);
    console.log(diamondImages);
  }, []);
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={{ base: "", md: "100vh", lg: "100vh" }}
      gap={5}
      p={10}
      bg={bgColor}
    >
      <SimpleGrid
        columns={{
          lg:
            (diamondImages.length === 1 && 1) ||
            (diamondImages.length === 2 && 2) ||
            Math.ceil(diamondImages.length / 2),
        }}
        spacing={10}
      >
        {diamondImages?.map((image, index) => {
          return (
            <AdvancedImage
              key={index}
              cldImg={cld
                .image(image)
                .resize(thumbnail().width(200).height(200))}
            />
          );
        })}
      </SimpleGrid>
      <Flex direction={"column"} gap={5}>
        <Flex direction={"row"} alignItems={"center"} gap={5}>
          <Text fontSize="xl" fontWeight={"bold"}>
            ID {diamond?.id}
          </Text>
          <Badge colorScheme="green">{diamond?.origin} Diamond</Badge>
        </Flex>
        <Text fontSize="sm" color={"gray"}>
          Valuated Date: {diamond?.createdDate?.slice(0, 10) || "N/A"}
        </Text>
        <UnorderedList>
          <ListItem>
            Fair Price Estimate:{" "}
            <Text display={"inline"} color={"blue.400"} fontWeight={"bold"}>
              ${diamond?.price}
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
              Shape
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.shape || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Carat
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.carat || "0"} ct.
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
              Cut
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.cut || "N/A"}
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
              Polish
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.polish || "N/A"}
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
              Measurement
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.measurements || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Table
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.diamondTable || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Depth
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.depth || "N/A"}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Lenght to Width Ratio
            </Text>
            <Text fontSize="sm" fontWeight={"bold"}>
              {diamond?.lengthToWidthRatio || "N/A"}
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

import {
  Badge,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
  UnorderedList,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import routes from "../../config/Config";
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
  const fontColor = useColorModeValue("black", "white");
  const bgColor1 = useColorModeValue("blue.400", "#DBA843");
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
          setTimeout(() => {
            toast({
              title: "Error",
              description: "Diamond not found",
              position: "top-right",

              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }, 2000);
          setTimeout(() => {
            navigate(routes.diamondCheck);
          }, 3000);
        }
        console.log(response.data);
        setDiamond(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Diamond not found",
          position: "top-right",

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
              plugins={[lazyload(), placeholder({ mode: "blur" })]}
            />
          );
        })}
      </SimpleGrid>
      <Flex direction={"column"} gap={5}>
        <Flex direction={"row"} alignItems={"center"} gap={5}>
          <Skeleton isLoaded={diamond !== null}>
            <Text fontSize="xl" fontWeight={"bold"}>
              ID {diamond?.id}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={diamond !== null}>
            <Badge colorScheme="green">{diamond?.origin} Diamond</Badge>
          </Skeleton>
        </Flex>
        <Skeleton isLoaded={diamond !== null}>
          <Text fontSize="sm" color={"gray"}>
            Valuated Date: {diamond?.createdDate?.slice(0, 10) || "N/A"}
          </Text>
        </Skeleton>
        <UnorderedList>
          <ListItem>
            Fair Price Estimate:{" "}
            <Skeleton isLoaded={diamond !== null}>
              <Text display={"inline"} color={bgColor1} fontWeight={"bold"}>
                ${diamond?.price}
              </Text>
            </Skeleton>
          </ListItem>
        </UnorderedList>
        <Grid
          templateColumns="repeat(4, 1fr)"
          border={"2px solid"}
          borderRadius={"10px"}
          borderColor={bgColor1}
          p={5}
          gap={5}
        >
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Shape
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.shape || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Carat
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.carat || "0"} ct.
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Color
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.color || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Cut
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.cut || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Clarity
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.clarity || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Symmetry
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.symmetry || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Polish
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.polish || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Fluorescence
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.fluorescence || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Measurement
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.measurements || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Table
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.diamondTable || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Depth
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.depth || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Text fontSize="xs" fontWeight={"bold"} color={"gray"}>
              Lenght to Width Ratio
            </Text>
            <Skeleton isLoaded={diamond !== null}>
              <Text fontSize="sm" fontWeight={"bold"}>
                {diamond?.lengthToWidthRatio || "N/A"}
              </Text>
            </Skeleton>
          </GridItem>
        </Grid>
        <Center>
          <Link to={routes.diamondCheck}>
            <Button
              colorScheme="blue"
              size={{ base: "sm", md: "md", lg: "lg" }}
            >
              Run another check
            </Button>
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
}

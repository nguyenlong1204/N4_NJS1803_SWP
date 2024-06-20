import React, { useContext } from "react";
import {
  Image,
  Flex,
  Text,
  Button,
  Box,
  useColorModeValue,
  AspectRatio,
  Container,
  Center,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import routes from "../../config/Config";

export default function Home() {
  const bgColor = useColorModeValue("white", "black");
  return (
    <>
      <Container maxW="100vw">
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          bg={bgColor}
          paddingTop={{ base: 20, md: 10, lg: 2 }}
          alignItems="center"
          gap={10}
        >
          <Flex direction="column" fontWeight="bold">
            <Text
              fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
              align={{ base: "center", md: "left", lg: "left" }}
              color="#4682B4"
            >
              Compare Top-Rated Jewelers & Save
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              mt={4}
              align={{ base: "center", md: "left", lg: "left" }}
              color="#4682B4"
            >
              Navigate the diamond market effortlessly.
            </Text>
            <Center>
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                mt={6}
                align={"center"}
                gap={5}
              >
                <Link to={routes.search}>
                  <Button
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    backgroundColor=" #7B68EE"
                    colorScheme="purple"
                    variant="solid"
                    height="60px"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    borderRadius="15px"
                    leftIcon={<Search2Icon />}
                  >
                    Search all diamonds
                  </Button>
                </Link>
                <Link to={routes.diamondService}>
                  <Button
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    color="#7B68EE"
                    colorScheme="gray"
                    variant="outline"
                    height="60px"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    borderRadius="15px"
                    leftIcon={<IoDiamond />}
                  >
                    Check your diamonds
                  </Button>
                </Link>
              </Flex>
            </Center>
          </Flex>
          <Box w="60%" position={{ base: "", md: "relative", lg: "relative" }}>
            <AspectRatio
              display={{ base: "none", md: "block", lg: "block" }}
              width="100%"
              height="100vh"
              objectFit="cover"
            >
              <video autoPlay loop muted>
                <source
                  src="../videos/diamond-home-video.webm"
                  type="video/mp4"
                />
              </video>
            </AspectRatio>
            <Center>
              <Image
                src="../images/diamond-home-img.webp"
                objectFit="cover"
                position={{ base: "", md: "absolute", lg: "absolute" }}
                top={{ base: "", md: "50%", lg: "50%" }}
                left={{ base: "", md: "8%", lg: "8%" }}
                transform={{
                  base: "",
                  md: "translate(-30%, -50%)",
                  lg: "translate(-30%, -50%)",
                }}
                width={{ base: "150px", md: "200px", lg: "350px" }}
                borderRadius="md"
                boxShadow="2xl"
              />
            </Center>
          </Box>
        </Flex>
        {/* <Grid
          templateColumns="repeat(6, 1fr)"
          gap={2}
          p={2}
          textAlign="center"
          bg={grayColor}
          fontWeight=""
          marginTop={{ base: 14, md: 0, lg: 0 }}
        >
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              2M+
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Diamond Inventory
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              1M+
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Happy Shoppers
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              4.9★
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Trust Pilot Rating
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              10+
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Top-Rated Jewelers
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              750M+
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Historical Diamond Prices
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              5M+
            </Text>
            <Text
              fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
              fontWeight={{ base: "normal", md: "bold", lg: "bold" }}
              color="gray.600"
            >
              Diamond Checks
            </Text>
          </GridItem>
        </Grid> */}

        {/* Diamond Shapes Section */}
        {/* <Container
        maxW="7xl"
        mt={10}
        centerContent
        bg="#7B68EE"
        borderRadius="20px"
        h="35vh"
      >
      <Text fontSize="3xl" fontWeight="bold" mb={5} color="white">
      Search diamonds by shape
        </Text>
        <Grid templateColumns="repeat(10, 1fr)" gap={6}>
        {[
            {
              name: "Round",
              src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_round-alt.svg",
              },
              {
                name: "Cushion",
                src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_cushion-alt.svg",
                },
                {
                  name: "Oval",
                  src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_oval-alt.svg",
                  },
                  {
                    name: "Princess",
                    src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_princess-alt.svg",
                    },
                    {
                      name: "Emerald",
                      src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_emerald-alt.svg",
                      },
            {
              name: "Pear",
              src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_pear-alt.svg",
              },
              {
                name: "Radiant",
                src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_radiant-alt.svg",
                },
            {
              name: "Asscher",
              src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_asscher-alt.svg",
              },
            {
              name: "Marquise",
              src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_marquise-alt.svg",
              },
              {
                name: "Heart",
                src: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_heart-alt.svg",
                },
                ].map((shape, index) => (
            <GridItem key={index} textAlign="center" cursor="pointer">
            <Image
            src={shape.src}
            alt={shape.name}
            boxSize="80px"
            mx="auto"
            />
            <Text mt={2} color="#FFFFF0">
                {shape.name}
              </Text>
              </GridItem>
              ))}
              </Grid>
              </Container> */}
        {/* <Flex direction="row" bg={bgColor}>
          <Flex direction={"column"}>
          <Text>How StoneAlgo helps you buy better</Text>
          <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          >
          <GridItem colSpan={2} bg="papayawhip">
          <Card>
          <CardHeader>Smart Search</CardHeader>
          <CardBody>
          <Text>
          StoneAIgo's Smart Search will help you find the perfect
          diamond from over 2M stones.
          </Text>
          </CardBody>
          </Card>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
          <Card>
          <CardHeader>Check Prices</CardHeader>
          <CardBody>
          <Text>
          Track diamond prices with our historical price charts &
          proprietary diamond price indexes.
          </Text>
          </CardBody>
          </Card>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
          <Card>
          <CardHeader>Check Prices</CardHeader>
          <CardBody>
          <Text>
          Track diamond prices with our historical price charts &
          proprietary diamond price indexes.
          </Text>
          </CardBody>
          </Card>
          </GridItem>
          <GridItem colSpan={2} bg="tomato">
          <Card>
          <CardHeader>Check Prices</CardHeader>
          <CardBody>
          <Text>
          Track diamond prices with our historical price charts &
          proprietary diamond price indexes.
          </Text>
          </CardBody>
          </Card>
          </GridItem>
          </Grid>
          </Flex>
          {/* <Flex direction="column">
          <Card>
          <CardHeader>Check Prices</CardHeader>
          <CardBody>
          <Text>
          Track diamond prices with our historical price charts &
          proprietary diamond price indexes.
          </Text>
          </CardBody>
          <Button>Check Prices</Button>
          </Card>
          </Flex>
          </Flex> */}
      </Container>
    </>
  );
}

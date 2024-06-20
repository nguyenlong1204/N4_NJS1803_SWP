import React from "react";
import {
  Image,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Container,
  Box,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "white");
  const grayColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Flex direction="row" bg={bgColor} p={"10px 0"} alignItems="center">
        <Flex direction="column" bg={bgColor} w="40%" p={20} fontWeight="bold">
          <Text fontSize="5xl" color="#4682B4">
            Compare Top-Rated Jewelers & Save
          </Text>
          <Text fontSize="lg" mt={4} color="#4682B4">
            Navigate the diamond market effortlessly.
          </Text>
          <Flex mt={6}>
            <Button
              backgroundColor=" #7B68EE"
              color="white"
              colorScheme="blue"
              variant="solid"
              mr={4}
              _hover={{ bg: "#6A5ACD" }}
              height="60px"
              fontSize="lg"
              width="50%"
              borderRadius="15px"
            >
              Search all diamonds
            </Button>
            <Button
              color="#7B68EE"
              colorScheme="gray"
              variant="outline"
              height="60px"
              fontSize="lg"
              width="50%"
              borderRadius="15px"
            >
              Check your diamonds
            </Button>
          </Flex>
        </Flex>
        <q></q>
        <Box w="60%" position="relative">
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          >
            <source src="../videos/diamond-home-video.webm" type="video/mp4" />
          </video>
          <Image
            src="../images/diamond-home-img.webp"
            objectFit="cover"
            position="absolute"
            top="50%"
            left="8%"
            transform="translate(-30%, -50%)"
            width={{ base: "150px", md: "200px", lg: "350px" }}
            borderRadius="md"
            boxShadow="2xl"
          />
        </Box>
      </Flex>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={6}
        p={10}
        textAlign="center"
        bg={grayColor}
        fontWeight="bold"
      >
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            2M+
          </Text>
          <Text color="gray.600">Diamond Inventory</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            1M+
          </Text>
          <Text color="gray.600">Happy Shoppers</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            4.9★
          </Text>
          <Text color="gray.600">Trust Pilot Rating</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            10+
          </Text>
          <Text color="gray.600">Top-Rated Jewelers</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            750M+
          </Text>
          <Text color="gray.600">Historical Diamond Prices</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold" color="blue.400">
            5M+
          </Text>
          <Text color="gray.600">Diamond Checks</Text>
        </GridItem>
      </Grid>

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
    </>
  );
}

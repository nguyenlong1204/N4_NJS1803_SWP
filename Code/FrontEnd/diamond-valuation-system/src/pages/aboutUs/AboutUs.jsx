import {
  Button,
  Center,
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Flex direction={"column"} m={"130px 190px 0 190px"} h={"80vh"}>
        <Heading p={"60px 0" } fontSize={"45px"}>About DiamondVal</Heading>
        <Grid
          templateColumns="repeat(4, 1fr)"
          justifyContent={"center"}
          alignContent={"center"}
          fontSize={"18px"}
          color={"gray.600"}
        >
          <GridItem colSpan={2} p={"0 20px 0 0"}>
            <p>
              DiamondVal began as a personal quest to find the right diamond at
              a fair price. Nowadays we're helping our users discover their
              perfect diamond at the lowest price from the top online jewelers.
              Every day we algorithmically search through millions of diamonds
              to find the best deals without compromising on quality.
            </p>
            <br></br>
            <p>
              Our business model is similar to Kayak or SeatGeek: free for you
              (the user), and we make a small fee from the jewelers only if you
              purchase a diamond from their site. We experienced how stressful
              this search process can be firsthand. Our goal is to make your
              search easier and align our interests with yours.
            </p>
          </GridItem>
          <GridItem colSpan={2} p={"0 0 0 15px"}>
            <p>
              DiamondVals is dedicated to providing the best and easiest way to
              find your perfect diamond. If there is anything we can do to make
              your online diamond buying experience better, just let us know.
            </p>
          </GridItem>
        </Grid>
        <br></br>
        <Button w={"100px"} bg={"blue.400"} colorScheme="blue" color={"white"}>
          Say Hello!
        </Button>
      </Flex>
    </>
  );
}

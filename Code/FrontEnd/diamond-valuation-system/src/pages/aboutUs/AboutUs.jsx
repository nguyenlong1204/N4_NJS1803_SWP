import {
  Heading,
  Box,
  Text,
  Flex,
  Center,
  Button,
  useToast,
  useColorModeValue,
  Avatar,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  const toast = useToast();
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black.500", "yellow.500");
  return (

      <Box bgColor={bgColor}>
        <Flex
          position="relative"
          textAlign="center"
          p={0}
          h={"35vh"}
          justifyContent="center"
        >
          <Image
            src="/images/banner/Banner4.png"
            alt="Banner"
            w={"90%"}
            h={"35vh"}
          />
          <Text
            position="absolute"
            top="35%"
            left="50%"
            transform="translate(-50%, -50%)"
            color={fontColor}
            fontSize="60px"
            fontWeight="bold"
            zIndex="1"
          >
            About Diamond Valuation
          </Text>
          <Avatar
            size="4xl"
            top="70%"
            src="/images/Avatar.png"
            position="absolute"
            left="15%"
            zIndex="1"
          />
        </Flex>
        <Center w={"100%"}>
          <Box w={"70%"} m={"40px 10px"} fontSize={"2xl"}>
            <Text>
              DiamondVal began as a personal quest to find the right diamond at
              a fair price. Nowadays we're helping our users discover their
              perfect diamond at the lowest price from the top online jewelers.
              Every day we algorithmically search through millions of diamonds
              to find the best deals without compromising on quality.
            </Text>
            <br />
            <Text>
              Our business model is similar to Kayak or SeatGeek: it's free for
              you (the user) and we only collect a small fee from the services
              for your diamond valuation request. We've experienced firsthand
              how stressful this search process can be. Our goal is to make
              pricing and searching easier for you and to align our interests
              with yours.
            </Text>
            <br />
            <Text>
              DiamondVal is dedicated to providing the best and easiest services
              to value your perfect diamond. If there is anything we can do to
              improve your online diamond valuation experience, please let us
              know.
            </Text>
            <br/>
            <Button
              colorScheme="blue"
              onClick={() => {
                toast({
                  title: "Hello my friend !!!",
                  description: "Thank you for visiting us.",
                  position: "top",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              SAY HI !
            </Button>
          </Box>
        </Center>
      </Box>

  );
}

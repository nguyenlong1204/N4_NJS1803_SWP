import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

export default function FAQs() {
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "white");
  const { colorMode } = useColorMode();
  const overlayColor =
    colorMode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.6)";
  return (
    <Container
      maxW={"100vw"}
      mx="auto"
      h={"100vh"}
      bg={bgColor}
      background={`linear-gradient(${overlayColor}, ${overlayColor}), url("/images/bgFAQ.png")`}
      bgSize="cover"
      bgPosition="center"
    >
      <Center
        fontSize={40}
        fontWeight={"bold"}
        m={"20px 0"}
        p={"20px 0"}
        borderBottom={"2px solid"}
        borderBottomColor={"gray.300"}
      >
        Frequently asked questions{" "}
      </Center>
      <Box w={"80vw"} mx={"auto"} my={0} color={fontColor}>
        <Flex
          p={"20px 0"}
          fontSize={18}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Box w={"40%"} fontWeight="bold">
            Why should I use this technology to find a diamond?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            Using technology to value diamonds improves accuracy, efficiency and
            transparency, providing a competitive advantage in the diamond
            industry. Systems such as DVS, real-time market data integration,
            mobile applications, AI and blockchain technology ensure reliable,
            secure and up-to-date pricing, benefiting both businesses and
            consumers. client.
          </Box>
        </Flex>
        <Flex
          p={"20px 0"}
          fontSize={18}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Box w={"40%"} fontWeight="bold">
            Why are colored diamonds more valuable than colorless diamonds?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            Fancy color diamonds are rare and often have a higher value due to
            their unique color and scarcity. Popular colors like blue, pink, and
            yellow can be very valuable.
          </Box>
        </Flex>
        <Flex
          p={"20px 0"}
          fontSize={18}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Box w={"40%"} fontWeight="bold">
            Are synthetic diamonds worth less than natural diamonds?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            Synthetic (lab-grown) diamonds are often worth less than natural
            diamonds due to differences in origin and rarity. However,
            physically and chemically, they have almost no difference.
          </Box>
        </Flex>
        <Flex
          p={"20px 0"}
          fontSize={18}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Box w={"40%"} fontWeight="bold">
            Why do two diamonds with the same carat, cut, color, and clarity
            have different values?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            Other factors such as a more precise cut, better light reflection,
            or rarity of specific characteristics can affect a diamond's value.
          </Box>
        </Flex>
        <Flex
          p={"20px 0"}
          fontSize={18}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Box w={"40%"} fontWeight="bold">
            Do diamonds increase in value over time?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            Natural diamonds tend to increase in value over time due to rarity
            and market demand. However, this value can also be influenced by
            economic factors and market trends.
          </Box>
        </Flex>
        <Flex m={"20px 0"} fontSize={17}>
          <Box w={"40%"} fontWeight="bold">
            How to preserve diamonds to retain their value?
          </Box>
          <Box w={"60%"} paddingLeft={20}>
            <p>Avoid exposing diamonds to harsh chemicals.</p>
            <p>
              Store diamonds in a separate box to avoid collision with other
              jewelry.
            </p>
            <p>
              Clean diamonds periodically with specialized solution and brush
              gently.
            </p>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

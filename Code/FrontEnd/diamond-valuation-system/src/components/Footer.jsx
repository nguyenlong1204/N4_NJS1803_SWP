import {
  Flex,
  Text,
  Stack,
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import routes from "../config/Config";
import { GiDiamondTrophy } from "react-icons/gi";
import { Icon } from "@chakra-ui/icons";
import {
  FaFacebook,
} from "react-icons/fa";
export default function Footer() {
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "#DBA843");
  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "black")}
        color={fontColor}
        
      >
        <Container as={Stack} maxW={"9xl"}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={10} gap={10}>
            <Stack align={"flex-start"}>
              <Flex direction={"row"} align={"center"}>
                <Icon
                  as={GiDiamondTrophy}
                  w={{ base: 5, md: 8, lg: 10 }}
                  h={{ base: 5, md: 8, lg: 10 }}
                />
                <Text
                  fontFamily={"The Nautigal"}
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight={"bold"}
                  m={"10px "}
                >
                  DiamondVal
                </Text>
              </Flex>
              <Text fontSize={"sm"}>DiamondVal for diamond valuation</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Features
              </Text>
              <Link reloadDocument to={routes.diamondCheck}>
                Diamond Check
              </Link>
              <Link reloadDocument to={routes.diamondCalculate}>
                Valuation
              </Link>
              <Link reloadDocument to={routes.prices}>
                Price
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Mores
              </Text>
              <Link reloadDocument to={routes.educationCarat}>
                Carat
              </Link>
              <Link reloadDocument to={routes.educationCertificate}>
                Diamond Certificate
              </Link>
              <Link reloadDocument to={routes.educationClarity}>
                Clarity
              </Link>
              <Link reloadDocument to={routes.educationColor}>
                Diamond Color
              </Link>
              <Link reloadDocument to={routes.educationCut}>
                Cut
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Company
              </Text>
              <Link reloadDocument to={routes.aboutUs}>
                About us
              </Link>
              <Link reloadDocument to={routes.FAQs}>
                FAQs
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"}>
          <Container
            as={Stack}
            maxW={"9xl"}
            py={4}
            direction={{ base: "column", md: "row", lg: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>Copy right © 2024 DiamondVal. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <FaFacebook />
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

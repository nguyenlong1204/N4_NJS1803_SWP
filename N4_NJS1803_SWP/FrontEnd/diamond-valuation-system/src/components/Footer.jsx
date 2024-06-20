import {
  Flex,
  Text,
  Image,
  Center,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import routes from "../config/Config";
import { GiDiamondTrophy } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Flex
        mt={"20px"}
        bg={"blue.100"}
        height={"25vh"}
        direction={"column"}
        w={"100%"}
      >
        <Flex mt={"30px"} justify={"space-between"} justifyContent={"center"}>
          <GiDiamondTrophy size={30} />
          <Text fontSize={"25px"} fontWeight={"bold"} m={"0 10px"}>
            DiamondVal
          </Text>
          <Flex flex={"1"} justify={"flex-end"} maxW={"55%"}>
            <a
              href="#"
              style={{
                marginLeft: "15px",
                color: "#4267B2",
              }}
            >
              <FaFacebook fontSize={"30px"} />
            </a>
            <a
              href="#"
              style={{
                marginLeft: "15px",
                color: "#fff",
              }}
            >
              <FaTwitter fontSize={"30px"} />
            </a>
            <a href="#" style={{ marginLeft: "15px", color: "#E1306C" }}>
              <FaInstagramSquare fontSize={"30px"} />
            </a>
            <a
              href="#"
              style={{
                marginLeft: "15px",
                color: "#FF0000",
              }}
            >
              <FaYoutube fontSize={"30px"} />
            </a>
          </Flex>
        </Flex>
        <Flex color="gray.700" w={"100%"} justifyContent={"center"} mt={"23px"}>
          <Center w="350px">
            <Stack spacing={1.5} w={"200px"}>
              <Heading fontSize="15px">FEATURES</Heading>
              <Link to={routes.diamondCalculate}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Valuation
                </Text>
              </Link>
              <Link to={routes.diamondCheck}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Diamond Check
                </Text>
              </Link>
              <Link to={routes.search}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Search
                </Text>
              </Link>
              <Link to={routes.prices}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Prices
                </Text>
              </Link>
            </Stack>
          </Center>
          <Center w="350px">
            <Stack spacing={1.5} w={"200px"}>
              <Heading fontSize="15px">MORE</Heading>
              <Link to={routes.educationCertificate}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Diamond Certification
                </Text>
              </Link>
              <Link to={routes.educationCarat}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Cara Weight
                </Text>
              </Link>
              <Link to={routes.educationShape}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Shape
                </Text>
              </Link>
              <Link to={routes.educationShape}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  Diamond Color
                </Text>
              </Link>
            </Stack>
          </Center>
          <Center w="300px" mt={"-51px"}>
            <Stack spacing={1.5}>
              <Heading fontSize="15px">COMPANY</Heading>
              <Link to={routes.aboutUs}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  About
                </Text>
              </Link>
              <Link to={"#"}>
                <Text
                  _hover={{
                    background: "gray.300",
                    borderRadius: "20px",
                    color: "black",
                    p: "0 0.5em",
                  }}
                  display="inline-block"
                >
                  FAQ
                </Text>
              </Link>
              <Link to></Link>
            </Stack>
          </Center>
        </Flex>
      </Flex>
      <Flex
        bg={"blue.100"}
        justifyContent={"center"}
        fontSize={"17px"}
        w={"100%"}
      >
        <Text color={"gray.700"} p={"10px"}>
          Copyright @ Diamond Valuation 2024. All rights reserved.
        </Text>
      </Flex>
    </>
  );
}

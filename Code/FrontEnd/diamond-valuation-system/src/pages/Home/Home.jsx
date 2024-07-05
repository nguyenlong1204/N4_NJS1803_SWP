import React, { useEffect } from "react";
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
    position,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import routes from "../../config/Config";
import { useToast } from '@chakra-ui/react'
export default function Home() {
    const bgColor = useColorModeValue("white", "black");
    const toast = useToast();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const status = searchParams.get("vnp_ResponseCode");
        if (status === "00" && status !== null) {
            toast({
                title: "Payment successful.",
                description: "We will valuate your product soon!",
                status: "success",
                position: "top-right",
                duration: 2000,
                isClosable: true,
            });
        }
        if (status !== "00" && status !== null) {
            toast({
                title: "Payment Failed!.",
                description: "Oohh, Something went wrong!",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
            });
        }
    }, []);
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
                    <Image
                        boxSize={{ base: "100px", md: "120px", lg: "200px" }}
                        position="absolute"
                        top="27%"
                        left="50px"
                        transform="translate(-50%, -50%)"
                        zIndex={1}
                        opacity={0.5}
                        src="https://stonealgo-3.b-cdn.net/static/dist/next/images/blobs-diamond.svg"
                    />
                    <Flex direction="column" fontWeight="bold" zIndex={2}>
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
                                direction={{
                                    base: "column",
                                    md: "row",
                                    lg: "row",
                                }}
                                mt={6}
                                align={"center"}
                                gap={5}
                            >
                                <Link to={routes.search}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        backgroundColor=" #7B68EE"
                                        colorScheme="purple"
                                        variant="solid"
                                        height="60px"
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        borderRadius="15px"
                                        leftIcon={<Search2Icon />}
                                    >
                                        Search all diamonds
                                    </Button>
                                </Link>
                                <Link to={routes.diamondValuationRequest}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        color="#7B68EE"
                                        colorScheme="gray"
                                        variant="outline"
                                        height="60px"
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        borderRadius="15px"
                                        leftIcon={<IoDiamond />}
                                    >
                                        Check your diamonds
                                    </Button>
                                </Link>
                            </Flex>
                        </Center>
                    </Flex>
                    <Box
                        w="60%"
                        position={{ base: "", md: "relative", lg: "relative" }}
                    >
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
                                position={{
                                    base: "",
                                    md: "absolute",
                                    lg: "absolute",
                                }}
                                top={{ base: "", md: "50%", lg: "50%" }}
                                left={{ base: "", md: "8%", lg: "8%" }}
                                transform={{
                                    base: "",
                                    md: "translate(-30%, -50%)",
                                    lg: "translate(-30%, -50%)",
                                }}
                                width={{
                                    base: "150px",
                                    md: "200px",
                                    lg: "350px",
                                }}
                                borderRadius="md"
                                boxShadow="2xl"
                            />
                        </Center>
                    </Box>
                </Flex>
            </Container>
        </>
    );
}

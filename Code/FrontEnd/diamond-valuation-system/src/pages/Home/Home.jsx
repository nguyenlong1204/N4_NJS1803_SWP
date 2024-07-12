import React, { useEffect, useState } from "react";
import {
    Image,
    Flex,
    Text,
    Button,
    Box,
    useColorModeValue,
    Container,
    Center,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import routes from "../../config/Config";
import { useToast } from '@chakra-ui/react';
import InfiniteMovingFeaturedCards from "../../components/CartDiamond/InfiniteMovingFeaturedCards";
import { StarIcon } from "@chakra-ui/icons";

const images = [
    "/images/banner/Banner1.jpg",
    "/images/banner/Banner2.png",
];
const stats = [
    { value: "2M+", label: "Diamond Inventory" },
    { value: "1M+", label: "Happy Shoppers" },
    { value: "4.9 ★", label: "Trust Pilot Rating" },
    { value: "10+", label: "Top-Rated Jewelers" },
    { value: "750M+", label: "Historical Diamond Prices" },
    { value: "5M+", label: "Diamond Checks" }
];
const testimonials = [
    { text: "Highly Recommend DiamondVal. I am VERY grateful to DiamondVal for saving me from a would-be terrible purchase. Highly recommend!", name: "Truong D" },
    { text: "DiamondVal is a Tremendous Resource. The cut score was a terrific way to hone in on the best candidates when faced with the overwhelming number of options available online.", name: "Tuan N" },
    { text: "The Most Beautiful Diamond I’ve Ever Seen! By using the DiamondVal calculator, I was able to find the best cut diamond at the best price. My diamond is breathtaking.", name: "Hung L" },
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const bgColor = useColorModeValue("white", "gray.900");
    const fontColor = useColorModeValue("gray.600", "yellow.200");
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
    }, [toast]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Container maxW="100vw" p={0} bg={useColorModeValue("gray.200", "black")}>
                <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    alignItems="center"
                    justifyContent={currentImage === 0 ? "flex-end" : "flex-start"}
                    width="100%"
                    height={{ base: "50vh", md: "70vh" }}
                    position="relative"
                    transition="background-image 1s ease-in-out"
                    bgColor="black"
                >
                    <Image
                        src={images[currentImage]}
                        alt="Banner Image"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        position="absolute"
                        top={0}
                        left={0}
                        zIndex={1}
                    />
                    <Center
                        zIndex={2}
                        marginRight={currentImage === 0 ? "5%" : "0"}
                        marginLeft={currentImage !== 0 ? "5%" : "0"}
                    >
                        <Flex direction="column" fontWeight="bold" alignItems="center">
                            <Text
                                fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                                align={{ base: "center", md: "left", lg: "left" }}
                                color="#CA901C"
                            >
                                Compare Top-Rated Jewelers & Save
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                mt={4}
                                align={{ base: "center", md: "left", lg: "left" }}
                                color="yellow.100"
                            >
                                Navigate the diamond market effortlessly.
                            </Text>
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
                                <Link to={routes.diamondCheck}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        backgroundColor=" #DBA843"
                                        colorScheme="DBA843"
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
                                        Check your diamonds
                                    </Button>
                                </Link>
                                <Link to={routes.diamondCalculate}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        color="#DBA843"
                                        colorScheme="DBA843"
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
                                        Valuation Your Diamond
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Center>
                </Flex>
                <Flex
                    justify="space-around"
                    align="center"
                    wrap="wrap"
                    borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"}
                    mt={3}
                >
                    {stats.map((stat, index) => (
                        <Box key={index} p={4} textAlign="center">
                            <Text fontSize="2xl" fontWeight="bold" color="teal.500">
                                {stat.value}
                            </Text>
                            <Text fontSize="md" color="gray.600">
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </Flex>
                <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"} >
                    <Flex mt={40} mb={10} fontWeight="bold" justifyContent="center">
                        <Text
                            fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                            color={fontColor}
                        >
                            Diamonds have been valuated
                        </Text>
                    </Flex>
                    <Box >
                        <InfiniteMovingFeaturedCards />
                    </Box>
                </Box>
                <Box mt={10} borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"} p={5}>
                    <Flex mt={10} mb={10} fontWeight="bold" justifyContent="center">
                        <Text
                            fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                            color={fontColor}
                        >
                            Customer Testimonials
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "column", md: "row", lg: "row" }}
                        justify="center"
                        align="center"
                        gap={10}
                        wrap="wrap"
                        mt={5}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Box
                                key={index}
                                p={5}
                                m={2}
                                textAlign="center"
                                boxShadow="lg"
                                borderRadius="md"
                                bg={bgColor}
                                width={{ base: "100%", md: "45%", lg: "20%" }}
                                minHeight="500px"
                                position={"relative"}
                            >
                                <Flex justifyContent="center" mb={5}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} color="teal.500" />
                                    ))}
                                </Flex>
                                <Text fontSize={{ base: "md", md: "2xl" }} color={fontColor}>
                                    {testimonial.text}
                                </Text>
                                <Text fontSize="xl" fontWeight="bold" color="teal.500" mt={3} position={"absolute"} left={"0"} right={"0"} bottom={"12px"} textAlign={"center"} w={"100%"}>
                                    - {testimonial.name}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
                <Box position="relative" width="100%" height={{ base: "200px", md: "300px", lg: "400px" }} mt={5}>
                    <Image
                        src="/images/banner/Banner3.webp"
                        alt="Banner Image"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        filter="blur(0.5px)"
                        position={"absolute"}
                    />
                    <Center
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        color="yellow.400"
                        textAlign="center"
                        flexDirection="column"
                    >
                        <Text fontSize={{ base: "md", md: "2xl", lg: "4xl" }} letterSpacing="widest">
                            WE ARE DIAMONDVAL
                        </Text>
                        <Text fontSize={{ base: "md", md: "2xl", lg: "4xl" }} letterSpacing="widest">
                            WE KNOW HOW TO MAKE YOU SATISFIED WITH OUR SERVICE
                        </Text>
                    </Center>
                </Box>
            </Container>
        </>
    );
}

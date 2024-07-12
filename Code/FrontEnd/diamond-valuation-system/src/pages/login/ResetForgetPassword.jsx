import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    Text,
    useToast,
} from "@chakra-ui/react";
import { GiDiamondTrophy } from "react-icons/gi";
import { resetForgetPassword } from "../../service/ResetForgotPassword";
import { useNavigate, useSearchParams } from "react-router-dom";
import routes from "../../config/Config";
export default function ResetForgetPassword() {
    const [password, setPassword] = useState("");
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState('');
    const toast = useToast();
    const nav = useNavigate();
    useEffect(() => {
        const tokenFromURL = searchParams.get("token");
        if (tokenFromURL) {
            setToken(tokenFromURL);
        }
    }, [searchParams]);
    const handleResetPassword = async () => {
        const result = await resetForgetPassword(token, password);
        if (result !== null) {
            toast({
                title: result,
                status: 'success',
                position:'top-right',
                duration: 3000,
                isClosable: true,
              })
            nav(routes.home)
        }
    };
    return (
        <Box
            w={"100%"}
            height={"100vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box padding={"70px 80px"}>
                <Flex>
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
                <Text fontSize={"3xl"} mb={"40px"} fontWeight={"bold"}>
                    Please enter your new password
                </Text>
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    variant="flushed"
                    placeholder="Password"
                    mb={"24px"}
                />

                <Button
                    onClick={handleResetPassword}
                    colorScheme="blue"
                    mb={"12px"}
                >
                    Send
                </Button>
                <Text
                    fontSize={"xl"}
                    fontFamily={"Playwrite France Traditionnelle"}
                >
                    Stay here and relax! 🍵
                </Text>
            </Box>
        </Box>
    );
}

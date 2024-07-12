import { Box, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GiDiamondTrophy } from "react-icons/gi";
import { activateAccount } from "../../service/ActivateAccount";
export default function Activate() {
    let param = useParams();
    let toast = useToast();
    let nav = useNavigate();
    let searchParams = new URLSearchParams(window.location.search);
    useEffect(() => {
        let code = searchParams.get("code");
        if (!code) {
            code = "";
        } else {
            let check = setInterval(async () => {
                let result = await activateAccount(code);
                if (result != null) {
                    toast({
                        title: result,
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 3000,
                        position: "top-right",
                        isClosable: true,
                    });
                    nav("/");
                    clearInterval(check);
                }
            }, 3000);

            return () => clearInterval(check);
        }
    }, [searchParams, toast, nav]);
    return (
        <Box
            w={"100%"}
            height={"100vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box border={"1px solid #00000036"} padding={"70px 80px"}>
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
                <Text fontSize={"4xl"} mb={"40px"} fontWeight={"bold"}>
                    Almost Done!
                </Text>
                <Text fontSize={"2xl"} mb={"14px"}>
                    We just sent you an email at
                </Text>
                <Text fontSize={"2xl"} mb={"14px"} fontWeight={"bold"}>
                    {param.email}{" "}
                </Text>
                <Text fontSize={"2xl"}>
                    Please check your inbox to validate your account.
                </Text>
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

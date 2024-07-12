import { Box, Button, Flex, Icon, Input, Text, useToast  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GiDiamondTrophy } from "react-icons/gi";
import { forgetPassword } from '../../service/ForgotPassword';
export default function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  const handleResetPassword = async () => {
    const result = await forgetPassword(username, email);
    if (result) {
        toast({
          title: result,
          description: "We've sent you email, check this out!.",
          status: 'success',
          position:'top-right',
          duration: 3000,
          isClosable: true,
        })
    }
    else {
        toast({
            title: result,
            description: "We've sent you email, check this out!.",
            status: 'success',
            position:'top-right',
            duration: 3000,
            isClosable: true,
          })
    }
  }
  return (
    <Box
            w={"100%"}
            height={"80vh"}
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
                <Text fontSize={"3xl"} mb={"40px"} fontWeight={"bold"}>
                    Please enter your username
                </Text>
                <Input onChange={(e) => setUsername(e.target.value)} variant='flushed' placeholder='Username' mb={"24px"}/>
                <Text fontSize={"3xl"} mb={"40px"} fontWeight={"bold"}>
                    Please enter your email
                </Text>
                <Input onChange={(e) => setEmail(e.target.value)} variant='flushed' placeholder='Email' mb={"24px"}/>
                <Text fontSize={"2xl"} mb={"12px"}>
                    We'll email you instructions on how to reset your password
                </Text>
                <Button onClick={handleResetPassword} colorScheme='blue' mb={"12px"}>Send</Button>
                <Text
                    fontSize={"xl"}
                    fontFamily={"Playwrite France Traditionnelle"}
                >
                    Stay here and relax! 🍵
                </Text>
            </Box>
        </Box>
  )
}

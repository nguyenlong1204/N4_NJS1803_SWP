import React from 'react'
import { Flex,Box,Text,VStack,StackDivider } from '@chakra-ui/react'
export default function DashBoardPrices() {
  return (
    <div>
      <Flex>
        <Box
          bg="rgb(67 56 202)"
          w="90%"
          pl={1}
          color="white"
          m={" 0 10px 0 70px"}
        >
          <Text py={3} fontSize="lg" ml={"15px"}>
            PRICE ALERTS
          </Text>
          <VStack
            pl={4}
            background={"rgb(239 246 255)"}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={1}
            align="stretch"
            justifyContent={"center"}
          >
            <Box lineHeight={"40px"} h="40px" color={"#000"}>
              No Price Alerts
            </Box>
            <Box lineHeight={"40px"} h="40px" color={"#000"}>
              No Price Alerts
            </Box>
          </VStack>
        </Box>
      </Flex>
    </div>
  )
}

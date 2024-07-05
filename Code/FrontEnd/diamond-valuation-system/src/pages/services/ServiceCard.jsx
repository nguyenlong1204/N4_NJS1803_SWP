import {
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import routes from "../../config/Config";

export default function ServiceCard({
  serviceId,
  pendingRequestId,
  type,
  price,
  time,
  attributes,
  color,
}) {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async () => {
    try {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/vnpay/create`, {
          params: {
            amount: `${price}`,
            orderInfo: "Thanh toan don hang",
            orderType: "Other",
            serviceId: serviceId,
            customerId: user.userAuth.id,
            pendingRequestId: pendingRequestId,
          },
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then(function (response) {
          const result = response.data;
          window.location.href = result;
          console.log(result);
        });
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  const fetchPaymentResult = async (params) => {
    try {
      await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/vnpay/payment_return`,
        {
          params: params,
        }
      );
    } catch (error) {
      console.error("Error fetching payment result:", error);
    }
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has("vnp_Amount")) {
      const params = {};
      queryParams.forEach((value, key) => {
        params[key] = value;
      });
      // fetchPaymentResult(params);
    }
  }, [location.search]);
  return (
    <Card border={"1px solid"} w={{ base: "70vw", md: "40vw", lg: "20vw" }}>
      <CardHeader align="center">
        <Heading size={"md"} color={`${color}.400`}>
          {type}
        </Heading>
      </CardHeader>
      <Flex direction={"column"} align={"center"}>
        <Text fontSize={"5xl"}>{price}vnd</Text>
        <Text fontSize={"lg"}>
          Valuation time: <strong>{time} days</strong>
        </Text>
      </Flex>
      <CardBody align={"start"}>
        <Text fontSize={"lg"}>We will valuate:</Text>
        <UnorderedList fontSize={"sm"}>
          {attributes.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
      <Center>
        <CardFooter>
          <Button onClick={handleSubmit} colorScheme={color} size={"lg"}>
            Choose
          </Button>
        </CardFooter>
      </Center>
    </Card>
  );
}

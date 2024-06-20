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
import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/Config";

export default function ServiceCard({
    serviceId,
    type,
    price,
    time,
    attributes,
    color,
}) {
  return (
    <Card border={"1px solid"} w={{ base: "70vw", md: "40vw", lg: "20vw" }}>
      <CardHeader align="center">
        <Heading size={"md"} color={`${color}.400`}>
          {type}
        </Heading>
      </CardHeader>
      <Flex direction={"column"} align={"center"}>
        <Text fontSize={"5xl"}>${price}</Text>
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
          <Link
            to={routes.diamondValuationRequest}
            state={{ serviceId: serviceId }}
          >
            <Button colorScheme={color} size={"lg"}>
              Choose
            </Button>
          </Link>
        </CardFooter>
      </Center>
    </Card>
  );
}

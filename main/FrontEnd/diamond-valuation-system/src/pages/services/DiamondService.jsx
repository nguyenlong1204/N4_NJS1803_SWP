import { Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import ServiceCard from "../../components/ServiceCard";
import axios from "axios";

export default function DiamondService() {
  const bgColor = useColorModeValue("white", "black");

  const [serviceResponse, setServiceResponse] = useState([]);
  useEffect(() => {
    fetchServices();
  }, []);
  const serviceColors = ["blue", "red", "yellow"];
  const serviceStatisticNames = [];
  function fetchServices() {
    try {
      axios
        .get("http://localhost:8081/api/diamond/service")
        .then(function (response) {
          setServiceResponse(response.data);
          console.log(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  }
  try {
    for (let i = 0; i < serviceResponse.length; i++) {
      serviceStatisticNames.push(serviceResponse[i].statisticName);
      serviceStatisticNames[i] = serviceStatisticNames[i]
        .split(",")
        .map((item) => item.trim());
    }
  } catch (e) {
    console.log(e);
  }
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={10}
      bg={bgColor}
    >
      <Title
        title={"Choose a valuation service"}
        description={
          "Make a choice of valuation service. The faster the valuation time is, the more expensive the price is."
        }
        width={"80vw"}
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction={{ base: "column", md: "row", lg: "row" }} gap={20}>
        {serviceResponse.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              serviceId={item.id}
              type={item.name.toUpperCase()}
              price={item.price}
              time={item.time}
              attributes={serviceStatisticNames[index]}
              color={serviceColors[index]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

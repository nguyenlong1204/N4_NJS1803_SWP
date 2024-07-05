import { Divider, Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function DiamondService() {
  const bgColor = useColorModeValue("white", "black");
  const location = useLocation();
  console.log(location?.state?.pendingRequestId);
  const [serviceResponse, setServiceResponse] = useState([]);
  useEffect(() => {
    fetchServices();
  }, []);
  const serviceColors = ["blue", "red", "yellow"];
  const serviceStatisticNames = [];
  function fetchServices() {
    try {
      axios
        .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/service/get/all`)
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
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {serviceResponse.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              serviceId={item.id}
              pendingRequestId={location?.state?.pendingRequestId}
              type={item.name.toUpperCase()}
              price={item.price}
              time={item.time}
              attributes={serviceStatisticNames[index]}
              color={serviceColors[index]}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}

import { Divider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import ServiceCard from "../../components/ServiceCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function DiamondService() {
  // const services = useLocation();
  // console.log(services.state);
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
      serviceStatisticNames.push(serviceResponse[i].service_statistic_id.name);
      serviceStatisticNames[i] = serviceStatisticNames[i]
        .split(",")
        .map((item) => item.trim());
    }
  } catch (e) {
    console.log(e);
  }
  console.log(serviceStatisticNames);
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"99vw"}
      m={"50px 0 0 0"}
    >
      <Title
        title={"Choose a valuation service"}
        description={
          "Make a choice of valuation service. The faster the valuation time is, the more expensive the price is."
        }
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction={"row"} gap={20}>
        {serviceResponse.map((item, index) => {
          return (
            <ServiceCard
              key={index}
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

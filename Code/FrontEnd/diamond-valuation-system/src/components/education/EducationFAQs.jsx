import { Text } from "@chakra-ui/react";
import React from "react";

export default function EducationFAQs({ name, content }) {
  return (
    <>
      <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
        {name}
      </Text>
      {content.map((item, index) => (
        <div key={index}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {item.question}
          </Text>
          <Text fontSize={"lg"}>{item.answer}</Text>
        </div>
      ))}
    </>
  );
}

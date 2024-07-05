import { Container, Image, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
export default function ZaloChat({ phone }) {
  const customerZalo = `https://zalo.me/${phone}`;
  return (
    <Link href={customerZalo} isExternal>
      <Container className="zalo-container">
        <Tooltip
          hasArrow
          label="Contact with customer"
          bg="blue.400"
          color="white"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png"
            w={"50px"}
          />
        </Tooltip>
      </Container>
    </Link>
  );
}

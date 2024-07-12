import React, { useState, useEffect } from "react";
import { Flex, Box, Skeleton } from "@chakra-ui/react";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";
import routes from "../../config/Config";
import { Link } from "react-router-dom";
const images = [
  {
    src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
    title1: "Round · 0.35 Carat · D Color",
    title2: "V1 Clarity · Good · Fluor",
    title3: "GIA 2286122135",
  },
  // Add more items as needed
  {
    src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
    title1: "Round · 0.33 Carat · J Color",
    title2: "VS1 Clarity · None · Fluor",
    title3: "GIA 2486742135",
  },
  {
    src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
    title1: "Round · 0.39 Carat · F Color",
    title2: "VS2 Clarity · Very Good · Fluor",
    title3: "GIA 2123742135",
  },
];

const InfiniteMovingFeaturedCards = () => {
  const [valuationResult, setValuationResult] = useState([]);
  const fetchValuationResult = async () => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/get/all?page=${1}`
      )
      .then((response) => {
        setValuationResult(response.data.content);
      });
  };
  useEffect(() => {
    fetchValuationResult();
    console.log(valuationResult);
  }, []);
  return (
    <Box overflow="hidden" whiteSpace="nowrap" maxWidth="70vw" margin="0 auto">
      <Flex
        as="div"
        animation="marquee 20s linear infinite"
        display="inline-flex"
      >
        {images.map((image, index) => (
          <Skeleton key={index} isLoaded={valuationResult.length > 0} noOfLines={3}>
            <Link
              to={routes.diamondCheck + "/" + valuationResult[index]?.id}
              reloadDocument
              key={index}
            >
              <FeaturedCard
                imageSrc={image.src}
                title1={`${valuationResult[index]?.shape} · ${valuationResult[index]?.carat} Carat · ${valuationResult[index]?.color} Color`}
                title2={`${valuationResult[index]?.origin} · ${valuationResult[index]?.clarity} Clarity · ${valuationResult[index]?.cut}`}
                title3={`ID ${valuationResult[index]?.id}`}
              />
            </Link>
          </Skeleton>
        ))}
        {images.map((image, index) => (
          <Skeleton key={index} isLoaded={valuationResult.length > 0} noOfLines={3}>
            <Link
              to={routes.diamondCheck + "/" + valuationResult[index]?.id}
              reloadDocument
              key={index}
            >
              <FeaturedCard
                key={index + images.length}
                imageSrc={image.src}
                title1={`${valuationResult[index]?.shape} · ${valuationResult[index]?.carat} Carat · ${valuationResult[index]?.color} Color`}
                title2={`${valuationResult[index]?.origin} · ${valuationResult[index]?.clarity} Clarity · ${valuationResult[index]?.cut}`}
                title3={`ID ${valuationResult[index]?.id}`}
              />
            </Link>
          </Skeleton>
        ))}
      </Flex>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default InfiniteMovingFeaturedCards;

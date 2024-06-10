import {
  Center,
  Divider,
  Flex,
  FormLabel,
  Text,
  Button,
  Slider,
  SliderTrack,
  SliderThumb,
  Box,
  Badge,
  Tooltip,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoDiamond, IoDiamondOutline } from "react-icons/io5";
import { Link as LinkReactRouterDOM } from "react-router-dom";
import { useEffect, useState } from "react";
import PopoverInfo from "../../components/PopoverInfo";
import GridValue from "../../components/GridValue";
import {
  sliderDiamondValuationGrade,
  sliderDiamondValuationShape,
  sliderDiamondValuationColor,
  sliderDiamondValuationCut,
  sliderDiamondValuationClarity,
} from "../../shared/SharedDiamondValuation";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";

export default function Calculate() {
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "white");
  const toast = useToast();
  const [sliderValue, setSliderValue] = useState();
  const [sliderShowToolTip, setSliderShowToolTip] = useState(false);
  const [gradingLabActiveButtonIndex, setGradingLabActiveButtonIndex] =
    useState(0);
  const [shapeActiveButtonIndex, setShapeActiveButtonIndex] = useState(0);
  const [colorActiveButtonIndex, setColorActiveButtonIndex] = useState(0);
  const [cutActiveButtonIndex, setCutActiveButtonIndex] = useState(0);
  const [clarityActiveButtonIndex, setClarityActiveButtonIndex] = useState(0);

  const [gradingLab, setGradingLab] = useState("AGS");
  const [carat, setCarat] = useState(1);
  const [shape, setShape] = useState("ROUND");
  const [color, setColor] = useState("D");
  const [cut, setCut] = useState("POOR");
  const [clarity, setClarity] = useState("IF");
  const [isResult, setIsResult] = useState(false);
  const [valuationResult, setValuationResult] = useState({
    avg: "0",
    count: "0",
    link: "",
    max: "0",
    min: "0",
    price: "0",
  });
  async function handleSubmit() {
    try {
      if (
        gradingLab === "" ||
        shape === "" ||
        color === "" ||
        cut === "" ||
        clarity === ""
      ) {
        toast({
          title: "Diamond Valuation",
          description: "Please fill all the fields",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      await axios
        .post("http://localhost:8081/api/diamond/calculate", {
          gradingLab: gradingLab,
          carat: carat,
          shape: shape,
          color: color,
          clarity: clarity,
          cut: cut,
        })
        .then(function (response) {
          console.log(response.data.body);
          const test = new DOMParser().parseFromString(
            response.data.body,
            "text/xml"
          );
          const jsonResult = {};
          for (const child of test.querySelector("pr").children) {
            jsonResult[child.tagName.toLowerCase()] = child.textContent;
          }
          if (
            jsonResult.price === "There is no available data for this query."
          ) {
            jsonResult.avg = "No result";
            jsonResult.count = "No result";
            jsonResult.link = "No result";
            jsonResult.max = "No result";
            jsonResult.min = "No result";
            jsonResult.price = "No result";
            setIsResult(false);
            toast({
              title: "Diamond Valuation",
              description: "There is no available data for this query.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          } else {
            setIsResult(true);
            toast({
              title: "Diamond Valuation",
              description: "Diamond has been valuated successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
          setValuationResult(jsonResult);
        });
    } catch (error) {
      toast({
        title: "Diamond Valuation",
        description: "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Error: ", error);
    }
  }
  useEffect(() => {}, []);
  return (
    <>
      <ScrollToTop smooth color="blue"/>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={"99vw"}
        bg={bgColor}
        p={10}
      >
        <Text fontSize="3xl" fontWeight="bold">
          Diamond Price Valuation
        </Text>
        <Text fontSize="xl" fontStyle={"italic"}>
          Use our free diamond price calculator to valuate the current price for
          diamonds.
        </Text>
        <Divider m={"50px 0 50px 0"} />
        {isResult && (
          <Button colorScheme="teal">Receive your valuation result</Button>
        )}
        <Flex direction="row" gap={2}>
          <Center borderRadius={"md"} boxShadow={"xl"} p={4}>
            <Flex direction={"column"} gap={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Calculator Output
              </Text>
              <GridValue
                row={6}
                name={"GRADING LAB"}
                data={sliderDiamondValuationGrade}
                gridValue={gradingLab}
                setGridValue={setGradingLab}
                activeButtonIndex={gradingLabActiveButtonIndex}
                setActiveButtonIndex={setGradingLabActiveButtonIndex}
              />
              <GridValue
                row={6}
                name={"SHAPE"}
                data={sliderDiamondValuationShape}
                gridValue={shape}
                setGridValue={setShape}
                activeButtonIndex={shapeActiveButtonIndex}
                setActiveButtonIndex={setShapeActiveButtonIndex}
              />
              <FormLabel color={"gray"} m={"20px 0 0 0"}>
                CARAT
              </FormLabel>
              <Slider
                aria-label="slider-ex-6"
                defaultValue={1}
                min={0.08}
                max={9.99}
                step={0.01}
                onChange={(val) => {
                  setCarat(val);
                  setSliderValue(val);
                }}
                onMouseEnter={() => setSliderShowToolTip(true)}
                onMouseLeave={() => setSliderShowToolTip(false)}
              >
                <SliderTrack>{/* <SliderFilledTrack /> */}</SliderTrack>
                <Tooltip
                  hasArrow
                  bg={"blue.400"}
                  color={"white"}
                  placement="top"
                  isOpen={sliderShowToolTip}
                  label={sliderValue}
                >
                  <SliderThumb bg={"blue.400"} boxSize={6}>
                    <Box as={IoDiamondOutline} />
                  </SliderThumb>
                </Tooltip>
              </Slider>
              <GridValue
                row={4}
                name={"COLOR"}
                data={sliderDiamondValuationColor}
                gridValue={color}
                setGridValue={setColor}
                activeButtonIndex={colorActiveButtonIndex}
                setActiveButtonIndex={setColorActiveButtonIndex}
              />
              <GridValue
                row={4}
                name={"CUT"}
                data={sliderDiamondValuationCut}
                gridValue={cut}
                setGridValue={setCut}
                activeButtonIndex={cutActiveButtonIndex}
                setActiveButtonIndex={setCutActiveButtonIndex}
              />
              <GridValue
                row={4}
                name={"CLARITY"}
                data={sliderDiamondValuationClarity}
                gridValue={clarity}
                setGridValue={setClarity}
                activeButtonIndex={clarityActiveButtonIndex}
                setActiveButtonIndex={setClarityActiveButtonIndex}
              />
              <Button
                borderRadius={"md"}
                colorScheme="blue"
                w={"inherit"}
                m={"10px 0 0 0"}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Flex>
          </Center>
          <Flex direction={"column"} p={4} gap={5}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Calculator Output
            </Text>
            <Box borderRadius={"md"} boxShadow={"xl"} p={4}>
              <Flex direction={"column"} alignItems={"center"} gap={5}>
                <PopoverInfo
                  content={"$" + valuationResult.price || "No result"}
                  header={"Real Time Price"}
                  body={"Current Average Price in USD / carat"}
                  contentFontSize={"6xl"}
                  headerFontSize={"xl"}
                  headerColor={"black"}
                />
                <Text fontSize={"sm"} color={"gray"}>
                  {shape} {carat} ct. {color} {clarity}
                </Text>
                <Badge colorScheme="green" borderRadius={"md"}>
                  {gradingLab} Diamond
                </Badge>
                <Flex direction={"row"} gap={20}>
                  <PopoverInfo
                    content={"$" + valuationResult.min || "No result"}
                    header={"Min"}
                    body={"Average of lowest 10% asking price in USD / carat"}
                    contentFontSize={"sm"}
                    headerFontSize={"sm"}
                    headerColor={"gray"}
                  />
                  <PopoverInfo
                    content={"$" + valuationResult.avg || "No result"}
                    header={"Average"}
                    body={
                      "Average asking price of the last 3 months in USD / carat"
                    }
                    contentFontSize={"sm"}
                    headerFontSize={"sm"}
                    headerColor={"gray"}
                  />
                  <PopoverInfo
                    content={"$" + valuationResult.max || "No result"}
                    header={"Max"}
                    body={"Average of 10% highest asking price in USD / carat"}
                    contentFontSize={"sm"}
                    headerFontSize={"sm"}
                    headerColor={"gray"}
                  />
                </Flex>
              </Flex>
            </Box>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              Don't know your diamond's value?
            </Text>
            <Flex dir="row" gap={2} alignItems={"center"}>
              <Text fontSize={"xl"} color={"gray"}>
                Contact with our experts to get a valuation
              </Text>
              <LinkReactRouterDOM to={"/diamond-service"}>
                <Button leftIcon={<IoDiamond />} colorScheme="blue">
                  Valuate Diamond
                </Button>
              </LinkReactRouterDOM>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

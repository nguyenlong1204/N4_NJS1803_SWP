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
  useDisclosure,
  Container,
  useBreakpointValue,
  Grid,
  SimpleGrid,
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
import SendEmailModal from "../../components/SendEmailModal";

export default function Calculate() {
  const bgColor = useColorModeValue("white", "black");
  const toast = useToast();

  const sendEmailModal = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
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
              status: "warning",
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
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {}, []);

  return (
    <>
      <ScrollToTop smooth />
      <Container maxW={"9xl"}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg={bgColor}
          paddingTop={10}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
          >
            Diamond Price Valuation
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            fontStyle={"italic"}
          >
            Use our free diamond price calculator to valuate the current price
            for diamonds.
          </Text>
          <Divider m={"50px 0 50px 0"} />
          {isResult && (
            <Button
              colorScheme="teal"
              onClick={() => {
                sendEmailModal.onOpen();
              }}
            >
              Receive your valuation result
            </Button>
          )}
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={5}>
            <Center borderRadius={"md"} boxShadow={"xl"} p={4}>
              <Flex direction={"column"} gap={5}>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight={"bold"}
                >
                  Calculator Input
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 1 }} gap={5}>
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
                </SimpleGrid>
                <Flex direction={"column"}>
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
                </Flex>
                <Button
                  borderRadius={"md"}
                  colorScheme="blue"
                  w={"inherit"}
                  m={"10px 0 0 0"}
                  isLoading={isLoading}
                  onClick={handleSubmit}
                >
                  SUBMIT
                </Button>
              </Flex>
            </Center>
            <Flex direction={"column"} p={4} gap={5}>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                fontWeight={"bold"}
              >
                Calculator Output
              </Text>
              <Box
                borderRadius={"md"}
                style={{
                  boxShadow: `0px 0px 5px 0px gray`,
                  backdropFilter: "blur(2px)",
                }}
                p={4}
              >
                <Flex direction={"column"} alignItems={"center"} gap={5}>
                  <PopoverInfo
                    content={"$" + valuationResult.price || "No result"}
                    header={"Real Time Price"}
                    body={"Current Average Price in USD / carat"}
                  />
                  <Text fontSize={"sm"} color={"gray"}>
                    {shape} {carat} ct. {color} {clarity}
                  </Text>
                  <Badge colorScheme="green" borderRadius={"md"}>
                    {gradingLab} Diamond
                  </Badge>
                  <SimpleGrid
                    columns={{ base: 1, md: 1, lg: 3 }}
                    gap={{ base: 5, md: 10, lg: 20 }}
                  >
                    <PopoverInfo
                      content={"$" + valuationResult.min || "No result"}
                      header={"Min"}
                      body={"Average of lowest 10% asking price in USD / carat"}
                    />
                    <PopoverInfo
                      content={"$" + valuationResult.avg || "No result"}
                      header={"Average"}
                      body={
                        "Average asking price of the last 3 months in USD / carat"
                      }
                    />
                    <PopoverInfo
                      content={"$" + valuationResult.max || "No result"}
                      header={"Max"}
                      body={
                        "Average of 10% highest asking price in USD / carat"
                      }
                    />
                  </SimpleGrid>
                </Flex>
              </Box>
              <Text
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight={"bold"}
              >
                Don't know your diamond's value?
              </Text>
              <SimpleGrid
                columns={{ base: 1, md: 1, lg: 2 }}
                gap={5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color={"gray"}
                >
                  Contact with our experts to get a valuation
                </Text>
                <Center>
                  <LinkReactRouterDOM to={"/diamond-service"}>
                    <Button leftIcon={<IoDiamond />} colorScheme="blue">
                      Valuate Diamond
                    </Button>
                  </LinkReactRouterDOM>
                </Center>
              </SimpleGrid>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Container>
      <SendEmailModal
        sendEmailModal={sendEmailModal}
        message={`Diamond Attribute: \n
        Grading Lab: ${gradingLab} \n
        Carat: ${carat} \n
        Shape: ${shape} \n
        Color: ${color} \n
        Cut: ${cut} \n
        Clarity: ${clarity} \n
        Diamond Price:\n
        Real Time Price: ${valuationResult.price}$ \n
        Min: ${valuationResult.min}$ \n
        Avg: ${valuationResult.avg}$ \n
        Max: ${valuationResult.max}$ \n`}
      />
    </>
  );
}

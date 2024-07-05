import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Box,
    Grid,
    GridItem,
    Flex,
    Image,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    UnorderedList,
    ListItem,
    Skeleton,
    SkeletonText,
    Container,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { naturalDiamond } from "../../../service/Price";
import { RxExternalLink } from "react-icons/rx";
const tabs = [
    {
        shape: "Round",
        api: "round",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_round.svg?height=32&width=32",
    },
    {
        shape: "Oval",
        api: "oval",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_oval.svg?height=32&width=32",
    },
    {
        shape: "Princess",
        api: "princess",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_princess.svg?height=32&width=32",
    },
    {
        shape: "Emerald",
        api: "emerald",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_emerald.svg?height=32&width=32",
    },
    {
        shape: "Cushion",
        api: "cushion",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_cushion.svg?height=32&width=32",
    },
    {
        shape: "Radiant",
        api: "radiant",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_radiant.svg?height=32&width=32",
    },
    {
        shape: "Pear",
        api: "pear",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_pear.svg?height=32&width=32",
    },
    {
        shape: "Heart",
        api: "heart",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_heart.svg?height=32&width=32",
    },
    {
        shape: "Marquise",
        api: "marquise",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_marquise.svg?height=32&width=32",
    },
    {
        shape: "Asscher",
        api: "asscher",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_asscher.svg?height=32&width=32",
    },
];
export default function Natural() {
    const bgColor = useColorModeValue("white", "gray.800");
    const [price, setPrice] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const result = await naturalDiamond("");
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const shape = tabs[selectedTab].api;
                const result = await naturalDiamond(shape);
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchApi();
    }, [selectedTab]);
    return (
        <Container maxW="100vw">
            <Tabs
                variant="unstyled"
                onChange={(index) => setSelectedTab(index)}
            >
                <TabList justifyContent={"center"}>
                    <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={4}>
                        {tabs &&
                            tabs.map((tab, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        _selected={{
                                            color: "black",
                                            bg: "rgb(224 231 255)",
                                            border: 0,
                                        }}
                                    >
                                        <Flex
                                            flexDirection={"column"}
                                            alignItems={"center"}
                                        >
                                            <Image
                                                src={tab.img}
                                                w={"32px"}
                                                h={"32px"}
                                            />
                                            {tab.shape}
                                        </Flex>
                                    </Tab>
                                );
                            })}
                    </SimpleGrid>
                </TabList>
                <TabPanels>
                    {tabs.map((tab, index) => (
                        <TabPanel key={index}>
                            <Box ml={5}>In the past month</Box>
                            {isLoading ? (
                                <GridItem w="30%" my={"30px"}>
                                    <SkeletonText
                                        noOfLines={2}
                                        spacing="4"
                                        skeletonHeight="2"
                                    />
                                </GridItem>
                            ) : (
                                <Text
                                    fontSize={"18px"}
                                    ml={5}
                                    my={4}
                                    fontWeight={"bold"}
                                >
                                    Diamond prices{" "}
                                    {price.slice(18).map((price) => price.title)}
                                </Text>
                            )}
                            <Grid
                                templateColumns={{
                                    base: "repeat(1, 1fr)",
                                    md: "repeat(2, 1fr)",
                                    lg: "repeat(4, 1fr)",
                                }}
                                gap={4}
                                mx={5}
                            >
                                {isLoading
                                    ? Array(4)
                                          .fill("")
                                          .map((_, index) => (
                                              <GridItem key={index} w="100%">
                                                  <SkeletonText
                                                      noOfLines={4}
                                                      spacing="4"
                                                      skeletonHeight="2"
                                                  />
                                              </GridItem>
                                          ))
                                    : price.slice(0, 4).map((priceItem, index) => (
                                              <GridItem
                                                  key={index}
                                                  w="100%"
                                                  bg="#fff"
                                              >
                                                  <Box
                                                      padding={5}
                                                      border={"1px solid"}
                                                      borderColor={"gray.100"}
                                                      bg={bgColor}
                                                  >
                                                      <Flex
                                                          padding={5}
                                                          justifyContent={
                                                              "space-between"
                                                          }
                                                      >
                                                          <div>
                                                              <Text
                                                                  fontWeight={
                                                                      "bold"
                                                                  }
                                                                  fontSize={
                                                                      "15px"
                                                                  }
                                                              >
                                                                  {
                                                                      priceItem.name
                                                                  }
                                                              </Text>
                                                              <Text
                                                                  ml={3}
                                                                  fontSize={
                                                                      "12px"
                                                                  }
                                                                  color={
                                                                      parseFloat(
                                                                          priceItem.priceChange
                                                                      ) < 0
                                                                          ? "red"
                                                                          : "green"
                                                                  }
                                                              >
                                                                  {
                                                                      priceItem.priceChange
                                                                  }{" "}
                                                                  (1m)
                                                              </Text>
                                                          </div>
                                                          <div>
                                                              <Text>
                                                                  {
                                                                      priceItem.price
                                                                  }
                                                              </Text>
                                                              <Text>
                                                                  <RxExternalLink color="blue" />
                                                              </Text>
                                                          </div>
                                                      </Flex>
                                                      <Flex>
                                                          <Image
                                                              src={
                                                                  priceItem.imageUrl
                                                              }
                                                              alt="Price Image"
                                                          />
                                                      </Flex>
                                                      <Flex
                                                          pt={3}
                                                          justifyContent={
                                                              "space-between"
                                                          }
                                                          align={"center"}
                                                      >
                                                          <div>
                                                              <Text
                                                                  fontSize={{
                                                                      base: "xs",
                                                                      md: "sm",
                                                                      lg: "md",
                                                                  }}
                                                              >
                                                                  Weight
                                                              </Text>
                                                              <Text>
                                                                  {
                                                                      priceItem.weight
                                                                  }
                                                              </Text>
                                                          </div>
                                                          <div>
                                                              <Text
                                                                  fontSize={{
                                                                      base: "xs",
                                                                      md: "sm",
                                                                      lg: "md",
                                                                  }}
                                                              >
                                                                  Inventory
                                                              </Text>
                                                              <Text>
                                                                  {
                                                                      priceItem.inventory
                                                                  }
                                                              </Text>
                                                          </div>
                                                          <div>
                                                              <Text
                                                                  fontSize={{
                                                                      base: "xs",
                                                                      md: "sm",
                                                                      lg: "md",
                                                                  }}
                                                              >
                                                                  Inv. Change
                                                              </Text>
                                                              <Text>
                                                                {
                                                                    priceItem.inventoryChangeDown === "" ? 
                                                                    (
                                                                        <span>↑{priceItem.inventoryChangeUp}</span>
                                                                    ) : 
                                                                    (
                                                                        <span>↓{priceItem.inventoryChangeDown}</span>
                                                                    )
                                                                }
                                                              </Text>
                                                          </div>
                                                      </Flex>
                                                  </Box>
                                              </GridItem>
                                          ))}
                            </Grid>
                            <TableContainer mt={"80px"} whiteSpace={"wrap"}>
                                <Text fontWeight={"bold"}>
                                    Explore Diamond Price
                                </Text>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>Price index</Th>
                                            <Th>Chart</Th>
                                            <Th>Price (USD)</Th>
                                            <Th>% Change (1m)</Th>
                                            <Th>Range (1m)</Th>
                                            <Th>Inventory</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {isLoading
                                            ? Array(5)
                                                  .fill("")
                                                  .map((_, i) => (
                                                      <Tr key={i}>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                          <Td>
                                                              <Skeleton height="20px" />
                                                          </Td>
                                                      </Tr>
                                                  ))
                                            : price.slice(4,18).map((priceItem, i) => (
                                                      <Tr key={i}>
                                                          <Td>
                                                              {
                                                                  priceItem.priceIndex
                                                              }
                                                          </Td>
                                                          <Td>
                                                              <Image
                                                                  src={
                                                                      priceItem.chart
                                                                  }
                                                              />
                                                          </Td>
                                                          <Td>
                                                              {
                                                                  priceItem.priceUsd
                                                              }
                                                          </Td>
                                                          <Td>
                                                              <Text
                                                                  ml={3}
                                                                  fontSize={
                                                                      "12px"
                                                                  }
                                                                  color={
                                                                    (priceItem.changeDown === "") ?
                                                                    "green" : 
                                                                    "red"
                                                                  }
                                                              >
                                                                  {
                                                                      (priceItem.changeDown === "") ?
                                                                      priceItem.changeUp : 
                                                                      priceItem.changeDown
                                                                  }{" "}
                                                                  (1m)
                                                              </Text>
                                                          </Td>
                                                          <Td>
                                                              {priceItem.range}
                                                          </Td>
                                                          <Td>
                                                              {priceItem.inv}
                                                          </Td>
                                                          <Td>
                                                              <Button colorScheme="blue">
                                                                  View price
                                                                  charts
                                                              </Button>
                                                          </Td>
                                                      </Tr>
                                                  ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    ))}
                </TabPanels>
                <Flex mt={5} wordBreak={"break-word"}>
                    <Grid
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(1, 1fr)",
                            lg: "repeat(2, 1fr)",
                        }}
                    >
                        <GridItem w={"100%"}>
                            <Flex direction={"column"} gap={5}>
                                <Text
                                    fontSize={{
                                        base: "2xl",
                                        md: "3xl",
                                        lg: "4xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Diamond Prices
                                </Text>
                                <Text>
                                    The price of diamonds changes daily.
                                    StoneAlgo tracks daily diamond price data
                                    from a variety of online jewelers to help
                                    our users better understand how much a
                                    diamond costs today and how that price
                                    stacks up to historical prices for the same
                                    type of diamond. Here are some of the key
                                    features we offer to help guide you on your
                                    diamond journey.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Diamond Price History Charts
                                </Text>
                                <Text>
                                    Diamond price charts show the price trend
                                    for a specific diamond category over time.
                                    For instance, if you click “1 carat diamond
                                    prices” you’ll see a historical price chart
                                    and performance sourced from diamond data in
                                    our extensive database for all diamonds that
                                    match this carat weight. If you want to get
                                    more specific and view all Round 1 Carat
                                    diamonds, simply click on that link or use
                                    the search to show data specific to those
                                    criteria. Navigating these different
                                    categories (diamond indices) can help you
                                    better understand diamond valuation and
                                    price trends for diamonds with different
                                    characteristics.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Diamond Price List
                                </Text>
                                <Text>
                                    Our diamond price list formats are an easy
                                    way to compare price, performance, and
                                    popularity across multiple diamond indices
                                    at a glance. We'd recommend drilling down
                                    into more specific diamond indices where you
                                    can see pricing information and trends for
                                    specific diamonds on the market as well as
                                    comparisons to other popular indices (e.g.
                                    S&P 500, Gold prices). This will also allow
                                    you to search the best available diamonds on
                                    our platform that match your search
                                    criteria. These diamond price lists give you
                                    a quick snapshot but you can see even more
                                    diamond options in our diamond search
                                    engine.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Diamond Engagement Ring Guides
                                </Text>
                                <Text>
                                    For even more in-depth advice on how to pick
                                    out the perfect diamond, regardless of
                                    shape, engagement ring setting style, or
                                    earring style, check out our most popular
                                    diamond pricing guides
                                </Text>
                                <UnorderedList spacing={5}>
                                    <ListItem textDecoration={"underline"}>
                                        1 Carat Diamond Ring Guide
                                    </ListItem>
                                    <ListItem textDecoration={"underline"}>
                                        1.5 Carat Diamond Ring Guide
                                    </ListItem>
                                    <ListItem textDecoration={"underline"}>
                                        2 Carat Diamond Ring Guide
                                    </ListItem>
                                    <ListItem textDecoration={"underline"}>
                                        2.5 Carat Diamond Ring Guide
                                    </ListItem>
                                    <ListItem textDecoration={"underline"}>
                                        3 Carat Diamond Ring Guide
                                    </ListItem>
                                    <ListItem textDecoration={"underline"}>
                                        4 Carat Diamond Ring Guide
                                    </ListItem>
                                </UnorderedList>
                                <Text
                                    fontSize={{
                                        base: "2xl",
                                        md: "3xl",
                                        lg: "4xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Frequently Asked Questions
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    How are diamonds priced?
                                </Text>
                                <Text>
                                    Diamonds are priced by diamond dealers based
                                    on the market for similar diamonds of the
                                    same shape, color, clarity, and other key
                                    characteristics. Most jewelry professionals
                                    discuss diamond prices in terms of price per
                                    carat and then calculate the diamonds final
                                    price by multiplying price-per-carat by
                                    carat weight to solve the diamond’s final
                                    price.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    How much does a diamond cost?
                                </Text>
                                <Text>
                                    Diamond prices vary significantly based on
                                    the diamond’s shape, color, clarity, carat
                                    weight, fluorescence, polish, symmetry, and
                                    other important factors. For example, an
                                    expensive 1 carat D color IF clarity diamond
                                    can cost over $20,000 while a 1 carat K
                                    color SI2 clarity diamond currently costs
                                    closer to $2,500. Most shocking though is
                                    that many people would have a hard time
                                    telling the difference between these two
                                    diamonds, especially when they are set in an
                                    engagement ring setting or diamond stud
                                    earrings.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    How much are diamonds worth?
                                </Text>
                                <Text>
                                    Diamonds are more valuable than just about
                                    any other naturally occurring mineral based
                                    on weight, particularly jewelry quality
                                    diamonds like those in the colorless, near
                                    colorless, and faint colored diamond color
                                    grade ranges. A gram of gold is currently
                                    worth less than $100, while 1 gram of
                                    diamond would equate to a 5 carat stone
                                    which could be priced at over $400,000.
                                </Text>
                                <Text>
                                    While they are expensive, diamonds are not
                                    considered a good investment since most
                                    jewelers and websites will only offer about
                                    50% of the original price for a diamond on
                                    the resale market. Recycled diamonds are
                                    becoming more popular and offer a great,
                                    sustainable alternative to lab grown
                                    diamonds.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    How much do lab grown diamonds cost?
                                </Text>
                                <Text>
                                    In general, lab grown diamonds cost about
                                    67% less than natural diamonds. This price
                                    relationship changes over time along with
                                    changing consumer sentiments over natural
                                    and lab grown diamonds but generally
                                    speaking lab grown diamonds have always been
                                    far less expensive than natural diamonds
                                    despite being chemically identical and
                                    physically indifferentiable.
                                </Text>
                                <Text>
                                    Some consumers unfairly ask the difference
                                    in price between real diamonds and fake
                                    diamonds, but it is generally understood now
                                    that due to their physical composition lab
                                    grown diamonds are very much “real diamonds”
                                    despite being manufactured in a lab.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    What is diamond price per carat?
                                </Text>
                                <Text>
                                    Diamond price per carat is the pricing
                                    methodology that jewelers and diamond
                                    dealers use to discuss diamond prices in the
                                    same way that real estate agents talk about
                                    home prices in terms of “price per square
                                    foot”. To calculate a diamond’s price per
                                    carat, simply divide the total price by the
                                    number of carats. For example, if a 2 carat
                                    diamond costs $20,000 then the price per
                                    carat for that diamond is $10,000 per carat.
                                </Text>
                                <Text
                                    fontSize={{
                                        base: "lg",
                                        md: "xl",
                                        lg: "2xl",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    Have further questions?
                                </Text>
                                <Text>
                                    Feel free to chat us or drop us a line at
                                    management@stonealgo.com
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem w={"100%"}>
                            <Box
                                position={{
                                    base: "",
                                    md: "sticky",
                                    lg: "sticky",
                                }}
                                top={"70px"}
                            >
                                <TableContainer whiteSpace={"wrap"}>
                                    <Table size={"sm"}>
                                        <Thead>
                                            <Tr>
                                                <Th>Price index</Th>
                                                <Th>Chart</Th>
                                                <Th>Price (USD)</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {price.slice(4).map((priceItem, i) => (
                                                    <Tr key={i}>
                                                        <Td>
                                                            {
                                                                priceItem.priceIndex
                                                            }
                                                        </Td>
                                                        <Td>
                                                            <Image
                                                                src={
                                                                    priceItem.chart
                                                                }
                                                            />
                                                        </Td>
                                                        <Td>
                                                            {priceItem.priceUsd}
                                                        </Td>
                                                    </Tr>
                                                ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </GridItem>
                    </Grid>
                </Flex>
            </Tabs>
        </Container>
    );
}

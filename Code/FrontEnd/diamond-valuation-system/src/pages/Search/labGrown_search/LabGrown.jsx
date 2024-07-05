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
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Input,
    Icon,
    Checkbox,
    CheckboxGroup,
    Switch,
    List,
} from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from "react";
import { labGrownDiamond } from "../../../service/Price";
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
    const [priceRange, setPriceRange] = useState([200, 1500000]);
    const [caratRange, setCaratRange] = useState([0.3, 10]);
    const [colorRange, setColorRange] = useState(['J', 'D']); // Mảng chứa các màu tương ứng từ 'J' đến 'D'

    // Hàm xử lý sự kiện khi slider thay đổi giá trị
    const handleSliderChange = (newColorRange) => {
        setColorRange(newColorRange);
    };
    const [clarityRange, setClarityRange] = useState(['SI2', 'FL']); // Mảng chứa các màu tương ứng từ 'J' đến 'D'

    // Hàm xử lý sự kiện khi slider thay đổi giá trị
    const handleSliderClarityChange = (newClarityRange) => {
        setClarityRange(newClarityRange);
    };

    const [isCheckedAll, setIsCheckedAll] = useState(true); // Trạng thái của Switch
    const [isChecked, setIsChecked] = useState({
        none: true,
        faint: true,
        medium: true,
        strong: true,
        veryStrong: true,
        excellent: true,
        veryGood: true,
        good: true,
        fair: true,
        poor: true,
        adiamor: true,
        allurez: true,
        brilliance: true,
        danielWilliam: true,
        dreamStone: true,
        friendlyDiamonds: true,
        rockHer: true,
        whiteflash: true,
        withClarity: true,
    }); // Trạng thái của các Checkbox

    // Xử lý sự kiện khi Switch thay đổi
    const handleSwitchChange = () => {
        const newIsCheckedAll = !isCheckedAll;
        setIsCheckedAll(newIsCheckedAll);
        setIsChecked({
            none: newIsCheckedAll,
            faint: newIsCheckedAll,
            medium: newIsCheckedAll,
            strong: newIsCheckedAll,
            veryStrong: newIsCheckedAll,
            excellent: newIsCheckedAll,
            veryGood: newIsCheckedAll,
            good: newIsCheckedAll,
            fair: newIsCheckedAll,
            poor: newIsCheckedAll,
            adiamor: newIsCheckedAll,
            allurez: newIsCheckedAll,
            brilliance: newIsCheckedAll,
            danielWilliam: newIsCheckedAll,
            dreamStone: newIsCheckedAll,
            friendlyDiamonds: newIsCheckedAll,
            rockHer: newIsCheckedAll,
            whiteflash: newIsCheckedAll,
            withClarity: newIsCheckedAll,
        });
    };

    // Xử lý sự kiện khi Checkbox thay đổi
    const handleCheckboxChange = (key) => {
        const newIsChecked = { ...isChecked, [key]: !isChecked[key] };
        setIsChecked(newIsChecked);
        const allChecked = Object.values(newIsChecked).every(value => value);
        setIsCheckedAll(allChecked);
    };

    const [ratioRange, setRatioRange] = useState([0, 3]);
    const [tableRange, setTableRange] = useState([0, 100]);
    const [depthRange, setDepthRange] = useState([0, 100]);
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const result = await labGrownDiamond("");
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
                const result = await labGrownDiamond(shape);
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
                <Flex
                direction={"column"}
                alignItems="center"
                justifyContent="center"
        
        p={{ base: 10, md: 15, lg: 20 }}
                gap={10}>
<Flex flexWrap="wrap"
                    gap={5}
                    justifyContent={{ base: 'center', md: '250px' }} >

                    <Popover >
                        <PopoverTrigger>
                            <Button
                                border="1px solid"
                                borderColor="gray.300"
                                width={{ base: '100%', md: '250px' }}
                                height="50px"
                                justifyContent="left">{`$${priceRange[0]} - $${priceRange[1]}`}
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody justifyContent="space-between" height="100%" px="50px">
                                <Text as='b'>Price</Text>
                                <RangeSlider
                                    defaultValue={[200, 1500000]}
                                    min={200}
                                    max={1500000}
                                    step={50}
                                    onChangeEnd={(val) => setPriceRange(val)}
                                    value={priceRange}
                                    onChange={(val) => setPriceRange(val)}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum</Text>
                                        <Input
                                            value={priceRange[0]}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), priceRange[1]);
                                                setPriceRange([value, priceRange[1]]);
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Text>Maximum</Text>
                                        <Input
                                            value={priceRange[1]}
                                            onChange={(e) => {
                                                const value = Math.max(Number(e.target.value), priceRange[0]);
                                                setPriceRange([priceRange[0], value]);
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button
                                border="1px solid"
                                borderColor="gray.300"
                                width={{ base: '100%', md: '250px' }}
                                height="50px"
                                justifyContent="left">{`${caratRange[0]} - ${caratRange[1]} carat`}
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="50px">
                                <Text as='b'>Carat</Text>
                                <RangeSlider
                                    defaultValue={[0.3, 10]}
                                    min={0.3}
                                    max={10}
                                    step={0.01}
                                    onChangeEnd={(val) => setCaratRange(val)}
                                    value={caratRange}
                                    onChange={(val) => setCaratRange(val)}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum</Text>
                                        <Input
                                            value={caratRange[0]}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), caratRange[1]);
                                                setCaratRange([value, caratRange[1]]);
                                            }}
                                        />
                                    </Box>
                                    <span >-</span>
                                    <Box>
                                        <Text>Maximum</Text>
                                        <Input
                                            value={caratRange[1]}
                                            onChange={(e) => {
                                                const value = Math.max(Number(e.target.value), caratRange[0]);
                                                setCaratRange([caratRange[0], value]);
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button
                                border="1px solid"
                                borderColor="gray.300"
                                width={{ base: '100%', md: '250px' }}
                                height="50px"
                                justifyContent="left">{`${colorRange[0]} - ${colorRange[1]} color`}
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="50px">
                                <Text as='b'>Color</Text>
                                <RangeSlider
                                    defaultValue={[0, 6]} // Giá trị mặc định cho slider, từ J đến D
                                    min={0}
                                    max={6}
                                    step={1}
                                    onChangeEnd={(val) => handleSliderChange(val.map(index => ['J', 'I', 'H', 'G', 'F', 'E', 'D'][index]))}
                                    value={colorRange.map(color => ['J', 'I', 'H', 'G', 'F', 'E', 'D'].indexOf(color))}
                                    onChange={(val) => handleSliderChange(val.map(index => ['J', 'I', 'H', 'G', 'F', 'E', 'D'][index]))}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Box mt={4} justifyContent="space-between">
                                    <Text>Color: </Text>
                                    <Text>   J,  I,   H,   G,   F,   E,   D   </Text>
                                </Box>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum</Text>
                                        <Input
                                            value={colorRange[0]}
                                            onChange={(e) => setColorRange([e.target.value, colorRange[1]])}
                                        />
                                    </Box>

                                    <Box>
                                        <Text>Maximum</Text>
                                        <Input
                                            value={colorRange[1]}
                                            onChange={(e) => setColorRange([colorRange[0], e.target.value])}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button
                                border="1px solid"
                                borderColor="gray.300"
                                width={{ base: '100%', md: '250px' }}
                                height="50px"
                                justifyContent="left">{`${clarityRange[0]} - ${clarityRange[1]} clarity`}
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="50px">
                                <Text as='b'>Clarity</Text>
                                <RangeSlider
                                    defaultValue={[0, 7]} // Giá trị mặc định cho slider, từ J đến D
                                    min={0}
                                    max={7}
                                    step={1}
                                    onChangeEnd={(val) => handleSliderClarityChange(val.map(index => ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'][index]))}
                                    value={clarityRange.map(clarity => ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'].indexOf(clarity))}
                                    onChange={(val) => handleSliderClarityChange(val.map(index => ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'][index]))}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Box mt={4} justifyContent="space-between">
                                    <Text>Clarity: </Text>
                                    <Text>   SI2,   SI1,   VS2,   VS1,   VVS2,   VVS1,   IF,   FL</Text>
                                </Box>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum</Text>
                                        <Input
                                            value={clarityRange[0]}
                                            onChange={(e) => setClarityRange([e.target.value, clarityRange[1]])}
                                        />
                                    </Box>

                                    <Box>
                                        <Text>Maximum</Text>
                                        <Input
                                            value={clarityRange[1]}
                                            onChange={(e) => setClarityRange([clarityRange[0], e.target.value])}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                </Flex>
                <Flex flexWrap="wrap"

                    gap={3}
                    justifyContent={{ base: 'center', md: '250px' }}>
                    <Popover>
                        <PopoverTrigger>
                            <Button >
                                <img className="h-6" loading="lazy" height="23" width="23" src='https://cdn-icons-png.freepik.com/256/10515/10515819.png?' style={{ marginRight: '5px' }}></img>
                                All Filters</Button>
                        </PopoverTrigger>
                        <PopoverContent width="300px" maxHeight="700px" border="1px solid" borderColor="gray.300" overflowY="auto">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b'>Jewelers</Text>
                                <Flex alignItems="center" justifyContent="space-between">
                                    <Text as='b'>Show all jewelers</Text>
                                    <Switch id='allfilter' isChecked={isCheckedAll} onChange={handleSwitchChange} />
                                </Flex>
                                <Text fontSize='xs' as='b'>Or, select individual jewelers:</Text>
                                <Box display="flex" flexDirection="column">
                                    <Checkbox isChecked={isChecked.adiamor} onChange={() => handleCheckboxChange('adiamor')}>Adiamor</Checkbox>
                                    <Checkbox isChecked={isChecked.allurez} onChange={() => handleCheckboxChange('allurez')}>Allurez</Checkbox>
                                    <Checkbox isChecked={isChecked.brilliance} onChange={() => handleCheckboxChange('brilliance')}>Brilliance</Checkbox>
                                    <Checkbox isChecked={isChecked.danielWilliam} onChange={() => handleCheckboxChange('danielWilliam')}>Daniel William</Checkbox>
                                    <Checkbox isChecked={isChecked.dreamStone} onChange={() => handleCheckboxChange('dreamStone')}>DreamStone</Checkbox>
                                    <Checkbox isChecked={isChecked.friendlyDiamonds} onChange={() => handleCheckboxChange('friendlyDiamonds')}>Friendly Diamonds</Checkbox>
                                    <Checkbox isChecked={isChecked.rockHer} onChange={() => handleCheckboxChange('rockHer')}>RockHer</Checkbox>
                                    <Checkbox isChecked={isChecked.whiteflash} onChange={() => handleCheckboxChange('whiteflash')}>Whiteflash</Checkbox>
                                    <Checkbox isChecked={isChecked.withClarity} onChange={() => handleCheckboxChange('withClarity')}>With Clarity</Checkbox>
                                </Box>

                                <Box>
                                    <Text as='b'>Price</Text>
                                    <RangeSlider
                                        defaultValue={[200, 1500000]}
                                        min={200}
                                        max={1500000}
                                        step={50}
                                        onChangeEnd={(val) => setPriceRange(val)}
                                        value={priceRange}
                                        onChange={(val) => setPriceRange(val)}
                                    >
                                        <RangeSliderTrack>
                                            <RangeSliderFilledTrack bg='blue.500' />
                                        </RangeSliderTrack>
                                        <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                        <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                    </RangeSlider>
                                    <Flex mt={4} justifyContent="space-between">
                                        <Box>
                                            <Text>Minimum</Text>
                                            <Input
                                                value={priceRange[0]}
                                                onChange={(e) => {
                                                    const value = Math.min(Number(e.target.value), priceRange[1]);
                                                    setPriceRange([value, priceRange[1]]);
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Text>Maximum</Text>
                                            <Input
                                                value={priceRange[1]}
                                                onChange={(e) => {
                                                    const value = Math.max(Number(e.target.value), priceRange[0]);
                                                    setPriceRange([priceRange[0], value]);
                                                }}
                                            />
                                        </Box>
                                    </Flex>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <Text as='b'>Symmetry Filter</Text>
                                    <Flex alignItems="center" justifyContent="space-between">
                                        <Text as='b' fontSize='xs'>Select all symmetry options</Text>
                                        <Switch id='fluoresence' isChecked={isCheckedAll} onChange={handleSwitchChange} />
                                    </Flex>
                                    <Checkbox isChecked={isChecked.excellent} onChange={() => handleCheckboxChange('excellent')}>Excellent</Checkbox>
                                    <Checkbox isChecked={isChecked.veryGood} onChange={() => handleCheckboxChange('veryGood')}>Very Good</Checkbox>
                                    <Checkbox isChecked={isChecked.good} onChange={() => handleCheckboxChange('good')}>Good</Checkbox>
                                    <Checkbox isChecked={isChecked.fair} onChange={() => handleCheckboxChange('fair')}>Fair</Checkbox>
                                    <Checkbox isChecked={isChecked.poor} onChange={() => handleCheckboxChange('poor')}>Poor</Checkbox>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <Text as='b'>Polish Filter</Text>
                                    <Flex alignItems="center" justifyContent="space-between">
                                        <Text as='b' fontSize='xs'>Select all polish</Text>
                                        <Switch id='fluoresence' isChecked={isCheckedAll} onChange={handleSwitchChange} />
                                    </Flex>
                                    <Checkbox isChecked={isChecked.excellent} onChange={() => handleCheckboxChange('excellent')}>Excellent</Checkbox>
                                    <Checkbox isChecked={isChecked.veryGood} onChange={() => handleCheckboxChange('veryGood')}>Very Good</Checkbox>
                                    <Checkbox isChecked={isChecked.good} onChange={() => handleCheckboxChange('good')}>Good</Checkbox>
                                    <Checkbox isChecked={isChecked.fair} onChange={() => handleCheckboxChange('fair')}>Fair</Checkbox>
                                    <Checkbox isChecked={isChecked.poor} onChange={() => handleCheckboxChange('poor')}>Poor</Checkbox>
                                </Box>

                                <Box display="flex" flexDirection="column">
                                    <Text as='b'>Fluoresence Filter</Text>
                                    <Flex alignItems="center" justifyContent="space-between">
                                        <Text as='b' fontSize='xs'>Select all fluor. intensities</Text>
                                        <Switch id='fluoresence' isChecked={isCheckedAll} onChange={handleSwitchChange} />
                                    </Flex>
                                    <Checkbox isChecked={isChecked.none} onChange={() => handleCheckboxChange('none')}>None</Checkbox>
                                    <Checkbox isChecked={isChecked.faint} onChange={() => handleCheckboxChange('faint')}>Faint</Checkbox>
                                    <Checkbox isChecked={isChecked.medium} onChange={() => handleCheckboxChange('medium')}>Medium</Checkbox>
                                    <Checkbox isChecked={isChecked.strong} onChange={() => handleCheckboxChange('strong')}>Strong</Checkbox>
                                    <Checkbox isChecked={isChecked.veryStrong} onChange={() => handleCheckboxChange('veryStrong')}>Very Strong</Checkbox>
                                </Box>

                                <Box>
                                    <Text as='b'>Table %</Text>
                                    <RangeSlider
                                        defaultValue={[0, 100]}
                                        min={0}
                                        max={100}
                                        step={0.1}
                                        onChangeEnd={(val) => setTableRange(val)}
                                        value={tableRange}
                                        onChange={(val) => setTableRange(val)}
                                    >
                                        <RangeSliderTrack>
                                            <RangeSliderFilledTrack bg='blue.500' />
                                        </RangeSliderTrack>
                                        <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                        <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                    </RangeSlider>
                                    <Flex mt={4} justifyContent="space-between">
                                        <Box>
                                            <Text>Minimum %</Text>
                                            <Input
                                                value={tableRange[0]}
                                                onChange={(e) => {
                                                    const value = Math.min(Number(e.target.value), tableRange[1]);
                                                    setTableRange([value, tableRange[1]]);
                                                }}
                                            />
                                        </Box>
                                        <span>-</span>
                                        <Box>
                                            <Text>Maximum %</Text>
                                            <Input
                                                value={tableRange[1]}
                                                onChange={(e) => {
                                                    const value = Math.max(Number(e.target.value), tableRange[0]);
                                                    setTableRange([tableRange[0], value]);
                                                }}
                                            />
                                        </Box>
                                    </Flex>
                                </Box>

                                <Box>
                                    <Text as='b'>Depth %</Text>
                                    <RangeSlider
                                        defaultValue={[0, 100]}
                                        min={0}
                                        max={100}
                                        step={0.1}
                                        onChangeEnd={(val) => setDepthRange(val)}
                                        value={depthRange}
                                        onChange={(val) => setDepthRange(val)}
                                    >
                                        <RangeSliderTrack>
                                            <RangeSliderFilledTrack bg='blue.500' />
                                        </RangeSliderTrack>
                                        <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                        <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                    </RangeSlider>
                                    <Flex mt={4} justifyContent="space-between">
                                        <Box>
                                            <Text>Minimum %</Text>
                                            <Input
                                                value={depthRange[0]}
                                                onChange={(e) => {
                                                    const value = Math.min(Number(e.target.value), depthRange[1]);
                                                    setDepthRange([value, depthRange[1]]);
                                                }}
                                            />
                                        </Box>
                                        <span>-</span>
                                        <Box>
                                            <Text>Maximum %</Text>
                                            <Input
                                                value={depthRange[1]}
                                                onChange={(e) => {
                                                    const value = Math.max(Number(e.target.value), depthRange[0]);
                                                    setDepthRange([depthRange[0], value]);
                                                }}
                                            />
                                        </Box>
                                    </Flex>
                                </Box>

                                <Box>
                                    <Text as='b'>L/W Ratio</Text>
                                    <RangeSlider
                                        defaultValue={[0, 3]}
                                        min={0}
                                        max={3}
                                        step={0.1}
                                        onChangeEnd={(val) => setRatioRange(val)}
                                        value={ratioRange}
                                        onChange={(val) => setRatioRange(val)}
                                    >
                                        <RangeSliderTrack>
                                            <RangeSliderFilledTrack bg='blue.500' />
                                        </RangeSliderTrack>
                                        <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                        <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                    </RangeSlider>
                                    <Flex mt={4} justifyContent="space-between">
                                        <Box>
                                            <Text>Minimum</Text>
                                            <Input
                                                value={ratioRange[0]}
                                                onChange={(e) => {
                                                    const value = Math.min(Number(e.target.value), ratioRange[1]);
                                                    setRatioRange([value, ratioRange[1]]);
                                                }}
                                            />
                                        </Box>
                                        <span>-</span>
                                        <Box>
                                            <Text>Maximum</Text>
                                            <Input
                                                value={ratioRange[1]}
                                                onChange={(e) => {
                                                    const value = Math.max(Number(e.target.value), ratioRange[0]);
                                                    setRatioRange([ratioRange[0], value]);
                                                }}
                                            />
                                        </Box>
                                    </Flex>
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='150px' justifyContent="left">Fluoresence
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent width="300px" height="250px" border="1px solid" borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b' >Fluoresence Filter</Text>
                                <Text fontSize='xs' as='b'>Select all fluor. intensities <Switch id='fluoresence' display="flex" justifyContent="end" isChecked={isCheckedAll} onChange={handleSwitchChange} /></Text>
                                <Checkbox isChecked={isChecked.none} onChange={() => handleCheckboxChange('none')}>None</Checkbox>
                                <Checkbox isChecked={isChecked.faint} onChange={() => handleCheckboxChange('faint')}>Faint</Checkbox>
                                <Checkbox isChecked={isChecked.medium} onChange={() => handleCheckboxChange('medium')}>Medium</Checkbox>
                                <Checkbox isChecked={isChecked.strong} onChange={() => handleCheckboxChange('strong')}>Strong</Checkbox>
                                <Checkbox isChecked={isChecked.veryStrong} onChange={() => handleCheckboxChange('veryStrong')}>Very Strong</Checkbox>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='140px' justifyContent="left">L/W Ratio
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b'>L/W Ratio</Text>
                                <RangeSlider
                                    defaultValue={[0, 3]}
                                    min={0}
                                    max={3}
                                    step={0.1}
                                    onChangeEnd={(val) => setRatioRange(val)}
                                    value={ratioRange}
                                    onChange={(val) => setRatioRange(val)}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum</Text>
                                        <Input
                                            value={ratioRange[0]}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), ratioRange[1]);
                                                setRatioRange([value, ratioRange[1]]);
                                            }}
                                        />
                                    </Box>
                                    <span >-</span>
                                    <Box>
                                        <Text>Maximum</Text>
                                        <Input
                                            value={ratioRange[1]}
                                            onChange={(e) => {
                                                const value = Math.max(Number(e.target.value), ratioRange[0]);
                                                setRatioRange([ratioRange[0], value]);
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='140px' justifyContent="left"> Table %
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b'>Table %</Text>
                                <RangeSlider
                                    defaultValue={[0, 100]}
                                    min={0}
                                    max={100}
                                    step={0.1}
                                    onChangeEnd={(val) => setTableRange(val)}
                                    value={tableRange}
                                    onChange={(val) => setTableRange(val)}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum %</Text>
                                        <Input
                                            value={tableRange[0]}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), tableRange[1]);
                                                setTableRange([value, tableRange[1]]);
                                            }}
                                        />
                                    </Box>
                                    <span >-</span>
                                    <Box>
                                        <Text>Maximum %</Text>
                                        <Input
                                            value={tableRange[1]}
                                            onChange={(e) => {
                                                const value = Math.max(Number(e.target.value), tableRange[0]);
                                                setTableRange([tableRange[0], value]);
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='140px' justifyContent="left">Depth %
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent maxW="100%"
                            width={{ base: '100%', md: '700px' }}
                            height="auto"
                            border="1px solid"
                            borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b'>Depth %</Text>
                                <RangeSlider
                                    defaultValue={[0, 100]}
                                    min={0}
                                    max={100}
                                    step={0.1}
                                    onChangeEnd={(val) => setDepthRange(val)}
                                    value={depthRange}
                                    onChange={(val) => setDepthRange(val)}
                                >
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack bg='blue.500' />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb boxSize={6} index={0} bg='blue.500' />
                                    <RangeSliderThumb boxSize={6} index={1} bg='blue.500' />
                                </RangeSlider>
                                <Flex mt={4} justifyContent="space-between">
                                    <Box>
                                        <Text>Minimum %</Text>
                                        <Input
                                            value={depthRange[0]}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), depthRange[1]);
                                                setDepthRange([value, depthRange[1]]);
                                            }}
                                        />
                                    </Box>
                                    <span >-</span>
                                    <Box>
                                        <Text>Maximum %</Text>
                                        <Input
                                            value={depthRange[1]}
                                            onChange={(e) => {
                                                const value = Math.max(Number(e.target.value), depthRange[0]);
                                                setDepthRange([depthRange[0], value]);
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='150px' justifyContent="left">Polish
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent width="300px" height="250px" border="1px solid" borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b' >Polish Fillter</Text>
                                <Text as='b' fontSize='xs' >Select all polish <Switch id='fluoresence' display="flex" justifyContent="end" isChecked={isCheckedAll} onChange={handleSwitchChange} /></Text>
                                <Checkbox isChecked={isChecked.excellent} onChange={() => handleCheckboxChange('excellent')}>Excellent</Checkbox>
                                <Checkbox isChecked={isChecked.veryGood} onChange={() => handleCheckboxChange('veryGood')}>Very Good</Checkbox>
                                <Checkbox isChecked={isChecked.good} onChange={() => handleCheckboxChange('good')}>Good</Checkbox>
                                <Checkbox isChecked={isChecked.fair} onChange={() => handleCheckboxChange('fair')}>Fair</Checkbox>
                                <Checkbox isChecked={isChecked.poor} onChange={() => handleCheckboxChange('poor')}>Poor</Checkbox>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button border="1px solid" borderColor="gray.300" w='140px' justifyContent="left">Symmetry
                                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
                        </PopoverTrigger>
                        <PopoverContent width="300px" height="250px" border="1px solid" borderColor="gray.300">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="20px">
                                <Text as='b' >Symmetry Fillter</Text>
                                <Text as='b' fontSize='xs' >Select all symmetry option<Switch id='fluoresence' display="flex" justifyContent="end" isChecked={isCheckedAll} onChange={handleSwitchChange} /></Text>
                                <Checkbox isChecked={isChecked.excellent} onChange={() => handleCheckboxChange('excellent')}>Excellent</Checkbox>
                                <Checkbox isChecked={isChecked.veryGood} onChange={() => handleCheckboxChange('veryGood')}>Very Good</Checkbox>
                                <Checkbox isChecked={isChecked.good} onChange={() => handleCheckboxChange('good')}>Good</Checkbox>
                                <Checkbox isChecked={isChecked.fair} onChange={() => handleCheckboxChange('fair')}>Fair</Checkbox>
                                <Checkbox isChecked={isChecked.poor} onChange={() => handleCheckboxChange('poor')}>Poor</Checkbox>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
                </Flex>
                



            </Tabs>
        </Container>
    );
}

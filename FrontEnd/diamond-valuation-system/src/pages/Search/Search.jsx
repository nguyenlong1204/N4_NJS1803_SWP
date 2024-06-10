import React, { useState } from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Button,
  List, ListItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Input,
  Text,
  Icon,
  Checkbox, CheckboxGroup,
  Switch
} from '@chakra-ui/react';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Search = () => {
  const [origin, setOrigin] = useState('');
  const [selectedShape, setSelectedShape] = useState({ value: '', icon: null });

  const originOptions = [
    { value: 'Natural', label: 'Natural', icon: <img className="h-6" loading="lazy" height="23" width="23" src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="Filter for Natural diamonds" /> },
    { value: 'Lab Grown', label: 'Lab Grown', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/next/images/lab.svg" alt="Filter for Lab Grown diamonds" /> },
  ];

  const shapeOptions = [
    { value: 'Round', label: 'Round', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_round.svg" alt="Round diamond option" /> },
    { value: 'Oval', label: 'Oval', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_oval.svg" alt="Oval diamond option" /> },
    { value: 'Cushion', label: 'Cushion', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_cushion.svg" alt="Cushion diamond option" /> },
    { value: 'Princess', label: 'Princess', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_princess.svg" alt="Princess diamond option" /> },
    { value: 'Pear', label: 'Pear', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_pear.svg" alt="Pear diamond option" /> },
    { value: 'Emerald', label: 'Emerald', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_emerald.svg" alt="Emerald diamond option" /> },
    { value: 'Radiant', label: 'Radiant', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_radiant.svg" alt="Radiant diamond option" /> },
    { value: 'Marquise', label: 'Marquise', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_marquise.svg" alt="Marquise diamond option" /> },
    { value: 'Heart', label: 'Heart', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_heart.svg" alt="Heart diamond option" /> },
    { value: 'Asscher', label: 'Asscher', icon: <img className="h-6" loading="lazy" height="30" width="30" src="https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_asscher.svg" alt="Asscher diamond option" /> },
  ];

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

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
  return (
    <Flex
      direction={"column"}

      justifyContent="left"
      w={"100vw"}
      m={"50px 0 0 400px"}
      gap={10}
    >
      <Flex gap={5} >
        <Popover >
          <PopoverTrigger>
            <Button  justifyContent="left" w='200px'><Flex alignItems="center" >
              {origin && origin.icon && (
                <span className="inline-block w-5 align-bottom text-gray-400 opacity-60" style={{ marginRight: '5px' }}>
                  {origin.icon}
                </span>
              )}
              <span id="sa-origin_text" className={`font-medium ${origin ? 'text-blue-400' : 'text-gray-500'}`} >{origin ? origin.label : 'Select Origin'}</span>
              <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" />
            </Flex></Button>
          </PopoverTrigger>

          <PopoverContent border="1px solid" borderColor="gray.300">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <List spacing={3}>
                {originOptions.map((option, index) => (
                  <ListItem
                    key={index}
                    cursor="pointer"
                    onClick={() => setOrigin(option)}
                    color={origin && origin.value === option.value ? 'blue.400' : 'gray.500'}
                    backgroundColor={origin && origin.value === option.value ? 'blue.50' : 'transparent'}
                    borderRadius="md"
                    padding="0.5rem 0.5rem 0.5rem 2rem" // Adjusted padding to accommodate the icon
                    position="relative" // Required for absolute positioning of the icon
                  >
                    <Flex alignItems="center">
                      {origin && origin.value === option.value && (
                        <Icon as={CheckIcon} position="absolute" left="0.5rem" />
                      )}
                      <Text ml={origin && origin.value === option.value}>{option.label}</Text> {/* Add left margin if icon is present */}
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button  justifyContent="left" w='160px'>
              <Flex alignItems="center">
                {selectedShape.icon && (
                  <span className="inline-block w-5 align-bottom text-gray-400 opacity-60" style={{ marginRight: '5px' }}>
                    {selectedShape.icon}
                  </span>
                )}
                <span id="sa-shape_text" className="font-medium text-gray-500 ml-2" >{selectedShape.label || 'Select Shape'} </span>
                <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" />
              </Flex>
            </Button>
          </PopoverTrigger>

          <PopoverContent border="1px solid" borderColor="gray.300">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <List spacing={3} styleType="none">
                {shapeOptions.map((option, index) => (
                  <ListItem
                    key={index}
                    cursor="pointer"
                    onClick={() => handleShapeSelect(option)}
                    color={selectedShape && selectedShape.value === option.value ? 'blue.400' : 'gray.500'}
                    backgroundColor={selectedShape && selectedShape.value === option.value ? 'blue.50' : 'transparent'}
                    borderRadius="md"
                    padding="0.5rem"
                    pl="2.5rem" // Padding left to accommodate icon
                    position="relative"
                  >
                    <Flex alignItems="center">
                      <span className="inline-block absolute left-2.5" >
                        {option.icon}
                      </span>
                      <Text ml="2">{option.label}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex gap={5}>

        <Popover>
          <PopoverTrigger>
            <Button border="1px solid" borderColor="gray.300" width="250px" height="50px" justifyContent="left">{`$${priceRange[0]} - $${priceRange[1]}`}
              <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
          </PopoverTrigger>
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody display="flex" padding="0 0 50" flexDirection="column" justifyContent="space-between" height="100%" px="50px">
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
            <Button border="1px solid" borderColor="gray.300" width="250px" height="50px" justifyContent="left">{`${caratRange[0]} - ${caratRange[1]} carat`}
              <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
          </PopoverTrigger>
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
            <Button border="1px solid" borderColor="gray.300" width="250px" height="50px" justifyContent="left">{`${colorRange[0]} - ${colorRange[1]} color`}
              <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
          </PopoverTrigger>
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
            <Button border="1px solid" borderColor="gray.300" width="250px" height="50px" justifyContent="left">{`${clarityRange[0]} - ${clarityRange[1]} clarity`}
              <Icon as={ChevronDownIcon} position="absolute" right="0.5rem" /></Button>
          </PopoverTrigger>
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
      <Flex gap={3} >
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
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
          <PopoverContent width="700px" height="250px" border="1px solid" borderColor="gray.300">
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
  );






};


export default Search;

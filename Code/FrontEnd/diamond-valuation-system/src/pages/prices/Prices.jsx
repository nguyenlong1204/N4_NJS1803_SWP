import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Natural from "./natural/Natural";
import LabGrown from "./labGrown/LabGrown";
import ScrollToTop from "react-scroll-to-top";

export default function Prices() {
  const bgColor1 = useColorModeValue("blue.400", "#DBA843");
  const bgColor = useColorModeValue("#fff", "#000");
  return (
    <Box bg={bgColor}>
      <ScrollToTop smooth style={{display:"flex" ,alignItems:"center", justifyContent:"center", padding:"4px"}}/>
      <Tabs variant="enclosed" paddingTop={10}>
        <TabList justifyContent={"center"}  >
          <Tab color={bgColor1}>Natural</Tab>
          <Tab color={bgColor1}>Lab Grown</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Natural />
          </TabPanel>
          <TabPanel>
            <LabGrown />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

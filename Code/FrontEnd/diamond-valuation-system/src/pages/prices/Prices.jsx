import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import Natural from "./natural/Natural";
import LabGrown from "./labGrown/LabGrown";
import ScrollToTop from "react-scroll-to-top";

export default function Prices() {
  return (
    <>
      <ScrollToTop smooth style={{display:"flex" ,alignItems:"center", justifyContent:"center", padding:"4px"}}/>
      <Tabs variant="enclosed" paddingTop={10}>
        <TabList justifyContent={"center"}>
          <Tab>Natural</Tab>
          <Tab>Lab Grown</Tab>
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
    </>
  );
}

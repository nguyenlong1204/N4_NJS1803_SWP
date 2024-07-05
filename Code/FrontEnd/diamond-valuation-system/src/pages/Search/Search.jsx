import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import Natural from "./natural_search/Natural";
import LabGrown from "./labGrown_search/LabGrown";

export default function Search() {
  return (
    <>
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

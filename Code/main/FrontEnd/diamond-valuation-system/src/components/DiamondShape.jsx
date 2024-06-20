import React from "react";
import { Tab, TabList, TabPanel, Tabs ,TabPanels} from '@chakra-ui/react'
export default function DiamondShape() {
    return (
        <Tabs variant="unstyled">
            <TabList justifyContent={"center"}>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Round</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Oval</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Princess</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Emerald</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Cushion</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Radiant</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Pear</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Heart</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Marquise</Tab>
                <Tab _selected={{ color: "black", bg: "rgb(224 231 255)", border:0 }}>Asscher</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

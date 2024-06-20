import { Tab, TabList, TabPanel, Tabs ,TabPanels} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import DiamondShape from './../../components/DiamondShape';
import axios from 'axios';

export default function Prices() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.idexonline.com/realtimeprices/api/getprice', {
          authentication_details: {
            api_key: "ABNSSA1223311",
            api_secret: "SeCKeccdaaedf123"
          },
          parameters: {
            shape: "Round",
            weight: 1.10,
            color: "E",
            clarity: "VVS1",
            cut_grade: "",
            grading_lab: "GIA"
          }
        });

        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <>
      <Tabs variant='enclosed'>
        <TabList justifyContent={"center"}>
          <Tab>Natural</Tab>
          <Tab>Lab Grown</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DiamondShape/>
          </TabPanel>
          <TabPanel>
            <DiamondShape/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <p>In the past month</p>
      <h4>  </h4>
    </>
  )
}

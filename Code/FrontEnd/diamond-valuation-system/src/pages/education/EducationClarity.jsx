import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Link as LinkCharkaUI,
  ListItem,
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../../components/Title";
import {
  claritySlider,
  clarityTable,
  clarityFAQs,
} from "../../shared/SharedEducationClarity";
import { IoDiamondOutline } from "react-icons/io5";
import EducationProTip from "../../components/education/EducationProTip";
import EducationFAQs from "../../components/education/EducationFAQs";
import ScrollToTop from "react-scroll-to-top";
export default function EducationClarity() {
  const [sliderValue, setSliderValue] = useState(4);
  const bgColor = useColorModeValue("white", "black");
  const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <>
      <ScrollToTop smooth style={{display:"flex" ,alignItems:"center", justifyContent:"center", padding:"4px"}}/>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={"99vw"}
        p={10}
        bg={bgColor}
      >
        <Title
          title={"A Guide To The Diamond Clarity Chart"}
          description={
            "Understanding diamond clarity charts and how to choose the best clarity grade for you."
          }
        />
        <Divider m={"20px 0 20px 0"} />
        <Flex
          direction={"column"}
          w={{ base: "80vw", md: "70vw", lg: "60vw" }}
          gap={3}
        >
          <Text fontSize={normalText}>
            Diamond clarity refers to the grade given to a diamond based on the
            imperfections and inclusions found in a diamond. The fewer
            inclusions and blemishes a diamond has, the higher grade it will
            receive on the diamond clarity chart. The clarity can have a
            significant impact on a diamond’s cost (it’s one of the diamond 4Cs
            – the main characteristics of a diamond). However, many
            imperfections that affect a diamond’s clarity grade aren’t visible
            to the naked or unaided eye.
          </Text>
          <Text fontSize={normalText}>
            In this article, we will discuss the different diamond grades and
            what the different types of inclusions are. More importantly, we
            will explain how you can use clarity to get the best bang for your
            buck when purchasing a diamond.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            The Diamond Clarity Chart That Actually Matters
          </Text>
          <Text fontSize={normalText}>
            While it’s true that you need to understand the GIA clarity scale
            (diamond prices are calculated in large part due to their clarity
            grade),{" "}
            <strong>
              what you need to know is how to find an eye-clean diamond
            </strong>
            . This chart shows you what your chances are of finding an eye-clean
            diamond in a particular grade.
          </Text>
          <Image
            src="https://www.diamonds.pro/wp-content/uploads/2022/02/Clarity-chart.png"
            m={"20px 0 20px 0"}
          />
          <Text fontSize={normalText}>
            Those percentages are based on your typical one carat diamonds. So
            you are best off looking for a diamond in the VS2 – SI2 range when
            purchasing a one carat diamond. It’s true that the overwhelming
            majority of SI2 diamonds will not be eye-clean, but who cares? You
            aren’t buying all the SI2 diamonds, you are picking out the one for
            you.
          </Text>
          <Text fontSize={normalText}>
            As diamonds get larger, the inclusions get larger as well. You’ll
            find that it’s harder to find an eye-clean 2 carat SI2 diamond than
            it is to find a one carat. It’s a bit of an art form to pick a
            diamond based off of the videos on James Allen or Blue Nile (or
            other reputable online retailers), so feel free to contact us and
            we’ll help you find the perfect diamond. Everyone on our team has
            picked out thousands of diamonds for our readers.
          </Text>
          <Text fontSize={normalText}>
            If you are looking at the diamond in a physical retailer, be sure to
            walk around the store and see if you can find the inclusions in
            different lighting scenarios. Some inclusions will be hidden by the
            sparkle under the perfect lighting at the desk, then you’ll be
            sitting in your kitchen and notice a black mark. Once you see it,
            that is all you’ll ever see when looking at your diamond.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What is the GIA Diamond Clarity Scale?
          </Text>
          <Text fontSize={normalText}>
            To provide shoppers with an understanding of each diamond’s clarity
            level, grading institutes like the Gemological Institute Of America
            (GIA) use diamond clarity charts to judge diamonds based on their
            appearance and give each stone a clarity grade within a given scale.
          </Text>
          <Text fontSize={normalText}>
            Diamond clarity scales range from I (meaning “included”) to FL
            (meaning “flawless”). Each clarity grade has subgrades that provide
            more information about the visibility of inclusions in the diamond.
          </Text>
          <Box p={4} pt={6} m={"20px 0 20px 0"}>
            <Slider
              aria-label="slider-ex-6"
              min={0}
              max={8}
              step={1}
              onChange={(val) => setSliderValue(val)}
            >
              {claritySlider.map((item, index) => (
                <SliderMark
                  key={index}
                  value={index}
                  textAlign={"center"}
                  bg={"none"}
                  color={"gray.400"}
                  borderRadius={"20px"}
                  mt="-10"
                  ml="-6"
                  w="12"
                >
                  <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                    {item.grade}
                  </Text>
                </SliderMark>
              ))}
              <SliderTrack></SliderTrack>
              <SliderThumb bg={"blue.400"} boxSize={6}>
                <Box as={IoDiamondOutline} />
              </SliderThumb>
            </Slider>
          </Box>
          <Flex direction={{base:"column", md:"row", lg:"row"}}>
            <Flex direction={"column"}>
              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                fontWeight={"bold"}
                m={"0 0 20px 0"}
              >
                {claritySlider[sliderValue].name}
              </Text>
              <Text fontSize={normalText}>
                {claritySlider[sliderValue].description}
              </Text>
            </Flex>
            <Image src={claritySlider[sliderValue].image} />
          </Flex>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            m={"50px 0 50px 0"}
          >
            If you want some help finding a diamond that has inclusions, yet is
            eye-clean, feel free to contact us.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            The Best Clarity Grade vs. The Best Clarity Grade for You
          </Text>
          <Text fontSize={normalText}>
            When educating yourself about diamonds, it’s easy to get lost in the
            technical details. You may end up asking a question and receiving a
            technically correct answer, but it will result in you making a bad
            choice when purchasing a diamond. “What is the best clarity grade
            for a diamond” is a perfect example of this.
          </Text>
          <Text fontSize={normalText}>
            The answer to that question is seemingly simple. A Flawless (FL)
            diamond clarity grade is the highest possible grade a diamond can
            receive. Since it’s the best grade, you should try to get one with
            that grade (or as close to it as possible), right? WRONG!
          </Text>
          <Text fontSize={normalText}>
            In many ways a diamond clarity grade is meaningless. We’ll explain
            all the technical parameters regarding clarity below, but the most
            important factor is this: Can you see the inclusions with your naked
            eye (without a magnifying glass or microscope) once the diamond is
            mounted in the ring? Everything else (with a few exceptions) is just
            noise.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            How Are Clarity Grades Determined?
          </Text>
          <Text fontSize={normalText}>
            Natural diamonds are formed in the earth’s mantle layer at a depth
            ranging between 80-120 miles, and they face extreme heat up to 2,200
            degrees Fahrenheit. While their growth takes between one billion to
            three billion years, only the rarest diamonds emerge in perfect
            condition. Most often they are imperfect and contain varying amounts
            of internal inclusions and surface blemishes.
          </Text>
          <Text fontSize={normalText}>
            As the{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.americangemsociety.org/buying-diamonds-with-confidence/4cs-of-diamonds/understanding-diamond-clarity-the-4cs-of-diamonds/diamond-inclusions/"
              isExternal
            >
              AGS explains
            </LinkCharkaUI>{" "}
            , inclusions usually develop as a result of heat and pressure, while
            blemishes tend to appear during the cutting and polishing process,
            or as a result of wear that affects the surface of the diamond.
          </Text>
          <Text fontSize={normalText}>
            Artificial Intelligence is playing a more prominent role in diamond
            grading. According to{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.diamonds.net/Magazine/Article.aspx?ArticleID=67944&RDRIssueID=218&ArticleTitle=Sharing+intelligence"
              isExternal
            >
              Rapaport Magazine
            </LinkCharkaUI>{" "}
            , “Today, using artificial intelligence (AI) has become a go-to
            method for grading diamonds.” The GIA developed its own AI-based
            system for grading diamonds in partnership with IBM, with the system{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://rapaport.com/post_types/age-of-ai-automation-in-diamond-grading/"
              isExternal
            >
              going into operation
            </LinkCharkaUI>{" "}
            in GIA labs in 2020.
          </Text>
          <Text fontSize={normalText}>
            The GIA AI clarity grading “is built on globally accepted standards
            — the GIA International Diamond Grading System — and [on the] GIA’s
            decades of research and analysis from tens of millions of diamonds”
            added{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.gia.edu/gia-news-press/moses-tannenbaum-board-of-governors"
              isExternal
            >
              Tom Moses
            </LinkCharkaUI>{" "}
            of the GIA.
          </Text>
          <Text fontSize={normalText}>
            Five factors play a significant role in how a diamond is graded, and
            how its “score” on the diamond clarity chart is determined. These
            five roles in diamond grading include size, nature, number,
            location, and the relief of the inclusions.
          </Text>
          <Text fontSize={normalText}>
            <strong>1. Size</strong> – The size of the inclusions in a diamond
            is one of the most important factors in determining its clarity
            grade. The bigger the inclusions, the larger the impact they’ll have
            on a diamond’s appearance.
          </Text>
          <Text fontSize={normalText}>
            <strong>2. Nature</strong> – Nature refers to the type of inclusions
            that can be seen in the diamond, as well as the depth of these
            inclusions within the diamond.
          </Text>
          <Text fontSize={normalText}>
            <strong>3. Number</strong> – Grading entities also take into account
            the number of inclusions within a diamond. If a diamond has a large
            number of inclusions, even if small, they can have a large impact on
            its appearance and clarity.
          </Text>
          <Text fontSize={normalText}>
            <strong>4. Location</strong> – The location of an inclusion refers
            to where on the diamond the inclusion is located. If the inclusion
            is situated in closer proximity to the center of the table, then the
            inclusion is more visible to the eye and the clarity grade will be
            impacted much more.
          </Text>
          <Text fontSize={normalText}>
            <strong>5. Relief</strong> – The relief is referring to how
            noticeable the inclusions are in comparison with the diamond — put
            simply, how much contrast there is between the diamond and the
            inclusions. The higher the relief, the darker the color may seem
            which can affect diamond grading.
          </Text>
          <LazyLoadImage
            src="https://www.diamonds.pro/wp-content/uploads/2023/03/6A7A6601-2-1024x683.jpg"
            effect="blur"
          />
          <Center>
            <Text fontSize={"sm"} color={"gray"}>
              Simple and elegant – a very clear VS1 diamond in a yellow gold
              setting made by Abe Mor
            </Text>
          </Center>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            How Are Clarity Grades Determined?
          </Text>
          <Text fontSize={normalText}>
            Although the term inclusion is often used to refer to any type of
            imperfection in a diamond, there are several different types of
            inclusions that can affect a diamond’s appearance.
          </Text>
          <Text fontSize={normalText}>
            Here are some of the most common types of inclusions and the effect
            each type can have on a diamond’s clarity:
          </Text>
          <UnorderedList
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            spacing={2}
            m={"0 0 20px 50px"}
          >
            <ListItem>
              <strong>Cloud</strong> – A cloud isn’t one imperfection in a
              diamond — instead, it’s a group of very small pinpoints that are
              clustered together. Clouds can affect a diamond’s brilliance by
              giving it a dull, hazy look. If there are lots of large clouds
              within a diamond, we call it a cloudy diamond.
            </ListItem>
            <ListItem>
              <strong>Graining</strong> – Graining is a type of internal
              inclusion that develops because of irregular crystal growth. When
              a diamond has graining, it will show white, colored, or reflective
              internal lines that give the diamond a very hazy appearance.
            </ListItem>
            <ListItem>
              <strong>Cavity</strong> –Cavities are surface dents or cracks in a
              diamond. They can appear colorless or colored based on the type of
              minerals that exist within the body of the diamond. If the crystal
              inclusions of the cavity are colored, they will then be much more
              obvious in appearance and can most likely be seen with the unaided
              eye.
            </ListItem>
            <ListItem>
              <strong>Feather</strong> – Feathers are small cracks that, as
              their name suggests, have a feathery look when viewed from certain
              angles. Some feathers are obvious, while others are barely
              noticeable. When a diamond has feathers, they can either appear
              clear or capture light and give off a white appearance.
            </ListItem>
          </UnorderedList>
          <Text fontSize={normalText}>
            When it comes to assessing a diamond’s inclusions, it’s always best
            to consider the advice of a professional. You should also look at
            the diamond’s{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.gia.edu/"
              isExternal
            >
              GIA certificate
            </LinkCharkaUI>{" "}
            for a fuller understanding of its inclusions and imperfections.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            Top 3 Buying Tips For Diamond Clarity
          </Text>
          <Text fontSize={normalText} m="0 0 20px 0">
            Before purchasing a diamond, there are a few things to keep in mind
            to get the best value and beauty, especially when it comes to
            clarity.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            1. DON’T OVERPAY
          </Text>
          <Text fontSize={normalText}>
            It’s very easy to overpay for clarity. In most cases, a VS1 or VS2
            diamond will be eye-clean just like an FL diamond, but cost far
            less. Instead of focusing on a certain clarity grade, choose the
            lowest clarity grade that still presents an eye-clean diamond. Your
            budget is better spent on factors that more greatly impact a
            diamond’s beauty, like the quality of a diamond cut.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            2. AIM FOR THE BEST DIAMOND CLARITY
          </Text>
          <Text fontSize={normalText}>
            The best clarity grade depends on the shape of your diamond. As we
            mentioned above, some diamond shapes are much better at hiding
            inclusions and other imperfections than others.
          </Text>
          <TableContainer m={"20px 0 20px 0"} whiteSpace={"wrap"}>
            <Table size={"sm"} colorScheme="blue">
              <Thead bgColor={"blue.400"}>
                <Tr>
                  <Th>Clarity Grade</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clarityTable.map((item, index) => (
                  <Tr key={index}>
                    <Td fontWeight={"bold"}>{item.grade}</Td>
                    <Td>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Text fontSize={normalText}>
            Follow these recommendations to get the most value from your
            purchase
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            3. REVIEW THE DIAMOND CLOSELY
          </Text>
          <Text fontSize={normalText}>
            Besides looking at the certificate and clarity plot, carefully
            review the diamond to look for visible inclusions. Online vendors,
            particularly James Allen and Blue Nile, have high-end photography
            for just this purpose.
          </Text>
          <Text fontSize={normalText}>
            Look to see if you notice any blemishes or inclusions. If you do
            notice some, take note of where they are on the diamond. Are they in
            the middle of the table, where they’ll be visible, or near the edge
            of the diamond, where they could be covered up by the setting?
          </Text>
          <Text fontSize={normalText}>
            The main goal is to find a diamond that’s eye-clean without
            overpaying. If you’re not sure, get an expert’s opinion.
          </Text>
          <EducationProTip
            content={
              "We recommend buying a diamond online, not just because of the value that’s available, but also because of the ease of comparing diamonds. Instead of the bright lighting in jewelry stores that can hide imperfections, online vendors offer objective, high-quality photography."
            }
          />
          <EducationFAQs
            name={"FAQs About Diamond Clarity"}
            content={clarityFAQs}
          />
        </Flex>
      </Flex>
    </>
  );
}

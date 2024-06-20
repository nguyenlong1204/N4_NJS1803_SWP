import {
  Box,
  Divider,
  Flex,
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
import { IoDiamondOutline } from "react-icons/io5";
import EducationBottomLineRec from "../../components/education/EducationBottomLineRec";
import {
  colorSlider,
  colorTable,
  colorBottomLineRec,
  colorBottomLineRecWhatToLookFor,
  colorBottomLineRecWhatToAvoid,
} from "../../shared/SharedEducationColor";
import EducationProTip from "../../components/education/EducationProTip";
import ScrollToTop from "react-scroll-to-top";
export default function EducationColor() {
  const [sliderValue, setSliderValue] = useState(6);
  const bgColor = useColorModeValue("white", "black");
  const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <>
      <ScrollToTop smooth />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        paddingTop={10}
        bg={bgColor}
      >
        <Title
          title={"The Complete Guide to Diamond Color Scale"}
          description={"Understanding diamond color charts and color scales"}
          width={"80vw"}
        />
        <Divider m={"20px 0 20px 0"} />
        <Flex
          direction={"column"}
          w={{ base: "80vw", md: "70vw", lg: "60vw" }}
          gap={3}
        >
          <Text fontSize={normalText}>
            Diamond color is a crucial aspect of your diamond’s appearance. The
            color scale ranges from D (completely clear) to Z (warm yellowish
            tint). While high grades offer little visible difference, they come
            with a significant price increase. For instance, a D color diamond
            is stunning, but so is a G color diamond, and you save 30% with the
            latter. The goal is to find a diamond that appears colorless to the
            naked eye without breaking the bank.
          </Text>
          <Text fontSize={normalText}>
            For high-end colorless diamonds (D-F), you can expect to pay a
            premium, with prices starting from $6,000 for a 1-carat diamond. On
            the other hand, near-colorless diamonds (G-J) offer excellent value,
            with prices for a 1-carat diamond starting around $5,000. Remember,
            the setting and diamond shape can also influence the perceived
            color.
          </Text>
          <Text fontSize={normalText}>
            In this article we discuss everything you need to know about diamond
            color and how to utilize diamonds in the middle of the diamond
            clarity scale to get the best bang for your buck.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            The Diamond Color Scale
          </Text>
          <Text fontSize={normalText}>
            Diamond color refers to how clear a diamond is. The diamond color
            scale ranges from D (entirely clear) to Z (a yellowish tint). Your
            intention with color should be to find a diamond that appears
            colorless. But you don’t need to go to the top of the diamond color
            scale to accomplish this. Very high grades offer little visible
            difference but come with a significant increase in diamond price.
          </Text>
          <LazyLoadImage src={colorSlider[sliderValue].image} effect="blur" />
          <Box p={4} pt={6} m={"20px 0 0 0"}>
            <Slider
              aria-label="slider-ex-6"
              min={0}
              max={10}
              step={1}
              onChange={(val) => setSliderValue(val)}
            >
              {colorSlider.map((item, index) => (
                <SliderMark
                  key={index}
                  value={index}
                  textAlign={"center"}
                  bg={"none"}
                  color={"gray.600"}
                  borderRadius={"20px"}
                  mt="-10"
                  ml="-6"
                  w="12"
                >
                  {item.type}
                </SliderMark>
              ))}

              <SliderTrack></SliderTrack>
              <SliderThumb bg={"blue.400"} boxSize={6}>
                <Box as={IoDiamondOutline} />
              </SliderThumb>
            </Slider>
          </Box>
          <Box p={4} pt={6} m={"0 0 20px 0"}>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              {colorSlider[sliderValue].title}
            </Text>
            <Text fontSize={normalText}>
              {colorSlider[sliderValue].content}
            </Text>
          </Box>
          <Text fontSize={normalText}>
            When you’re looking for diamonds to purchase, the diamond color is
            one aspect of the buying process that you shouldn’t overlook.
            Diamonds can vary hugely in price based on their color, meaning that
            picking the right color for your specific needs could help you save
            a lot of money without affecting the appearance of your
            fiancé-to-be’s ring.
          </Text>
          <Text fontSize={normalText}>
            Distinctly colored diamonds are prized pieces and are available in
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.jckonline.com/editorial-article/colored-diamonds-gray-week-auction/"
              isExternal
            >
              {" "}
              colors such as blue, pink and yellow
            </LinkCharkaUI>
            . In white diamonds, however, a yellow tint is generally not seen as
            desirable.
          </Text>
          <Text fontSize={normalText}>
            This is because when slight coloring is present, less natural color
            of the light is reflected back to the eye. The more colorless a
            diamond is, generally the more radiant, valuable, and rare it is as
            well.
          </Text>
          <Text fontSize={normalText}>
            Colorless diamonds are definitely scarce and rank much higher on the
            color grading scale than a diamond that has even the softest touch
            of yellow.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What’s the Best Color For a Diamond?
          </Text>
          <Text fontSize={normalText}>
            The best diamond color grade is D color. This means the diamond is
            completely clear with no shade of yellow (or anything else) in it.
          </Text>
          <Text fontSize={normalText}>
            The best color for a diamond that you will put in your engagement
            ring is not D. You can put a G, H or I color diamond in a ring and
            it will look the same while costing a lot less.
          </Text>
          <LazyLoadImage
            src="https://www.diamonds.pro/wp-content/uploads/2022/02/Larger-I-color-diamond.jpg"
            effect="blur"
          />
          <Text fontSize={normalText}>
            If you choose a yellow or rose gold setting, there’s a good chance
            that the color of the setting will give the two diamonds an
            identical appearance anyway, negating the higher color grade.
          </Text>
          <Text fontSize={normalText}>
            The difference in price between these two diamonds is $1,630 — money
            that you could spend on a larger carat weight, a beautiful setting
            or simply save for your wedding and honeymoon.
          </Text>
          <Text fontSize={normalText}>
            On the whole, the best color for a diamond is the color that best
            fits your personal tastes and preferences, the shape of the diamond,
            the metal used for the setting and your budget.
          </Text>
          <Text fontSize={normalText}>
            Below, we’ve shared our recommendations for diamond color based on
            the shape of diamond you choose. We’ve also given our expert advice
            on the color grades that are best suited for each metal, from
            platinum and white gold to yellow and rose gold.
          </Text>
          <EducationProTip
            content={
              "When buying a diamond in the IJK range, consider a diamond with medium or strong blue fluorescence. Diamonds with a yellowish tint usually avoid the hazy/cloudy effect seen in colorless diamonds with fluorescence and it tends to brighten up the diamond a bit."
            }
          />
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What’s the Best Color For a Diamond?
          </Text>
          <Text fontSize={normalText}>
            Diamond color matters, but only to a certain point. The way we
            approach the 4Cs, we separate cut and carat weight from color and
            clarity. Cut and carat are positive traits (you want to maximize as
            much as possible). Color and clarity are negative traits that you
            want to make sure you don’t notice when looking at a diamond.
          </Text>
          <Text fontSize={normalText}>
            When it comes to color, there is a line on the diamond color scale
            where you notice whether the diamond is clear or whether it has a
            yellowish tint. Your goal should be to make sure you don’t buy a
            diamond with a yellowish tint so low that you notice it. That line
            between yellowish and clear varies based on the shape of the diamond
            and the style setting you are putting the diamond in. We get into
            that below.
          </Text>
          <Text fontSize={normalText}>
            Once the diamond looks clear to you, there isn’t much to gain by
            spending more on higher color. Keep in mind that buying a diamond is
            a zero-sum game. If you spend more money by going with a higher
            color grade than necessary, you will have to sacrifice on size,
            brilliance or clarity. Is it really worth doing that? Take a look at
            this challenge and decide for yourself.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What’s the Best Color For a Diamond?
          </Text>
          <UnorderedList m={"10px 0 20px 50px"} spacing={2} fontSize={"lg"}>
            <ListItem fontSize={normalText}>
              The absence of color is generally one of several indicators of
              good value.
            </ListItem>
            <ListItem fontSize={normalText}>
              The color grade of a diamond should always be determined by a
              grading professional.
            </ListItem>
            <ListItem fontSize={normalText}>
              The grade and value of diamonds differ between colored and
              colorless diamonds.
            </ListItem>
            <ListItem fontSize={normalText}>
              Diamond colors are graded from D to Z, with most diamonds used in
              jewelry falling somewhere into the D to M range.
            </ListItem>
            <ListItem fontSize={normalText}>
              The setting of the ring can play a role in the perception and view
              of the color.
            </ListItem>
          </UnorderedList>
          <Text fontSize={normalText}>
            Before we go further into the specifics of diamond color, let’s
            cover a few things.
          </Text>
          <Text fontSize={normalText}>
            <strong>First</strong>, you don’t need to be an expert in diamond
            color to choose a good diamond. While we’ve covered the basics of
            diamond color below, we’ve also provided our own recommendations,
            which you can use to limit your search to diamonds of an acceptable
            color for your preferred shape and setting type.
          </Text>
          <Text fontSize={normalText}>
            <strong>Second</strong>, the difference between one color grade and
            other grades (for example, a G color diamond and an H color diamond)
            are very small, so much so that they’re largely impossible to
            perceive with the naked eye.
          </Text>
          <Text fontSize={normalText} m={"0 0 20px 0"}>
            However, the difference between one color grade and another that’s
            three or four above or below it (for example, a G color diamond and
            a K color diamond) are often easy to see when the diamonds are side
            by side, especially under bright light and with magnification.
          </Text>
          <LazyLoadImage
            src="https://www.diamonds.pro/wp-content/uploads/2022/04/Copy-of-6A7A3634-Edited-1024x683.jpg"
            effect="blur"
          />
          <Text fontSize={normalText} m={"20px 0 0 0"}>
            <strong>Third</strong>, like with everything else related to buying
            a diamond, there’s no need to choose the best color grade. Unless
            you have a massive budget, buying a D color diamond is unnecessary
            when a well-cut G, H or even I color diamond will look just as good
            once it’s set in a ring and worn on your fiancé-to-be’s finger.
          </Text>
          <Text fontSize={normalText}>
            <strong>Second</strong>, a diamond’s shape and the type of metal you
            choose for the setting both affect which color grade is best. For
            example, the round brilliant cut is great at hiding color, while the
            emerald cut isn’t. This means that you’ll need to pick a color grade
            that’s appropriate for the diamond’s shape.
          </Text>
          <Text fontSize={normalText}>
            When it comes to metals, some, such as yellow gold and rose gold,
            can hide the faint yellow color of a lower-grade diamond better than
            platinum and white gold.
          </Text>
          <Text fontSize={normalText}>
            Just like cut quality, clarity and carat weight, color is one slice
            of the pie to keep in mind when you’re shopping for a diamond. To
            get the best value when buying a diamond, it’s important to balance
            color with the three other Cs.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            Colorless Grades
          </Text>
          <Text fontSize={normalText}>
            Diamonds graded from D to F in color are regarded as colorless. The
            difference between each grade is only something a trained
            professional will be able to tell, with the use of special
            equipment.
          </Text>
          <Text fontSize={normalText}>
            Colorless diamonds are the highest quality you get on the diamond
            color scale, containing the faintest trace of color, impossible to
            notice with the naked eye.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            Near Colorless Grades
          </Text>
          <Text fontSize={normalText}>
            Diamonds with a color grade from G to J are considered “near
            colorless”. These diamonds’ color may be noticeable if viewed
            side-by-side with a colorless diamond, but in most cases will appear
            colorless when viewed on their own.
          </Text>
          <Text fontSize={normalText}>
            Diamonds in this grade generally provide the best value, as they are
            cheaper than colorless diamonds but lack any clear tint that’s
            noticeable to the naked eye.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            Faintly Colored Grades
          </Text>
          <Text fontSize={normalText}>
            Diamond color grades from K to M are regarded as having a “faint”
            color. With these diamonds, it’s easier to notice a yellowish tint
            with the naked eye.
          </Text>
          <Text fontSize={normalText}>
            For most tastes, there is a clear drop-off in beauty between a near
            colorless and faintly colored diamond. However, diamonds in this
            range can offer superior value if placed in a setting that masks
            color, like one made from yellow or rose gold.
          </Text>
          <Text fontSize={normalText}>
            With this out of the way, let’s look at the GIA’s diamond color
            chart and how it relates to shopping for a diamond.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What is a Diamond Color Chart?
          </Text>
          <Text fontSize={normalText}>
            With this out of the way, let’s look at the GIA’s diamond color
            chart and how it relates to shopping for a diamond.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 20px 0"}>
            The Diamond Color Chart
          </Text>
          <LazyLoadImage
            src="https://www.diamonds.pro/wp-content/uploads/2022/02/Diamond-color-chart.png"
            effect="blur"
          />
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            What is a Diamond Color Chart?
          </Text>
          <Text fontSize={normalText}>
            To provide shoppers with an understanding of each diamond’s color
            level, grading entities like the Gemological Institute Of America
            (GIA) use a diamond color chart to judge diamonds based on their
            appearance and give each stone a color grade within a given scale.{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://4cs.gia.edu/en-us/diamond-color/"
              isExternal
            >
              GIA
            </LinkCharkaUI>{" "}
            are the worlds leading experts in certification and have taken the
            art of color grading to a science.
          </Text>
          <Text fontSize={normalText}>
            When you’re in the market for diamonds, it’s advisable to seek a GIA
            certificate for every diamond you view due to the varying degrees of
            color that you may come across.
          </Text>
          <Text fontSize={normalText}>
            The GIA grades Diamond Color on the following color scale (See here
            for the GIA’s diamond clarity chart)
          </Text>
          <TableContainer m={"20px 0 20px 0"} whiteSpace={"wrap"}>
            <Table size={"sm"} colorScheme="blue">
              <Thead bgColor={"blue.400"}>
                <Tr>
                  <Th>Diamond Color Grade: </Th>
                  <Th>Description: </Th>
                </Tr>
              </Thead>
              <Tbody>
                {colorTable.map((item, index) => (
                  <Tr key={index}>
                    <Td fontWeight={"bold"}>{item.type}</Td>
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
            The diamonds typically used in engagement rings tend to be of the
            near colorless variety, and you will find that they may contain
            small hints of yellow or brown in the diamond. The type of setting
            that is used can also change the perception of the diamond’s color
            as well as the lighting that the diamond is being shown in as
            described in the chart above. Keep all of these in mind when looking
            at the color of the diamonds.
          </Text>
          <Text fontSize={normalText}>
            <LinkCharkaUI
              color="blue.400"
              href="https://www.gia.edu/gems-gemology/summer-2022-gemnews-auction-highlights"
              isExternal
            >
              Look at some of the latest rare colorless diamonds sold in auction
              in 2022.
            </LinkCharkaUI>
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            The Fancy Colored Diamonds Color Scale
          </Text>
          <Text fontSize={normalText}>
            Color is graded in a different way for fancy color diamonds. While
            white diamonds receive a grade of D to Z, based on the yellow or
            brown tint present, fancy color diamonds are graded on the intensity
            of its color.
          </Text>
          <Text fontSize={normalText}>
            Instead of a letter, the grade for fancy color diamonds go from
            “Faint” to “Fancy Deep.” The color scale is as such:
          </Text>
          <UnorderedList m={"10px 0 20px 50px"} spacing={2} fontSize={"lg"}>
            <ListItem fontSize={normalText}>Faint</ListItem>
            <ListItem fontSize={normalText}>Very Light</ListItem>
            <ListItem fontSize={normalText}>Light</ListItem>
            <ListItem fontSize={normalText}>Fancy Light</ListItem>
            <ListItem fontSize={normalText}>Fancy</ListItem>
            <ListItem fontSize={normalText}>Fancy Intense</ListItem>
            <ListItem fontSize={normalText}>
              Fancy Vivid, Fancy Deep or Fancy Dark
            </ListItem>
          </UnorderedList>
          <Text fontSize={normalText}>
            To use fancy yellow diamonds as an example, a diamond with a “Faint”
            grade would be slightly more yellow than a Z grade white diamond.
            While a Fancy Intense or Fancy Vivid yellow diamond has a deep,
            almost golden hue.
          </Text>
          <Text fontSize={normalText}>
            Fancy Vivid or Fancy Intense diamonds are often the most
            sought-after fancy colored diamonds, and thus are usually the most
            expensive, whereas Faint or Light colors are more common and
            cheaper. id diamonds have a brighter hue than a Fancy Dark or Fancy
            Deep.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            Diamond Colors, Shapes and Settings
          </Text>
          <Text fontSize={normalText}>
            When looking at a range of diamonds, it’s important to pay close
            attention to a diamond’s coloring. In addition to the GIA Color
            Grading, be sure to review the diamond yourself or have an expert
            assist you to give you a better idea of its value instead of relying
            on your untrained eye.
          </Text>
          <Text fontSize={normalText}>
            When examining the diamonds, look for any noticeable tinting and
            note its interaction with both white light and colored light
            reflection.
          </Text>
          <Text fontSize={normalText}>
            Most importantly, ensure the diamond looks white in relation to its
            setting. The diamond you’re choosing should stand out as the bright,
            white focal piece of the jewelry. It is, after all, the most
            renowned part of the ring.
          </Text>
          <Text fontSize={normalText}>
            Based on diverse types of settings, here are our recommendations for
            diamond color based on diamond shape:
          </Text>
          <Text fontSize={normalText} m={"20px 0 0 0"} fontWeight={"bold"}>
            White Gold / Platinum Solitaire Ring
          </Text>
          <Text fontSize={normalText}>
            <strong>Round:</strong> H-J If you choose a grade higher than H,
            you’ll be paying for a feature you won’t be able to notice or
            appreciate with the naked eye.
          </Text>
          <Text fontSize={normalText}>
            <strong>Princess, emerald, asscher:</strong> G-I Grades.
          </Text>
          <Text fontSize={normalText}>
            <strong>All other diamond shapes: </strong>F-H Grades.
          </Text>
          <Text fontSize={normalText} m={"20px 0 0 0"} fontWeight={"bold"}>
            Yellow Gold Ring
          </Text>
          <Text fontSize={normalText}>
            <strong>Round:</strong> K-M Grades.
          </Text>
          <Text fontSize={normalText}>
            The yellow color of the gold is absorbed into the diamond’s color,
            so any grade higher than a K will look slightly yellowish anyway.
          </Text>
          <Text fontSize={normalText}>
            <strong>Princess, emerald, asscher:</strong> J-K Grades.
          </Text>
          <Text fontSize={normalText}>
            <strong>All other diamond shapes: </strong> I-J Grades.
          </Text>
          <Text fontSize={normalText} m={"20px 0 0 0"} fontWeight={"bold"}>
            Pave/Side-stone or Halo Settings
          </Text>
          <Text fontSize={normalText}>
            <strong>Round, princess, emerald and asscher:</strong> G-I Grades.
          </Text>
          <Text fontSize={normalText}>
            <strong>All other diamond shapes: </strong> F-H Grades.
          </Text>
          <Text fontSize={normalText}>
            <strong>All diamond shapes for halo: </strong> F-H Grades.
          </Text>
          <Text fontSize={normalText}>
            Let’s take a closer look by examining the two diamond color charts
            below. The same nine diamonds are displayed on the right side and
            the left side of the chart. On the right, the nine diamonds are face
            down and arranged in order by color. On the left, the order has been
            randomized.
          </Text>
          <Text fontSize={normalText} m={"0 0 20px 0"}>
            By looking at the pictures on the left, are you able to place them
            in the correct grading order?
          </Text>
          <LazyLoadImage
            src="https://www.diamonds.pro/wp-content/uploads/2009/06/ColorGrid1-e1451817859850.jpg"
            effect="blur"
          />
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            (Answer (on the left side) – First Row: G, L, E. Second Row: F, J,
            D. Third Row: H, K, I.)
          </Text>
          <Text fontSize={normalText}>
            As you may have noticed, it’s difficult for the eye to pick up on
            any one particular element of a diamond.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            What Your Eye Perceives About the 4 C’s of a Diamond
          </Text>
          <Text fontSize={normalText}>
            A diamond is an organic whole. Diamonds were formed from carbon
            hundreds of feet below the earth’s surface, and the carbon that
            formed the diamonds was also subjected to intense pressure and heat.
            This pressure and heat subsequently caused crystallization.
          </Text>
          <Text fontSize={normalText}>
            The <strong>4 C’s</strong> (cut, color, clarity and carat weight)
            combine to determine the beauty and brilliance of the diamond. For
            this reason, the naked eye will have a challenging time
            differentiating between just one aspect such as the color or the
            clarity of the diamonds (find out which one is more important –
            diamond color vs clarity).
          </Text>
          <Text fontSize={normalText}>
            Therefore, instead of focusing on one element such as color, it’s
            better to judge a diamond’s beauty as a whole.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            How Different Settings Affect Diamond Color
          </Text>
          <Text fontSize={normalText}>
            From this example, we can see just how slight the variations are
            between the color grades of D and J on a round brilliant diamond.
            Especially for rounds, but also for other shapes, color is a
            primarily relative characteristic.
          </Text>
          <Text fontSize={normalText}>
            In other words, an I-colored diamond truly only looks like an
            I-color when it’s placed next to a higher-colored diamond for
            comparison. In fact, comparison between two diamonds is how even
            expert diamond dealers and gemologists grade color. They place the
            diamond to be graded on a white folded card next to a master diamond
            to compare and determine the color.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
            Matching Center Diamond Color with Side Stones
          </Text>
          <Text fontSize={normalText}>
            Even for diamond experts, it’s difficult to assess a diamond’s color
            simply by looking at the diamond in question. Unless your loved one
            will be carrying around a set of GIA color samples to constantly
            compare their ring to, then you should worry little about color.
          </Text>
          <Text fontSize={normalText}>
            Color grade does become relevant, though, if you’re purchasing an
            engagement ring with side diamonds, or perhaps a three stone ring.
            We recommend that side (or accent) diamonds always either match the
            color grade of the center stone, or are slightly darker to accent
            the higher color grade of the center stone.
          </Text>
          <Text fontSize={normalText}>
            If you’re buying a classic solitaire engagement ring setting with no
            accent diamonds, use your budget in areas other than color to avoid
            spending on a feature that you won’t derive benefit or beauty from.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            FAQs About Diamond Color
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            What is the best value color for a diamond?
          </Text>
          <Text fontSize={normalText}>
            G, H and I color grades give the best value when purchasing a
            diamond. With these grades, you can get a diamond that appears
            colorless when set in a ring and observed under normal viewing
            conditions. Higher grades come with a much higher price, but no
            noticeable difference in quality.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            What color diamond is most purchased?
          </Text>
          <Text fontSize={normalText}>
            The most commonly purchased diamonds are those that are
            near-colorless, often with a faint yellowish tint, falling around
            the G to J range in color. These are more common than completely
            colorless diamonds, yet in most cases appear white or clear to the
            naked eye.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            What color in a diamond gives the most sparkle?
          </Text>
          <Text fontSize={normalText}>
            Colorless diamonds are the best at reflecting light and giving off
            the classic fire and brilliance you expect from a diamond. The best
            color grade for this is D color, but in reality anything from D
            through to I color should reflect light perfectly fine.
          </Text>
          <Text fontSize={normalText} fontWeight={"bold"}>
            Which color of diamond is the best?
          </Text>
          <Text fontSize={normalText}>
            The “best” diamond color grade (for “white” or colorless diamonds)
            is a D grade. This is the top of the diamond color scale, indicating
            the diamond is completely colorless, even when viewed under intense
            magnification.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={"bold"}
            m={"20px 0 0 0"}
          >
            Need Help Deciding the Right Diamond Color?
          </Text>
          <Text fontSize={normalText}>
            Searching for the perfect diamond is all about finding the elements
            that most heavily influence the diamond’s beauty and brilliance.
          </Text>
          <Text fontSize={normalText}>
            As long as you follow our guidelines below, there is no reason to
            overpay for color. Take a look at{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/diamond-details/16391861?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              this I color diamond from Blue Nile
            </LinkCharkaUI>{" "}
            compared to{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/diamond-details/14207131?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              this G color
            </LinkCharkaUI>
            . Once mounted, these diamonds will look identical color-wise.
            Without sacrificing any visual quality, you’re saving about 45% on
            the diamond.
          </Text>
          <Text fontSize={normalText}>
            The trick is to make sure the diamond looks white in relation to the
            setting. Here is{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/diamond-details/18419393?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              a stunning K color round diamond
            </LinkCharkaUI>{" "}
            in{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/engagement-rings/design-your-own-ring/east-west-solitaire-engagement-ring-in-14k-yellow-gold-item-195395?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              a yellow gold solitaire setting from Blue Nile
            </LinkCharkaUI>
            . Likewise, here is{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/diamond-details/18654011?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              a beautiful J color diamond from Blue Nile
            </LinkCharkaUI>{" "}
            in{" "}
            <LinkCharkaUI
              color="red.400"
              href="https://www.bluenile.com/engagement-rings/design-your-own-ring/petite-split-shank-solitaire-in-14k-rose-gold-item-192983?a_aid=dmnd1357&data1=39085"
              isExternal
            >
              a rose gold solitaire setting
            </LinkCharkaUI>
            .
          </Text>
          <Text fontSize={normalText}>
            Normally a J or K color could have a yellowish tint. However, since
            it’s contrasted to something darker (the yellow or rose gold) it
            appears clear and vibrant. On the other hand, here is a similar K
            color diamond in a halo setting from James Allen. As you can see,
            the result is underwhelming.
          </Text>
          <Text fontSize={normalText}>
            In one case, the K graded colored diamond gives you fantastic value
            (allowing you to get a larger diamond for your budget with no
            negative impact on the diamond’s appearance). In the other instance,
            the result is an undesirable ring that will leave you disappointed.
          </Text>
          <Text fontSize={normalText}>
            In one case, the K graded colored diamond gives you fantastic value
            (allowing you to get a larger diamond for your budget with no
            negative impact on the diamond’s appearance). In the other instance,
            the result is an undesirable ring that will leave you disappointed.
          </Text>
          <Text fontSize={normalText}>
            Still not sure which color to choose? If you want to make sure
            you’re navigating the diamond buying minefield properly, feel free
            to contact us for personal help. Our experts are here to do all of
            the heavy lifting and bring you only the very best diamonds to
            choose from.
          </Text>
          <EducationBottomLineRec
            content={colorBottomLineRec}
            whatToLookFor={colorBottomLineRecWhatToLookFor}
            whatToAvoid={colorBottomLineRecWhatToAvoid}
          />
        </Flex>
      </Flex>
    </>
  );
}

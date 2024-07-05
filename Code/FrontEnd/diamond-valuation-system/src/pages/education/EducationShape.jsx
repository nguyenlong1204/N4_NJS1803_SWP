import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Link as LinkCharkaUI,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../../components/Title";
import EducationShapeForm from "../../components/education/EducationShapeForm";
import EducationBottomLineRec from "../../components/education/EducationBottomLineRec";
import {
  shapeForm,
  shapeBottomLineRec,
  shapeBottomLineRecWhatToLookFor,
  shapeBottomLineRecWhatToAvoid,
} from "../../shared/SharedEducationShape";
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function EducationShape() {
  AOS.init();
  const bgColor = useColorModeValue("white", "black");
  const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <>
      <ScrollToTop smooth style={{display:"flex" ,alignItems:"center", justifyContent:"center", padding:"4px"}}/>
      <Container maxW={"100%"}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          paddingTop={10}
          bg={bgColor}
        >
          <div data-aos="fade-up" data-aos-duration="4000">
            <Title
              title={"A Guide to Diamond Shapes"}
              description={
                "All about diamond shapes and which diamond shapes are most popular in 2022"
              }
              width={"80%"}
            />
          </div>          
          <Divider m={"20px 0 20px 0"} />
          <Flex
            direction="column"
            w={{ base: "80vw", md: "70vw", lg: "60vw" }}
            gap={3}
          >
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Diamond shapes define the overall geometry and form of a diamond.
              From the classic Round to the unique Marquise, each shape offers
              distinct characteristics and aesthetics. While Round diamonds are
              the most popular, accounting for over 65% of diamonds sold, other
              shapes like Princess, Radiant, and Cushion have their own charm.
              Recently, Oval and Pear shapes have been gaining in popularity.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Settling on a diamond shape is mostly dependent on your personal
              style and preferences. In this article we will discuss each shape
              and help you with that decision.
            </div>
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                What Is a Diamond Shape?
              </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The term “diamond shape” refers the the geometric characteristics
              of a diamond. There are two major groups for diamond shapes: Round
              diamonds and fancy shapes diamonds. Round shape, or round
              brilliant cut, is the most popular and traditional cut by a
              considerable margin. That is why round shapes have always been
              their own category.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              There are also several fancy diamond shapes, such as pear, heart
              and trillion-shaped diamonds. Each shape has its own advantages
              and disadvantages, from its appearance and brilliance to the
              diamond price per carat.
            </div>
            </Text>
            <Box
              borderLeft={"2px solid"}
              borderColor={"blue.300"}
              bg={"blue.100"}
              padding={2}
            >
              <Text fontSize={normalText}>
                <div data-aos="fade-up" data-aos-duration="4000">
                  “Fancy Shaped or Fancy Cut diamonds (as they are also known) are
                  beautiful and sometimes even more affordable than the
                  traditional round brilliant. These geometric works of art are
                  created by diamond cutters who are master craftsmen with a
                  cutting wheel.”{" "}
                  <LinkCharkaUI
                    color={"blue.400"}
                    href="https://www.americangemsociety.org/fancy-these-four-fancy-shape-diamonds/"
                    isExternal
                  >
                    {" "}
                    American Gem Society
                  </LinkCharkaUI>
                </div>
              </Text>
            </Box>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/04/6A7A7777-Edited-2-1024x683.jpg"
              effect="blur"
            />
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Knowing the basic information about diamond shapes will help you
              select the perfect diamond for yourself, a loved one or your
              fiancé-to-be. Each shape offers a distinct set of recognizable
              differences that determine cost, quality and overall appeal.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Below, we’ve listed the 12 most popular diamond shapes. We’ve also
              provided an overview of what to look for in each shape, as well as
              each diamond shape’s key strong points and weaknesses.
            </div>
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                Diamond Shapes Chart
              </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Our diamond shapes guide will help you maximize your budget with
              your desired taste and style. With these notes in mind, you can
              select a diamond that will be cherished and admired for years to
              come.
            </div>
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                Diamond Shape vs. Diamond Cut?
              </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Diamond cut is sometimes used to refer to which shape the diamond
              is. This is a bit confusing. The reason for this is that each
              shape has a technical name that has the word cut in it (e.g. round
              brilliant cut). In this article, we are referring to the various
              shapes diamonds come in.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              To find your ideal diamond, first, select the desired shape. Then
              work toward finding that shape in the most appealing cut.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Although diamond shape and diamond cut are often used
              interchangeably when it comes to diamonds, they’re actually quite
              distinct, different terms. For more information on quality, check
              out our article on diamond cut.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The shape of a diamond is indicative of the outline or external
              figure of the diamond. For example, pear shaped, round brilliant
              and cushion all refer to the actual shape and appearance of the
              diamond.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Our diamond shapes guide will help you maximize your budget with
              your desired taste and style. With these notes in mind, you can
              select a diamond that will be cherished and admired for years to
              come.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Our diamond shapes guide will help you maximize your budget with
              your desired taste and style. With these notes in mind, you can
              select a diamond that will be cherished and admired for years to
              come.
            </div>
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/04/shapes-1024x992.png"
              effect="blur"
            />
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              <strong>Note:</strong> Length to width ratio is measured by
              dividing the length of the diamond by the width. For example, if a
              diamond has a length of 5mm and a width of 3mm, the length to
              width ratio is 1.67.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The length to width ratio signifies how proportionate the diamond
              is along with its intended shape (i.e. square vs. rectangular).
            </div>
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                Diamond Shapes: Which is Most Popular ?
              </div>
            </Text>
            {shapeForm.map((item, index) => (
              <EducationShapeForm
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                lengthToWidthRatio={item.lengthToWidthRatio}
                proTip={item.proTip}
                strongPoints={item.strongTips}
                sampleCost={item.sampleCost}
                sampleCostPrice={item.sampleCostPrice}
              />
            ))}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                Diamond Shapes: What is the Ideal Clarity?
              </div>
            </Text>
            <Box
              borderLeft={"2px solid"}
              borderColor={"blue.300"}
              bg={"blue.100"}
              padding={2}
            >
              <Text fontSize={normalText}>
              <div data-aos="fade-up" data-aos-duration="4000">
                ““Diamond clarity refers to the absence of inclusions and
                blemishes. Diamonds without these birthmarks are rare, and
                rarity affects a diamond’s value. Using the GIA International
                Diamond Grading System™, diamonds are assigned a clarity grade
                that ranges from flawless (FL) to diamonds with obvious
                inclusions (I3).”{" "}
                <LinkCharkaUI
                  color={"blue.400"}
                  href="https://www.gia.edu/gia-about/4cs-clarity"
                  isExternal
                >
                  {" "}
                  Gemological Institute of America (GIA){" "}
                </LinkCharkaUI>
              </div>
              </Text>
            </Box>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Different diamond shapes can affect the minimum clarity grade you
              should look for. Diamond clarity chart shows how many, how large
              and what types of imperfections are present in a diamond. The
              highest grade you can get in clarity is FL, or Flawless,
              indicating the diamond is completely clear of inclusions even
              under intense magnification.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Your aim shouldn’t be to find a flawless diamond, however.
              Instead, you’ll want to look for diamonds that are “eye-clean”,
              meaning they have no inclusions that are easily noticeable to the
              naked eye. Oftentimes a VVS or VS clarity diamond will look no
              different to a flawless diamond, yet it will carry a significantly
              lower price tag.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The threshold for what makes an eye-clean diamond can vary
              greatly, depending on size (it’s easier to spot imperfections in
              larger diamonds), as well as shape. Some diamond shapes hide or
              show inclusions better than others, allowing you to go with a
              lower clarity grade, without sacrificing quality.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Brilliant cuts, such as round, cushion, radiant, oval and pear
              shaped diamonds, all hide inclusions well, which may allow you to
              go as low as SI1 or SI2.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Princess cut diamonds, too, hide inclusions well, but with this
              shape you need to ensure that it doesn’t have any inclusions in
              its corners, as this can cause the diamond to chip if it knocks on
              something.
            </div>
            </Text>
            <Text fontSize={normalText} m={"0 0 20px 0"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Step cuts, unlike brilliant cuts, make it easier to notice
              inclusions. These shapes include asscher, emerald and baguette
              diamonds. The long, straight facets of these diamond shapes make
              imperfections very visible, so you should look for at least VS1 or
              VS2 in clarity here.
            </div>
            </Text>
            <Image />
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/05/shapes-blue-1-1024x489.png"
              effect="blur"
            />
            <Center>
              <Text fontSize={"md"}>
                <div data-aos="fade-up" data-aos-duration="4000">
                  Diamond Shape Chart
                </div>
              </Text>
            </Center>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                  FAQs About Diamond Shapes & Cuts
              </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Not sure which shape is best for you? Below, we’ve answered some
              of the most common questions about diamond shapes and cuts.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              What is the best engagement ring shape?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              There’s no “best” diamond shape for everyone. Each diamond shape
              has its own range of strengths and weaknesses, meaning that the
              best diamond shape for you depends on your personal tastes,
              preferences and budget.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The round brilliant cut offers the greatest level of brilliance
              and fire, meaning it tends to shine more than other diamond cuts.
              However, it’s also the most expensive diamond shape from a
              cost-per-carat perspective.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              From a value-for-money perspective, oval, pear and marquise
              diamonds often look larger than they are, meaning they offer a
              good combination of brilliance and value for money. Shapes like
              the princess cut are also a great value for money buy if you want
              to get the most carats for your budget.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              All in all, the best diamond shape comes down to your tastes,
              preferences, expectations and budget. There’s no “best” cut,
              meaning it’s best to choose something that you think your
              fiancé-to-be will enjoy and appreciate.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Diamond shape or diamond cut, what’s better?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Understand that diamond shape and cut are two very different
              things. Cut is a measurement of quality – diamonds are given
              grades for cut ranging from Poor to Excellent (or Ideal, depending
              on the grading entity), so it’s easy to say that one diamond has a
              better cut than another. Diamond cut is also the most important of
              the 4Cs that determines how much brilliance a diamond has.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Diamond shape, however, is a matter of personal preference rather
              than quality. There’s no one shape that is better or worse than
              another shape, so it’s not like diamond cut where you might put
              your budget towards the highest grade possible.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Which diamond shapes sparkles the most?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              As we mentioned above, the round diamond offers the greatest level
              of brilliance and fire, meaning it sparkles the most. With 58
              facets, the round brilliant cut is actually designed specifically
              to offer the most brilliance and fire.
            </div>
            </Text>
            <Text fontSize={normalText} m={"20px 0 20px 0"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Other diamond shapes that sparkle a lot include the:
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              <strong>Radiant cut</strong>. As its name suggests, the radiant
              cut is extremely brilliant, especially when exposed to light. A
              radiant cut diamond has 70 facets, allowing it to take in and
              reflect an incredible amount of light.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              <strong>Cushion cut</strong>. The cushion cut is based on a
              combination of the round brilliant cut and the classic old mine
              cut. This gives this shape a lot of brilliance and fire when it’s
              cut well. As an extra bonus, a cushion cut diamond is usually less
              expensive than a round brilliant cut diamond of equivalent cut
              quality, clarity, color and carat weight.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              <strong>Marquise cut</strong>. Marquise cut diamonds have 58
              facets, providing great brilliance and fire. Thanks to this cut’s
              unique shape, it also looks larger than other diamonds of an
              equivalent carat weight.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              <strong>Oval cut</strong>. Oval diamonds offer similar brilliance
              and fire to the round brilliant cut. Due to their shape, diamonds
              in this cut can also appear larger than others.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              While the shape of a diamond can affect its brilliance, it’s not
              the only factor that determines how much a diamond will sparkle.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The cut quality of a diamond has a huge impact on how much it will
              sparkle. While an Excellent (GIA) diamond will look fantastic in
              just about any shape, even a round brilliant cut diamond will have
              relatively little sparkle if it has a Fair or Poor cut grade.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Because of this, it’s important to look at more than just a
              diamond’s shape if you’re looking for a lot of fire and
              brilliance. While shape plays an important role, it’s not the only
              factor that determines how much light a diamond will reflect.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              What is the most expensive diamond shape?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The round brilliant cut is the most expensive diamond shape. This
              means that you’ll pay more for a 1 carat round brilliant diamond
              than you would for a diamond of equivalent cut quality, color,
              clarity and carat weight in a different shape.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The reason for this is the amount of rough diamond that’s cut away
              during the cutting and polishing process. On average, for a round
              brilliant cut, only about 40% of the original rough diamond is
              left in the finished diamond. In other words, around 60% of the
              rough diamond is wasted.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              As we’ve covered in our guide to the most affordable diamond
              shapes, the most affordable diamond shapes are usually those that
              use a large amount of the original rough diamond. These include
              the:{" "}
              <strong>
                asscher cut, emerald cut, radiant cut, cushion cut and princess
                cut
              </strong>
              .
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              With this said, each diamond’s characteristics can affect its
              pricing and overall value for money. For example, while an emerald
              cut diamond will cost less than a round brilliant cut diamond, its
              large table means it’s more likely to display inclusions or color.
              This means that you might need to buy a diamond with a higher
              color or clarity grade than you would for a round brilliant cut,
              negating some of the value for money factor.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Which diamond shape looks the biggest?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Generally, diamond cuts with an elongated shape, such as the
              marquise or pear cuts, look larger than diamonds with a round or
              square shape. This is because these shapes tend to have a larger
              surface area relative to the total weight of the diamond.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              This is occasionally referred to as “face-up size,” since it
              refers to the total area of the diamond that’s visible when it’s
              set in a diamond ring. Diamond shapes that appear larger than
              their carat weight include the:{" "}
              <strong>
                pear shape, oval cut, emerald cut, marquise cut and trillion cut
              </strong>
              .
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Of these shapes, the marquise cut usually looks the largest due to
              its length, giving it a more impressive face-up size than other
              cuts.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              The smallest looking diamonds cuts are the asscher, princess and
              cushion cuts. Because of their square length-to-width ratio, these
              diamond shapes all have a small diameter and surface area relative
              to their carat weight.
            </div>
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"}>
            <div data-aos="fade-up" data-aos-duration="4000">
              What is the most popular diamond shape?
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Round cut diamonds are the most popular diamond shape.
              Approximately 60% of all engagement rings feature a round cut
              diamond and approximately 75% of all diamonds sold are round cuts.
            </div>
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              <div data-aos="fade-up" data-aos-duration="4000">
                Need Help With Diamonds? Contact Our Experts
              </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Understanding the basics of each diamond shape allows you to
              select what’s right for you or your loved one from a variety of
              options. Feel free to use this diamond shapes guide as you search
              for diamonds on the internet or in stores.
            </div>
            </Text>
            <Text fontSize="lg">
            <div data-aos="fade-up" data-aos-duration="4000">
              In the end, it’s most helpful to consider the unique person, style
              and occasion for which you are purchasing the diamond. For
              example, if it’s for an engagement ring, you’ll want to make sure
              your spouse-to-be will be comfortable and excited to wear the
              diamond for many years to come.
            </div>
            </Text>
            <Text fontSize={normalText}>
            <div data-aos="fade-up" data-aos-duration="4000">
              Still unsure of which diamond shape to buy? Contact us and we’ll
              be happy to share our expert advice and even help you search for
              diamonds—bringing you only the very best to choose from.
            </div>
            </Text>
            <EducationBottomLineRec
              content={shapeBottomLineRec}
              whatToLookFor={shapeBottomLineRecWhatToLookFor}
              whatToAvoid={shapeBottomLineRecWhatToAvoid}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

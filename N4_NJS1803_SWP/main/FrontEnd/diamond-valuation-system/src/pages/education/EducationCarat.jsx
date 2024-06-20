import {
  Divider,
  Flex,
  Image,
  Link as LinkCharkaUI,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Center,
  useColorModeValue,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as LinkRouterDom } from "react-router-dom";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "../../components/Title";
import EducationFAQs from "../../components/education/EducationFAQs";
import routes from "../../config/Config";
import { caratTable, caratFAQs } from "../../shared/SharedEducationCarat";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "react-scroll-to-top";
export default function EducationCarat() {
  const bgColor = useColorModeValue("white", "black");
  const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <>
      <ScrollToTop smooth />
      <Container maxW={"100vw"}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg={bgColor}
          paddingTop={10}
        >
          <Title
            title={"Understanding Diamond Size Chart"}
            description={
              "Understanding the diamond size chart and which diamond carat size is best for you"
            }
            width={"80vw"}
          />
          <Divider m={"20px 0 20px 0"} />
          <Flex
            direction="column"
            w={{ base: "80vw", md: "70vw", lg: "60vw" }}
            gap={3}
          >
            <Text fontSize={normalText}>
              Carat, one a diamond's 4cs, describes the weight, not the size of
              a diamond. Diamond carats have a weight equivalent of 0.20 grams.
              So a one-carat diamond is 0.20 grams, and a five-carat diamond is
              one gram. The carat weight plays no role in determining the beauty
              and sparkle of a diamond.
            </Text>
            <Text fontSize={normalText} fontWeight={"bold"} m={"20px 0 0 0"}>
              Bottom Line Recommendation:
            </Text>
            <Text fontSize={normalText} fontStyle="italic">
              Choose the lowest grades of the diamond color scale and diamond
              clarity chart that still look great to the naked eye, and then
              choose the largest diamond carat weight that still fits within
              your budget. Some salespeople might try to push “only the best” on
              you. Keep in mind that if you follow that route, you may end up
              with a{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/18302318?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                diamond like this one from Blue Nile
              </LinkCharkaUI>{" "}
              for your $5,000 budget. Yet{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/15846995?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                this gorgeous diamond from Blue Nile {""}
              </LinkCharkaUI>
              will look just as perfect as the previous diamond, yet it's 28%
              larger for the same price.
            </Text>
            <Text fontSize={normalText} fontStyle="italic">
              Another issue we will address is the law of diminishing returns.
              For example, you may think{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/17095129?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                this diamond from Blue Nile
              </LinkCharkaUI>{" "}
              is a great deal compared to{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/18535658?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                this diamond from Blue Nile
              </LinkCharkaUI>{" "}
              . After all, it's 3% larger and only $180 more. In reality, there
              is no person on earth who can tell the difference in size between
              these two diamonds without using a scale. It's $180 down the
              drain.
            </Text>
            <Text fontSize={normalText} fontStyle="italic">
              You are best off asking one of our experts to guide you through
              this process. They will be able to help you find the balance
              between “getting the biggest diamond” and “not wasting money to
              gain carat size that won't be noticeable.” You can also refer to
              our diamond carat size chart below.
            </Text>
            <Text fontSize={normalText} fontStyle="italic">
              Always keep in mind the cut quality, since a poorly cut heavier
              diamond can look smaller than an excellently cut lighter diamond.
              That's why it's important to make sure your diamond is{" "}
              <LinkRouterDom
                to={routes.educationCertificate}
                style={{ color: "#4299E1" }}
              >
                GIA certified
              </LinkRouterDom>{" "}
              . For example,{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/15825264?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                this 1 carat diamond from Blue Nile
              </LinkCharkaUI>{" "}
              has a terrible cut with a 64.6% depth. Its diameter is only about
              6.20mm. On the other hand,{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-details/17411169?a_aid=dmnd1357&data1=5454"
                isExternal
              >
                this beautifully cut 1 carat diamond from Blue Nile
              </LinkCharkaUI>{" "}
              has an Ideal cut with an easily noticeably larger diameter of
              6.5mm.
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/04/cuts-blue.png"
              effect="blur"
            />
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              Diamond Size Chart: MM to Carat Weight
            </Text>
            <Text fontSize={normalText}>
              A diamond size chart can help you determine what might be the
              right carat weight for you by providing a mm to carat comparison.
              The diamond carat size chart is meant to be a reference point, as
              diameters of diamonds vary based on cut quality.
            </Text>
            <Text fontSize={normalText}>
              In the diamond size chart below, we display the diamond’s diameter
              mm to carat weight based on averages of round brilliant diamonds.
              For example, a round diamond’s diameter of 9.00mm to carat is
              2.75ct on average.
            </Text>
            <TableContainer>
              <Table size={"sm"} colorScheme="blue">
                <Thead>
                  <Tr>
                    <Th>Round MM Size</Th>
                    <Th>Round Carat Weight</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[...caratTable].slice(0, 10).map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.size}mm diameter</Td>
                      <Td>{item.weight} ct</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <TableContainer m={"20px 0 20px 0"}>
              <Table size={"sm"} colorScheme="blue">
                <Thead bgColor={"blue.400"}>
                  <Tr>
                    <Th>Round MM Size</Th>
                    <Th>Round Carat Weight</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[...caratTable].slice(10, 20).map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.size}mm diameter</Td>
                      <Td>{item.weight} ct</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Text fontSize={normalText}>
              To imagine the diamond sizes even better, take a look at this
              simple image comparison to a US quarter:
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2019/11/diamonds_all_cuts-02_round_cut.jpg"
              effect="blur"
            />
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              fontStyle={"italic"}
            >
              *This graphic shows mm to carat for various carat weights of a
              round diamond.
            </Text>
            <Text fontSize={normalText} m={"20px 0 0 0"}>
              See below the average measurements of the basic carat weights of
              each shape:
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2023/07/Diamond-Carat-Size-Chart-Frame.png"
              effect="blur"
            />
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              What is a Diamond Carat Size?
            </Text>
            <Text fontSize={normalText}>
              According to Wikipedia, the term diamond carat comes from the
              Greek word meaning “fruit of the carob tree.”
            </Text>
            <Text fontSize={normalText}>
              But you should understand that carat is actually a measurement of
              weight, not size.{" "}
              <strong>
                One carat is equal to 0.2 grams, or 200 milligrams.
              </strong>{" "}
              So diamond carat size is something of a misnomer, as a diamond's
              carat doesn't tell you exactly how big or small it is - though
              there is a correlation. As{" "}
              <LinkCharkaUI
                color={"blue.400"}
                href="https://4cs.gia.edu/en-us/blog/gia-diamond-grading-reports-understanding-carat-weight/"
                isExternal
              >
                GIA
              </LinkCharkaUI>
              , the worlds leading diamond grading lab, says “carat weight seems
              like a straightforward measurement, but there is more to it than a
              simple number”.
            </Text>
            <Image src="https://www.diamonds.pro/wp-content/uploads/2022/04/carat-weight.png" />
            <Text fontSize={normalText}>
              In ancient times, the seeds of the carob pod were used as
              standards for weight measurements, since the size of their seeds
              were almost always identical. This provided a natural standard of
              measurement.
            </Text>
            <Text fontSize={normalText}>
              In 1907 at the Fourth General Conference on Weights and Measures,
              it was agreed that a modern diamond carat should equal precisely
              200 milligrams. This is technically known as a metric carat, and
              is the standard diamond carat weight that is used universally
              today.
            </Text>
            <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
              Why Does Diamond Carat Size Matter?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              The truth is, it doesn’t matter. Think about it. When you look at
              a diamond set in a ring, what does your eye see? Does your eye see
              weight, or does your eye see physical size? Obviously, your eye
              can only see physical dimensions—light doesn’t carry weight
              information back to your eye.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              And if you think about it even more, your eye also doesn’t see the
              total physical size of the diamond, because most of it will be
              covered in jewelry. All you can really see when you look at a
              diamond is the size of its surface area on the top of the diamond,
              as displayed above in our diamond carat size chart.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              However, carat weight is important when it comes to the diamond
              price. And where do you find the actual diamond carat weight?
              That’s where a
              <LinkCharkaUI
                color={"blue.400"}
                href="https://4cs.gia.edu/en-us/diamond-grading-report/"
                isExternal
              >
                {" "}
                certificate
              </LinkCharkaUI>
              , such as GIA, comes into play. It includes all the diamond
              details you’re ever going to need.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              You are best off asking one of our experts to guide you through
              this process. They will be able to help you find the balance
              between “getting the biggest diamond” and “not wasting money to
              gain carat size that won’t be noticeable.”
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              For a round diamond, that’s the diameter, and for other shapes,
              it’s a function of length and width. For simplicity’s sake, for
              the rest of this article, I will refer to diameter, but what I am
              writing applies equally to non-round shapes.
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              Eye-Cleanliness is Paramount
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Even though this article is about carat size, eye-cleanliness is
              an important part of picking out a diamond. In our opinion, a
              consumer’s goal should be to find the cheapest (in regards to
              clarity; other factors matter as well) “eye-clean” diamond you can
              find. We use “eye-clean” to describe diamonds that may have
              inclusions if you look at them with a magnifying glass (or
              microscope or loupe), but the typical person can’t see the
              inclusion with their naked eye.
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/03/eye-clean-static.jpg"
              effect="blur"
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              We have recently developed Ringo, a patented artificial
              intelligence model, that can examine videos of diamonds and
              determine if they are eye-clean. Ringo will also filter for other
              parameters like making sure the diamond is well-cut, doesn’t have
              fluorescence issues and will match the style setting you choose.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              Carat and Diameter Correlation
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Now, obviously, there is a direct correlation between the diamond
              carat weight and the diameter of a diamond. It’s mathematically
              impossible for a 0.05ct diamond to have more surface area than a 1
              carat diamond.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              But because cut qualities can vary greatly, there is a vast amount
              of variance in the range of possible diameters for any given carat
              weight.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              In my experience at Leo Schachter, a 1 carat diamond ring can have
              a diameter that ranges from 5.60mm (a horrifically ugly deep
              diamond) all the way to about 6.60mm (a shallow “flat” diamond).
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Take a look at these three diamonds. They are all the same exact
              carat weight – 1.20ct.
            </Text>
            <Flex direction="column" alignItems={"center"} gap={3}>
              <LazyLoadImage
                src="https://www.diamonds.pro/wp-content/uploads/2021/05/Deep-cut.png"
                effect="blur"
              />
              <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                Deep Cut
              </Text>
            </Flex>
            <Flex direction="column" alignItems={"center"} gap={3}>
              <LazyLoadImage
                src="https://www.diamonds.pro/wp-content/uploads/2021/05/Deep-cut.png"
                effect="blur"
              />
              <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                Shallow Cut
              </Text>
            </Flex>
            <Flex direction="column" alignItems={"center"} gap={3}>
              <LazyLoadImage
                src="https://www.diamonds.pro/wp-content/uploads/2021/05/Ideal-cut.png"
                effect="blur"
              />
              <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                Ideal Cut
              </Text>
            </Flex>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              The <strong>first diamond</strong> is very deeply cut. You can see
              the diamond is very dark in the middle and has a diameter of
              6.73mm.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              The <strong>second diamond</strong> is very shallow and has a
              diameter of 7.03. This diamond looks glassy and won’t have much
              sparkle in natural light.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              The <strong>third diamond</strong> looks exactly like a round
              diamond should look. The proportions are perfect and the diamond
              will be very brilliant.
            </Text>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2022/03/cuts.jpg"
              effect="blur"
            />
            <Center>
              <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                Diamonds cuts and light refraction
              </Text>
            </Center>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              How Big is a 1 Carat Diamond?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              A one carat round diamond will usually have a diameter of 6.4mm,
              which comes out to approximately 1/4 of an inch.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              How Big is a Half Carat Diamond?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              A half carat diamond is usually 5.1mm in diameter. That is 1/5th
              of an inch. To compare that, a one carat diamond is 6.4mm. So
              while the one carat is double the weight, the face of the half
              carat diamond is only 21% smaller.
            </Text>
            <Image />
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2019/12/0.5ct-round.jpg"
              effect="blur"
            />
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              And how much does it weight? It weighs exactly half of a one carat
              diamond. Half carat diamonds are also referred to as ½ carat
              diamonds, .5 diamonds, 0.5ct diamonds, or 50 point diamonds.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Examples of beautiful half carat diamonds include this round
              brilliant from James Allen and this cushion cut diamond from Blue
              Nile. See our diamond size chart above for mm to carat for a half
              carat diamond.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              How Big is a 1/4 Carat Diamond?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              A 1/4 carat round diamond will typically have a diameter of 4.0mm,
              or 0.15 inches.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              Do Lab Diamonds Weight the Same As Natural Diamonds?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Yes, lab-grown diamonds weigh the same, and are measured the same
              in terms of weight, as natural or Earth-grown diamonds.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Lab diamonds are exactly the same, chemically and physically, as
              diamonds formed naturally in the Earth. They are graded the same
              way as well, across the 4 C’s, which includes carat weight.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              That means everything in this article, such as how carat weight
              translated to actual carat size, applies to diamond sizes for both
              lab-grown and natural diamonds.
            </Text>
            <EducationFAQs
              name={"FAQs About Diamond Carat Weight"}
              content={caratFAQs}
            />
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
            >
              Need Help Choosing The Right Diamond Size?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              So as you can see, while weight, as one of the 4 C’s of diamonds,
              should matter to you because it will help determine how much you
              are going to pay, what you should really be focusing on is the
              diamond cut and diameter.
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              After all, wouldn’t you rather have a perfectly cut 0.90ct{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.briangavindiamonds.com/?a_aid=y"
                isExternal
              >
                Brian Gavin Signature cut{" "}
              </LinkCharkaUI>{" "}
              diamond that is 6.2mm and looks fantastic yet is cheaper than a
              1.00ct diamond that is only 6.1mm and looks terrible?
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              If you need help searching for a diamond, feel free to contact our
              experts. We have years of expertise in the diamond industry, and
              we can assist you with any questions that come up during your
              search, related to diamond carat size or anything else. We’ll help
              you judge whether a higher-carat diamond is really worth the
              money, so you can come out with the perfect diamond for your
              budget.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

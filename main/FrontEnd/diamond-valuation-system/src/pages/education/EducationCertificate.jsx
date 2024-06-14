import {
  Divider,
  Flex,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Link as LinkCharkaUI,
  Box,
  useColorModeValue,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as LinkReactRouterDOM } from "react-router-dom";
import Title from "../../components/Title";
import EducationFAQs from "../../components/education/EducationFAQs";
import { certificateFAQs } from "../../shared/SharedEducationCertificate";
import routes from "../../config/Config";
import ScrollToTop from "react-scroll-to-top";
export default function EducationCertificate() {
  const bgColor = useColorModeValue("white", "black");
  const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <>
      <ScrollToTop smooth />
      <Container mawW={"100vw"}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg={bgColor}
          paddingTop={10}
        >
          <Title
            title={"A Complete Guide to Diamond Certification"}
            description={
              "Why independent lab certification is so important when buying a diamond"
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
              A diamond's certification offers a detailed breakdown of its
              characteristics, including its 4Cs: carat weight, color, clarity,
              and cut quality. Notably, the{" "}
              <LinkCharkaUI
                color={"blue.400"}
                href="https://www.gia.edu/"
                isExternal
              >
                Gemological Institute of America (GIA)
              </LinkCharkaUI>
              is a leading authority in this field. A diamond's final grading
              significantly impacts its price. Always ensure that the diamond
              you're considering comes with a reputable lab certification, as
              this guarantees you're paying a fair price for its actual quality.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              What Is Diamond Certification?
            </Text>
            <Text fontSize={normalText}>
              Diamond certificates, or grading reports, are issued by accredited
              gemological laboratories, such as the Gemological Institute of
              America (GIA). The diamond certificates contain information and
              grades for each of a diamonds characteristics based on the 4Cs -{" "}
              <LinkReactRouterDOM to={routes.educationCarat}>
                carat weight
              </LinkReactRouterDOM>
              ,{" "}
              <LinkReactRouterDOM to={routes.educationColor}>
                color
              </LinkReactRouterDOM>
              ,{" "}
              <LinkReactRouterDOM to={routes.educationColor}>
                clarity
              </LinkReactRouterDOM>
              , and{" "}
              <LinkReactRouterDOM to={routes.educationColor}>
                cut quality
              </LinkReactRouterDOM>
              . The final grading has a major influence on the diamond's price.
            </Text>
            <Text fontSize={normalText}>
              Along with each diamond you're considering, you should receive and
              review its lab certification. This lab report or certificate will
              be issued by a grading entity and describes various elements of
              the diamond, such as color, clarity, length and width. Trained
              professionals evaluate, scrutinize and measure the diamonds using
              professional tools, such as a loupe or microscope.
            </Text>
            <Text fontSize={normalText}>
              Each entity grades and describes diamonds differently—and
              sometimes the difference is significant. Several lab entities
              exist and it's important to know which ones are trustworthy and
              reliable, and which ones are not.
            </Text>
            <Text fontSize={normalText}>
              Because diamond certificates are not created equal, the price and
              value of diamonds are not comparable across varying
              certifications. Ensure that you purchase a diamond with a
              certificate from a highly reputable grading entity—and that you
              review the diamond closely before purchase.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              What to Look for in a Diamond Ring Certification
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              Consistency comes first
            </Text>
            <Text fontSize={normalText}>
              When it comes to comparing lab grading entities, it's more
              important to watch for consistency than the strictness of grading.
            </Text>
            <Text fontSize={normalText}>
              For example, the GIA will not grade a diamond the same way the IGI
              rates a diamond. The reliability of the color and clarity
              grades—and in some instances the cut grades—is only as good as the
              certifying lab's reputation. But if one lab consistently gives a
              single clarity grade higher than another lab, that lab is by no
              means less “authentic.”
            </Text>
            <Text fontSize={normalText}>
              <LinkCharkaUI
                color={"blue.400"}
                href="https://4cs.gia.edu/en-us/why-gia-diamond-grading-report/"
                isExternal
              >
                GIA
              </LinkCharkaUI>
              , the world leader in certification puts it this way: “The GIA
              Diamond Grading Report is similar to house deeds or vehicle
              registrations in that it offers information on your purchase, and
              this information can be used to determine the value of the
              purchase.”
            </Text>
            <Text fontSize={normalText}>
              Rather than simply comparing grades between certifications, look
              for consistency within the entity's grading decisions.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              Diamond grading is subjective
            </Text>
            <Text fontSize={normalText}>
              All diamond grading is subjective—and contrary to popular
              belief—there is not a central organization that mathematically
              defines what a “G” color is or what an “SI1” clarity looks like.
            </Text>
            <Text fontSize={normalText}>
              If one lab consistently calls one color grade “G” while another
              lab will consistently calls that same color “H”, it's perfectly
              acceptable and reasonable—as long as they do so consistently.
            </Text>
            <Text fontSize={normalText}>
              It's important to note that even when an entity is consistent in
              its grading, it doesn't necessarily mean the entity is reliable
              and trustworthy. Buying a diamond with a weak certificate at a
              high price point is not prudent—even if the entity consistently
              grades diamonds this way—because you are not getting the value for
              the price you're paying.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              Considering the price over the certification
            </Text>
            <Text fontSize={normalText}>
              Regardless of the certificate you receive, the price of the
              diamond should be heavily evaluated. The price should reflect the
              actual quality, beauty and Cut of the diamond—both on the
              certificate and to the naked eye.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              Different certification labs give different results
            </Text>
            <Text fontSize={normalText}>
              Every lab has its quirks. Some are looser in grading diamond
              clarity, while others are looser in rating color. Some labs will
              always upgrade specific color ranges, while others favor
              particular arrangements of inclusions.
            </Text>
            <Text fontSize={normalText}>
              Smart diamond companies use this knowledge—gained from sending
              thousands of diamonds to different labs each month—to maximize
              their results. Knowing which labs are trustworthy and consistent
              will help you avoid purchasing a diamond worth much less than what
              the certificate is stating to be true.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              What Are The Best Diamond Certifications?
            </Text>
            <Text fontSize={normalText}>
              The best diamond certifications are the GIA and AGS because
              they’re the most consistent lab grading entities. That means you
              can trust their grading in all aspects like color, clarity and
              diamond cut. These labs also grade more rigorously than other
              labs. When a diamond comes with a GIA or AGS certificate, you can
              trust what the report is saying. That’s why we only recommend
              buying diamonds with GIA and AGS certificates.
            </Text>
            <Text fontSize={normalText}>
              The top two diamond certifications are:
            </Text>
            <OrderedList m={"0 0 0 50px"}>
              <ListItem>GIA (Gemological Institute of America)</ListItem>
              <ListItem>AGS (American Gem Society)</ListItem>
            </OrderedList>
            <LazyLoadImage
              src="https://www.diamonds.pro/wp-content/uploads/2023/02/diamond-certification.png"
              effect="blur"
            />
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              1. GIA Certification
            </Text>
            <Text fontSize={normalText}>
              The GIA (Gemological Institute of America) is the most
              well-respected and renowned diamond grading entity. They are
              incredibly consistent and provide the greatest peace of mind when
              purchasing any diamond.
            </Text>
            <Text fontSize={normalText}>
              GIA has no financial stake in the sale of the diamond and
              evaluates diamonds on a variety of qualities and elements,
              including:
            </Text>
            <UnorderedList fontSize={normalText} spacing={2} m={"0 0 0 50px"}>
              <ListItem>Diamond's evaluation date</ListItem>
              <ListItem>Measurements (in millimeters)</ListItem>
              <ListItem>Cutting style and diamond shape</ListItem>
              <ListItem>Carat weight</ListItem>
              <ListItem>Table %</ListItem>
              <ListItem>Depth %</ListItem>
              <ListItem>Culet size</ListItem>
              <ListItem>Symmetry</ListItem>
              <ListItem>Proportion diagram</ListItem>
              <ListItem>Polish grade</ListItem>
              <ListItem>Girdle thickness</ListItem>
              <ListItem>Cut grade (Excellent, Very Good, Good, Poor)</ListItem>
              <ListItem>Color grade (ranging from D to J)</ListItem>
              <ListItem>
                Clarity grade (IF, VVS1, VVS2, VS1, VS2, SI1, SI2)
              </ListItem>
              <ListItem>
                Diamond plot showing all blemishes and inclusions
              </ListItem>
              <ListItem>Fluorescence grade</ListItem>
              <ListItem>Laser inscription (if applicable)</ListItem>
              <ListItem>Security features</ListItem>
              <ListItem>General comments</ListItem>
            </UnorderedList>
            <Text fontSize={normalText}>
              GIA has a reputation for rating rated Color and Clarity, the most
              subjective scales, more rigorously. Because of GIA’s high
              reputation, proven consistency and history, we recommend only
              buying diamonds with a GIA or AGS certificate. Now,{" "}
              <LinkCharkaUI
                color={"blue.400"}
                href="https://rapaport.com/news/advertorial-gia-full-disclosure-at-your-fingertips/"
                isExternal
              >
                GIA even certifies lab-grown diamonds.
              </LinkCharkaUI>
            </Text>
            <Text fontSize={normalText}>
              We recommend these diamond sellers who provide GIA certificates
              with their diamonds:
            </Text>
            <UnorderedList fontSize={normalText} spacing={2} m={"0 0 0 50px"}>
              <ListItem>
                <LinkCharkaUI
                  color={"red.400"}
                  href="https://www.briangavindiamonds.com/?a_aid=y"
                  isExternal
                >
                  Brian Gavin Diamonds
                </LinkCharkaUI>
                : 20+ years of experience, dedicated to offering the best cut
                diamonds. They offer a collection called “Brian Gavin Signature”
                Hearts & Arrows, showcasing super ideal cuts
              </ListItem>
              <ListItem>
                <LinkCharkaUI
                  color={"red.400"}
                  href="https://www.bluenile.com/?a_aid=dmnd1357%3Fa_aid%3Ddmnd1357&data1=5457"
                  isExternal
                >
                  Blue Nile
                </LinkCharkaUI>
                : 17+ years of experience, offering the largest inventory of
                diamonds. Blue Nile provides excellent diamond quality and an
                array of well-crafted settings.
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              2. AGS Certification
            </Text>
            <Text fontSize={normalText}>
              The AGS (American Gem Society) prides itself on being the original
              lab to provide diamond cut grades. Long before the GIA introduced
              their cut grade a few years ago, the AGS has been offering its
              unique cut grade scale from 0 to 9 (with 0 being termed “ideal”).
            </Text>
            <Text fontSize={normalText}>
              Back in those days, the AGS had the monopoly on the “ideal cut”
              market (with top vendors such as{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.briangavindiamonds.com/?a_aid=y"
                isExternal
              >
                Brian Gavin Diamonds
              </LinkCharkaUI>
              ). A diamond couldn't be called “ideal” unless it has an AGS
              certificate claiming so. Now that the GIA has entered the cut
              grade game, though, their share in this market has dropped
              significantly.
            </Text>
            <Text fontSize={normalText}>
              The AGS generally tries to bill itself as being a bit more fancy
              and refined than the GIA. In reality, there's hardly anything at
              all to distinguish the two laboratories.{" "}
              <LinkCharkaUI
                color={"blue.400"}
                href="https://www.americangemsociety.org/"
                isExternal
              >
                AGS is still the go-to choice for many retailers
              </LinkCharkaUI>{" "}
              selling perfectly cut round diamonds.
            </Text>
            <Text fontSize={normalText}>
              The one issue to look out for is “upgrade shopping”. No lab is
              100% accurate as color and clarity are not objective grades (like
              weight and dimensions are). If there is a diamond that is
              somewhere in between grades, a manufacturer or retailer may send
              the diamond to multiple laboratories looking for the better grade.
              For example, say a diamond is a weak I color or strong J color,
              and they received a J color from GIA. The wholesaler/retailer may
              try sending it to AGS for the I color (they can then sell it for
              much more money). Its far more likely that the grades will be the
              same, but its possible they will get the upgrade (which more than
              makes up for the cost of sending it to AGS for certification).
            </Text>
            <Text fontSize={normalText}>
              It is very common for companies to use AGS for branded super ideal
              diamonds (like True Hearts, or Hearts on Fire). But AGS is not as
              commonly used for non-round diamonds. So if a retailer has 50
              cushion cut diamonds, 49 of which are GIA certified and one AGS
              diamond, that diamond is likely to have received an upgrade.
            </Text>
            <Text fontSize={normalText}>
              This is not a knock on AGS, merely an observation of how some
              wholesalers and retailers may try to take advantage of the end
              consumer. All in all, AGS is a very reliable laboratory. We only
              recommend diamonds certified by GIA or AGS and we only work with
              vendors (such as{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.briangavindiamonds.com/?a_aid=y"
                isExternal
              >
                Brian Gavin Diamonds
              </LinkCharkaUI>
              , and{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/?a_aid=dmnd1357%3Fa_aid%3Ddmnd1357&data1=5457"
                isExternal
              >
                Blue Nile
              </LinkCharkaUI>
              ) that emphasize these two labs.
            </Text>
            <Text fontSize={normalText}>
              GIA has a reputation for rating rated Color and Clarity, the most
              subjective scales, more rigorously. Because of GIA’s high
              reputation, proven consistency and history, we recommend only
              buying diamonds with a GIA or AGS certificate. Now, GIA even
              certifies lab-grown diamonds.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              3. IGI Certification
            </Text>
            <Text fontSize={normalText}>
              The IGI (International Gemological Institute) began as the blue
              collar workhorse of the diamond business.
            </Text>
            <Text fontSize={normalText}>
              They were the most popular gem lab for major jewelry chains in the
              United States and Canada, like Kay, Zales and others.
            </Text>
            <Text fontSize={normalText}>
              IGI is like a factory: they work fast, and their prices are much
              better than those of GIA—which appeals to diamonds sellers but not
              necessarily the end consumer.
            </Text>
            <Text fontSize={normalText}>
              While IGI bills itself as a top-of-the-line laboratory, this is
              unfortunately not the case. From extensive experience in the
              diamond industry, we have continually seen that their grading is
              lax and less consistent than the standard bearers in the industry,
              like GIA.
            </Text>
            <Text fontSize={normalText}>
              Even the{" "}
              <LinkCharkaUI
                color={"blue.400"}
                href="https://jcrs.com/newsletters/2006/2006_09.htm"
                isExternal
              >
                largest jewelry insurance underwriter
              </LinkCharkaUI>{" "}
              writes:
            </Text>
            <Box borderLeft={"2px solid"} borderColor={"blue.400"} p={4}>
              <Text fontSize={"md"} fontStyle={"italic"} fontWeight={"light"}>
                “The most reliable diamond certificates (also called diamond
                reports) come from the Gemological Institute of America (GIA)
                and the American Gem Society (AGS). These are the most respected
                labs, known for their accuracy and professionalism. These
                reports are not appraisals and do not carry valuations.
                Certificates from any other sources are often questionable and
                should not be relied upon by insurers.”
              </Text>
            </Box>
            <Text fontSize={normalText}>
              Buying a diamond with an independent certificate should give you
              peace of mind, knowing your diamond is equivalent to the quality
              and value that is claimed. With our years of expertise, we do not
              believe IGI certificates provide this assurance.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              4. EGL Certification
            </Text>
            <Text fontSize={normalText}>
              The EGL (European Gemological Laboratory)—vastly and
              inconsistently—inflates their quality claims. When considering an
              EGL certified diamond, you may think you’re getting a better deal.
              In reality, the price is highly inflated for an inferior product.
            </Text>
            <Text fontSize={normalText}>
              We unfortunately have seen many customers purchase an EGL
              certified diamond thinking they found a great deal, only to
              realize they fell for a selling trick
            </Text>
            <Text fontSize={normalText}>
              As an example of one of these selling tricks, we found an EGL
              certified 1.00 Carat H VS1 ideal cut online for $4,450. At first,
              it seems like an incredible deal. In reality, though, when EGL
              claims it's an H VS1, 50% of the time it's actually a J SI1—and
              50% of the time it's a J SI2 or K SI1: not an H VS1.
            </Text>
            <Text fontSize={normalText}>
              Searching for a GIA certified diamond two or three Color grades
              lower or one or two Clarity grades lower will ensure you purchase
              a higher quality diamond for a cheaper price.
            </Text>
            <Text fontSize={normalText}>
              <strong>
                {" "}
                The bottom line is: don't buy an EGL certified diamond.
              </strong>{" "}
              No matter how “cheap” it seems to you compared to GIA certified
              diamonds, it's all a game.
            </Text>
            <Text fontSize={normalText}>
              Any EGL certified stone in the market is, by definition, more
              expensive than its identical self as certified by the GIA.
            </Text>
            <Text fontSize={normalText}>
              As evidence, we sent in the same four diamonds to EGL to receive
              Color and Clarity gradings — the most subjective scales.
            </Text>
            <Text fontSize={normalText}>
              It's evident that the EGL graded the diamonds higher than the
              other labs. An EGL graded diamond with a Clarity of VS2, for
              example, it is not comparable to a VS2 given by the GIA. For this
              reason, the price and value of a EGL diamond is incomparable and
              inequivalent to a diamond certified by GIA.
            </Text>
            <Text fontSize={normalText}>
              In addition, the two EGL labs that graded these diamonds offered
              different results. The inconsistency among the labs makes it
              difficult to trust the grading and verify the actual quality and
              value of an EGL diamond.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              5. HRD Certification
            </Text>
            <Text fontSize={normalText}>
              HRD (Hoge Raad voor Diamant) is a diamond grading organization
              based in Europe. Not generally regarded as a legitimate
              alternative in the United States, HRD still claims to be the
              authority for diamond grading in the world.
            </Text>
            <Text fontSize={normalText}>
              Over the years, we have experienced incredible inconsistency with
              HRD grading. They usually average about two Color and/or Clarity
              grades above the GIA’s grading. HRD graded diamonds are usually
              priced much higher than equivalent diamonds graded by the GIA.
              This allows for significant profits to be made by diamond
              companies.
            </Text>
            <Text fontSize={normalText}>
              To offer a comparison between HRD grading and other labs, we sent
              four stones to various lab entities. In the chart below, you can
              see HRD graded the same four diamonds better than the GIA in the
              categories of Color and Clarity: two highly subjective grades.
            </Text>
            <Text fontSize={normalText}>
              The clear difference between the grading demonstrates that it's
              not prudent to compare apples to apples among lab entities. Simply
              put, an F Color grading given by HRD will not mean the same as a
              GIA F Color diamond. The price you'll pay for an HRD diamond will
              not compare to the value and quality of a GIA graded diamond—even
              if it's a grade or two higher
            </Text>
            <Text fontSize={normalText}>
              <strong>
                If you are considering an HRD certified diamond, we suggest
                reconsidering
              </strong>
              . We recommend only purchasing diamonds that come with a GIA or
              AGS certificate.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={"bold"}
            >
              6. GSI Certification
            </Text>
            <Text fontSize={normalText}>
              The GSI (Gemological Science International) is a new grading
              entity that's only been around for a few years. Unfortunately they
              didn't come to the industry with fresh ideas or innovative
              technology.
            </Text>
            <Text fontSize={normalText}>
              We have found that GSI grading is not only looser than the gold
              standards (GIA and AGSL labs), but weaker than than the next level
              down (IGI and HRD) as well. GSI also doesn't maintain consistent
              gradings, to try, for example, adjusting the grades down 1 or 2
              qualities and calculating the value.
            </Text>
            <Text fontSize={normalText}>
              For these reasons, we do not recommend buying a diamond that has a
              GSI certificate.{" "}
              <strong>
                We strongly encourage only buying diamonds that have a GIA or
                AGS certificate.
              </strong>{" "}
              By doing so, you actually know what you're getting and you can
              compare apples to apples. Retailers don't use inaccurate
              certificates like GSI in order to give the consumer a better deal;
              they do it to make more money off of those consumers.
            </Text>
            <Text fontSize={normalText}>
              To demonstrate how GSI grades diamonds compared to other labs, we
              sent four stones to GSI, IGI, HRD, EGL and GIA. For the Color and
              Clarity grades—the two most subjective categories—we received
              distinctly different results.
            </Text>
            <Text fontSize={normalText}>
              GSI graded some of the diamonds higher than the GIA and some
              lower, making it hard to determine the consistency of a GSI
              grading. When looking for a diamond, it’s critical to chose a
              diamond certified by a reliable, consistent entity, like the GIA,
              so you know that what you are buying matches the actual value of
              the stone.
            </Text>
            <EducationFAQs
              name={"FAQs About Diamond Certification"}
              content={certificateFAQs}
            />
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              Bottom Line Recommendation
            </Text>
            <Text fontSize={normalText} fontStyle={"italic"}>
              If you're buying online, use{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.bluenile.com/diamond-search?a_aid=dmnd1357&data1=5457"
                isExternal
              >
                Blue Nile's 360° Videos{" "}
              </LinkCharkaUI>{" "}
              and stick with the GIA or AGS certification - the most consistent
              lab available. We have witnessed numerous gross mistakes by each
              major gemological lab, and want to ensure you make a safe and
              smart purchase.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={"bold"}
              m={"20px 0 0 0"}
            >
              Conclusion
            </Text>
            <Text fontSize={normalText}>
              We only recommend diamonds certified by GIA or AGS because we know
              their grading is consistent, reliable and trustworthy. We only
              work with vendors (such as{" "}
              <LinkCharkaUI
                color={"red.400"}
                href="https://www.briangavindiamonds.com/?a_aid=y"
                isExternal
              >
                Brian Gavin Diamonds
              </LinkCharkaUI>{" "}
              ) that emphasize these two labs.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

import {
  Divider,
  Flex,
  Text,
  Link as LinkCharkaUI,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Center,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Title from "../../components/Title";
import EducationProTip from "../../components/education/EducationProTip";
import {
  cutTable,
  cutBottomLineRecommendation,
  cutBottomLineRecommendationWhatToLookFor,
  cutBottomLineRecommendationWhatToAvoid,
} from "../../shared/SharedEducationCut";
import EducationBottomLineRec from "../../components/education/EducationBottomLineRec";
export default function EducationCut() {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={"99vw"}
      p={10}
      bg={bgColor}
    >
      <Title
        title={"The Diamond Cuts Guide"}
        description={"Understanding the most important of the diamonds 4 Cs"}
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction={"column"} w={"50vw"} gap={3}>
        <Text fontSize="lg">
          Cut is one of the diamond’s four primary quality markers, known as the
          4Cs. It relates to the diamond’s proportions and technical details,
          influencing its brilliance. A superior cut offers enhanced fire and
          sparkle.
        </Text>
        <Text fontSize="lg">
          Diamond cuts are graded from ‘Excellent’ (or ‘Ideal’) at the top to
          ‘Poor’ at the bottom. Typically, trustworthy online sellers avoid
          diamonds below ‘Good’ cut quality. Among the 4Cs, cut stands out as
          the most crucial, significantly impacting the diamond’s beauty and
          radiance.
        </Text>
        <EducationProTip
          content={
            "You will often see diamond cut and diamond shape used interchangeably, but they are two very distinct meanings. Diamond cut refers to the quality whereas diamond shape refers to the pattern/arrangement of the diamond. If you are interested in different diamond shapes, read our article on diamond shape."
          }
        />
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Cut Grade Chart
        </Text>
        <Text fontSize="lg">
          A professional gemologist at the GIA reviews each diamond under
          magnification to determine the Cut grade. Here are the GIA cut grades
          for round diamonds:
        </Text>
        <TableContainer m={"20px 0 20px 0"} whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th>Cut Grade</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cutTable.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td fontWeight={"bold"}>{item.name}</Td>
                    <Td>{item.description}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Text fontSize="lg">
          The AGS cut grade chart also includes an Ideal grade. Cut quality is
          graded by the AGS as Ideal, Excellent, Very Good, Good, Fair or Poor.
          When looking at AGS diamonds, we recommend only considering Ideal cut
          diamonds for the best quality.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/02/cut-grades.jpg"
          m={"20px 0 20px 0"}
        />
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          What are GIA Cut Grades?
        </Text>
        <Text fontSize="lg">
          In August 2005 the GIA announced the introduction of a new “cut grade”
          to its grading reports. According to{" "}
          <LinkCharkaUI
            color={"blue.400"}
            href="https://www.jckonline.com/editorial-article/gia-to-implement-its-diamond-cut-grading-system-on-jan-1/"
            isExternal
          >
            JCK Online Magazine
          </LinkCharkaUI>{" "}
          “The addition of a cut grade to the GIA Diamond Grading Report and GIA
          Diamond Dossier for round brilliant diamonds is the result of more
          than 15 years of research and testing, including sophisticated
          computer modeling and ray tracing of more than 38.5 million proportion
          sets.”
        </Text>
        <Text fontSize="lg">
          GIA diamond cutting grades for a round brilliant cut diamond will
          range from Excellent to Poor. Diamond cut grade is based on a number
          of factors including symmetry, polish, brilliance and fire. For the
          most brilliance and beauty, only consider round brilliant cut diamonds
          with an Excellent cut. Ensure the symmetry and polish of the diamond
          are either Excellent or Very Good.
        </Text>
        <Text fontSize="lg">
          The reality is that 55% of all round cut diamonds receive an excellent
          cut grade from the GIA. About 25-30% of these “excellent” cut diamonds
          are not recommended. Our consultants review thousands of Excellent cut
          diamonds and find bad specs (depth, table, and angles).
        </Text>
        <Text fontSize="lg">
          That’s why it’s important to look at the cut grade of a diamond on the
          GIA certificate, but to also review the diamond closely yourself or
          ask an expert. You don’t want to end up paying for an Excellent cut
          diamond that’s only mediocre.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          How to Choose the Best Diamond Cuts
        </Text>
        <Text fontSize="lg">
          With most of the 4 C’s of diamonds (the others being clarity, color
          and carat weight), there’s a sweet spot where beauty and value meet
          up.
        </Text>
        <Text fontSize="lg">
          To use diamond clarity as an example, there is a point (generally
          around VS1-VS2) where any increase in grade is not going to offer a
          noticeable increase in beauty. To the naked eye, a VS1 or VS2 diamond
          will likely appear clean and flawless.
        </Text>
        <Text fontSize="lg">
          Diamond cut, however, is different. It’s the one grade you don’t want
          to compromise on. While middling grades in clarity or color can be
          concealed, and low-carat diamonds can still have a radiant and
          beautiful appearance, a low cut grade is likely to result in a diamond
          that doesn’t dazzle like it is supposed to.
        </Text>
        <Text fontSize="lg">
          We recommend you restrict your search to only Excellent or Ideal cut
          grades, as there is no hiding a below-average cut. Even if your budget
          forces you to sacrifice in other areas, a well-cut diamond should
          still have the potential to stand out.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/06/6A7A7039-scaled.jpg"
          m={"20px 0 0 0"}
        />
        <Center>
          <Text fontSize={"sm"}>
            Yellow and white diamond shapes set in spectacular custom-made rings
            by Abe Mor
          </Text>
        </Center>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          How to Choose the Best Diamond Cuts
        </Text>
        <Text fontSize="lg">
          As with all areas in which diamonds are graded, the price can rise and
          fall a lot depending on your choice of cut grade.
        </Text>
        <Text fontSize="lg">
          Their prices are based on the precision and quality of the
          cut—primarily its proportions and symmetry. For example,{" "}
          <LinkCharkaUI
            color={"red.400"}
            href="https://www.bluenile.com/diamond-details/18741419?a_aid=dmnd1357&data1=5453"
            isExternal
          >
            this diamond from Blue Nile
          </LinkCharkaUI>{" "}
          is about as perfect a cut as you can get. The depth, table and all
          other proportions are as exact as can be. Because of that, you are
          paying a higher price for the diamond, even compared to a typical
          excellent cut diamond.
        </Text>
        <Text fontSize="lg">
          If the diamond’s facets (the glossy flat surfaces of a diamond) are
          proportional, for instance, they refract and reflect light back to the
          eye in tremendous fashion. Diamonds that aren’t as precisely cut have
          facets and pavilions that do not refract and reflect light as
          spectacularly.
        </Text>
        <Text fontSize="lg">
          The amount of light return and brilliance found in an exceptionally
          cut diamond is worth the extra price. Without brilliance and fire, a
          diamond is less than radiant—no matter the carat weight or table size.
        </Text>
        <Text fontSize="lg">
          In other words, a diamond’s cut is the quality that most significantly
          impacts its beauty. That’s why the cost of diamonds with higher cut
          grades are worth every penny—and it’s better to spend more on cut than
          on diamond color or clarity.
        </Text>
        <Text fontSize="lg">
          If you’re working within a budget, we recommend forgoing a GIA grade
          in color and clarity to ensure you’re selecting an ideal cut diamond.
          And which one is more important you ask? You can find out in our guide
          to diamond color vs clarity.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          How to Choose the Best Diamond Cuts
        </Text>
        <Text fontSize="lg">
          If you’re working within a budget, we recommend forgoing a GIA grade
          in color and clarity to ensure you’re selecting an ideal cut diamond.
          And which one is more important you ask? You can find out in our guide
          to diamond color vs clarity.
        </Text>
        <Text fontSize="lg">
          Here are the main factors that affect the price of a diamond:
        </Text>
        <UnorderedList m={"10px 0 20px 50px"} spacing={2} fontSize={"lg"}>
          <ListItem>Proportions (table, width, depth)</ListItem>
          <ListItem>
            Symmetrical diamond’s facets (the mirrors, windows and steps of a
            diamond)
          </ListItem>
          <ListItem>Brilliance (brightness of white light reflection)</ListItem>
          <ListItem>Fire (dispersion of colored light)</ListItem>
          <ListItem>
            Scintillation (the flashes of sparkle when light moves)
          </ListItem>
          <ListItem>
            Finishing details (permanent treatment and polishing)
          </ListItem>
        </UnorderedList>
        <Text fontSize="lg" fontWeight={"bold"}>
          Diamond Cut Proportions
        </Text>
        <Text fontSize="lg">
          To further understand the factors impacting diamond cut quality, let’s
          examine a diamond’s proportions, primarily its table, width and depth.
          These elements are universally measured and are excellent indicators
          of a diamond’s cut quality.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/04/cuts-blue.png"
          m={"20px 0 0 0"}
        />
        <Text fontSize="lg">
          Diamond cut proportions directly affect a diamond’s ability to reflect
          light and provide brilliance. Proportions are based on the ratios
          between size, angle and shape of each diamond facet. Various
          combinations of these elements impact how the diamond will interact
          with light, which determines its overall beauty and lasting appeal (as
          well as its GIA grading). Don’t forget that different diamond shapes
          have different proportions.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Cut Proportions
        </Text>
        <Text fontSize="lg" m={"0 0 20px 0"}>
          To further understand the factors impacting diamond cut quality, let’s
          examine a diamond’s proportions, primarily its table, width and depth.
          These elements are universally measured and are excellent indicators
          of a diamond’s cut quality.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/02/table.jpg"
          m={"20px 0 0 0"}
        />
        <Text fontSize="lg">
          If the table percentage is too large, the light won’t reflect off of
          the diamond’s crown angles and facets. Vibrant reflections of color
          won’t be seen as the light will escape from the top of the diamond
          instead of reaching the eye.
        </Text>
        <Text fontSize="lg">
          If the table percentage is too low, the light will remain trapped
          inside the diamond and be emitted through other parts of the diamond
          instead of to the eye.
        </Text>
        <Text fontSize="lg">
          The ideal table % depends heavily on the diamond shape. If you’re
          unsure of an excellent table % for your diamond, please contact us and
          we will walk you through the options and factors.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Width
        </Text>
        <Text fontSize="lg">
          A diamond’s width is determined by measuring from one end of its
          girdle (the diameter at its widest point) to the other end of the
          girdle.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/02/width-1.png"
          m={"20px 0 0 0"}
        />
        <Text fontSize="lg">
          The width is most important when it comes to determining length to
          width ratio, which signifies how proportionate the diamond is along
          with its intended shape (i.e. square vs. rectangular).
        </Text>
        <Text fontSize="lg">
          Length to width ratio is measured by dividing the length of the
          diamond by the width. For example, if a diamond has a length of 5mm
          and a width of 3mm, the length to width ratio is 1.67.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Depth
        </Text>
        <Text fontSize="lg">
          Depth % refers to the height of the diamond, from the culet to the top
          of the table. Depth is measured in millimeters and percentages. By
          dividing the depth by the width, the depth % is achieved.
        </Text>
        <Text fontSize="lg">
          As an example, if a diamond is 4mm in depth and 4.5 mm in width, the
          depth percentage is 88.8%.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/02/depth.jpg"
          m={"20px 0 0 0"}
        />
        <Text fontSize="lg">
          In most cases, a lower depth % of two equal carat diamonds will appear
          larger due to the increased width. On the other hand, a depth % that
          is too low can create a darker appearance as it will not reflect light
          as powerfully.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Shallow Diamond Cut
        </Text>
        <Text fontSize="lg">
          When a diamond is cut too shallow, light hits the pavilion at a low
          angle. The light travels through the diamond and exits through the
          sides, instead of reflecting through the table and to your eyes.
        </Text>
        <Text fontSize="lg">
          While shallow cut diamonds may seem largely based on their table size
          (they are also called spready diamonds), the escape of light at the
          bottom significantly reduces the diamond’s brilliance, sparkle and
          fire.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Deep Diamond Cut
        </Text>
        <Text fontSize="lg">
          When a diamond is cut too deep, light hits the pavilion at a sharper
          angle, causing it to immediately reflect to another pavilion. The
          light is forced to retract and pass through the bottom of the diamond.
          As this happens, light is dulled and the diamond becomes less vibrant
          and radiant.
        </Text>
        <Text fontSize="lg">
          A deeply cut diamond also tends to look smaller than those of an ideal
          cut.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          What is the best Diamond Cut?
        </Text>
        <Text fontSize="lg">
          Simply put, a well-cut diamond maximizes the light that strikes each
          pavilion. Instead of escaping through other parts of the diamond,
          light reflects back through the crown and table. For our readers that
          are focused on cut, they have had the most success with James Allen’s
          True Hearts and Blue Nile’s Astor Cut diamonds.
        </Text>
        <Text fontSize="lg">
          When it comes to determining the highest grade possible,{" "}
          <LinkCharkaUI
            color={"blue.400"}
            href="https://www.gia.edu/"
            isExternal
          >
            GIA
          </LinkCharkaUI>{" "}
          uses the term “excellent” while{" "}
          <LinkCharkaUI
            color={"blue.400"}
            href="https://www.americangemsociety.org/"
            isExternal
          >
            AGS
          </LinkCharkaUI>{" "}
          uses the word “ideal.” These cuts are well-proportioned with optimal
          facet angles, allowing the brilliance and fire to pass through the
          table for all to see.
        </Text>
        <Text fontSize="lg">
          For these reasons, excellent cuts are more valuable and more luminous.
          When buyers have a budget, we often advise choosing a smaller,
          well-cut diamond as opposed to a larger carat that is poorly cut to
          get the most sparkly diamond.
        </Text>
        <Text fontSize="lg">
          If you’re unsure of an ideal cut for your diamond, speak to an expert
          to walk you through the process.
        </Text>
        <Image
          src="https://www.diamonds.pro/wp-content/uploads/2022/04/Basic-princess-cut-image.png"
          m={"20px 0 20px 0"}
        />
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Symmetrical facets
        </Text>
        <Text fontSize="lg">
          The facets of a diamond are the tiny mirrors that reflect light back
          to your eyes. Facets surround the diamond’s table. There are facets
          above the girdle and below the girdle. The pavilion (the part of the
          diamond below the girdle that reaches to the culet) is also made up of
          facets. Round brilliant cut diamonds have 58 facets in total.
        </Text>
        <Text fontSize="lg">
          The size, placement and symmetry of the facets impact how well the
          diamond refracts and reflects light. A diamond with unproportioned
          facets, too many facets or fewer facets, can cause a less than ideal
          diamond.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Brilliance
        </Text>
        <Text fontSize="lg">
          A diamond’s brilliance is the brightness of the white light
          reflection. When looking at a diamond face-up under light, it should
          reflect an abundance of white light. A diamond that’s not symmetrical,
          is cut too deep or too shallow, for example, looks dull instead of
          brilliant.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Fire
        </Text>
        <Text fontSize="lg">
          A diamond’s fire is the amount of colored light that reflects off of
          the table and facets. Well-cut diamonds not only have brilliance but
          fire too. When looking at the diamond face-up under light—especially
          daylight—you should see colored light bouncing off of the diamond. If
          the diamond doesn’t exhibit colored light reflection, the diamond has
          a low amount of fire.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Scintillation
        </Text>
        <Text fontSize="lg">
          Scintillation of a diamond refers to the flashes of sparkle when light
          moves on the diamond’s table and facets. The scattering of light
          resembles a sparkle and is caused by the light and dark areas on the
          diamond’s surface. A diamond with a large amount of scintillation is
          more desirable. A diamond without much scintillation can appear dull.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"} m={"20px 0 0 0"}>
          Finishing details
        </Text>
        <Text fontSize="lg">
          The finishing details are the craftsmanship of the diamond and include
          its permanent treatment and polishing. The polish of a diamond refers
          to the condition and quality of the facet surfaces. A diamond that is
          polished well creates a clear mirror for light to reflect off of. A
          diamond with a poor polish job looks dull because the facets don’t
          reflect light as vividly.
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} m={"20px 0 20px  0"}>
          Factors for Determining Diamond Cut Quality
        </Text>
        <Text fontSize="lg">
          Because diamond cut is an enormous element in determining the beauty
          and brilliance of any diamond, there are some complexities. Many
          factors play a role in how a diamond’s cut quality is determined.
        </Text>
        <Text fontSize="lg">
          The main factors impacting diamond cut quality are:
        </Text>
        <UnorderedList m={"10px 0 20px 50px"} spacing={2} fontSize={"lg"}>
          <ListItem>
            <strong>Proportions</strong>: the ratios and sizes of the diamond’s
            depth, width and table
          </ListItem>
          <ListItem>
            <strong>Symmetry</strong>: precision of the facets, mirrors, windows
            and steps
          </ListItem>
          <ListItem>
            <strong>Polish</strong>: the shine and glow of the diamond surface
          </ListItem>
        </UnorderedList>
        <Text fontSize="lg">
          When you’re looking to see how well-cut diamonds are, take note of how
          their facets and angles reflect light. Specifically, note how bright
          and sparkly the light return is when placed under a normal lamp.
        </Text>
        <Text fontSize="lg">
          You’ll want to gauge diamonds’ fire (the rainbow light of reflection)
          and brilliance (colorless light and sparkle of the diamond). Be sure
          to also watch for any dark spots within the piece.
        </Text>
        <Text fontSize="lg">
          When a diamond is poorly cut (even if it has a high color or clarity
          grade), light will not reflect as well back to your eyes, making it a
          duller, more lifeless diamond.
        </Text>
        <Text fontSize="lg">
          Be sure to review the GIA cut grade on a diamond’s report, which will
          include ratings of Poor, Good, Very Good or Excellent.
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} m={"20px 0 20px  0"}>
          What’s the difference between Diamond Cut and Diamond Shape?
        </Text>
        <Text fontSize="lg">
          The terms diamond cut and diamond shapes have distinct meanings.
        </Text>
        <Text fontSize="lg">
          Diamond shape describes the outline or figure of the diamond. For
          example, pear, oval and round brilliant refer to the shape appearance
          of the diamond.
        </Text>
        <Text fontSize="lg">
          Cut refers to the facets, symmetry, dimensions and reflective
          qualities of the diamond. Pear-shaped diamonds, for instance, may be
          cut shallow or deep, dull or brilliant. The heart shape remains, while
          the cut may differ significantly. The finer the cut, the greater the
          brilliance and fire of the diamond.
        </Text>
        <EducationBottomLineRec
          content={cutBottomLineRecommendation}
          whatToLookFor={cutBottomLineRecommendationWhatToLookFor}
          whatToAvoid={cutBottomLineRecommendationWhatToAvoid}
        />
        <Text fontSize="2xl" fontWeight={"bold"} m={"20px 0 20px  0"}>
          What’s the difference between Diamond Cut and Diamond Shape?
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Is an Ideal cut diamond better then Excellent?
        </Text>
        <Text fontSize="lg">
          For round brilliant diamonds the GIA assigns a rating of Excellent as
          it’s highest cut grade and AGS uses the term Ideal. Most online
          retailers have adopted the use Ideal when referring to a diamond that
          meet either the highest level GIA or AGS standard.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          What cut is best for diamonds?
        </Text>
        <Text fontSize="lg">
          For round brilliant diamonds the Ideal cut is considered the highest
          rating. Only 3% of diamonds are given the GIA Ideal rating. So called
          Super Ideal diamonds are cut to a higher standard than either GIA or
          AGS highest cut ratings.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Is diamond clarity more important then cut?
        </Text>
        <Text fontSize="lg">
          A diamond’s cut is ultimately more important than its clarity or
          color, particularly when it comes to brilliance. Before looking at
          color or clarity, limit your search to excellent or ideal cut diamonds
          only.
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} m={"20px 0 20px  0"}>
          More Questions on Buying the Right Diamond Cuts? Contact Us
        </Text>
        <Text fontSize="lg">
          When it comes to selecting an ideal diamond for engagement rings, we
          recommend a quality diamond cut over anything else. For GIA certified
          diamonds, we recommend choosing an Excellent cut grade. When we search
          for a diamond, we filter more heavily on cut. You can see our
          parameters by looking at a James Allen diamond search.
        </Text>
        <Text fontSize="lg">
          For round brilliant cut diamonds, don’t give any credence to an online
          vendor’s cut grade.{" "}
          <LinkCharkaUI
            color={"blue.400"}
            href="https://4cs.gia.edu/en-us/blog/gia-diamond-grading-scales/"
            isExternal
          >
            Only focus on the GIA cut grade on the certificate
          </LinkCharkaUI>
          .
        </Text>
        <Text fontSize="lg">
          In addition to reviewing a GIA or other grading report, be sure to
          look at the diamond yourself or have an expert assist you. Most
          importantly, ensure the diamond is appealing to you and your personal
          style and desires.
        </Text>
        <Text fontSize="lg">
          Our primary focus is making sure your diamond search is easy, simple
          and accurate. We want you to find the highest quality diamond while
          staying within your budget.
        </Text>
        <Text fontSize="lg">
          If you’d like assistance with finding and selecting a diamond, we’ll
          be happy to filter through the cuts and make recommendations for you.
        </Text>
      </Flex>
    </Flex>
  );
}

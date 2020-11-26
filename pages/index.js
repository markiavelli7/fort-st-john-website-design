/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "@/components/layout";
import NextImage from "@/components/NextImage";
import { SectionWithPadding } from "@/components/layout/Container";
import { BodyParagraph, SectionTitle } from "../src/components/layout/Text";
import * as Space from "@/components/layout/Space";
import RecentWork from "@/components/recentWork/RecentWork";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Website Development FSJ"
        description="Mobile friendly business websites that generate new leads and grow your business online. Complete solutions including logo design, web development and SEO services."
        ogUrl="https://www.fortstjohnwebsitedesign.com"
        ogImage="https://res.cloudinary.com/jds/image/upload/v1606232206/fort-st-john-website-design-site/website-development-fort-st-john_yxmzrg.jpg"
        ogImageWidth="4896"
        ogImageHeight="3264"
        ogImageAlt="Custom Website Design in Fort St John, British Columbia."
        twitterImage="https://res.cloudinary.com/jds/image/upload/v1606232338/fort-st-john-website-design-site/twitter-website-development-fort-st-john_ozu5ei.jpg"
      />
      <div sx={styles.topImageCont}>
        <div sx={styles.imageCont}>
          <NextImage
            imgSrc="/images/home/website-development-fort-st-john.jpeg"
            lqipImgSrc={require("public/images/home/website-development-fort-st-john.jpeg?lqip")}
            imgAlt="Web Design in Fort St John."
          />
        </div>
        <div sx={styles.topImageTextCont}>
          <div sx={styles.blueBlock} />
          <h1 sx={styles.topImageText}>Fort St John Website Design</h1>
        </div>
      </div>

      <SectionWithPadding style={styles.topIntroText}>
        <BodyParagraph style={{ fontWeight: "bold" }}>
          Based in Fort St John, we specialize in agency quality work with small
          town service and prices.
        </BodyParagraph>

        <Space.Two />

        <BodyParagraph>
          Our mission is to build custom websites that stand out from the
          competition and generate new leads and business opportunities.
        </BodyParagraph>

        <Space.Two />
      </SectionWithPadding>

      <div sx={styles.sectionTitle}>
        <SectionTitle style={{ mb: "0.5rem" }}>Our Work</SectionTitle>
      </div>

      <RecentWork />

      <div sx={styles.sectionTitle}>
        <SectionTitle style={{ mb: "0.5rem" }}>Work With Us</SectionTitle>
      </div>

      <Space.Two />

      <div sx={styles.workWithUsImageCont}>
        <NextImage
          imgSrc="/images/home/jensen-design-shop-work-with-us.jpeg"
          lqipImgSrc={require("public/images/home/jensen-design-shop-work-with-us.jpeg?lqip")}
          imgAlt="Web Design in Fort St John."
        />
      </div>

      <SectionWithPadding style={styles.workWithUsText}>
        <Space.Two />
        <BodyParagraph>
          <span sx={{ fontWeight: "bold" }}>We produce results.</span> No matter
          what your budget is, we provide solutions that will generate new
          opportunities and help grow your business online.
        </BodyParagraph>
        <Space.Three />
      </SectionWithPadding>
    </Layout>
  );
}

var styles = {
  topImageCont: {
    position: "relative",
  },

  imageCont: {
    position: "relative",
    height: ["17.5rem", "20rem", "22.5rem", "25rem", "30rem", "32.5rem"],
  },

  topImageTextCont: {
    px: ["3%"],
    py: ["0.75rem"],
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
  },

  blueBlock: {
    width: ["3.5rem", null, "3.75rem", null, "4rem"],
    height: ["3.5rem", null, "3.75rem", null, "4rem"],
    bg: "primaryBlue",
    boxShadow: "3px 3px 4px rgba(255, 255, 255, 0.25)",
  },

  topImageText: {
    m: 0,
    ml: ["1rem", "1.1rem", "1.25rem", null, "1.5rem"],
    width: ["70%", "60%"],
    color: "light",
    fontFamily: "heading",
    textTransform: "uppercase",
    fontSize: ["1.5rem", "1.65rem", "1.75rem", null, "2rem"],
    textShadow: "2.5px 2.5px 5px rgba(0,0,0,0.5)",
  },

  topIntroText: {
    my: ["1rem", null, null, null, "1.5rem"],
    width: [null, null, null, null, "90%"],
  },

  sectionTitle: {
    px: ["3%", "3.5%"],
    mb: ["0.25rem"],
  },

  workWithUsImageCont: {
    position: "relative",
    height: ["17.5rem", "20rem", null, "22.5rem", "25rem", "27.5rem"],
  },

  workWithUsText: {
    my: [null, null, null, null, "1rem"],
    width: [null, null, null, null, "90%"],
  },
};

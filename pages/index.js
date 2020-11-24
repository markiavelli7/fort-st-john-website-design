/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "@/components/layout";
import NextImage from "@/components/NextImage";
import { SectionWithPadding } from "@/components/layout/Container";
import { BodyParagraph } from "@/components/layout/Text";
import * as Space from "@/components/layout/Space";
import { SectionTitle } from "@/components/layout/Text";
import RecentWork from "@/components/recentWork/RecentWork";

export default function Home() {
  return (
    <Layout>
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
          imgSrc="/images/home/website-development-fort-st-john.jpeg"
          lqipImgSrc={require("public/images/home/website-development-fort-st-john.jpeg?lqip")}
          imgAlt="Web Design in Fort St John."
        />
      </div>

      <SectionWithPadding>
        <Space.Two />
        <BodyParagraph>
          <span sx={{ fontWeight: "bold" }}>We produce results.</span> No matter
          what your budget it is, we provide solutions that will generate new
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
    height: ["17.5rem"],
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
    width: "3.5rem",
    height: "3.5rem",
    bg: "primaryBlue",
    boxShadow: "3px 3px 4px rgba(255, 255, 255, 0.25)",
  },

  topImageText: {
    m: 0,
    ml: ["1rem"],
    width: ["70%"],
    color: "light",
    fontFamily: "heading",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    textShadow: "2.5px 2.5px 5px rgba(0,0,0,0.5)",
  },

  topIntroText: {
    my: ["1rem"],
  },

  sectionTitle: {
    px: ["3%", "3.5%"],
    mb: ["0.25rem"],
  },

  workWithUsImageCont: {
    position: "relative",
  },
};

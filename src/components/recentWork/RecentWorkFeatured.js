/** @jsx jsx */
import { jsx } from "theme-ui";
import NextImage from "@/components/NextImage";
import FourMile from "../../../public/svgs/FourMile";

import { BodyParagraph } from "../layout/Text";
import { PrimaryLink } from "@/components/Interactive";

export default function RecentWorkFeatured({
  style = {},
  bodyOne = "4 Mile Tree Farm - the spruce/blue spruce tree farm for Fort St John and the surrounding area.",
  bodyTwo = "A simple and easy-to-use website designed for the purpose of driving increased tree sales.",
  linkToWebsite = "https://www.fourmiletreefarm.com",
  imgSrc = "/images/home/fort-st-john-web-design.jpeg",
  lqipImgSrc = require("public/images/home/fort-st-john-web-design.jpeg?lqip"),
  imgAlt = "Fort St John and surrounding areas Website Developers, Logo Designers, and SEO Specialists.",
  featuredSVG = <FourMile />,
  linkText = "Link Text",
}) {
  var containerStyles = {
    position: "relative",
    height: ["19.5rem", "23rem", null, null, "27rem", "26rem", "24rem"],
    mb: ["2.5rem"],
    width: [null, null, null, null, "49.25%"],
    overflow: "hidden",
    ...style,
  };
  return (
    <div sx={containerStyles}>
      <div sx={styles.backgroundImageCont}>
        <NextImage imgSrc={imgSrc} lqipImgSrc={lqipImgSrc} imgAlt={imgAlt} />
      </div>
      <div sx={styles.featuredBody}>
        <div sx={styles.svgCont}>{featuredSVG}</div>

        <div sx={styles.bodyText}>
          <BodyParagraph style={styles.bodyParagraph}>{bodyOne}</BodyParagraph>
          <BodyParagraph style={styles.bodyParagraph}>{bodyTwo}</BodyParagraph>
          <div sx={styles.linkContainer}>
            <PrimaryLink style={styles.linkStyle} href={linkToWebsite}>
              {linkText}
            </PrimaryLink>
          </div>
        </div>
      </div>
    </div>
  );
}

var styles = {
  backgroundImageCont: {
    height: ["19.5rem", "23rem", null, null, "27rem", "26rem", "24rem"],
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },

  featuredBody: {
    width: [null, null, "70%"],
    px: ["2.5%", "3%", "3.5%", null, "5%", "4%"],
    py: ["1.2rem", "1.5rem", "1.6rem", "1.7rem"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: ["19.5rem", "23rem", null, null, "27rem", "26rem", "24rem"],
    width: ["100%"],
    zIndex: 9,
    background: "rgb(255,255,255)",
    background: [
      "linear-gradient(160deg, rgba(255,255,255,0.8) 0%,rgba(234,233,255,0.85) 50%, rgba(3,3,27,0.25) 100%)",
    ],
  },

  svgCont: {
    width: ["12.5rem", "15rem", "55%", "18.5rem", "62.5%", "19rem"],
    height: [null, null, null, null, "4rem"],
  },

  bodyText: {
    width: [null, null, null, null, null, "90%", "92.5%"],
  },

  bodyParagraph: {
    color: "dark",
    mb: ["1.1rem", "1.3rem", "1.4rem", "1.65rem"],
    fontWeight: 600,
    textShadow: "1.5px 1.5px 5px rgba(255,255,255,0.25)",
  },

  linkContainer: {
    mx: ["-1%"],
    width: [null, null, null, "57.5%", "102%", "90.5%"],
  },

  linkStyle: {
    fontSize: ["1.05rem", "1.1rem", "1.2rem", null, null, "1.25rem"],
  },
};

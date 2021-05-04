/** @jsx jsx */
import { jsx } from "theme-ui";

import RecentWorkFSFeatured from "./RecentWorkFSFeatured";
import RecentWorkFeatured from "./RecentWorkFeatured";

import FourMile from "../../../public/svgs/FourMile";
import PonderosaSvg from "../../../public/svgs/Ponderosa";
import I2Svg from "../../../public/svgs/I2";
import FurnacePro from "../../../public/svgs/FurnacePro";

export default function RecentWork() {
  return (
    <div sx={styles.recentWork}>
      <RecentWorkFSFeatured
        style={styles.fullscreenFourMile}
        bodyOne="FSJ Furnace Pro - Furnace sales, repairs and installation in Fort St John."
        bodyTwo="A streamlined website that gets right to point, right away."
        lqipImgSrc={require("public/images/home/fsj-furnace-pro.jpeg?lqip")}
        imgSrc="/images/home/fsj-furnace-pro.jpeg"
        imgAlt="FSJ Furnace Pro, website built by Jensen Design Shop."
        featuredSVG={<FurnacePro />}
        linkText="Visit FSJ Furnace Pro"
        linkToWebsite="https://fsjfurnacepro.com"
      />
      <RecentWorkFeatured
        style={styles.mobileFeaturedOne}
        bodyOne="FSJ Furnace Pro - Furnace sales, repairs and installation in Fort St John."
        bodyTwo="A streamlined website that gets right to point, right away."
        lqipImgSrc={require("public/images/home/fsj-furnace-pro.jpeg?lqip")}
        imgSrc="/images/home/fsj-furnace-pro.jpeg"
        imgAlt="FSJ Furnace Pro, website built by Jensen Design Shop."
        featuredSVG={<FurnacePro />}
        linkText="Visit FSJ Furnace Pro"
        linkToWebsite="https://fsjfurnacepro.com"
      />
      <RecentWorkFeatured
        bodyOne="4 Mile Tree Farm - the spruce/blue spruce tree farm for Fort St John and the surrounding area."
        bodyTwo="A simple and easy-to-use website designed for the purpose of driving increased tree sales."
        lqipImgSrc={require("public/images/home/four-mile-tree-farm-fsj.jpeg?lqip")}
        imgSrc="/images/home/four-mile-tree-farm-fsj.jpeg"
        imgAlt="Four Mile Tree Farm, website built by Jensen Design Shop."
        featuredSVG={<FourMile />}
        linkText="Visit 4 Mile Tree Farm"
        linkToWebsite="https://www.fourmiletreefarm.com"
      />
      <RecentWorkFeatured
        bodyOne="Ponderosa Ventures - professional landscapers for Marin County and the surrounding area."
        bodyTwo="We clearly highlight to potential clients how Ponderosa is uniquely positioned to help them."
        lqipImgSrc={require("public/images/home/ponderosa-ventures-fsj.jpeg?lqip")}
        imgSrc="/images/home/ponderosa-ventures-fsj.jpeg"
        imgAlt="Ponderosa Ventures, website built by Jensen Design Shop."
        featuredSVG={<PonderosaSvg />}
        linkText="Visit Ponderosa Ventures"
        linkToWebsite="https://ponderosa-ventures.now.sh/"
      />
      {/* <RecentWorkFeatured
        bodyOne="i2 Optimization - streamlining midstream operations for companies across North America."
        bodyTwo="A straight to the point site where oil and gas operations management can go to get answers."
        lqipImgSrc={require("public/images/home/i2-optimization-fsj.jpeg?lqip")}
        imgSrc="/images/home/i2-optimization-fsj.jpeg"
        imgAlt="i2 Optimization, website built by Jensen Design Shop."
        featuredSVG={<I2Svg />}
        linkText="Visit i2 Optimization"
        linkToWebsite="https://www.i2optimization.com"
      /> */}
    </div>
  );
}

var styles = {
  recentWork: {
    pt: ["1rem"],
    display: [null, null, null, null, "flex"],
    flexWrap: "wrap",
    justifyContent: "space-between",
    px: [null, null, null, null, "1.5%", "1%", 0],
  },

  mobileFeaturedOne: {
    display: [null, null, null, null, "none"],
  },

  fullscreenFourMile: {
    display: ["none", null, null, null, "block"],
  },
};

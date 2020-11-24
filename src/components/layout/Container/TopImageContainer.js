/** @jsx jsx */
import { jsx } from "theme-ui";
import NextImage from "@/components/NextImage";

export function TopImageContainer({
  pageTitle = "Page Title",
  pageTagline = "This Is The Page Tagline",
  imgSrc = "/images/home/fsj-web-development.jpeg",
  lqipImgSrc = "public/images/home/fsj-web-development.jpeg?lqip",
  imgAlt = "Custom Websites, Logos, and SEO Services in Fort St John",
}) {
  return (
    <div sx={styles.topImageCont}>
      <div sx={styles.imageCont}>
        <NextImage
          imgSrc={imgSrc}
          lqipImgSrc={lqipImgSrc}
          priority="true"
          imgAlt={imgAlt}
        />
      </div>

      <div sx={styles.textCont}>
        <div sx={styles.titleAndTagCont}>
          <div sx={styles.pageTitleCont}>
            <div sx={styles.pageTitleBlueBlock} />
            <h2 sx={styles.pageTitle}>{pageTitle}</h2>
          </div>

          <div sx={styles.pageTagline}>{pageTagline}</div>
        </div>
      </div>
    </div>
  );
}

var styles = {
  topImageCont: {
    position: "relative",
    height: ["20rem", "22rem", "24rem", "27.5rem", "35rem"],
  },
  imageCont: {
    position: "absolute",
    height: ["20rem", "22rem", "24rem", "27.5rem", "35rem"],
    overflow: "hidden",
    width: "100%",
  },

  textCont: {
    width: ["100%"],
    height: ["100%"],
    px: ["2.5%", null, "3%", null, "3.5%", null, "3%"],
    pl: ["2.5%", null, "3%", null, "3.25%", null, "2.5%"],
    py: ["0.75rem", "1rem", "1.25rem", null, "1.5rem"],
    position: "absolute",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: ["flex-end"],
  },

  titleAndTagCont: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pageTitleCont: {
    display: "flex",
    alignItems: "center",
    width: [null, "23rem", null, "27.5rem", "22rem", "29.5rem"],
  },

  pageTitleBlueBlock: {
    height: ["3.5rem", null, null, "4.25rem", null, "5rem"],
    width: ["3.5rem", null, null, "4.25rem", null, "5rem"],
    mr: ["1.25rem", null, null, "1.4rem"],
    bg: "primaryBlue",
  },

  pageTitle: {
    fontSize: ["1.5rem", "1.6rem", "1.65rem", "1.95rem", "1.85rem", "2rem"],
    fontWeight: "700",
    fontFamily: "heading",
    textTransform: "uppercase",
    textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.5)",
    color: "light",
    m: 0,
    maxWidth: [null, "18rem", null, "20rem"],
  },

  pageTagline: {
    display: ["none", null, null, null, "block"],
    color: "light",
    fontSize: [null, null, null, null, "1.2rem", "1.5rem"],
    fontWeight: 700,
    textShadow: "1.5px 1.5px 5px rgba(0,0,0,0.85)",
  },
};

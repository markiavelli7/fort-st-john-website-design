/** @jsx jsx */
import { jsx } from "theme-ui";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import NextImage from "@/components/NextImage";

import MobileLogo from "../../../../public/svgs/JDLogoMobileWhite";
import FSLogo from "../../../../public/svgs/JDLogoFSWhite";

import * as Space from "@/components/Layout/Space";
import { SecondaryButton } from "@/components/Interactive";

export default function Footer() {
  return (
    <div sx={styles.footerMainCont}>
      <div sx={styles.imageCont}>
        <NextImage
          priority="true"
          imgSrc="/images/home/website-design-fort-st-john.jpeg"
          lqipImgSrc={require("public/images/home/website-design-fort-st-john.jpeg?lqip")}
          imgAlt="Web Development Services in the Peace Region."
        />
      </div>
      <div sx={styles.footerCont}>
        <div sx={styles.workCont}>
          <h6 sx={styles.workTitle}>Looking For the Competitive Advantage?</h6>
          <div sx={styles.workBody}>
            Get in touch to find out how we can help maximize your results
            online.
          </div>
          <div sx={styles.buttonCont}>
            <SecondaryButton
              style={{ border: "3px solid #5572DA" }}
              href="/contact-us"
            >
              Request a Quote
            </SecondaryButton>
          </div>
        </div>
        <div sx={styles.logoCont}>
          <div sx={styles.mobileLogo}>
            <MobileLogo />
          </div>

          <div sx={styles.fsLogo}>
            <FSLogo />
          </div>

          <Space.One />

          <p sx={styles.footerDesc}>
            We build custom websites, designed to bring new leads and
            opportunities to businesses in the Peace Region.
          </p>
        </div>

        <div sx={styles.footerContactCont}>
          <div sx={styles.contactOptionCont}>
            <HiOutlineMail sx={styles.contactIcon} />
            <div>
              <h5 sx={styles.contactTitle}>Email</h5>
              <a
                sx={styles.contactLink}
                href="mailto:office@jensendesignshop.com"
              >
                office@jensendesignshop.com
              </a>
            </div>
          </div>

          <div sx={styles.contactOptionCont}>
            <MdPhoneIphone sx={styles.contactIcon} />
            <div>
              <h5 sx={styles.contactTitle}>Phone</h5>
              <a sx={styles.contactLink} href="tel:12502629597">
                (250)-262-9597
              </a>
            </div>
          </div>
        </div>

        <div sx={styles.copyCont}>
          <h5 sx={styles.copy}>
            &copy; {new Date().getFullYear()} JDS Website and App Development
          </h5>

          <Link href="/privacy-policy">
            <a sx={styles.privacy}>Privacy Policy</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

var styles = {
  footerMainCont: {
    position: "relative",
    overflow: "hidden",
  },

  imageCont: {
    position: "absolute",
    zIndex: -1,
    height: "100%",
    width: "100%",
  },

  footerImage: {
    // pr: ["20%"],
    // width: "100% !important",
  },

  workCont: {
    px: ["2.5%", "3.5%", null, null, null, "2.5%"],
    py: ["1.75rem", "2.5rem", null, null, "2rem"],
    bg: "rgba(4, 5, 12, 0.75)",
    color: "light",
  },

  workTitle: {
    my: 0,
    mb: ["1.5rem", "1.6rem", null, null, "1.7rem", "1.5rem"],
    fontFamily: "heading",
    fontSize: ["1.4rem", "1.5rem", "1.7rem", "1.75rem", "1.9rem"],
    fontWeight: 700,
    color: "lightestBlue",
    textShadow: "1.5px 1.5px 3.5px rgba(0,0,0,0.25)",
  },

  workBody: {
    mb: ["1.65rem", "1.75rem", null, null, "2.15rem", "2rem"],
    fontSize: ["1rem", null, "1.05rem", "1.1rem", "1.2rem"],
    fontWeight: "normal",
  },

  buttonCont: {
    mx: ["-1.5%", null, null, null, "-0.75%"],
    width: [null, null, null, "55%", "50%"],
  },

  footerCont: {
    top: 0,
    zIndex: 9,
  },

  logoCont: {
    display: [null, null, null, null, "flex"],
    alignItems: "center",
    px: ["2.5%", "3.5%", null, null, null, "2.5%"],
    py: ["1.75rem", "2.5rem", null, null, "1.5rem"],
    bg: "rgba(48, 48, 49, 0.90)",
    color: "light",
  },

  mobileLogo: {
    width: ["55%", null, "14rem"],
    display: ["block", null, null, null, "none"],
  },

  fsLogo: {
    display: ["none", null, null, null, "block"],
    width: [null, null, null, null, "45%"],
    mr: [null, null, null, null, "9.5%", "8%"],
  },

  footerDesc: {
    color: "light",
    fontWeight: "500",
    fontSize: ["0.8rem", "1rem", null, null],
    width: [null, null, null, null, "45%"],
    maxWidth: [null, null, null, null],
    mt: [null, "1rem", null, "1.25rem", 0],
    mb: ["0"],
  },

  footerContactCont: {
    bg: "rgba(4, 5, 12, 0.70)",
    px: ["2.5%", "3.5%", null, null, null, "2.5%"],
    py: ["1.5rem", "1rem", null, null, "1.5rem"],
    pb: ["1.5rem"],
    width: ["108%", "110%", null, null, "108%", "105%"],
    color: "light",
    display: [null, null, null, null, "flex"],
  },

  contactOptionCont: {
    display: "flex",
    alignItems: "center",
    py: ["1rem"],
    width: [null, null, null, null, "50%"],
  },

  contactIcon: {
    fontSize: ["1.65rem", "1.75rem", "1.9rem", "2rem"],
    mr: ["1.3rem", "1.4rem", "1.75rem", "1.85rem", "1.25rem"],
  },

  contactTitle: {
    m: 0,
    mb: ["0.35rem", null, "0.5rem", "0.6rem"],
    fontSize: ["1rem", "1.1rem", "1.25rem", "1.3rem", "1.2rem"],
    fontWeight: "700",
  },

  contactLink: {
    fontSize: ["0.9rem", "1rem", "1.05rem", "1.1rem", "1rem"],
    fontWeight: "500",
  },

  copyCont: {
    display: [null, null, null, null, "flex"],
    alignItems: "center",
    justifyContent: ["space-between"],
    bg: "rgba(4, 5, 12, 0.70)",
    px: ["2.5%", "3.5%", null, null, null, "2.5%"],
    pt: [null, null, null, null, null, "0.75rem"],
    pb: ["1.5rem", "2.5rem", null, null, "2rem"],
  },

  copy: {
    color: "light",
    fontWeight: "700",
    fontSize: ["0.8rem", "0.95rem", "1.1rem", "1.2rem", "1.1rem"],
    m: 0,
    mb: ["1rem", "1.25rem", "1.3rem", null, 0],
    mt: [null, null, null, null, 0],
  },

  privacy: {
    color: "light",
    fontSize: ["0.85rem", "0.95rem", "1rem", "1.1rem", "1rem"],
    fontWeight: "500",
  },
};

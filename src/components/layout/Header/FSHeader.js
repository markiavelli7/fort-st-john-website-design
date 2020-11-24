/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";

import JdsSvg from "../../../../public/svgs/JDS";
import JDSFullscreenCollapse from "../../../../public/svgs/JDSFullscreenCollapse";

export default function FullscreenHeader({ collapseHeader }) {
  const router = useRouter();

  return (
    <div sx={styles.fsHeaderCont}>
      <Link href="/" sx={styles.svgCont}>
        <button
          sx={styles.logoLink}
          css={
            collapseHeader && {
              "@media screen and (min-width: 768px)": {
                transform: "translateY(-10rem)",
              },
            }
          }
        >
          <JdsSvg />
        </button>
      </Link>

      <Link sx={styles.collapseLinkCont} href="/">
        <button
          sx={styles.collapseLogoLink}
          css={
            collapseHeader && {
              "@media screen and (min-width: 768px)": {
                width: "9rem",
                height: "3.5rem",
                transform: "translateY(0rem)",
                pointerEvents: "auto",
              },
            }
          }
        >
          <JDSFullscreenCollapse />
        </button>
      </Link>

      <div
        sx={styles.headerLinks}
        css={
          collapseHeader && {
            "@media screen and (min-width: 768px)": {
              transform: "translateY(-10rem)",
              pointerEvents: "none",
            },
          }
        }
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com"
          sx={styles.fsLinkHome}
          css={router.pathname === "/" && { color: "#073DA6" }}
        >
          <AiFillHome />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/websites"
          sx={styles.fsLink}
          css={router.pathname === "/websites" && { color: "#073DA6" }}
        >
          Websites
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/logo-design"
          sx={styles.fsLink}
          css={router.pathname === "/logo-design" && { color: "#073DA6" }}
        >
          Logos
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/search-seo"
          sx={styles.fsLink}
          css={router.pathname === "/search-seo" && { color: "#073DA6" }}
        >
          Search/SEO
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/contact-us"
          sx={styles.fsLink}
          css={router.pathname === "/contact-us" && { color: "#073DA6" }}
        >
          Contact
        </a>
      </div>
      <div
        sx={styles.headerLinksCollapse}
        css={
          collapseHeader && {
            "@media screen and (min-width: 768px)": {
              transform: "translateY(0rem)",
              pointerEvents: "auto",
            },
          }
        }
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com"
          sx={styles.fsLink}
          css={router.pathname === "/" && { color: "#073DA6" }}
        >
          Home
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/websites"
          sx={styles.fsLink}
          css={router.pathname === "/websites" && { color: "#073DA6" }}
        >
          Websites
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/logo-design"
          sx={styles.fsLink}
          css={router.pathname === "/logo-design" && { color: "#073DA6" }}
        >
          Logos
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/search-seo"
          sx={styles.fsLink}
          css={router.pathname === "/search-seo" && { color: "#073DA6" }}
        >
          Search/SEO
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jensendesignshop.com/contact-us"
          sx={styles.fsLink}
          css={router.pathname === "/contact-us" && { color: "#073DA6" }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

var styles = {
  fsHeaderCont: {
    px: ["3", null, null, null, "1.35rem", "1.75rem"],
    width: "100%",
    display: ["none", null, null, null, "flex"],
    justifyContent: "space-between",
    position: "relative",
  },

  svgCont: {
    width: "100%",
  },

  collapseLinkCont: {
    position: "absolute",
  },

  logoLink: {
    p: "0",
    bg: "unset",
    border: "none",
    display: "block",
    width: [null, null, null, null, "11.75rem", "13.5rem"],
    transition: "width 0.75s linear, transform 0.65s ease-out",
  },

  collapseLogoLink: {
    p: "0",
    width: 0,
    position: "absolute",
    bg: "unset",
    top: "0.175rem",
    left: "2.75%",
    border: "none",
    display: "block",
    opacity: "1",
    pointerEvents: "none",
    transform: "translateY(10rem)",
    transition: "transform 0.65s ease-out, width 0.65s ease-out",
    zIndex: 9,
  },

  headerLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    height: "3.5rem",
    transform: "translateY(1rem)",
    transition: "transform 0.6s ease-in-out",
  },

  headerLinksCollapse: {
    display: "flex",
    position: "absolute",
    right: [null, null, null, null, "1.25rem", "1.75rem"],
    justifyContent: "space-between",
    width: "70%",
    height: "3.5rem",
    pointerEvents: "none",
    transform: "translateY(10rem)",
    transition: "transform 0.6s ease-in-out",
  },

  fsLinkHome: {
    display: "flex",
    alignItems: "center",
    fontSize: [null, null, null, null, "1.3rem", "1.5rem"],
    py: "2",
    pt: [null, null, null, null, "0.7rem"],
    bg: "unset",
    border: "none",
    cursor: "pointer",
    transition:
      "transform 0.35s ease-out, text-shadow 0.35s ease-out, color 0.35s ease-out",

    "&:hover": {
      color: "primaryBlue",
      transform: "scale(1.15)",
      textShadow: "2.5px 2.5px 4px rgba(4, 5, 12, 0.5)",
    },
  },

  fsLink: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: [null, null, null, null, "1rem", "1.2rem", "1.3rem"],
    bg: "unset",
    py: "2",
    border: "none",
    fontFamily: "heading",
    fontWeight: "700",
    cursor: "pointer",
    transform: "perspective(1px) translateZ(0)",
    backfaceVisibility: "hidden",

    transition:
      "transform 0.35s ease-out, text-shadow 0.35s ease-out, color 0.35s ease-out, font-weight 0.35s ease-in-out",

    "&:hover": {
      color: "primaryBlue",
      transform: [null, null, null, null, "scale(1.1)", null, "scale(1.05)"],
      textShadow: "1.5px 1.5px 3px rgba(4, 5, 12, 0.15)",
    },
  },
};

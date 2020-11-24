/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useLayoutEffect } from "react";
import Link from "next/link";

import JdsSvg from "../../../../public/svgs/JDS";
import MenuIcon from "./MenuIcon";
import MobileDropdownMenu from "./MobileDropdownMenu";
import FullscreenHeader from "./FSHeader";

export default function Header() {
  var [menuOpen, setMenuOpen] = useState(false);
  var [collapseHeader, setCollapseHeader] = useState(false);

  var scrollHandler = (e) => {
    if (e.currentTarget.scrollY > 80) {
      setCollapseHeader(true);
    }

    if (e.currentTarget.scrollY < 80) {
      setCollapseHeader(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return function removeScroll() {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      sx={{
        position: "fixed",
        top: "0",
        width: ["100vw", null, null, null, null, null, "1200px"],
        height: ["4.75rem", "5rem", null, "5.25rem", "6rem"],
        bg: "light",
        opacity: "0.95",
        zIndex: "99999",
        transition: "all 0.75s ease-in-out",
      }}
      css={[
        menuOpen && {
          height: "100vh !important",
          top: "0",
          opacity: "1",
          transition: "opacity 0.5s ease-in-out, height 0.75s ease-in-out",
        },
        collapseHeader && {
          "@media screen and (min-width: 768px)": {
            height: "3.75rem",
          },
        },
      ]}
    >
      <div
        sx={styles.headerCont}
        css={[
          menuOpen && { opacity: "1", top: "0" },
          collapseHeader && {
            "@media screen and (min-width: 768px)": {
              height: "3.75rem !important",
              transition: "height 0.75s ease-out",
            },
          },
        ]}
      >
        <div sx={styles.headerItems}>
          <Link href="/" sx={styles.svgCont}>
            <a sx={styles.linkTag}>
              <JdsSvg />
            </a>
          </Link>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
            sx={styles.menuIconCont}
          >
            <MenuIcon menuOpen={menuOpen} />
          </a>
        </div>
        <FullscreenHeader collapseHeader={collapseHeader} />
      </div>
      <MobileDropdownMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

var styles = {
  headerCont: {
    position: "absolute",
    top: 0,
    overflowX: "hidden",
    overflowY: "inherit",
    height: ["4.75rem", "5rem", null, "5.25rem", "6rem"],
    display: [null, null, null, null, "flex"],
    width: ["100vw", null, null, null, null, null, "1200px"],
    transition: "height 0.75s ease-out",
  },

  headerItems: {
    px: ["2", "0.9rem", null, "3"],
    py: "2",
    display: ["flex", null, null, null, "none"],
    justifyContent: "space-between",
    alignItems: "center",
    height: "inherit",
    width: "100%",
  },
  linkTag: {
    display: "block",
    width: ["50%", "11rem", null, "11.5rem"],
    pt: [null, "1", null, "0"],
  },
  svgCont: {
    width: "100%",
  },
  menuIconCont: {
    width: ["15%", "3.5rem"],
    height: "inherit",
    bg: "inherit",
    py: "3",
    border: "none",

    "&:active": {
      bg: "yellow",
      border: "none",
    },

    "&:focus": {
      border: "none",
    },
  },
};

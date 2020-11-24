/** @jsx jsx */

import React from "react";
import { useRef } from "react";
import { jsx } from "theme-ui";
import Link from "next/link";

import { useScrollFreeze, useHover } from "@/hooks";
export default function MobileDropdownMenu({ menuOpen, setMenuOpen }) {
  var scrollableOnLock = useRef(null);

  return (
    <div
      css={[
        !menuOpen && styles.menuPositionOnClosed,
        menuOpen && { overflow: "scroll", overflowY: "auto" },
      ]}
      sx={styles.mobileDropdownLinks}
      ref={scrollableOnLock}
    >
      <ul css={[!menuOpen && styles.menuPositionOnClosed]} sx={styles.ul}>
        <DropdownLink
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          to="https://jensendesignshop.com"
          title="Home"
        />

        <DropdownLink
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          to="https://jensendesignshop.com/websites"
          title="Websites"
        />

        <DropdownLink
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          to="https://jensendesignshop.com/logo-design"
          title="Logo Design"
        />

        <DropdownLink
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          to="https://jensendesignshop.com/search-seo"
          title="Search/SEO"
        />

        <DropdownLink
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          to="https://jensendesignshop.com/contact-us"
          title="Contact Us"
        />
      </ul>
      {!menuOpen ? null : (
        <ScrollFreeze scrollableOnLock={scrollableOnLock.current} />
      )}
    </div>
  );
}

function DropdownLink({
  to = "#",
  title = "TODO - Title",
  menuOpen,
  setMenuOpen,
}) {
  var [linkIsHovered, bindHover] = useHover();

  return (
    <li
      {...bindHover}
      css={menuOpen && styles.dropdownListItemMenuOpen}
      sx={styles.dropdownListItem}
    >
      <a
        href={to}
        css={[
          linkIsHovered && styles.dropdownLinkIsHovered,
          !menuOpen && styles.disableLink,
        ]}
        sx={styles.dropdownLink}
        tabIndex={menuOpen ? 0 : -1}
        disabled={!menuOpen}
      >
        {title}
      </a>
    </li>
  );
}

function ScrollFreeze({ scrollableOnLock }) {
  useScrollFreeze(scrollableOnLock);
  return <></>;
}

var styles = {
  mobileDropdownLinks: {
    display: ["block", null, null, null, null, "none"],
    position: "fixed",
    top: "4.75rem",
    width: "100vw",
    left: "0",
    right: "0",
    zIndex: "9",
    opacity: "1",
    height: "calc(100vh - 4rem)",
    overflowX: "scroll",
    overflowY: "auto",
    transition: "height 0.75s ease-in-out, opacity 0.5s ease-in-out",
  },

  ul: {
    margin: "0",
    padding: "0",
    overflowY: "auto",
    overflowX: "scroll",
    height: "calc(100vh - 4rem)",
    minHeight: "20rem",
    zIndex: "99",
    transition: "height 0.75s ease-in-out",
  },

  menuPositionOnClosed: {
    pointerEvents: "none",
    height: "0",
  },

  dropdownListItem: {
    opacity: "0",
    transform: "translateY(-18px)",
    listStyle: "none",
    paddingLeft: "0",
    margin: "0",

    "&:before": {
      display: "block",
      content: '""',
      width: "94%",
      marginTop: "0.75rem",
      marginLeft: "2%",
      height: "1px",
      bg: "dark",
    },

    "&:nth-of-type(1)": {
      "&:before": {
        width: "100%",
        marginLeft: "0",
        marginTop: "0",
      },

      transition: "transform 0.7s ease-in-out 0.25s, opacity 0.6s ease-in",
    },
    "&:nth-of-type(2)": {
      transition: "transform 0.63s ease-in-out 0.2s, opacity 0.53s ease-in",
    },
    "&:nth-of-type(3)": {
      transition: "transform 0.56s ease-in-out 0.15s, opacity 0.46s ease-in",
    },
    "&:nth-of-type(4)": {
      transition: "transform 0.49s ease-in-out 0.1s, opacity 0.39s ease-in",
    },
    "&:nth-of-type(5)": {
      transition: "transform 0.42s ease-in-out 0.05s, opacity 0.32s ease-in",
    },
  },

  dropdownListItemMenuOpen: {
    opacity: "1",
    transform: "translateY(0px)",

    "&:before": {
      display: "block",
      content: '""',
      width: "94%",
      marginTop: "0.75rem",
      marginLeft: "2%",
      height: "1px",
      bg: "dark",
    },

    "&:nth-of-type(1)": {
      transition: "transform 0.42s ease-in, opacity 0.42s ease-in 0.1s",

      "&:before": {
        width: "100%",
        marginLeft: "0",
        marginTop: "0",
      },
    },
    "&:nth-of-type(2)": {
      transition: "transform 0.49s ease-in, opacity 0.49s ease-in 0.1s",
    },
    "&:nth-of-type(3)": {
      transition: "transform 0.56s ease-in, opacity 0.56s ease-in 0.1s",
    },
    "&:nth-of-type(4)": {
      transition: "transform 0.63s ease-in, opacity 0.63s ease-in 0.1s",
    },
    "&:nth-of-type(5)": {
      transition: "transform 0.7s ease-in, opacity 0.7s ease-in 0.1s",
    },
  },

  dropdownLink: {
    fontFamily: "heading",
    fontWeight: "600",
    bg: "unset",
    border: "unset",
    fontSize: ["1.35rem", "1.35rem", "1.4rem"],
    display: "block",
    padding: ["0.4rem 0.75rem", "0.6rem 0.95rem", "0.6rem 1.15rem"],
    margin: "0.75rem 0",
    zIndex: "999",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    transition: "color 0.4s ease-in, transform 0.45s ease-in",
  },

  dropdownLinkIsHovered: {
    transform: "translateX(5px)",
    color: "primary",
    transition: "color 0.4s ease-out, transform 0.45s ease-out",
  },

  disableLink: {
    pointerEvents: "none",
    zIndex: "-1",
  },
};

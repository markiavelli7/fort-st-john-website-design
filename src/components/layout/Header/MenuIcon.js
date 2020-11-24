/** @jsx jsx */
import { jsx } from "theme-ui";

export default function MenuIcon({ menuOpen = false }) {
  return (
    <MenuIconContainer>
      <MenuBarTop menuOpen={menuOpen} />
      <MenuBarMid menuOpen={menuOpen} />
      <MenuBarBottom menuOpen={menuOpen} />
    </MenuIconContainer>
  );
}

function MenuIconContainer({ children }) {
  return (
    <div
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}

function MenuBarTop({ menuOpen }) {
  var menuOpenStyles = {
    transform: [
      "rotate(-315deg) translateY(0.6rem) translateX(0.5rem)",
      "rotate(-315deg) translateY(0.1rem) translateX(0.75rem)",
      null,
      "rotate(-315deg) translateY(0.09rem) translateX(0.85rem)",
    ],
    transition: "transform 0.7s cubic-bezier(0.04, 0.04, 0.12, 0.96)",
  };

  return (
    <div
      css={menuOpen ? menuOpenStyles : null}
      sx={{
        transition:
          "transform 0.7s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s",
        ...menuBarBaseStyles,
        width: "100%",
        top: ["0.375rem", "0.475rem", null, "0.575rem"],
      }}
    />
  );
}

function MenuBarMid({ menuOpen }) {
  var menuOpenStyles = {
    overflow: "hidden",
    transform: "translateX(12.5rem)",
    transition:
      "opacity 0.4s ease-in-out, transform 0.5s cubic-bezier(0.23, 1.25, 0.46, 1)",
    opacity: "0",
  };

  return (
    <div
      css={menuOpen ? menuOpenStyles : null}
      sx={{
        transition:
          "opacity 0.2s 0.3s ease-in-out,transform 0.7s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s",
        ...menuBarBaseStyles,
        top: ["1.18rem", "1.3rem", null, "1.425rem"],
      }}
    />
  );
}

function MenuBarBottom({ menuOpen }) {
  var menuOpenStyles = {
    width: "100%",
    transform: [
      "rotate(-45deg) translateY(-0.7rem) translateX(0.5rem)",
      "rotate(-45deg) translateY(-0.4rem) translateX(1.1rem)",
      null,
      "rotate(-45deg) translateY(-0.4rem) translateX(1.1rem)",
    ],
    transition: "transform 0.7s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s",
  };

  return (
    <div
      css={menuOpen ? menuOpenStyles : null}
      sx={{
        transition:
          "transform 0.7s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s",
        ...menuBarBaseStyles,
        width: "100%",
        bottom: ["0.375rem", "0.5rem", null, "0.6rem"],
        right: "0",
      }}
    />
  );
}

var menuBarBaseStyles = {
  position: "absolute",
  bg: "dark",
  width: "100%",
  height: "0.35rem",
  borderRadius: "0.25rem",
  transform: "none",
};

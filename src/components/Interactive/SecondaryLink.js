/** @jsx jsx */
import { jsx } from "theme-ui";

export function SecondaryLink({
  children = "Button Text",
  href = "/",
  style = {},
}) {
  var styles = {
    button: {
      display: "block",
      textAlign: "left",
      p: ["0.65rem 0.85rem", "0.7rem 0.85rem", null, "0.85rem 1rem"],
      borderRadius: ["0.5rem"],
      bg: "rgba(0,0,0,0)",
      border: "3.5px solid #2F5CF6",
      fontFamily: "headingAlt",
      fontWeight: "800",
      color: "light",
      fontSize: ["1.15rem", "1.35rem", null, "1.4rem"],
      textShadow: ".1rem .1rem .035rem rgba(0, 0, 0, 0.25)",
      boxShadow: ".15rem .15rem .35rem rgba(0, 0, 0, 0.35)",
      cursor: "pointer",
      transform: "perspective(1px) translateZ(0)",
      backfaceVisibility: "hidden",

      transition:
        "transform 0.35s ease-out, text-shadow 0.35s ease-out, box-shadow 0.35s ease-out, color 0.35s ease-out, font-weight 0.35s ease-in-out",

      "@media screen and (min-width: 768px)": {
        "&:hover": {
          transform: [null, null, null, null, "scale(1.015)", null],
          boxShadow: ".15rem .15rem .75rem rgba(255, 255, 255, 0.35)",
        },
      },

      width: "100%",
      ...style,
    },
  };

  return (
    <a href={href} sx={styles.button}>
      {children}
    </a>
  );
}

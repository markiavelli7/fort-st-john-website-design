/** @jsx jsx */
import { jsx } from "theme-ui";

export function Two({ style, children }) {
  var styles = {
    title: {
      m: "0",
      mb: ["3"],
      fontSize: ["1.6rem", "1.8rem", "1.9rem", "2.0rem"],
      fontFamily: "heading",
      fontWeight: "700",
      textShadow: "1px 1.5px 3px rgba(0,0,0,0.15)",
      ...style,
    },
  };
  return <h2 sx={styles.title}>{children}</h2>;
}

export function Three({ style, children }) {
  var styles = {
    title: {
      m: "0",
      mb: ["3"],
      fontSize: ["1.3rem", "1.5rem", "1.6rem", "1.7rem"],
      fontFamily: "heading",
      fontWeight: "700",
      textShadow: "1px 1.5px 3px rgba(0,0,0,0.15)",
      ...style,
    },
  };
  return <h2 sx={styles.title}>{children}</h2>;
}

/** @jsx jsx */
import { jsx } from "theme-ui";

export function BodyParagraph({ children, style }) {
  var styles = {
    paragraph: {
      m: 0,
      fontSize: ["1rem", "1.2rem", "1.25rem", "1.3rem"],
      fontWeight: "500",
      ...style,
    },
  };

  return <p sx={styles.paragraph}>{children}</p>;
}

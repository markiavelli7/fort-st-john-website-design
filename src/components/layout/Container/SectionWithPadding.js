/** @jsx jsx */
import { jsx } from "theme-ui";

export function SectionWithPadding({ children, style }) {
  var styles = {
    container: {
      px: ["3%"],
      ...style,
    },
  };

  return <div sx={styles.container}>{children}</div>;
}

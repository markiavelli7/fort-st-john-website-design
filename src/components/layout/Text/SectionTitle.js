/** @jsx jsx */
import { jsx } from "theme-ui";

import JDSInitials from "../../../../public/svgs/JDLogo";

export function SectionTitle({ children }) {
  return (
    <div sx={styles.sectionTitleCont}>
      <div sx={styles.sectionTitle}>
        <div sx={styles.jdInitials}>
          <JDSInitials />
        </div>
        <h2 sx={styles.title}>{children}</h2>
      </div>
      <div sx={styles.blackBar} />
    </div>
  );
}

var styles = {
  sectionTitleCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    textShadow: "1px 1.5px 3px rgba(0, 0, 0, 0.15)",
    fontSize: ["1.1rem", "1.3rem", "1.4rem", "1.5rem", "1.6rem", "1.7rem"],
    mr: ["3", null, "1.5rem", null, "1.75rem"],
  },

  jdInitials: {
    height: ["1.5rem", "2rem", null, null, "2.25rem", "2.5rem"],
    width: ["2rem", "2.5rem", null, null, "2.75rem", "3rem"],
    mr: ["0.75rem", "1rem", null, null, "1.35rem", "1.5rem"],
  },

  title: {
    m: 0,
    fontFamily: "heading",
    fontWeight: "700",
    fontSize: ["1.75rem", "1.95rem", "2.15rem", "2.25rem", "2.5rem"],
  },

  blackBar: {
    height: "0.15rem",
    bg: "dark",
    flex: "auto",
  },
};

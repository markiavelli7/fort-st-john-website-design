/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div sx={styles.layoutCont}>
      <Header />
      <div sx={styles.bodyCont}>
        <div sx={styles.spacer} />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

var styles = {
  layoutCont: {
    position: "relative",
    maxWidth: "1200px",
    margin: [
      null,
      null,
      null,
      null,
      null,
      null,
      "0 calc((100vw - 1200px) / 2)",
    ],
    pt: ["4.75rem", "5rem", null, "5.25rem", "6rem"],
  },

  spacer: {
    width: "100%",
    // height: ["4.75rem", "5rem", null, "5.25rem", "6rem"],
  },

  bodyCont: {
    zIndex: "1",
  },
};

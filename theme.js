import { swiss } from "@theme-ui/presets";

var theme = {
  ...swiss,
  fonts: {
    body: "'Work Sans', sans-serif",
    heading: "Rubik, sans-serif",
    headingAlt: "'Work Sans', sans-serif",
  },
  colors: {
    light: "#FFFFFF",
    lightAccent: "#EAE9F2",
    dark: "#04050C",
    darkAccent: "#303031",
    lightBlue: "#2F5CF6",
    primaryBlue: "#073DA6",
    lighterBlue: "#5572DA",
    lightestBlue: "#98A6D9",
    denotiveError: "#DF1129",
    denotiveSuccess: "#0F7344",
    background: "light",
    text: "dark",
  },
  containers: {
    card: {
      boxShadow: "0px 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  styles: {
    ...swiss.styles,
    root: {
      fontFamily: "body",
    },
  },
  breakpoints: ["360px", "420px", "565px", "768px", "1024px", "1200px"],
};

export default theme;

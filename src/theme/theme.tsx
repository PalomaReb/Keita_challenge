import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#000000",
      secondary: "#1da3cf",
      hint: "#00bc22",
    },
    primary: {
      main: "#1da3cf",
    },
    secondary: {
      main: "#ffffff",
    },
    warning: {
      main: "#fe1807",
    },
    background: {
      default: "#1E3640",
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: ".6rem",
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 19,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 20,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

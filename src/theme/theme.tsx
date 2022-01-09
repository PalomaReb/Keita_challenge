import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    palette: {
        text: {
            primary: "#1da3cf ",
            secondary: "#000000",
            hint: "#108ffc"
        },
        primary: {
            main: "#1da3cf",
        },
        secondary: {
            main: "#ffffff"
        },
        warning: {
            main: "#F37126"
        },
        background: {
            default: "#1E3640"
        }

    },
    typography: {
        h1: {
            fontSize: 30,
            letterSpacing: "5px",
            // marginBottom: "1rem",
        },
        h2: {
            fontSize: 24,
            fontWeight:"bold",
            // letterSpacing: "5px",

        },
        h3: {
            fontSize: 19,
            fontWeight: "bold"
            // letterSpacing: "5px",

        },
        h4: {
            fontSize: 16,
            // letterSpacing: "5px",

        },
    },
    shape: {
        borderRadius: 20
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
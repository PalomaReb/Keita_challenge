import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  //____________________________________LOGIN CSS______________________________________________

  background: {
    background: "linear-gradient(to right, #ffffff 0%, #1da3cf 100%)",
  },
  klogo: {
    height: "120px",
    marginBottom: "20px",
  },

  loginText: {
    textAlign: "left",
    marginBottom: "40px",
    marginTop: "5px",
  },

  button: {
    color: theme.palette.secondary.main,
    padding: ".3rem 1rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  },

  form: {
    "& label": {
      color: theme.palette.text.primary,
      textAlign: "center",
    },
    "& button": {
      width: "100%",
      padding: "1rem 2rem",
    },
  },

  errorTXT: {
    color: theme.palette.warning.main,
    marginBottom: "15px",
    fontWeight: "bold",
  },

  input: {
    marginBottom: "40px",
    width: "100%",
    color: theme.palette.text.secondary,
  },

  loginContainer: {
    textAlign: "center",
  },

  loginBox: {
    borderRadius: theme.shape.borderRadius,
    padding: "10%",
    border: `4px solid ${theme.palette.primary.main}`,
    height: "100%",
  },

  // ___________________________HEADER CSS ___________________________________

  logo: {
    height: "68px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    padding: ".2rem",
    marginBottom: "1.5rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 10px -10px",
  },

  desktopMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  mobileMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  links: {
    color: theme.palette.text.primary,
    padding: "20px",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },

  active: {
    color: theme.palette.text.secondary,
  },

  ///______________________________________________subForm___________________________________

  text: {
    marginBottom: "1.5rem",
  },

  tableInfo: {
    "& td": {
      width: "20%",
      [theme.breakpoints.down("xs")]: {
        fontSize: ".6rem",
      },
    },
  },

  textColor: {
    "& th": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: ".64rem",
      },
    },
  },

  approvedTXT: {
    color: theme.palette.text.hint,
    fontSize: ".8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".6rem",
    },
  },

  tableContainer: {
    maxHeight: "60vh",
  },

  trash: {
    color: theme.palette.warning.main,
    "&:hover": {
      cursor: "pointer",
    },
  },

  mobileBTN: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: ".3rem .5rem",
      fontSize: ".6rem",
    },
  },
}));

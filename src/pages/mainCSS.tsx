import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  //____________________________________LOGIN CSS______________________________________________

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
    padding: "15px 30px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    margin: "5px 10px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },

  form: {
    "& label": {
      color: theme.palette.text.primary,
      textAlign: "center",
    },
    "& button": {
      width: "100%",
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
    height: "80px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "sapce-between",
    padding: "15px",
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
    maxHeight: "78vh",
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
      padding: "5px 8px",
      fontSize: ".6rem",
    },
  },
}));

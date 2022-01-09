import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    //____________________________________LOGIN CSS______________________________________________

klogo:{
    height:"120px",
    marginBottom:"20px"
},

button: {
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        padding: "15px 30px",
        letterSpacing: "2px",
        marginBottom: "20px",
        width: "100%"
    },

loginText: {
    textAlign: "left",
    marginBottom: "40px",
    marginTop: "5px"
},
logOut: {
    color: theme.palette.text.hint,
    border: `1px solid ${theme.palette.text.primary}`,
    padding: "5px 30px",
    width: "auto",
    '&:hover': {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`
    }
},
// register: {
//     border: `1px solid ${theme.palette.text.primary}`,
//     marginTop: "20px",
//     width: "80%",
//     '&:hover': {
//         color: theme.palette.text.secondary,
//         backgroundColor: theme.palette.primary.main,
//         border: `1px solid ${theme.palette.primary.main}`
//     }
// },

login: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.primary.main}`
    }
},

loginForm: {
    "& label": {
        color: "black",
        textAlign: "center"
    },
},

errorTXT: {
    color: theme.palette.warning.main,
    marginBottom: "15px",
    fontWeight: "bold"
},

input: {
    marginBottom: "40px",
    width: "100%"
},
loginContainer: {
    textAlign: "center"
},
loginBox: {
    borderRadius: theme.shape.borderRadius,
    padding: "10%",
    border: `4px solid ${theme.palette.primary.main}`,
    height: "100%"
},

// ___________________________HEADER CSS ___________________________________

logo: {
    height: "80px"
},
header: {
    display: "flex",
    alignItems:"center",
    justifyContent: "sapce-between",
    padding: "15px"
},


}));
import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
//import { useHistory } from "react-router";
import { useStyles } from "./mainCSS";
import logo from "../assets/keitaLogo.jpg";
import UserAuth from "../classes/user";
import { useNavigate } from "react-router-dom";

interface IUser {
  username: String;
  password: String;
}

function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  const [input, setInput] = useState<IUser>({ username: "", password: "" });
  const [message, setMessage] = useState(String);

  if (UserAuth.isAuthenticated()) {
    //redirect to sublist
  }

  const handleInputChange = (e: any) => {
    // save info in variable input all the changes that occur in the login form inputs. The keys constructed in the object are the input names.
    if (e.currentTarget.validity.valid) {
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    UserAuth.login(
      input,
      () => {
        setMessage("Login succesfull");
        navigate("/view-subsidies");
      },
      () => {
        setMessage("User and/or password are incorrect.");
      }
    );
  };

  return (
    <Grid direction="row" justifyContent="center" alignItems="center" container>
      <Grid className={classes.loginContainer} item xs={8} md={4}>
        <img alt="logo" className={classes.klogo} src={logo}></img>

        <Paper elevation={3} className={classes.loginBox} variant="outlined">
          <Typography color="secondary" align="center" variant="h1">
            Log in
          </Typography>
          <Typography className={classes.loginText} component="p"></Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              onChange={handleInputChange}
              className={classes.input}
              required
              type="email"
              name="username"
              label="Username"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              className={classes.input}
              required
              type="password"
              name="password"
              label="Password"
              variant="outlined"
            />
            <Typography className={classes.errorTXT}>{message}</Typography>
            <Button type="submit" size="large" className={classes.button}>
              Log in
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;

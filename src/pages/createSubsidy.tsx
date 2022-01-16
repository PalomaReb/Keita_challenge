import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../assets/css/mainCSS";
import { Header } from "../components/header";
import SubForm from "../components/subForm";
import UserAuth from "../classes/userAuth";
import { useNavigate } from "react-router-dom";

function CreateSubsidy() {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create a new subsidy | Keita";
    if (!UserAuth.isAuthenticated()) {
      navigate("/login");
    }
  });

  return (
    <Grid>
      <Header></Header>
      <Typography color="primary" align="center" variant="h1">
        Create a new subsidy
      </Typography>
      <Typography className={classes.mb} align="center">
        Please insert your information below.
      </Typography>
      <Grid container justifyContent="center">
        <SubForm></SubForm>
      </Grid>
    </Grid>
  );
}

export default CreateSubsidy;

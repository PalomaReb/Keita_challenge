import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./mainCSS";
import { Header } from "../components/header";
import SubForm from "../components/subForm";

function CreateSubsidy() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Header></Header>
      <Typography color="primary" align="center" variant="h1">
        Create a new subsidy
      </Typography>
      <Typography className={classes.text} align="center">
        Please insert your information below.
      </Typography>
      <Grid container justifyContent="center">
        <SubForm></SubForm>
      </Grid>
    </Grid>
  );
}

export default CreateSubsidy;

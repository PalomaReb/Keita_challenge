import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Subs from "../classes/subs";
import { useStyles } from "../pages/mainCSS";
import { Header } from "./header";

// interface Subsidy{
//   origin: String,
//   destination : String,
//   value: number,
//   approved : Boolean,
// }

function SubForm() {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState(String);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const subForm: any = {
        origin: e.target.origin.value,
        destination: e.target.destination.value,
        value: e.target.value.value,
        approved: false,
      };

      Subs.addSub(
        subForm,
        () => {
          setInputMessage(
            "Thank you for your submission, your subsidy will be reviewed."
          );
          // Redirigir al listado
        },
        () =>
          setInputMessage("An error ocurred, please review your information.")
      );
    }
  };
  return (
    <Grid>
      <Header></Header>
      <Typography color="primary" align="center" variant="h1">
        {" "}
        Create a new subsidy
      </Typography>
      <Typography className={classes.text} align="center">
        {" "}
        Please insert your information below.
      </Typography>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <TextField
          className={classes.input}
          inputProps={{ minLength: 3 }}
          required
          type="text"
          name="origin"
          label="Origin"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          inputProps={{ minLength: 3 }}
          required
          type="text"
          name="destination"
          label="Destination"
          variant="outlined"
        />
        <TextField
          label="Subsidy value"
          variant="outlined"
          type="number"
          name="value"
          inputProps={{ step: 0.01, min: 0 }}
          required
          className={classes.input}
        />
        <Button type="submit" className={`${classes.button} ${classes.login}`}>
          Submit
        </Button>
      </form>
      <Typography>{inputMessage}</Typography>
    </Grid>
  );
}

export default SubForm;

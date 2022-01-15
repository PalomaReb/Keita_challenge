import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Subs from "../classes/subs";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../assets/css/mainCSS";

function SubForm() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [inputMessage, setInputMessage] = useState(String);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const subForm: any = {
        id: Subs.getSubs()[Subs.getSubs().length - 1].id + 1,
        origin: e.target.origin.value,
        destination: e.target.destination.value,
        value: e.target.value.value,
        approved: false,
      };

      Subs.addSub(
        subForm,
        () => navigate("/view-subsidies"),
        () =>
          setInputMessage("An error ocurred, please review your information.")
      );
    }
  };
  return (
    <Grid item xs={10} md={8}>
      <form onSubmit={handleSubmit} className={classes.form}>
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
        <Typography>{inputMessage}</Typography>
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </form>
    </Grid>
  );
}

export default SubForm;

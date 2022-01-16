import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Subs from "../classes/subs";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../assets/css/mainCSS";

function SubForm() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [inputMessage, setInputMessage] = useState(String);

  // handlesubmit where the values of the subsidy form are validated, and the ".addSubs" function is called in order to save the subsidy in the local storage.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const subForm: any = {
        id: Subs.getSubs()[Subs.getSubs().length - 1].id + 1, // give new id to all subsidies created in order to know which one will be deleted.
        origin: e.target.origin.value,
        destination: e.target.destination.value,
        value: e.target.value.value,
        approved: false,
      };

      Subs.addSub(
        subForm,
        () => navigate("/view-subsidies"), // once created the user will be sent to the list
        () =>
          setInputMessage("An error ocurred, please review your information.") // if something is not correct in the creation of a new sub, an error message will be shown.
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
          inputProps={{ step: 0.01, min: 0 }} // decimal incrementation allowed.
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

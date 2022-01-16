import React from "react";
import { Grid, FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import { useStyles } from "../assets/css/mainCSS";

interface handleInputChange {
  val: string;
  oc: React.ChangeEventHandler<HTMLSelectElement>;
}

function FilterBox(props: handleInputChange) {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.mb}>
      <FormControl>
        <InputLabel shrink htmlFor="filter-native-label-placeholder">
          Filter by:
        </InputLabel>
        <NativeSelect
          value={props.val} // prop value display.
          onChange={props.oc} // use oc function prop to display change needed.
          inputProps={{
            name: "Filter",
            id: "filter-native-label-placeholder",
          }}
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Not approved">Not approved</option>
        </NativeSelect>
      </FormControl>
    </Grid>
  );
}
export default FilterBox;

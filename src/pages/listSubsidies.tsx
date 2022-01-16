import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import SubsTable from "../components/subsTable";
import UserAuth from "../classes/userAuth";

function SubsList() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "View Subsidies | Keita";
    if (!UserAuth.isAuthenticated()) {
      navigate("/login");
    }
  });

  return (
    <Grid item xs={12}>
      <Header></Header>
      <Typography color="primary" align="center" variant="h1">
        Subsidies list
      </Typography>
      <SubsTable></SubsTable>
    </Grid>
  );
}

export default SubsList;

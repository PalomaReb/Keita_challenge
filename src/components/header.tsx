import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "../pages/mainCSS";
import logo from "../assets/keitaLogo.jpg";


export function Header(){
    const classes = useStyles();


    return(

        <Grid container direction="row" justifyContent="space-between" className={classes.header}>
            <Grid item>
                <img alt="logo" className={classes.logo} src={logo} />
            </Grid>
            <Grid item>
                <Button> Create new subsidery</Button>
                <Button>View all subsideries</Button>
            </Grid>
            <Grid item>
                <Button>Log out </Button>
            </Grid>
        </Grid>
    
   
    );





}


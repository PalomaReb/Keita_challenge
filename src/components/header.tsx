import React, { useState } from "react";
import { Button, Grid, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../pages/mainCSS";
import logo from "../assets/keitaLogo.jpg";
import UserAuth from "../classes/user";
import { useNavigate } from "react-router-dom";

export function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className={classes.header}
    >
      <Grid item>
        <img alt="logo" className={classes.logo} src={logo} />
      </Grid>
      <Grid className={classes.desktopMenu} item>
        <Button
          onClick={() => navigate("/create-subsidies")}
          className={classes.button}
        >
          Create new subsidy
        </Button>
        <Button
          onClick={() => navigate("/view-subsidies")}
          className={classes.button}
        >
          View subsidies
        </Button>
      </Grid>
      <Grid className={classes.desktopMenu} item>
        <Button
          onClick={() => UserAuth.logout(() => navigate("/"))}
          className={classes.button}
        >
          Logout
        </Button>
      </Grid>
      <Button
        className={classes.mobileMenu}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => navigate("/view-subsidies")}>
          View subsidies
        </MenuItem>
        <MenuItem onClick={() => navigate("/create-subsidies")}>
          Create new subsidy
        </MenuItem>
        <MenuItem onClick={() => UserAuth.logout(() => navigate("/"))}>
          Logout
        </MenuItem>
      </Menu>
    </Grid>
  );
}

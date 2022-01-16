import React, { useState } from "react";
import { Button, Grid, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../assets/css/mainCSS";
import logo from "../assets/keitaLogo.jpg";
import UserAuth from "../classes/userAuth";
import { useNavigate, NavLink } from "react-router-dom";

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
        <NavLink
          to="/create-subsidies"
          className={
            ({ isActive }) =>
              classes.links + (isActive ? " " + classes.active : "") // active links to know what page you are currently on
          }
        >
          Create new subsidy
        </NavLink>
        <NavLink
          to="/view-subsidies"
          className={
            ({ isActive }) =>
              classes.links + (isActive ? " " + classes.active : "") // active links to know what page you are currently on
          }
        >
          View subsidies
        </NavLink>
      </Grid>
      <Grid className={classes.desktopMenu} item>
        <NavLink
          to="/"
          onClick={() => UserAuth.logout(() => navigate("/"))} // active not needed since it will take you to the log in page
          className={classes.links}
        >
          Logout
        </NavLink>
      </Grid>
      <Button
        className={classes.mobileMenu} // hamburguer menu section
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
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            navigate("/view-subsidies");
            setAnchorEl(null);
          }}
        >
          View subsidies
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/create-subsidies");
            setAnchorEl(null);
          }}
        >
          Create new subsidy
        </MenuItem>
        <MenuItem onClick={() => UserAuth.logout(() => navigate("/"))}>
          Logout
        </MenuItem>
      </Menu>
    </Grid>
  );
}

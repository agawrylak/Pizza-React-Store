import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LocalPizza from "@material-ui/icons/LocalPizza";
import Box from "@material-ui/core/Box";
import { Menu, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    paddingRight: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  typography: {
    color: "black",
    marginRight: "20px",
  },
  menu: {
    marginRight: 0,
  },
  grid: {
    justify: "space-between",
    containerSpacing: 5,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <AppBar
        position="static"
        color="transparent"
        style={{ backgroundColor: "white", boxShadow: " 0px 0px 0px 0px" }}
      >
        <Toolbar variant="dense" className={classes.root}>
          <Box display="flex-start">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            >
              <LocalPizza />
            </IconButton>
          </Box>
          <Box display="flex-end">
            <IconButton
              onClick={handleClick}
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menu}
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon className={classes.menu} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/order">Zamów</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/create">Kreator</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/login">Login</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/register">Rejestracja</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/cart">Koszyk</NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

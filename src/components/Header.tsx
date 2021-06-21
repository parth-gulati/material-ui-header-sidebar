import React from "react";
import { useHistory } from "react-router-dom";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../icon.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxHeight: "60px",
    },
    header: {
      backgroundColor: "white",
      color: "#828181",
    },
    heading: {
      paddingTop: "5px",
      letterSpacing: "3px",
      marginLeft: "20px",
      fontFamily: "Raleway",
    },
  })
);

export default function Header() {
  let history = useHistory();
  //classes for styling
  const classes = useStyles();

  //anchors for dropdown menu
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const isMenu1Open = Boolean(anchorEl1);

  //onClick handle Profile Menu
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  //onClose Profile Menu
  const handleMenuClose = () => {
    setAnchorEl1(null);
  };

  //handle logout
  const handleLogout = () => {
    console.log("User Logged Out");
  };

  //handle checkout
  const handleCheckout = () => {
    console.log("User Checked Out");
  };

  const menuId = "account-profile-menu";

  const profileMenu = (
    <Menu
      anchorEl={anchorEl1}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenu1Open}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          history.push("/profile");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          handleLogout();
        }}
      >
        Logout
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          handleCheckout();
        }}
      >
        Checkout
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <a href="#">
            <img src={logo} className={classes.logo} />
          </a>
          <Typography className={classes.heading} variant="h6" noWrap>
            &nbsp;DIGITAL PAANI
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {profileMenu}
    </>
  );
}

import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import SidebarContext from "../context/SidebarContext";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import CheckIcon from "@material-ui/icons/Check";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../icon.svg";
import { useStyles } from '../styles/header-styles';

export default function Header(props: any) {
  let history = useHistory();
  //classes for styling
  const classes = useStyles();
  const profileMenuId = "account-profile-menu";
  const notificationsMenuId = "account-notifications";

  //anchors for dropdown menu
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const isMenu1Open = Boolean(anchorEl1);
  const isMenu2Open = Boolean(anchorEl2);

  //Context for Sidebar
  const {open, setOpen} = useContext(SidebarContext);

  //onClick handle Profile Menu
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  //onClose Profile Menu
  const handleMenu1Close = () => {
    setAnchorEl1(null);
  };

  //onClose Notifications Menu
  const handleMenu2Close = () => {
    setAnchorEl2(null);
  };

  //handle logout
  const handleLogout = () => {
    console.log("User Logged Out");
  };

  //handle checkout
  const handleCheckout = () => {
    console.log("User Checked Out");
  };

  //Profile Dropdown
  const profileMenu = (
    <Menu
      anchorEl={anchorEl1}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenu1Open}
      onClose={handleMenu1Close}
    >
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenu1Close();
          history.push("/profile");
        }}
      >
        <PersonIcon />
        &nbsp; Profile
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenu1Close();
          handleLogout();
        }}
      >
        <ExitToAppIcon />
        &nbsp; Logout
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenu1Close();
          handleCheckout();
        }}
      >
        <CheckIcon />
        &nbsp; Checkout
      </MenuItem>
    </Menu>
  );

  //Notifications Dropdown
  const notificationMenu = (
    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={notificationsMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenu2Open}
      onClose={handleMenu2Close}
    >
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenu1Close();
        }}
      >
        &nbsp; No New Notifications
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        className={clsx(classes.header, {
          [classes.appBarShift]: open,
        })}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{setOpen(true)}}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <a href="#">
            <img src={logo} className={classes.logo} />
          </a>
          <Typography className={classes.heading} variant="h6" noWrap>
            &nbsp;DIGITAL PAANI
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton
              aria-label="show new notifications"
              aria-controls={notificationsMenuId}
              color="inherit"
              aria-haspopup="true"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={props.notifications} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={profileMenuId}
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
      {notificationMenu}
    </>
  );
}

Header.defaultProps = {
  notifications: 0,
};

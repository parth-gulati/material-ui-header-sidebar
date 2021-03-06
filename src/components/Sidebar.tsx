import React, {useContext} from "react";
import SidebarContext from "../context/SidebarContext";
import clsx from "clsx";
import {
  useTheme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import MailIcon from "@material-ui/icons/Mail";
import { useStyles } from '../styles/sidebar-styles'
import { useHistory } from "react-router";

export default function MiniDrawer(props: any) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const {open, setOpen} = useContext(SidebarContext);

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={()=>{setOpen(false)}}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {(props.checkedIn).map((obj: any, index: any) => (
            <ListItem button key={obj.name} onClick={(e) => {
              e.preventDefault();
              history.push(obj.link);
            }}>
              <ListItemIcon>
                {index % 2 === 0 ? <ArrowForwardIosOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

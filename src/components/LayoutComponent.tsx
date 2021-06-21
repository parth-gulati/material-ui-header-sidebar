import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutComponent(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      {props.children}
    </div>
  );
}

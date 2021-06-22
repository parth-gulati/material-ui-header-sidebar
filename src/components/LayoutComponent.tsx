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

  const checkedIn = [
    {
      name: 'Facebook',
      link: 'facebook'
    },
    {
      name: 'LinkedIn',
      link: 'linkedin'
    }
  ]

  return (
    <div>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} checkedIn={checkedIn} />
      {props.children}
    </div>
  );
}

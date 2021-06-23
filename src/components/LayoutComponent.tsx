import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarContext from "../context/SidebarContext";

export default function LayoutComponent(props: any) {
  const [open, setOpen] = React.useState(false);
  //creating object to be passed onto Context
  const value = {open, setOpen}; 

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
    <SidebarContext.Provider value={value}>
      <Header/>
      <Sidebar checkedIn={checkedIn} />
      {props.children}
    </SidebarContext.Provider>
  );
}

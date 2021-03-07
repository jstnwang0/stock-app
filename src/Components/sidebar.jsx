import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { RiUser3Line } from "react-icons/ri";
import { IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";
import { FiCreditCard, FiLogOut } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
import { IoMdHelp } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

import "fontsource-roboto";

import { Menu, Sidebar, Divider, Container } from "semantic-ui-react";
import SideMenuObj from "./sideMenuItem";

const Sidenav = ({ onHideSidebar, visible }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          size="massive"
          borderless
          animation="overlay"
          icon="labeled"
          onHide={onHideSidebar}
          vertical
          visible={visible}
          direction="right"
        >
          <SideMenuObj
            name="Profile"
            icon={<RiUser3Line size={25} />}
          ></SideMenuObj>
          <SideMenuObj
            name="Bookmarks"
            icon={<IoBookmarkOutline size={25} />}
          ></SideMenuObj>
          <SideMenuObj name="Lists" icon={<BsListUl size={25} />}></SideMenuObj>
          <SideMenuObj
            name="Settings"
            icon={<IoSettingsOutline size={25} />}
          ></SideMenuObj>

          <Divider clearing />

          <SideMenuObj
            name="Your Cards (to subscribe)"
            icon={<FiCreditCard size={25} />}
          ></SideMenuObj>
          <SideMenuObj
            name="Add Bank (to earn)"
            icon={<AiOutlineBank size={30} />}
          ></SideMenuObj>

          <Divider clearing />

          <SideMenuObj
            name="Help and Support"
            icon={<IoMdHelp size={25} />}
          ></SideMenuObj>
          <SideMenuObj
            name="English"
            icon={<MdLanguage size={25} />}
          ></SideMenuObj>

          <Divider clearing />

          <SideMenuObj
            name="Log Out"
            icon={<FiLogOut size={25} />}
          ></SideMenuObj>

          <Menu text vertical size="huge"></Menu>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}></Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default Sidenav;

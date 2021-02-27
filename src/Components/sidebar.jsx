import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { RiUser3Line } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";
import { FiCreditCard, FiLogOut } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
import { IoMdHelp } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

import "fontsource-roboto";

import { Menu, Sidebar, Divider, Container } from "semantic-ui-react";
import SideMenuObj from "./sideMenuItem";

class Sidenav extends Component {
  state = { activeItem: null };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            size="huge"
            borderless
            animation="overlay"
            icon="labeled"
            onHide={this.props.onHideSidebar}
            vertical
            visible={this.props.visible}
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
            <SideMenuObj
              name="Lists"
              icon={<BsListUl size={25} />}
            ></SideMenuObj>

            <Divider clearing />

            <SideMenuObj
              name="Your Cards (to subscribe)"
              icon={<FiCreditCard size={25} />}
            ></SideMenuObj>
            <SideMenuObj
              name="Add Bank"
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

          <Sidebar.Pusher dimmed={this.props.visible}></Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Sidenav;

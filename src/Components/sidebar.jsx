import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { RiUser3Line } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";

import "fontsource-roboto";

import { Menu, Sidebar, Divider } from "semantic-ui-react";

class Sidenav extends Component {
  state = { activeItem: "profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={this.props.onHideSidebar}
            vertical
            visible={this.props.visible}
            direction="right"
          >
            <Menu text vertical borderless size="huge">
              <Menu.Item
                name="profile"
                onClick={this.handleItemClick}
                active={activeItem === "profile"}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <RiUser3Line size={25} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" children="Profile"></Typography>
                  </Grid>
                </Grid>
              </Menu.Item>
              <Menu.Item
                name="bookmarks"
                onClick={this.handleItemClick}
                active={activeItem === "bookmarks"}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <IoBookmarkOutline size={25} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" children="Bookmarks"></Typography>
                  </Grid>
                </Grid>
              </Menu.Item>
              <Menu.Item
                name="Lists"
                onClick={this.handleItemClick}
                active={activeItem === "Lists"}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <BsListUl size={25} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" children="Lists"></Typography>
                  </Grid>
                </Grid>
              </Menu.Item>

              <Divider clearing />

              <Menu.Item
                name="Your Cards"
                onClick={this.handleItemClick}
                active={activeItem === "Your Cards"}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <FiCreditCard size={25} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      children="Your Cards (to subscribe)"
                    ></Typography>
                  </Grid>
                </Grid>
              </Menu.Item>
              <Menu.Item
                name="Add Bank"
                onClick={this.handleItemClick}
                active={activeItem === "Add Bank"}
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <AiOutlineBank size={30} />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      children="Add bank (to earn)"
                    ></Typography>
                  </Grid>
                </Grid>
              </Menu.Item>

              <Divider clearing />

              <Menu.Item
                name="Help"
                onClick={this.handleItemClick}
                active={activeItem === "Help"}
              >
                <Typography
                  variant="h6"
                  children="Help and Support"
                ></Typography>
              </Menu.Item>
              <Menu.Item
                name="Dark Mode"
                onClick={this.handleItemClick}
                active={activeItem === "Dark mode"}
              >
                <Typography variant="h6" children="Dark Mode"></Typography>
              </Menu.Item>
              <Menu.Item
                name="English"
                onClick={this.handleItemClick}
                active={activeItem === "English"}
              >
                <Typography variant="h6" children="English"></Typography>
              </Menu.Item>

              <Divider clearing />
              <Menu.Item
                name="Log Out"
                onClick={this.handleItemClick}
                active={activeItem === "Log Out"}
              >
                <Typography variant="h6" children="Log Out"></Typography>
              </Menu.Item>
            </Menu>
          </Sidebar>

          <Sidebar.Pusher dimmed={this.props.visible}></Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Sidenav;

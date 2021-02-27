import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import "fontsource-roboto";

import {
  Button,
  Container,
  Icon,
  Menu,
  Sidebar,
  Header,
  Divider,
} from "semantic-ui-react";

class Sidenav extends Component {
  state = { activeItem: "account" };

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
            width="wide"
          >
            <Menu text vertical borderless size="large">
              <Menu.Item
                name="account"
                onClick={this.handleItemClick}
                active={activeItem === "account"}
              >
                <Typography variant="h6" children="Profile"></Typography>
              </Menu.Item>
              <Menu.Item
                name="bookmarks"
                onClick={this.handleItemClick}
                active={activeItem === "bookmarks"}
              >
                <Typography variant="h6" children="Bookmarks"></Typography>
              </Menu.Item>
              <Menu.Item
                name="Lists"
                onClick={this.handleItemClick}
                active={activeItem === "Lists"}
              >
                <Typography variant="h6" children="Lists"></Typography>
              </Menu.Item>

              <Divider clearing />

              <Menu.Item
                name="Your Cards"
                onClick={this.handleItemClick}
                active={activeItem === "Your Cards"}
              >
                <Typography
                  variant="h6"
                  children="Your Cards (to subscribe)"
                ></Typography>
              </Menu.Item>
              <Menu.Item
                name="Add Bank"
                onClick={this.handleItemClick}
                active={activeItem === "Add Bank"}
              >
                <Typography
                  variant="h6"
                  children="Add bank (to earn)"
                ></Typography>
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

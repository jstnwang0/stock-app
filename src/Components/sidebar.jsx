import React, { Component } from "react";

import { Icon, Menu, Sidebar } from "semantic-ui-react";

class Sidenav extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.props.onHideSidebar}
            vertical
            visible={this.props.visible}
            direction="right"
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={this.props.visible}></Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Sidenav;

import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NaviBar extends Component {
  render() {
    return (
      <div>
        <Menu fluid widths={5}>
          <Menu.Item name="home" onClick={this.handleItemClick}>
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item name="notification" onClick={this.handleItemClick}>
            <Icon name="bell" size="large" />
          </Menu.Item>
          <Menu.Item name="createPost" onClick={this.handleItemClick}>
            <Icon name="plus square outline" size="large" />
          </Menu.Item>
          <Menu.Item name="chat" onClick={this.handleItemClick}>
            <Icon name="rocketchat" size="large" />
          </Menu.Item>
          <Menu.Item name="profile" onClick={this.handleItemClick}>
            <Icon name="user" size="large" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default NaviBar;

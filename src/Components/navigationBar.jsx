import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NaviBar extends Component {
  render() {
    return (
      <div>
        <Menu fluid widths={5}>
          <Menu.Item
            name="home"
            active={this.props.activeItem === "home"}
            onClick={this.props.onItemClick}
          >
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item
            name="notification"
            active={this.props.activeItem === "notification"}
            onClick={this.props.onItemClick}
          >
            <Icon name="bell outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="createPost"
            active={this.props.activeItem === "createPost"}
            onClick={this.props.onItemClick}
          >
            <Icon name="plus square outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="chat"
            active={this.props.activeItem === "chat"}
            onClick={this.props.onItemClick}
          >
            <Icon name="rocketchat" size="large" />
          </Menu.Item>
          <Menu.Item name="profile" onClick={this.props.onShowSidebar}>
            <Icon name="user outline" size="large" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default NaviBar;

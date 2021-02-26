import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NaviBar extends Component {
  render() {
    const { activeItem, onItemClick } = this.props;
    return (
      <div>
        <Menu fluid widths={5}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={onItemClick}
          >
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item
            name="notification"
            active={activeItem === "notification"}
            onClick={onItemClick}
          >
            <Icon name="bell outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="createPost"
            active={activeItem === "createPost"}
            onClick={onItemClick}
          >
            <Icon name="plus square outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="chat"
            active={activeItem === "chat"}
            onClick={onItemClick}
          >
            <Icon name="comment alternate outline" size="large" />
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

import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NaviBar extends Component {
  render() {
    const { activeItem, onItemClick } = this.props;
    return (
      <div>
        <Menu borderless fluid widths={5}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            color={activeItem === "home" ? "blue" : null}
            onClick={onItemClick}
          >
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item
            name="notification"
            active={activeItem === "notification"}
            color={activeItem === "notification" ? "blue" : null}
            onClick={onItemClick}
          >
            <Icon name="bell outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="createPost"
            active={activeItem === "createPost"}
            color={activeItem === "createPost" ? "blue" : null}
            onClick={onItemClick}
          >
            <Icon name="plus square outline" size="large" />
          </Menu.Item>
          <Menu.Item
            name="chat"
            active={activeItem === "chat"}
            color={activeItem === "chat" ? "blue" : null}
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

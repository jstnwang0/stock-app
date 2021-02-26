import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NaviBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu fluid widths={5}>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item name="notification" active={activeItem === 'notification'} onClick={this.handleItemClick}>
            <Icon name="bell outline" size="large" />
          </Menu.Item>
          <Menu.Item name="createPost" active={activeItem === 'createPost'} onClick={this.handleItemClick}>
            <Icon name="plus square outline" size="large" />
          </Menu.Item>
          <Menu.Item name="chat" active={activeItem === 'chat'} onClick={this.handleItemClick}>
            <Icon name="rocketchat" size="large" />
          </Menu.Item>
          <Menu.Item name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
            <Icon name="user outline" size="large" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default NaviBar;

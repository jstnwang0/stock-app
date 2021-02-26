import logo from "./logo.svg";
import "./App.css";
import "./Components/navigationBar";
import NaviBar from "./Components/navigationBar";
import React, { Component } from "react";
import Sidebar from "./sidebar";

class App extends Component {
  state = {
    activeItem: "home",
    sidebarVisible: false,
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleSidebarVisible = (visibility) => {
    this.setState({ sidebarVisible: visibility });
  };

  render() {
    return (
      <div>
        <NaviBar
          onItemClick={this.handleItemClick}
          onShowSidebar={() => this.handleSidebarVisible(true)}
          activeItem={this.state.activeItem}
        />
        <Sidebar
          onHideSidebar={() => this.handleSidebarVisible(false)}
          visible={this.state.sidebarVisible}
        />
      </div>
    );
  }
}

export default App;

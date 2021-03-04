import logo from "./logo.svg";
import "./App.css";
import "./Components/navigationBar";
import NaviBar from "./Components/navigationBar";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/sidebar";

const App = () => {
  const [activeItem, setActiveItem] = React.useState("home");
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <div>
      <NaviBar
        onItemClick={handleItemClick}
        onShowSidebar={() => setSidebarVisible(true)}
        activeItem={activeItem}
      />
      <Sidebar
        onHideSidebar={() => setSidebarVisible(false)}
        visible={sidebarVisible}
      />
      {/* <NaviBar
          onItemClick={this.handleItemClick}
          onShowSidebar={() => this.handleSidebarVisible(true)}
          activeItem={this.state.activeItem}
        /> */}
    </div>
  );
};

export default App;

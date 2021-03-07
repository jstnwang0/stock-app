import logo from "./logo.svg";
import "./App.css";
import "./Components/navigationBar";
import NaviBar from "./Components/navigationBar";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/sidebar";
import HomePage from "./Pages/homePage";
import Notifications from "./Pages/notifications";
import Chat from "./Pages/chat";
import CreatePost from "./Pages/createPost";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  const [activeItem, setActiveItem] = React.useState(() => {
    const link = window.location.pathname.slice(1);
    if (link === "") {
      return "home";
    }
    return link;
  });
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Router>
      <div>
        <NaviBar
          onItemClick={handleItemClick}
          onShowSidebar={() => setSidebarVisible(true)}
          activeItem={activeItem}
        />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/notifications" component={Notifications} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/chat" exact component={Chat} />
        </Switch>

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
    </Router>
  );
};

export default App;

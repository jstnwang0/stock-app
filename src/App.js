import "./App.css";
import "./NavigationBar/navigationBar";
import NaviBar from "./NavigationBar/navigationBar";
import React, { useState } from "react";
import Sidebar from "./SideBar/sidebar";
import HomePage from "./Pages/homePage";
import Notifications from "./Pages/notifications";
import Chat from "./Pages/chat";
import CreatePost from "./Pages/createPost";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [activeItem, setActiveItem] = useState(() => {
    const link = window.location.pathname.slice(1);
    if (link === "") {
      return "home";
    }
    return link;
  });
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function handleItemClick(e, { name }) {
    setSidebarVisible(false);
    setActiveItem(name);
  }

  function handleShowSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <Router>
      <div>
        <NaviBar
          onItemClick={handleItemClick}
          onSidebarClick={handleShowSidebar}
          activeItem={activeItem}
        />

        <Sidebar
          hideSidebar={() => setSidebarVisible(false)}
          visible={sidebarVisible}
        />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/notifications" component={Notifications} />
            <Route path="/createpost" exact component={CreatePost} />
            <Route path="/chat" exact component={Chat} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React from "react";

import "./sidebar.css";

import { RiUser3Line, RiBankLine } from "react-icons/ri";
import { IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { FiCreditCard, FiLogOut } from "react-icons/fi";
import { IoMdHelp } from "react-icons/io";
import "fontsource-roboto";

import { Menu, Divider } from "semantic-ui-react";

const Sidenav = ({ hideSidebar, visible }) => {
  let drawerClasses = "side-drawer";
  let backdropClasses = "backdrop";
  if (visible) {
    drawerClasses = "side-drawer open";
    backdropClasses = "backdrop open";
  }
  return (
    <>
      <div
        className={backdropClasses}
        onClick={() => {
          if (visible) {
            hideSidebar();
          }
        }}
      ></div>
      <nav className={drawerClasses}>
        <div className="side-drawer-content">
          <Menu secondary vertical size="huge" style={{ margin: 0 }}>
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <RiUser3Line size={25} />
                  <p>Profile</p>
                </div>
              </Menu.Item>
            </div>

            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <IoBookmarkOutline size={25} />
                  <p>Bookmarks</p>
                </div>
              </Menu.Item>
            </div>
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <IoSettingsOutline size={25} />
                  <p>Settings</p>
                </div>
              </Menu.Item>
            </div>
            <Divider clearing />
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <FiCreditCard size={25} />
                  <p>Your Cards</p>
                </div>
              </Menu.Item>
            </div>
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <RiBankLine size={25} />
                  <p>Add Bank</p>
                </div>
              </Menu.Item>
            </div>
            <Divider clearing />
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <IoMdHelp size={25} />
                  <p>Help and Support</p>
                </div>
              </Menu.Item>
            </div>
            <div className="side-drawer-menu-item">
              <Menu.Item onClick={() => {}} style={{ paddingLeft: "10px" }}>
                <div className="side-drawer-menu-content">
                  <FiLogOut size={25} />
                  <p>Log Out</p>
                </div>
              </Menu.Item>
            </div>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;

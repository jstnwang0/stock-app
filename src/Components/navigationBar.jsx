import React from "react";
import { Menu } from "semantic-ui-react";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NaviBar = ({ activeItem, onItemClick, onShowSidebar }) => {
  return (
    <div
    //  className="footer"
    >
      <Menu borderless fluid widths={5}>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          color={activeItem === "home" ? "green" : null}
          onClick={onItemClick}
          as={Link}
          to="/"
        >
          <AiOutlineHome size={25} />
        </Menu.Item>
        <Menu.Item
          name="notifications"
          active={activeItem === "notifications"}
          color={activeItem === "notifications" ? "green" : null}
          onClick={onItemClick}
          as={Link}
          to="/notifications"
        >
          <AiOutlineBell size={25} />
        </Menu.Item>
        <Menu.Item
          name="createPost"
          active={activeItem === "createPost"}
          color={activeItem === "createPost" ? "green" : null}
          onClick={onItemClick}
          as={Link}
          to="/createPost"
        >
          <BiMessageAltAdd size={25} />
        </Menu.Item>
        <Menu.Item
          name="chat"
          active={activeItem === "chat"}
          color={activeItem === "chat" ? "green" : null}
          onClick={onItemClick}
          as={Link}
          to="/chat"
        >
          <FaRegCommentAlt size={25} />
        </Menu.Item>
        <Menu.Item name="profile" onClick={onShowSidebar}>
          <RiUser3Line size={25} />
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default NaviBar;

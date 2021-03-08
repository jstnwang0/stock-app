import React from "react";
import { Menu } from "semantic-ui-react";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

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
        >
          <AiOutlineHome size={25} />
        </Menu.Item>
        <Menu.Item
          name="notification"
          active={activeItem === "notification"}
          color={activeItem === "notification" ? "green" : null}
          onClick={onItemClick}
        >
          <AiOutlineBell size={25} />
        </Menu.Item>
        <Menu.Item
          name="createPost"
          active={activeItem === "createPost"}
          color={activeItem === "createPost" ? "green" : null}
          onClick={onItemClick}
        >
          <BiMessageAltAdd size={25} />
        </Menu.Item>
        <Menu.Item
          name="chat"
          active={activeItem === "chat"}
          color={activeItem === "chat" ? "green" : null}
          onClick={onItemClick}
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

import React from "react";
import "./Post.css";
import { GoVerified } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoShareOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { Avatar } from "@material-ui/core";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://picsum.photos/200" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Jerry Hamada{" "}
              <span>
                <GoVerified size={15} />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>buy gme, sell your house, and get tendies</p>
          </div>
        </div>
        <img
          src="https://media0.giphy.com/media/xBXWbB1p0WfQraQP6k/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <FaRegHeart size={20} />
          <BiCommentDetail size={20} />
          <IoShareOutline size={20} />
          <HiOutlineBookmark size={20} />
        </div>
      </div>
    </div>
  );
}

export default Post;

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
      <div className="post-avatar">
        <Avatar src="https://picsum.photos/200" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              Jerry Hamada{" "}
              <span>
                <GoVerified size={15} />
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>buy gme, sell your house, and get tendies</p>
          </div>
        </div>
        <img
          src="https://media0.giphy.com/media/xBXWbB1p0WfQraQP6k/giphy.gif"
          alt=""
        />
        <div className="post-footer">
          <p>
            <div className="numLikes">56</div>
            <FaRegHeart size={23} />
          </p>
          <p>
            <div className="numLikes">45</div>
            <BiCommentDetail size={23} />
          </p>
          <IoShareOutline size={25} />
          <HiOutlineBookmark size={24} />
        </div>
      </div>
    </div>
  );
}

export default Post;

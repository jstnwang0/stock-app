import React from "react";
import "./Post.css";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoShareOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { Avatar } from "@material-ui/core";
import Postdata from "../data/post.json";

function Post() {
  var postList = Postdata.posts;
  return (
    <ul>
      {postList.map((s) => {
        return (
          <div className="box">
            <div className="avatar">
              <Avatar src={s.avatar} />
            </div>
            <div className="post-body">
              <div className="post-header">daf</div>
              <div className="post-header">daf</div>
              <div className="post-header">daf</div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default Post;

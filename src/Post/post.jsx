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
          <div className="post">
            <div className="post-avatar">
              <Avatar src={s.avatar} />
            </div>
            <div className="post-body">
              <div className="post-header">
                <div className="post-headerText">
                  <h3>{s.username} </h3>
                </div>
                <div className="post-headerDescription">
                  <p>{s.text}</p>
                </div>
              </div>
              <img src={s.image} alt="" />
              <div className="post-footer">
                <p>
                  <div className="numLikes">{s.likes}</div>
                  <FaRegHeart size={23} />
                </p>
                <p>
                  <div className="numLikes">{s.comments}</div>
                  <BiCommentDetail size={23} />
                </p>
                <IoShareOutline size={25} />
                <HiOutlineBookmark size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default Post;

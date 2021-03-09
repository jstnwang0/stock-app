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
        let box;
        if (s.buy) {
          box = "box-green";
        } else {
          box = "box-red";
        }
        return (
          <div className={box}>
            <div className="avatar">
              <Avatar src={s.avatar} />
            </div>
            <div className="post-box">
              <div className="post-header">
                <span className="styling-header">@{s.username}</span>
                <span className="time-posted">posted {s.timePosted}</span>
              </div>
              <div className="post-tickerbox">
                <div className="post-tickername">${s.ticker}</div>
                <div className="post-targets">
                  <p>price target: ${s.pricetarget}</p>
                  <p>buy range: ${s.startposition}</p>
                  <p>stop loss: ${s.stoploss}</p>
                </div>
              </div>
              <div className="post-reasoning">{s.reasoning}</div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default Post;

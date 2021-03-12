import React from "react";
import "./notifications.css";
import { Avatar } from "@material-ui/core";
import NotificationData from "../data/notifications.json";

function Notifications() {
  var notificationList = NotificationData.notifications;
  return (
    <ul>
      {notificationList.map((s) => {
        return (
          <div className="main-box">
            <div className="avatar">
              <Avatar src={s.avatar} />
            </div>
            <div className="message-box">
              @{s.username} <p>{s.message}</p>
            </div>
            <div className="time-stamp">{s.time}</div>
          </div>
        );
      })}
    </ul>
  );
}

export default Notifications;

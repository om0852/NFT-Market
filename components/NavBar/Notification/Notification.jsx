import React from "react";
import Image from "next/image";

import Style from "./Notification.module.css";
import images from "../../../img/index";
const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image className={Style.notification_box_profile_img} src={images.user1} alt="profile images" width={50} height={50}/>
        </div>
        <div className={Style.notification_box_info}>
          <h4>Shoaib Akhter</h4>
          <p>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        {/* //new notification styling purpose */}
        <span className={Style.notification_box_new}></span>
      </div>

    </div>
  );
};

export default Notification;

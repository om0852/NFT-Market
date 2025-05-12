import React from "react";
import images from "../../img/index";
import Style from "./Subscribe.module.css";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
// import { RiSendPlanerFill } from "react-icons";
const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscription_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subscribe to our super-exclusive drop list and be the first to
            access the NFTs updates
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>
          <div className={Style.subscription_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscription_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

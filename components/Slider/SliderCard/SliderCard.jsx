import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Style from "./SliderCard.module.css";
import images from "../../../img/index";
import LikeProfile from "../../LikeProfile/LikeProfile";
import Image from "next/image";

const SliderCard = () => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={images.creatorbackground1}
            alt="Slider Profile"
            width={500}
            height={300}
            objectFit={"cover"}
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <div className={Style.sliderCard_box_title_like}>
            <LikeProfile />
            <small> to 100</small>
          </div>
        </div>
        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining Time</small>
            <p>3h:15m</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;

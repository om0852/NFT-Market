import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

import Style from "./AudioCardSmall.module.css";
import images from "../../../img/index";
import LikeProfile from "../../LikeProfile/LikeProfile";
const AudioCardSmall = () => {
  const [play, setPLay] = useState(false);
  const playMusic = ()=>{
    setPLay(prev=>!prev);
  }
  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
        />
        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music #1142</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <LikeProfile />
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>
        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={() => {
            playMusic();
          }}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;

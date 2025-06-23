import React, { useState } from "react";
import Image from "next/image";
import Style from "./FollowerTabCard.module.css";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import images from "../../../img/index";
const FollowerTabCard = ({ i,el }) => {
  const [following, setFollowing] = useState(false);
  const followMe = ()=>{
    if(!following){
        setFollowing(true)
    }
    else{
        setFollowing(false)
    }
  }
  return (
    <div className={Style.followerTabCard}>
      <div className={Style.followerTabCard_rank}>
        <p>
          #{i + 1}
          <span>🥇</span>
        </p>
      </div>
      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image
            src={el.background}
            alt="image"
            width={500}
            height={500}
          />
        </div>
        <div className={Style.followerTabCard_box_profile}>
          <Image
            className={Style.followerTabCard_box_profile_img}
            src={el.user}
            alt="profile bg"
            width={500}
            height={300}
            objectFit={"cover"}
          />
        </div>
        <div className={Style.followerTabCard_box_profile}>
          <Image
            className={Style.followerTabCard_box_profile_img}
            src={images.user1}
            alt="profile bg"
            width={500}
            height={300}
            objectFit={"cover"}
          />
        </div>
        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>
              Giada Mann{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12.321 ETH</p>
          </div>
          <div className={Style.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()} >
                Follow{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={() => followMe()}> Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;

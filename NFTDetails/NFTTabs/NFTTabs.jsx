import React from "react";
import Style from "./NFTTabs.module.css";
import Image from "next/image";
const NFTTabs = ({ dataTab ,icon}) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTTabs_box}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $770 by<span>Shoaib Bhai</span>
            </span>
            {
                icon && icon
            }
            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;

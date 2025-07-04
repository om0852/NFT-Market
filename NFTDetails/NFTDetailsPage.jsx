import React from "react";
import Style from "./NFTDetailsPage.module.css";
import { NFTDescription, NFTDetailsImage, NFTTabs } from "./nftdetailsindex";

const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <div className={Style.NFTDetailsPage_box_left}>
          <NFTDetailsImage />
        </div>
        <div className={Style.NFTDetailsPage_box_right}>
          <NFTDescription />
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;

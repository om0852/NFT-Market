import React from "react";

import Style from "../styles/nft-details.module.css";
import { Brand, Button, Category } from "../components/component_index";
import NFTDetailsPage from "../NFTDetails/NFTDetailsPage";

const NFTDetails = () => {
  return (
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_container}>
        <div className={Style.NFTDetails_content}>
          <div className={Style.NFTDetails_main}>
            <NFTDetailsPage />
          </div>
          <div className={Style.NFTDetails_footer}>
            <Category />
            <Brand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;

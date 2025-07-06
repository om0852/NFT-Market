import React from "react";
import Style from "../styles/upload-nft.module.css";
import {UploadNFT}  from "../UploadNFT/UploadNFT";
const uploadNFT = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>you can set preferred display name,creat your profile and mange it.</p>
        </div>
        <div className={Style.uploadNFT_box_title}>
          <h2>Image,video ,audio or 3D model</h2>
        </div>
        <div className={Style.uploadNFT_box_form}>
          <UploadNFT/>
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;

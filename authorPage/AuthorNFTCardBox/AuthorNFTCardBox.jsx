import React, { useState, useEffect } from "react";
import Style from "./AuthorNFTCardBox.module.css";
import { NFTCard2 } from "../../collectionPage";
import images from "../../img/index";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiable,
  created,
  like,
  follower,
  following,
}) => {
    const collectiableData = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3
    ]
    const followerArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ]
  return (
    <>
      <div className={Style.AuthorNFTCardBox}>
        {collectiable && (<NFTCard2  NFTData={collectiableData}/>)}
        {created && (<NFTCard2 NFTData={collectiableData}/>)}
        {like && (<NFTCard2 NFTData={collectiableData}/>)}
        {follower && (<FollowerTabCard  />)}
        {following && (<FollowerTabCard/>)}
      </div>
    </>
  );
};

export default AuthorNFTCardBox;

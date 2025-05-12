import React, { useState, useEffect, useCallback } from "react";
import Style from "./BigNFTSlider.module.css";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import { Button } from "../component_index";
import images from "../../img/index";
const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "om salunke",
      collection: "Cricket",
      price: "000000000000008755 ETH",
      like: 234,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 11,
        hours: 11,
        min: 11,
        second: 11,
      },
    },
    {
      title: "Hello NFT",
      id: 2,
      name: "om salunke",
      collection: "Cricket",
      price: "00002345458755 ETH",
      like: 234,
      image: images.user1,
      nftImage: images.nft_image_2,
      time: {
        days: 11,
        hours: 11,
        min: 11,
        second: 11,
      },
    },
    {
      title: "Hello NFT",
      id: 3,
      name: "vedant salunke",
      collection: "Cricket",
      price: "000000000000008755 ETH",
      like: 234,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 11,
        hours: 11,
        min: 11,
        second: 11,
      },
    },
    {
      title: "Hello NFT",
      id: 4,
      name: "yash salunke",
      collection: "Cricket",
      price: "000000000000008755 ETH",
      like: 234,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 11,
        hours: 11,
        min: 11,
        second: 11,
      },
    },
  ];

  const inc = useCallback(()=>{
    if(idNumber+1<sliderData.length){
        setIdNumber(prev=>prev+1);
    }
  },[idNumber,sliderData.length])
  const dec = useCallback(()=>{
    if(idNumber>0){
        setIdNumber(prev=>prev-1);
    }
  },[idNumber,sliderData.length])

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                src={sliderData[idNumber].image}
                alt="profile"
                width={50}
                height={50}
                className={Style.bigNFTSlider_box_left_creator_profile_img}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  {""}
                </h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_bidding}>
              <div className={Style.bigNFTSlider_box_left_bidding_box}>
                <small>Current Bid</small>
                <p>{sliderData[idNumber].price}</p>
                <span>$2221221</span>
              </div>
              <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                <MdTimer
                  className={Style.bigNFTSlider_box_left_bidding_box_icon}
                />
                <span>Action ending in</span>
              </p>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                <div
                  className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                >
                  <p>{sliderData[idNumber].time.days}</p>
                  <span>Days</span>
                </div>
                <div
                  className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                >
                  <p>{sliderData[idNumber].time.hours}</p>
                  <span>Hrs</span>
                </div>
                <div
                  className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                >
                  <p>{sliderData[idNumber].time.min}</p>
                  <span>Min</span>
                </div>
                <div
                  className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                >
                  <p>{sliderData[idNumber].time.second}</p>
                  <span>Second</span>
                </div>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName={"Place"} handleClick={() => {}} />
              <Button btnName={"View"} handleClick={() => {}} />
            </div>
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image src={sliderData[idNumber].nftImage} alt="NFT IMAGE" width={800} height={800} />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        <div className={Style.bigNFTSlider_box_left_sliderBtn} onClick={() => dec()}>
          <TbArrowBigLeftLines className={Style.bigNFTSlider_box_left_sliderBtn_icon} />
        </div>
        <div className={Style.bigNFTSlider_box_left_sliderBtn} onClick={() => inc()}>
          <TbArrowBigRightLines className={Style.bigNFTSlider_box_left_sliderBtn_icon} />
        </div>
        </div>

      </div>
    </div>
  );
};

export default BigNFTSlider;

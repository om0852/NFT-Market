import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Style from "./NFTCard.module.css";
import Image from "next/image";
import images from "../../img/index";

const NFTCard = () => {
  const featureArray = [{ background: images.nft_image_1, user: images.user1 }, { background: images.nft_image_2, user: images.user2 }, { background: images.nft_image_3, user: images.user3 }, { background: images.nft_image_1, user: images.user1 }, { background: images.nft_image_2, user: images.user2 }, { background: images.nft_image_3, user: images.user3 }]

  const [like, setLike] = useState(true);

  const likeNft = () => {
    setLike(prev => !prev);
  }
  return (
    <div className={Style.NFTCard}>
      {featureArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el.background}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>
          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNft()}
              >
                {!like ? (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                ) : (
                  <AiOutlineHeart />
                )}
                {""} 22
              </div>
            </div>
            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining Time</small>
                <p>3H:15M :20S</p>
              </div>
            </div>
          </div>
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>Clone #17373</h4>
                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={
                      Style.NFTCard_box_update_details_price_box_box_bid
                    }
                  >
                    <small>Currrent Bid</small>
                    <p>1.000 ETH</p>
                  </div>
                  <div className={Style.NFTCard_box_update_details_price_stock}>
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;

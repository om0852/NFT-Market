import React, { useState } from "react";
import Style from "./NFTDetailsImage.module.css";
import images from "../../img/index";
import { BsImage, BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const NFTDetailsImage = () => {
  const [description, setDescription] = useState(false);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    setDescription((prev) => !prev);
  };
  const openDetails = () => {
    setDetails((prev) => !prev);
  };
  const likeNFT = () => {
    setLike((prev) => !prev);
  };
  return (
    <div className={Style.NFTDetailsImage}>
      <div className={Style.NFTDetailsImage_box}>
        <div className={Style.NFTDetailsImage_box_NFT}>
          <div className={Style.NFTDetailsImage_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImage_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImage_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImage_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>
          <div className={Style.NFTDetailsImage_box_NFT_img}>
            <Image
              src={images.nft_image_1}
              className={Style.NFTDetailsImage_box_NFT_img_img}
              alt="NFT Image"
              width={700}
              height={800}
              objectFit={"cover"}
            />
          </div>
        </div>
        <div
          className={Style.NFTDetailsImage_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {description && (
          <div className={Style.NFTDetailsImage_box_description_box}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsa, perferendis eveniet ab praesentium laudantium omnis impedit,
            iste quod cupiditate animi facilis! Odit, itaque fuga facere nulla
            quis error modi molestiae officia. Inventore, asperiores.
          </div>
        )}
        <div
          className={Style.NFTDetailsImage_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>

          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={Style.NFTDetailsImage_box_details_box}>
            <small>2000 X 2000 px.IMAGE(654KB)</small>
            <p>
              <small>Contact Address</small>
              <br></br>
              0x28209879826876823
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImage;

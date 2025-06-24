


import React, { useState } from "react"
import Image from "next/image"
import Style from "./NFTCard2.module.css";
import { MdTimer, MdVerified } from "react-icons/md"
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LikeProfile from "../LikeProfile/LikeProfile";
const NFTCard2 = ({ NFTData }) => {
    const [like, setLike] = useState(false);
    const [likeInc, setLikeInc] = useState(11);

    const likeNFT = () => {
        if (!like) {
            setLike(true);
            setLikeInc(likeInc + 1);
        } else {
            setLike(false);
            setLikeInc(likeInc - 1);
        }
    };
     return (
        <div className={Style.NFTCard2}>
            {
                NFTData.map((el, i) => (
                    <div className={Style.NFTCard2_box} key={i + 1}>
                        <div className={Style.NFTCard2_box_like}>
                            <div className={Style.NFTData_box_like_box}>
                                <div className={Style.NFTData_box_like_box_box}>
                                    <BsImage className={Style.NFTData_box_like_box_box_icon} />
                                    <span>{likeInc}</span>
                                    <p onClick={() => likeNFT()}>{
                                        like ? <AiFillHeart color="#ff0000"/> : <AiOutlineHeart/>}</p>
                                </div>
                            </div>

                        </div>
                        <div className={Style.NFTCard2_box_img}>
                            <Image src={el} alt="nft" width={500} height={500} objectFit="cover" className={Style.NFTCard2_box_img_img}/>
                            <div className={Style.NFTCard2_box_info}>
                                <div className={Style.NFTCard2_box_info_left}>
                                    <LikeProfile />
                                    <p>Clone #{i + 1} <MdVerified className={Style.verified_icon}/></p>
                                    <small>4
                                        {i + 2}</small>
                                </div>
                            </div>

                            <div className={Style.NFTCard2_box_price}>
                                <div className={Style.NFTCard2_box_price_box}>
                                    <small>Current Bid</small>
                                    <p>1{i + 5}</p>
                                </div>
                            </div>
                            <p className={Style.NFTCard2_box_price_stock}>
                                <MdTimer /><span>{i + 1} hours left</span>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NFTCard2
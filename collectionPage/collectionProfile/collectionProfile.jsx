import React from "react"
import Style from "./collectionProfile.module.css"
import images from "../../img/index"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa"
const CollectionProfile = ({NFTData}) => {
    const cardArray = [1, 2, 3, 4];
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image src={images.nft_image_1} alt="nft" width={800} height={800} className={Style.collectionProfile_box_left_img} />
                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                    </div>
                </div>
                <div className={Style.collectionProfile_box_middle}>
                    <h1>Awsesome NFT Collection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat, numquam voluptate voluptas praesentium, maxime labore consequuntur deleniti ratione non culpa, tempore unde?</p>
                    <div className={Style.collectionProfile_box_middle_box}>
                        {cardArray.map((el, i) => (
                            <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                                <small>${i + 1}954683</small>
                                <span>{i + 2}.11%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CollectionProfile
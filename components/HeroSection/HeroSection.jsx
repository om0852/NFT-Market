import React, { useContext, useEffect } from 'react'

import Style from "./HeroSection.module.css"
import Image from 'next/image'
import images from "../../img/index";
import { Button } from '../component_index';
import { NFTMarketplaceContext } from '../../context/NFTMarketplaceContext';

const HeroSection = () => {

  const { name, checkContract } = useContext(NFTMarketplaceContext);
  // useEffect(() => {
  //   checkContract();
  // }, [])
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>
            Discover, collect, and sell
            <span>extraordinary NFTs</span>
          </h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Create your NFTs and sell them
          </p>
          <div className={Style.heroSection_box_left_btn}>
            <Button btnName="Create" handleClick={() => { }} />
            <Button btnName="Discover" handleClick={() => { }} />
          </div>

          <div className={Style.heroSection_stats}>
            <div className={Style.heroSection_stats_box}>
              <h3>35k+</h3>
              <p>Artworks</p>
            </div>
            <div className={Style.heroSection_stats_box}>
              <h3>15k+</h3>
              <p>Auctions</p>
            </div>
            <div className={Style.heroSection_stats_box}>
              <h3>25k+</h3>
              <p>Artists</p>
            </div>
          </div>
        </div>

        <div className={Style.heroSection_box_right}>
          <div className={Style.heroSection_box_right_img}>
            <div className={Style.heroSection_box_right_img_1}>
              <Image src={images.hero} alt="Hero NFT 1" width={600} height={600} />
            </div>
            <div className={Style.heroSection_box_right_img_2}>
              <Image src={images.hero} alt="Hero NFT 2" width={600} height={600} />
            </div>
            <div className={Style.heroSection_box_right_img_3}>
              <Image src={images.hero} alt="Hero NFT 3" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

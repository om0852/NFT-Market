import React from "react";
import Style from "../styles/collection.module.css";
import images from "../img/index";
import { Banner, CollectionProfile, NFTCard2 } from "../collectioncomponents";
import { Brand, Filter, Slider } from "../components/component_index";

const Collection = () => {
    const collectionArray = [images.nft_image_1, images.nft_image_2, images.nft_image_3];
    return (
        <div className={Style.collection}>
            <Banner bannerImage={images.creatorbackground1} />
            <CollectionProfile  />
            <NFTCard2 NFTData={collectionArray}/>
            <Filter />
            <Slider />
            <Brand />
        </div>
    )

}

export default Collection;
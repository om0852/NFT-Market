import React from "react";
import Style from "../styles/searchpage.module.css";
import { SearchBar } from "../searchPage/searchPage";
import { Brand, Filter, Slider } from "../components/component_index";
import { NFTCard2, Banner } from "../collectionPage";
import images from "../img"
const searchpage = () => {
    const data=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
 
    ]
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground3} />
      <SearchBar />
      <Filter />
      <NFTCard2 NFTData={data} />
      <Slider />
      <Brand  />
    </div>
  );
};

export default searchpage;

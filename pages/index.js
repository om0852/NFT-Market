import React from "react";
import Style from "../styles/index.module.css";
import Subscribe from "../components/Subscribe/Subscribe";
import { BigNFTSlider, Category, Collection, Filter, HeroSection, NFTCard, Service, Title } from "../components/component_index";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider/>
      <Title heading={"New Collection"} paragraph={"Discover the most outstanding NFTs in all topics of life"}/>

      <Collection/>
      {/* <Subscribe/> */}
      <Title heading={"Featured NFTs"} paragraph={"Discover the most outstanding NFTs in all topics of life"}/>
      <Filter/>
    {/* <Title heading={"Featured NFTs"} paragraph={"Discover the most outstanding NFTs in all topics of life"}/> */}
<NFTCard/>
      <Title heading={"Browser by Category"} paragraph={"Explore the NFT's in the most featured categories"}/>
      <Category/>
      <Subscribe/>
    </div>
  );
};

export default Home;

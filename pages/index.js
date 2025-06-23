import React from "react";
import Style from "../styles/index.module.css";
import Subscribe from "../components/Subscribe/Subscribe";
import {
  AudioLive,
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  FollowerTab,
  HeroSection,
  NFTCard,
  Service,
  Slider,
  Title,
  Video,
} from "../components/component_index";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading={"Latest Audio Collection"}
        paragraph={"Discover the most outstanding NFTs in all topics of life"}
      />
      <AudioLive/>
      <FollowerTab />
      <Title
        heading={"Explore NFTs Video"}
        paragraph={"Click on to play video"}
      />

      <Slider/>
      <Title
        heading={"New Collection"}
        paragraph={"Discover the most outstanding NFTs in all topics of life"}
      />

      <Collection />
      {/* <Subscribe/> */}
      <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life"}
      />
      <Filter />
      {/* <Title heading={"Featured NFTs"} paragraph={"Discover the most outstanding NFTs in all topics of life"}/> */}
      <NFTCard />
      <Title
        heading={"Browser by Category"}
        paragraph={"Explore the NFT's in the most featured categories"}
      />
      <Category />
      <Subscribe />
      <Brand/>
      <Video/>
    </div>
  );
};

export default Home;

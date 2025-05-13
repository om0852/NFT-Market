import React from "react";
import Style from "../styles/index.module.css";
import Subscribe from "../components/Subscribe/Subscribe";
import { BigNFTSlider, Category, HeroSection, Service, Title } from "../components/component_index";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider/>
      {/* <Subscribe/> */}
      <Subscribe/>
      <Title heading={"Browse by category"} paragraph={"Explore the NFT's in the most featured categories"}/>
      <Category/>
    </div>
  );
};

export default Home;

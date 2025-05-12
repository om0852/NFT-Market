import React from "react";
import Style from "../styles/index.module.css";
import { HeroSection, Service } from "../components/component_index";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
    </div>
  );
};

export default Home;

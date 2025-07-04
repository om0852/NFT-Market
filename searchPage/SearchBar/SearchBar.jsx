import React from "react";
import Style from "./SearchBar.module.css";
import { BsArrowRight, BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>Hey SearchBar
        <BsSearch className={Style.SearchBar_box_icon}/>
        <input type="text" placeholder="Type Your Keyword..."/>
        <BsArrowRight className={Style.SearchBar_box_icon}/>
      </div>
    </div>
  );
};

export default SearchBar;

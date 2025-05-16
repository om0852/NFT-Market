import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import Style from "./Collection.module.css";
import DaysComponents from "./DaysComponents/DaysComponents";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);
  const CardArray = new Array(8).fill(0);
  const followingArray = new Array(5).fill(0);
  const newsArray = new Array(2).fill(0);

  const openPopular = ()=>{
    if(!popular){
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  }
  const openFollower = ()=>{
    if(!following){
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  }
  const openNews = ()=>{
    if(!news){
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  }

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> Last 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> Last 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponents key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;

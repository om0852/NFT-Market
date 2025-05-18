import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
const FollowerTab = () => {
  const CardArray = [1, 2, 3, 4, 5];
  const FollowingArray = new Array().fill(0);
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);
const openPopular= ()=>{
  if(!popular){
    setPopular(true);
    setNews(false);
    setFollowing(false)
  }
}
const openFollower= ()=>{
  if(!following){
    setPopular(false);
    setNews(false);
    setFollowing(true)
  }
}
const openNews= ()=>{
  if(!news){
    setPopular(false);
    setNews(true);
    setFollowing(false)
  }
}

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creators List...</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill />
              Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserUnfollowFill />
              Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine />
              NoteWorthy
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) =>( 
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => {
            return(
              <FollowerTabCard key={i + 1} i={i} el={el} />
            )
          })}
        </div>
      )}
      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;

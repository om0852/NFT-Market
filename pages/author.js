
import React, { useState, useEffect } from "react"
import Style from "../styles/author.module.css";
import { Banner, NFTCard2 } from "../collectionPage/index"
import { Brand, Title } from "../components/component_index"
import images from "../img/index"
import { AuthorProfileCard, AuthorTabs ,AuthorNFTCardBox} from "../authorPage/author_index";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
// import {AuthorProfileCard,AuthorTaps,TabCard} from ""
// import 
const AuthorPage = () => {
    const popularArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
        images.user7,

    ]

    const [collectiable, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
    return (

        <div className={Style.Banner}>
            <Banner bannerImage={images.creatorbackground10} />
            <AuthorProfileCard />
            <AuthorTabs setCollectiable={setCollectiables} setCreated={setCreated} setLike={setLike} setFollowing={setFollowing} setFollower={setFollower} />
            <AuthorNFTCardBox collectiable={collectiable} created={created} like={like} follower={follower} following={following} />
            <Title heading={"Popular Creators"} paragraph={"Click on music icon and enjoy NFT music or audio"} />
            {
                popularArray.map((el, i) => (
                    <FollowerTabCard el={el} i={i + 1} />
                ))
            }
            <Brand />
        </div>
    )



}


export default AuthorPage
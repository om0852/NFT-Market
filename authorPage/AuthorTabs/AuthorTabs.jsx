import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

import Style from "./AuthorTabs.module.css"



const AuthorTaps = ({ setCollectiable, setCreated, setLike, setFollower, setFollowing }) => {
    const [openList, setOpenList] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0);
    const [selectdMenu, setSelectedMenu] = useState("Most Recent");

    const listArray = [
        "Created By Admin",
        "Most Appreciated",
        "Most Discussed",
        "Most Viewed"
    ]


    const openDropDown = () => {
        if (!openList) {
            setOpenList(true);
        }
        else {
            setOpenList(false);
        }
    }

    const openTab = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Collectiables") {
            setCollectiable(true);
            setCreated(false);
            setLike(false);
            setFollower(false);
            setFollowing(false);
            setActiveBtn(1);

        }
        else if (btnText == "Created") {
            setCollectiable(false);
            setCreated(true);
            setLike(false);
            setFollower(false);
            setFollowing(false)
            setActiveBtn(2);

        } else if (btnText == "likes") {
            setCollectiable(false);
            setCreated(false);
            setLike(true);
            setFollower(false);
            setFollowing(false)
            setActiveBtn(3);

        }
        else if (btnText == "Followers") {
            setCollectiable(false);
            setCreated(false);
            setLike(false);
            setFollower(true);
            setFollowing(false)
            setActiveBtn(4)

        }
        else if (btnText == "Following") {
            setCollectiable(false);
            setCreated(false);
            setLike(false);
            setFollower(false);
            setFollowing(true)
            setActiveBtn(5)
        }
        else { }
    }
    return (
        <div className={Style.AuthorTabs}>
            <div className={Style.AuthorTabs_box}>
                <div className={Style.AuthorTabs_box_left}>
                    <div className={Style.AuthorTabs_box_left_btn}>
                        <button className={`${activeBtn == 1 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Collectiables</button>
                        <button className={`${activeBtn == 2 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Created</button>
                        <button className={`${activeBtn == 3 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Likes</button>
                        <button className={`${activeBtn == 4 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Followers</button>
                        <button className={`${activeBtn == 5 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Following</button>
                    </div>

                </div>
                <div className={Style.AuthorTabs_box_right}>
                    <div className={Style.AuthorTabs_box_right_para} onClick={() => openDropDown()}>
                        <p>{selectdMenu}</p>
                        {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                    </div>
                    {openList && (
                        <div className={Style.AuthorTabs_box_right_list}>
                            {
                                listArray.map((el, i) => (
                                    <div key={i + 1} className={Style.AuthorTabs_box_right_list_item} onClick={() => setSelectedMenu(el)}>
                                        <p>{el}</p>
                                        <span>{selectdMenu == el && <TiTick />}</span>

                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>


        </div>
    )

}

export default AuthorTaps
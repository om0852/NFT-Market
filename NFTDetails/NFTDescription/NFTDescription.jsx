import React, { useState } from "react";
import Style from "./NFTDescription.module.css";
import images from "../../img/index";
import { BiDollar, BiTransferAlt } from "react-icons/bi";
import {
  MdCloudUpload,
  MdOutlineDeleteSweep,
  MdReportProblem,
  MdVerified,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { Button } from "../../components/component_index";
import { FaPercentage, FaWallet } from "react-icons/fa";
import { NFTTabs } from "../nftdetailsindex";
const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);

  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };
  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Bid History") {
      setHistory(true);
      setOwner(false);
      setProvanance(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setOwner(false);
      setProvanance(true);
    } else {
    }
  };
  const openOwner = ()=>{
    if(!owner){
        setOwner(true);
        setHistory(false);
        setProvanance(false);

    }
    else{
        setOwner(false);
    }
  }
  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* part one  */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> Linkedikn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
              </div>
            )}
            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report Abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete Item
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small>
                <br></br>
                <span>
                  OM salunke
                  <MdVerified />
                </span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small>
                <br />
                <span>
                  om salunke <MdVerified />
                </span>
              </div>
            </div>
          </div>
          <div className={Style.NFTDescription_box_profile_biding}>
            <p>
              <MdVerified />
              <span>Action ENding in:</span>
            </p>
            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>22</p>
                <span>Days</span>
                <p>22</p>
                <span>Hrs</span>
                <p>22</p>
                <span>Mins</span>
                <p>22</p>
                <span>Sec</span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  1.000 ETH<span>(=$221.32)</span>
                </p>
              </div>
              <span>96 in stock</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              <Button
                icon={<FaWallet />}
                btnName={"Place Bid"}
                handleClick={() => {}}
                classStyle={Style.button}
              />
              <Button
                icon={<FaPercentage />}
                btnName={"Make Offer"}
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
              <button 
                className={history ? Style.active : ""} 
                onClick={(e) => openTabs(e)}
              >
                Bid History
              </button>
              <button 
                className={provanance ? Style.active : ""} 
                onClick={(e) => openTabs(e)}
              >
                Provanance
              </button>
              <button 
                className={owner ? Style.active : ""} 
                onClick={(e) => openOwner(e)}
              >
                Owner
              </button>
            </div>
            {history && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {owner && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} icon={<MdVerified/>} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;

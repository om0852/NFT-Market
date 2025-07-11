import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { MdOutlineCreate, MdOutlineAccountBalanceWallet } from "react-icons/md";

import images from "../../../img/index";
import Button from "../../Button/Button";
import Style from "./Sidebar.module.css";
import { useContext } from "react";
import { NFTMarketplaceContext } from "../../../context/NFTMarketplaceContext";

const Sidebar = ({ setOpenSideMenu }) => {
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  const [openHelp, setOpenHelp] = useState(false);
  const [openDiscover, setOpenDiscover] = useState(false);

  // discover navifation menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },

    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },

    {
      name: "Sign In",
      link: "sign-in",
    },

    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    setOpenDiscover((prev) => !prev);
  };
  const openHelpMenu = () => {
    setOpenHelp((prev) => !prev);
  };
  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT and your
          own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => {
                return (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            {openHelp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sideBar_button}>
        {
          currentAccount ? (
            <Button
              btnName="Create"
              icon={<MdOutlineCreate style={{ marginRight: "8px" }} />}
              handleClick={() => { }}
            />) :
            (
            <a 
             href="/nft-upload"
             >

            <Button
              btnName="Connect Wallet"
              icon={<MdOutlineAccountBalanceWallet style={{ marginRight: "8px" }} />}
              handleClick={() => { connectWallet() }}
            />
              </a>
            )}
      </div>
    </div>
  );
};

export default Sidebar;

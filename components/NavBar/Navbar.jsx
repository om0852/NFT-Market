"use client"
import React, { useState } from "react";
import Style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

//import icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, Notification, HelpCenter, Profile, Sidebar } from "./index";
import { Button } from "../component_index";
import images from "../../img/index";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setProfile(false);
      setNotification(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setProfile(false);
      setNotification(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setProfile(false);
      setNotification(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setProfile(false);
      setHelp(false);
    } else {
      setNotification(false);
    }
  };
  const openProfile = () => {
    if (!profile) {
      setNotification(false);
      setDiscover(false);
      setProfile(true);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = ()=>{
setOpenSideMenu((prev)=>!prev);
  }
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="logo" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* end of left section  */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* {"DISCOVER MENU"}  */}
            <p onClick={(e) => openMenu(e)}>Discover</p>

            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover/>
              </div>
            )}
          </div>
          {/* help center menu  */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}><HelpCenter/></div>
            )}
          </div>
          {/* Profile menu  */}
          <div className={Style.navbar_container_right_profile}>
            <p onClick={(e) => openMenu(e)}>Profile</p>
            {help && (
              <div className={Style.navbar_container_right_profile_box}><Profile/></div>
            )}
          </div>
          {/* Notifiction  */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/* create button section  */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>
          {/* user profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* menu button  */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* sidebar component */}
      {openSideMenu && (
        <div className={Style.Sidebar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

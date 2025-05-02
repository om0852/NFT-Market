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
  const [notification, setNoification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

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
                <p onClick={(e)=>{}}>Discover</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

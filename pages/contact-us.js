import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import Style from "../styles/contact-us.module.css";

import formStyle from "../AccountPage/Form/Form.module.css";
const ContactUs = () => {
  return (
    <div className={Style.ContactUs}>
      <div className={Style.ContactUs_box}>
        <h1>Contact </h1>
        <div className={Style.contactus_box_box_left}>
          <div className={Style.contactus_box_box_left_item}>
            <h3>Address</h3>
            <p>Photo booth </p>
          </div>
          <div className={Style.contactus_box_box_left_item}>
            <h3>Email</h3>
            <p>salunkeom474@gmail.com</p>
          </div>
          <div className={Style.contactus_box_box_left_item}>
            <h3>Phone</h3>
            <p>+91111111111</p>
          </div>
          <div className={Style.contactus_box_box_left_item}>
            <h3>Social</h3>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.contactus_box_box_right}></div>
      </div>
    </div>
  );
};

export default ContactUs;

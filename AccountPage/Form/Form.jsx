import React from "react";
import Style from "./Form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContentCopy, MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { Button } from "../../components/component_index";
const Form = () => {
  return (
    
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="om salunke"
              className={Style.Form_box_input_userName}
            />
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
            </div>
            <input
              type="email"
              placeholder="Email*"
              className={Style.Form_box_input_userName}
            />
          </div>{" "}
          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="Something about yourself..."
            ></textarea>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="facebook url" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="facebook url" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="Twitter">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="Twitter url" />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="wallet">Wallet Address</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <MdOutlineHttp />
                </div>
                <input type="text" placeholder="wallet address" />
                <div className={Style.Form_box_input_box_icon}>
                  <MdOutlineContentCopy />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.Form_box_btn}>
            <Button
              btnName={"Upload Profile"}
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

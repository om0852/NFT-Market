"use client"
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile, MdOutlineContentCopy } from "react-icons/md";
import Style from "./UploadNFT.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img/index";
import { Button } from "../components/component_index";
import DropZone from "./DropZone";
import { TiTick } from "react-icons/ti";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { useRouter } from "next/router";

const UploadNFT = ({ uploadToIPFS, createNFT }) => {
  const router = useRouter()

  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState(0);
  const [image, setImage] = useState(null)
  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sport ",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Video",
    },
  ];

  return (
    <div className={Style.upload}>
      <DropZone
        title="JPG,PNG<WEBM,MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        setImage={setImage}
        properties={properties}
        uploadToIPFS={uploadToIPFS}
      />
      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="om salunke"
            onChange={(e) => setItemName(e.target.value)}
            className={Style.Form_box_input_userName}
          />
        </div>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={Style.Form_box_input_box}>
            <div className={Style.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={6}
            placeholder="Something about yourself..."
            onChange={(e) => setDescription(e.target.value)}

          ></textarea>
        </div>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name"> CHoose collection</label>
          <div className={Style.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${Style.upload_box_Slider} ${active == i + 1 ? Style.active : ""
                  }`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
              >
                <div className={Style.upload_box_slider}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="bg"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend -Professor</p>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.Form_box_input_social}>
          <div className={Style.Form_box_input}>
            <label htmlFor="royalities">Royalties</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="File Size"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="properties">Price</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
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
        <div className={Style.upload_box_btn}>
          <Button btnName={"Upload"} handleClick={async () => { createNFT(itemName, price, image, description, router, website, royalties, fileSize, category, properties) }} classStyle={Style.upload_box_btn} />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;

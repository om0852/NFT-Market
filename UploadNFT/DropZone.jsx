"use client"
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import images from "../img"
import Style from "./DropZone.module.css";
const DropZone = ({
  title,
  heading,
  subHeading,
  itemName,
  website,
  description,
  royalties,
  fileSize,
  properties,
  catgeory,
  image,
  setImage,
  uploadToIPFS
}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFile) => {
    const url = uploadToIPFS(acceptedFile[0]);
    setImage(url);
    setFileUrl(url);
  });
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 500000,
  });
  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image src={images.update} alt="upload" width={100} height={100}  className={Style.DropZone_box_input_img_img}/>
          </div>
        </div>
      </div>
      {fileUrl &&(
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <Image src={images.nft_image_1} alt="nft" width={200} height={200}/>
          </div>
          <div  className={Style.DropZone_box_aside_box_preview}>
            <div className={Style.DropZone_box_aside_box_preview_one}>
              <p>
                <span>NFT Name:</span>
                {itemName || ""}
              </p>
              <p>
                <span>Website:</span>
                {website || ""}
              </p>
            </div>
            <div className={Style.DropZone_box_aside_box_preview_two}>
              <p>
                <span>Description:</span>
                {description || ""}
                
              </p>
            </div>
            <div className={Style.DropZone_box_aside_box_preview_three}>
              <p>
                <span>Royalties:</span>
                {royalties || ""}
                
              </p>
              <p>
                <span>FileSize:</span>
                {fileSize || ""}
                
              </p>
              <p>
                <span>Properties:</span>
                {properties || ""}
                
              </p>
              <p>
                <span>Category:</span>
                {catgeory || ""}
                
              </p>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;

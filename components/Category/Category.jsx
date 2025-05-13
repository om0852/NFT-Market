import Image from "next/image";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import Style from "./Category.module.css";
import images from "../../img/index";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5];
  return (
    <div className={Style.category}>
      {CategoryArray.map((el, i) => (
        <div className={Style.category_box} key={i + 1}>
          <Image
            src={images.creatorbackground1}
            className={Style.category_box_img}
            alt="bg"
            width={350}
            height={150}
            objectFit={"cover"}
          />
          <div className={Style.category_box_title}>
            <span>
              <BsCircleFill />
            </span>
            <div className={Style.category_box_title_info}>
              <h4>Enterainment</h4>
              <small>1995 NFTS</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

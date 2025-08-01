import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img/index"
const Slider = () => {
  const SliderArray = [{ background: images.creatorbackground1, user: images.user1 }, { background: images.creatorbackground2, user: images.user2 }, { background: images.creatorbackground3, user: images.user3 }, { background: images.creatorbackground4, user: images.user4 }, { background: images.creatorbackground5, user: images.user5 }, { background: images.creatorbackground6, user: images.user6 }, { background: images.creatorbackground7, user: images.user7 }, { background: images.creatorbackground8, user: images.user8 }, { background: images.creatorbackground9, user: images.user9 }, { background: images.creatorbackground10, user: images.user10 }]
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth)
  }, [])
  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction == "left") {
      current.scrollLeft -= scrollAmount
    }
    else {
      current.scrollLeft += scrollAmount
    }
  }
  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore Nfts Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className={Style.slider_box_button_btn}>
            <div className={Style.slider_box_button_btn_icon}>
              <TiArrowLeftThick onClick={() => handleScroll("left")} />
            </div>
            <div className={Style.slider_box_button_btn_icon}>
              <TiArrowRightThick onClick={() => handleScroll("right")} />
            </div>
          </div>
        </div>
        <motion.div className={Style.slider_box_items} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {SliderArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;

import React from 'react'
import Style from "./Brand.module.css"
import Image from "next/image"
import images from "../../img/index"
import { Button } from "../../components/component_index"
const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={images.logo} alt="brand logo" width={100} height={100} />
        </div>
        <div className={Style.Brand_box_right}>
          <h1>
            Earn free crypto with Us.
          </h1>
          <p>A Creative agency thatlead and inspire</p>
          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => { }} />
            <Button btnName="Discover" handleClick={() => { }} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="earn" width={100} height={100}/>
        </div>
      </div>

    </div>
  )
}

export default Brand

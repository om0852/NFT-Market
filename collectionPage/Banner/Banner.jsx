import React from "react"
import Image from "next/image"
// import images from "../../img/index"
import Style from "./Banner.module.css"
const Banner = ({ bannerImage }) => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_img}>
                <Image src={bannerImage} alt="banner" objectFit="cover" width={1600} height={300} />
            </div>
            <div className={Style.banner__img_mobile}>
                <Image src={bannerImage} alt="banner" objectFit="cover" width={1600} height={900} />
            </div>
        </div>
    )
}

export default Banner
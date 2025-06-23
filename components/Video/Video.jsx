import React from "react";
import images from "../../img/index";
import Image from "next/image";
import Style from "./Video.module.css"
const Video = () => {
    return (
        <div className={Style.video}>
            <div className={Style.video_box}>
                <h1><span>🎥</span>The Videos</h1>
                <p>Check out our latest videos</p>
                <div className={Style.video_box_frame}>
                    <Image src={images.nft_1} alt="video" width={1920} height={1080} objectFit={"cover"} />

                </div>
                <div className={Style.video_box_button}>
                    <button>Play</button>
                </div>
            </div>
        </div>
    )


}

export default Video;
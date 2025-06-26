import React, { useState } from "react"
import Image from "next/image"
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from "react-icons/md"
import { FiCopy } from "react-icons/fi"
import { BsThreeDots } from "react-icons/bs"


import Style from "./AuthorProfileCard.module.css"
import images from "../../img"
import { Button } from "../../components/component_index"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti"
const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false)

    const copyAddress = () => {
        const copytext = document.getElementById("myInput");
        copytext.select();
        navigator.clipboard.writeText(copytext.value)
    }

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        }
        else {
            setShare(false);
            setReport(false)
        }
    }
    const openReport = () => {
        if (!report) {
            setShare(false);
            setReport(true);
        }
        else {
            setShare(false);
            setReport(false)
        }
    }

    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <Image src={images.nft_image_1} className={Style.AuthorProfileCard_box_img_img} alt="nft images" width={220} height={220} objectFit="cover" />

                </div>
                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>
                        Om Salunke{""} <span><MdVerified /></span>{""}
                    </h2>
                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type="text" value="0x989798734962sjd8372b...." id="myInput" />
                        <FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_copy} />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt ex sed laborum alias ratione, qui, voluptates dicta quam architecto facilis autem culpa accusamus nulla excepturi dolor quo repellendus at non! Laborum, corporis nobis!</p>
                    <div className={Style.AuthorProfileCard_box_info_social}>
                        <a href="#" >
                            <TiSocialFacebook />
                        </a>
                        <a href="#" >
                            <TiSocialInstagram />
                        </a>
                        <a href="#" >
                            <TiSocialLinkedin />
                        </a>
                        <a href="#" >
                            <TiSocialTwitter />
                        </a>
                        <a href="#" >
                            <TiSocialYoutube />
                        </a>

                    </div>
                </div>
                <div className={Style.AuthorProfileCard_box_share}>
                    <Button btnName={"Follow"} handleClick={() => { }} />
                    <MdCloudUpload onClick={() => openShare()} className={Style.AuthorProfileCard_box_share_icon} />
                    {share &&
                        <div className={Style.AuthorProfileCard_box_share_upload}>
                            <p>
                                <span><TiSocialFacebook />
                                    Facebook</span>
                            </p>
                            <p>
                                <span><TiSocialInstagram />
                                    Instagram</span>
                            </p>
                            <p>
                                <span><TiSocialLinkedin />
                                    LinkedIn</span>
                            </p>
                            <p>
                                <span><TiSocialTwitter />
                                    Twitter</span>
                            </p>
                            <p>
                                <span><TiSocialYoutube />
                                    Youtube</span>
                            </p>
                        </div>
                    }
                    <BsThreeDots onClick={() => openReport()} className={Style.AuthorProfileCard_box_share_icon} />
                    {report && (
                        <p>
                            <span><MdOutlineReportProblem /></span>
                            Report Abuse
                        </p>
                    )}
                </div>
            </div>
        </div>

    )
}

export default AuthorProfileCard
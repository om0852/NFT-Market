
import React from "react";
import Style from "./Subscription.module.css"
import { TiTick } from "react-icons/ti";
import { Button } from "../components/component_index";

const Subscription = ({ el, i }) => {

    return (
        <div className={Style.SubscriptionBox}>
            <div className={Style.SubscriptionBox_box}>
                <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
                <small className={Style.SubscriptionBox_box_small}>{el.popular || ""}</small>
                <p className={Style.SubscriptionBox_box_info}>
                    {el.service.map((el, i) => (
                        <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
                            <span>
                                <TiTick />
                            </span>
                        </p>
                    ))}
                </p>
            <Button btnName={"Submit"} handleClick={()=>{}}/>
            </div>

        </div>
    )

}


export default Subscription;
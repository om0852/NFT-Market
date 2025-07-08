import React from "react";
import Style from "../styles/subscription.module.css"
import Subscription from "../Subscription/Subscription";
const subscription = () => {
    const subscriptionArray = [
        {
            plan: "Free",
            price: "0",
            service: ["AI", "ML"],
            popular: "Popular",
            info: "something"
        }
    ]
    return (
        <>
            <div className={Style.subscription}>
                <div className={Style.subscription_box}>
                    <div className={Style.subscription_box_info}>
                        <h1>Subscription</h1>
                        <p>Pricing to fit the needs of anu companie size</p>
                    </div>
                    <div className={Style.subscription_box_box}>
                        {
                            subscriptionArray.map((el, i) => (
                                <Subscription key={i + 1} el={el} i={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default subscription;
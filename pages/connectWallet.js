import Image from "next/image";
import React, { useState } from "react";

import Style from "../styles/connectWallet.module.css";

const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: "", //add metamask icon from react-icon
      name: "Metamask",
    },
    {
      provider: "", //add WalletConnent icon from react-icon
      name: "WalletConnent",
    },
    {
      provider: "", //add walletlink icon from react-icon
      name: "walletlink",
    },
    {
      provider: "", //add Formatic icon from react-icon
      name: "Formatic",
    },
  ];
  return <div className={Style.connectWallet}>
    <div className={Style.connectWallet_box}>
        <h1>Connect Your Wallet</h1>
        <p className={Style.connectWallet_box_para}>
            Connect with one of our available wallet provide
        </p>
        <div className={Style.connectWallet_box_provider}>
            {providerArray.map((el,i)=>(
                <div className={`${Style.connectWallet_box_provider_item} ${activeBtn==i+1?Style.active:""}`} key={i+1} onClick={()=>setActiveBtn(i+1)}>
                    <Image
                    src={el.provider}
                    alt={el.provider}
                    width={50}
                    height={50}
                    className={Style.connectWallet_box_provider_item_img}
                    />
                    <p>{el.name}</p>
                </div>
            ))}
            
        </div>
    </div>
  </div>;
};

export default connectWallet;

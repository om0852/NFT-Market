import React from 'react'
import Link from 'next/link';
import Style from "./Discover.module.css"
import { 
  MdOutlineCollections, 
  MdOutlineSearch, 
  MdPerson, 
  MdOutlineImageAspectRatio,
  MdOutlineSettings,
  MdOutlineAccountBalanceWallet,
  MdOutlineArticle
} from 'react-icons/md';

const Discover = () => {

  // discover navifation menu
  const discover=[{
    name:"Collection",
    link:"collection",
    icon: <MdOutlineCollections className={Style.discover_icon} />
  },
  {
    name:"Search",
    link:"searchpage",
    icon: <MdOutlineSearch className={Style.discover_icon} />
  },
  {
    name:"Author Profile",
    link:"author-profile",
    icon: <MdPerson className={Style.discover_icon} />
  },
  {
    name:"NFT Details",
    link:"nft-details",
    icon: <MdOutlineImageAspectRatio className={Style.discover_icon} />
  },
  {
    name:"Account Setting",
    link:"account-setting",
    icon: <MdOutlineSettings className={Style.discover_icon} />
  },
  {
    name:"Connect Wallet",
    link:"connect-wallet",
    icon: <MdOutlineAccountBalanceWallet className={Style.discover_icon} />
  },
  {
    name:"Blog",
    link:"blog",
    icon: <MdOutlineArticle className={Style.discover_icon} />
  },
  ]
  return (
    <div className={Style.discover_box}>
      {discover.map((el,i)=>{
        return(
          <div key={i+1} className={Style.discover}>
            <Link href={{pathname:`${el.link}`}}>
            <span>

              {el.icon}
              {el.name}
            </span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Discover

import React from 'react'
import Style from "./HelpCenter.module.css";
import Link from 'next/link';
import { MdOutlineInfo, MdOutlineContactSupport, MdPersonAdd, MdLogin, MdOutlineSubscriptions } from 'react-icons/md';

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
      icon: <MdOutlineInfo className={Style.helpCenter_icon} />
    },
    {
      name: "Contact Us",
      link: "contact-us",
      icon: <MdOutlineContactSupport className={Style.helpCenter_icon} />
    },
    {
      name: "Sign Up",
      link: "sign-up",
      icon: <MdPersonAdd className={Style.helpCenter_icon} />
    },
    {
      name: "Sign In",
      link: "sign-in",
      icon: <MdLogin className={Style.helpCenter_icon} />
    },
    {
      name: "Subscription",
      link: "subscription",
      icon: <MdOutlineSubscriptions className={Style.helpCenter_icon} />
    },
  ]
  
  return (
    <div className={Style.box}>
      {
        helpCenter.map((el, i) => (
          <div key={i + 1} className={Style.helpCenter}>
            <Link href={{ pathname: `${el.link}` }}>
            <>

              {el.icon}
              {el.name}
              </>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter

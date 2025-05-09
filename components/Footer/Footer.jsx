import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowForward
} from "react-icons/ti";

import Style from "./Footer.module.css";
import images from "../../img";

const Footer = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className={Style.footer_social}>
            <a href="#" className={Style.footer_social_item}>
              <TiSocialFacebook />
            </a>
            <a href="#" className={Style.footer_social_item}>
              <TiSocialLinkedin />
            </a>
            <a href="#" className={Style.footer_social_item}>
              <TiSocialTwitter />
            </a>
            <a href="#" className={Style.footer_social_item}>
              <TiSocialYoutube />
            </a>
            <a href="#" className={Style.footer_social_item}>
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <div className={Style.footer_box_discover_items}>
            {discover.map((item, i) => (
              <Link key={i + 1} href={{ pathname: `${item.link}` }}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <div className={Style.footer_box_help_items}>
            {helpCenter.map((item, i) => (
              <Link key={i + 1} href={{ pathname: `${item.link}` }}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={Style.footer_box_subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.footer_box_subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <TiArrowForward className={Style.footer_box_subscribe_box_send} />
          </div>
          <div className={Style.footer_box_subscribe_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs. Join the world of digital art and collectibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

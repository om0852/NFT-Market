import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/404.module.css';
import { Button } from '../components/component_index';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { FaHome, FaSearch } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className={Style.errorPage}>
      <div className={Style.errorPage_box}>
        <div className={Style.errorPage_box_left}>
          <div className={Style.errorPage_box_left_img}>
            <Image 
              src="/images/404-nft.png" 
              alt="404 NFT"
              width={400}
              height={400}
              className={Style.errorPage_box_left_img_img}
            />
          </div>
        </div>

        <div className={Style.errorPage_box_right}>
          <div className={Style.errorPage_box_right_box}>
            <h1>404</h1>
            <div className={Style.errorPage_box_right_box_para}>
              <MdOutlineErrorOutline className={Style.errorPage_box_right_box_icon} />
              <p>Oops! This NFT seems to be lost in the blockchain</p>
            </div>
            <div className={Style.errorPage_box_right_box_search}>
              <input type="text" placeholder="Search for NFTs..." />
              <FaSearch className={Style.errorPage_box_right_box_search_icon} />
            </div>
            <div className={Style.errorPage_box_right_box_btn}>
              <Link href="/">
                <Button 
                  btnName="Back to Home" 
                  icon={<FaHome />}
                />
              </Link>
              <Link href="/explore">
                <Button 
                  btnName="Explore NFTs" 
                  icon={<FaSearch />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound; 
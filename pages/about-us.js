import React from 'react'
import Style from "../styles/about-us.module.css"
import Image from 'next/image'
import images from "../img/index"
import { Brand } from '../components/component_index'
const AboutUs = () => {
  const founderArray = [
    {
      name: "om salunke",
      image: images.user1,
      position: "Founder",
    },
    {
      name: "om salunke",
      image: images.user1,
      position: "CEO",
    }
  ]

  const factsArray = [
    {
      title: "10 million",
      info: "add something ai"


    }
  ]
  return (
    <div className={Style.aboutUs}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>About Us</h1>
            <p>add some text</p>

          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero} />
          </div>
        </div>
        <div className={Style.aboutus_box_title}>
          <h2>Founder</h2>
          <p>add some text</p>
        </div>
        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image src={el.image} alt={el.name} width={500} height={500} className={Style.aboutus_box_founder_box_img_img} />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.aboutus_box_title}>
          <h2>Fast Facts</h2>
          <p>Some text</p>
        </div>
        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand/>
    </div>
  )
}

export default AboutUs

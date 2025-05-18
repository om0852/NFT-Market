import React from 'react'

import  Style from "./AudioLive.module.css"
import AudioCardSmall from './AudioCardSmall/AudioCardSmall'
import AudioCard from './AudioCard/AudioCard'
const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
            <AudioCard/>
            <AudioCard/>
        </div>
        <div className={Style.audioLive_box_right}>
            <AudioCardSmall/>
            <AudioCardSmall/>
            <AudioCardSmall/>
        </div>
      </div>
    </div>
  )
}

export default AudioLive

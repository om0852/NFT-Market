import React from 'react'
import Style from "./Button.module.css"

const Button = ({btnName, handleClick, icon, classStyle}) => {
  return (
    <button 
      className={`${Style.button} ${icon ? Style.button_icon : ''} ${classStyle ? classStyle : ''}`}
      onClick={handleClick}
    >
      {icon && (<>{icon} &nbsp; &nbsp;</>)} 
      {btnName}
    </button>
  )
}

export default Button

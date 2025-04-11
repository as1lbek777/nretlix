import React from 'react'
import "./Ul.css"

function Button({ text, outlineBtn, homeBtn }) {
  return (
    <button className={`${outlineBtn ? "btn-outine" : 'btn'} ${homeBtn ? "btnHome" : ''}`}>
      {text}
    </button>
  )
}

export default Button
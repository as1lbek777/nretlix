import React from 'react'
import "./Ul.css"

function Button({ text, outlineBtn }) {
  return (
    <button className={`${outlineBtn ? "btn-outine" : "btn  "}`}>
      {text}
    </button>
  )
}

export default Button
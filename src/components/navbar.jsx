import React from "react";
import images from "../assets/svg";
import elements from "../const";
import Button from "./ui/button";

function Navbar() {
  const { navbarElement } = elements

  return (
    <header className="header">
      <nav className="container nav flex">
        <a href="#" className="logo"><img src={images.navbar} alt={images.navbar} /></a>
        <ul className="flex gap">
          {
            navbarElement.map((item, inx) => {
              return <li key={inx}>
                <a href="#">{item}</a>
              </li>
            })
          }
        </ul>
        <Button text={"Let's Talk"} outlineBtn={true} />
        <button className="button"><img src={images.mediaIcon} alt={images.mediaIcon} /></button>
      </nav>
    </header>
  )
}

export default Navbar;

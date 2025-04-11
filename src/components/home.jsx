import React from 'react'
import images from "../assets/svg";
import Button from "./ui/button";

function Home() {
  const { main1, main2 } = images
  return (
    <section className='container home flex'>
      <div className='home_content'>
        <div className='flex '>
          <h3>Learn Any Foreign Language</h3>
          <img src={main1} alt={main1} />
        </div>
        <p>With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
        <Button text={"Get started"} homeBtn={true} />
      </div>
      <div className='home_img'>
        <img src={main2} alt={main2} />
      </div>
    </section>
  )
}

export default Home
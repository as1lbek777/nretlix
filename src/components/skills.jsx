import React from 'react'
import images from "../assets/svg"
import Button from "./ui/button"

function Skills() {
    const { skills1, skills2, skills3, skills4 } = images
    return (
        <section className='container skills'>
            <center><h1>Skills</h1></center>
            <div class="parent">
                <div class="div1">
                    <img src={skills1} alt={skills1} />
                    <h1>Speaking</h1>
                    <p>
                        Improve your English skills and confidence.
                        Live classes and interactive lessons online.
                        20% extra free for a limited time only
                        <br />
                        <br />
                        Learn English online and improve your
                        skills through our high-quality courses
                        and resources – all designed for adult language learners.
                    </p>
                    <div className='button2'>
                        <Button text={"Learn more"} outlineBtn={false} />
                    </div>
                </div>
                <div class="div2">
                    <img src={skills2} alt={skills2} />
                    <h1>Writing</h1>
                    <p>One of the most important and extensive
                        areas of natural science, the science that
                        studies substances, also their composition </p>
                    <div className='button2'>
                        <Button text={"Learn more"} outlineBtn={false} />
                    </div>
                </div>
                <div class="div3">
                    <img src={skills3} alt={skills3} />
                    <h1>Reading</h1>
                    <p>perception and response actions of the user
                        resulting from the use and/or upcoming use
                        of the product, system or service</p>
                    <div className='button2'>
                        <Button text={"Learn more"} outlineBtn={false} />
                    </div>
                </div>
                <div class="div4 flex">
                    <div>
                        <h1>Listening</h1>
                        <p>Here you can find activities to practise your listening skills. Listening will help you to improve your understanding </p>
                        <div className='button2'>
                            <Button text={"Learn more"} outlineBtn={false} />
                        </div>
                    </div>
                    <img src={skills4} alt={skills4} />
                </div>
            </div>
        </section>
    )
}

export default Skills
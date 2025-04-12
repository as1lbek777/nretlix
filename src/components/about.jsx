import React from 'react'
import images from "../assets/svg"

function About() {
  return (
    <section className='container about flex'>
      <div>
        <h1>About</h1>
        <p>
          The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
        </p>
        <div className='flex'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <img src={images.about} alt={images.about} />
      </div>
    </section>
  )
}

export default About
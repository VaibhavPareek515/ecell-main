import React, { useEffect } from 'react'
import "./css/About.css"
import event1 from "/images/event/event1.jpeg"

export const About = () => {

  return (
    <div className="about" id='about'>
      <div className="aboutHolder">
        <div className='section'>
          <img src={event1} alt="" />
        </div>
        <div className='section content'>
          <h1>Who we <b>are?</b></h1>
          <div className='aboutContent'>
            <p className='box1'>We are a dynamic group of students driven by the passion to ignite entrepreneurial spirit within our community. Our mission is to cultivate innovation, foster creative thinking, and empower students to turn their groundbreaking ideas into reality.</p>
            <p className="box2">Through workshops, interactive events, and networking opportunities, we aim to provide a platform where aspiring entrepreneurs can learn, collaborate, and grow. Whether it's equipping students with essential skills, connecting them with industry leaders, or nurturing their entrepreneurial journeys, the E-Cell team is here to make it happen.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


// initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}
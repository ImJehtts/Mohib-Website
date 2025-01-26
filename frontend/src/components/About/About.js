import React from 'react'
import './About.css'
import Myself from '../../Assets/A2.PNG'
import {IoHomeOutline} from "react-icons/io5";
import {FaSchool} from "react-icons/fa6";
import {PiStudent} from "react-icons/pi";





const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-photo'>
        <img src={Myself}></img>
      </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
        <article className='about__card'>
          <IoHomeOutline className='about__icon'/>
          <h5>Location:</h5>
          <small>Milton, Ontario</small>
        </article>

        <article className='about__card'>
          <FaSchool className='about__icon'/>
          <h5>School:</h5>
          <small>Wilfrid Laurier University</small>
        </article>
        
        <article className='about__card'>
          <PiStudent className='about__icon'/>
          <h5>Program:</h5>
          <small>Bachelor's of Computer Science Degree</small>
        </article>
        </div>
        <p>
        I’m a junior computer science student passionate about building unique and useful applications. I’m seeking internships where I can apply my skills in either frontend and backend development, or a combination of the two. My experience at Walmart’s Online Grocery has honed my adaptability and problem-solving in high-pressure environments. In my spare time, I enjoy playing or watching sports and watching movies. I would love the opportunity to work on real-world projects that blend technical knowledge with creativity to create something useful and innovative.</p>
        </div>
      </div>
    </section>
  )
}

export default About

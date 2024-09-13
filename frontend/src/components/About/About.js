import React from 'react'
import './About.css'
import Myself from '../../Assets/A2.PNG'
import {IoHomeOutline} from "react-icons/io5";
import {FaSchool} from "react-icons/fa6";
import {SlCalender} from "react-icons/sl";
import {PiStudent} from "react-icons/pi";





const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-photo'>
        <img src={Myself} alt="Picture of me"></img>
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
        I’m Mohib Rehman, a junior computer science student at Wilfrid Laurier University with a passion for building practical applications. I’m currently seeking internship opportunities where I can apply my skills in either frontend and backend development, or a combination of the two. My role at Walmart’s Online Grocery department has taught me how to stay adaptable and efficient in high-pressure environments, all while sharpening my problem-solving abilities. In my spare time, I’m likely playing or watching sports, or enjoying a movie. I love working on projects that have real-world applications and give me the opportunity to learn something new. I’m always looking for ways to combine my technical knowledge with creativity to build something fun and useful.
        </p>
        </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import './Skills.css'
import {RiReactjsFill} from "react-icons/ri";
import {IoLogoCss3} from "react-icons/io";
import {FaSwift} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";

import {FaPython} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {TbHexagonLetterC} from "react-icons/tb";
import {SiCsharp} from "react-icons/si";








const Skills = () => {
  return (
    <section id = 'Skills'>
      <h5>My Skills:</h5>
      <h2>Different Langauges and Frameworks I've Worked With</h2>
      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <RiReactjsFill/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Well</small>
              </div>
            </article>
            <article className='skills__details'>
              <IoLogoCss3/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <IoLogoJavascript/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaHtml5/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaSwift/>
              <div>
              <h4>SwiftUI</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          </div> 
          <div className='skills__backend'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <FaPython/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Well</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaNodeJs/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaJava/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <TbHexagonLetterC/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <FaSwift/>
              <div>
              <h4>Swift</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skills__details'>
              <SiCsharp/>
              <div>
              <h4>C#</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>

  )
}

export default Skills


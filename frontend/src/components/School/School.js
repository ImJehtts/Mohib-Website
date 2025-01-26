import React from 'react'
import './School.css'
import {RiProgress8Line} from "react-icons/ri";
import {RiProgress5Line} from "react-icons/ri";
import {RiProgress2Line} from "react-icons/ri";





const School = () => {
  return (
    <section id ='School'>
      <h5>School</h5>
      <h2>Classes I Have Taken</h2>
      <div className='container school__container'>
        <article className='year'>
          <div className='year__head'>
            <h3>1st Year</h3>
          </div>
          <ul className='class__list'>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Data Structures I</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Intro To Programming</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Intro-Linear Algebra</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Calculus I</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Intro To Microeconomics</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Intro To Macroeconomics</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Functions and Differ. Calculus</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Leadership Foundations</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Anthropology</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Love And Its Myths</p>
            </li>
          </ul>
        </article>
        {/*End of first year*/}
        <article className='year'>
          <div className='year__head'>
            <h3>2nd Year</h3>
          </div>
          <ul className='class__list'>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Data Structures II</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Object-Oriented Programming</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Discrete Struct for Comp Sci</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Digital Electronics</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Intro to Microprocessors</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Probability & Stats for Sci.</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Economics Of Health</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Organizational Leadership</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Comm Skills for Leadership</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Introduction to Criminology</p>
            </li>
          </ul>
        </article>
        {/*End of second year*/}
        <article className='year'>
          <div className='year__head'>
            <h3>3rd Year</h3>
          </div>
          <ul className='class__list'>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Algorithm Design/Analysis I</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Computer Networks</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Database I</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>E-commerce</p>
            </li>
            <li>
              <RiProgress8Line className='class__list_icon'/>
              <p>Learn 280 Characters or Less</p>
            </li>
            <li>
              <RiProgress5Line className='class__list_icon'/>
              <p>Software Engineering</p>
            </li>
            <li>
              <RiProgress5Line className='class__list_icon'/>
              <p>Operating Systems</p>
            </li>
            <li>
              <RiProgress5Line className='class__list_icon'/>
              <p>Ethics & Professional Practice</p>
            </li>
            <li>
              <RiProgress5Line className='class__list_icon'/>
              <p>Data Visualization</p>
            </li>
            <li>
              <RiProgress5Line className='class__list_icon'/>
              <p>International Finance</p>
            </li>
          </ul>
        </article>
        {/*End of third year*/}
      </div>
      </section>
  )
}

export default School

import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section id='footer__id'>
      <footer>
      <a href='#' className='footer__name'>Mohib Rehman</a>
      <ul className='footer__links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Skills'>Skills</a></li>
        <li><a href='#School'>School</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
    </footer>
    </section>
  )
}

export default Footer

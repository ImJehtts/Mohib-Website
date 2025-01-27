import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section id='footer__id'>
      <footer>
      <a href='#' className='footer__name'>Mohib Rehman</a>
      <h6>(Working on responsive support for different devices)</h6>
      <ul className='footer__links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Skills'>Skills</a></li>
        <li><a href='#School'>School</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      <h6>(Working on responsive support for different devices. Tablets may not work as intented)</h6>
    </footer>
    </section>
  )
}

export default Footer

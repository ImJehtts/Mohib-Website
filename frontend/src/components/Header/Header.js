import React from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey, I'm</h5>
        <h1>Mohib Rehman</h1>
        <h5 className='text-light'>A Third Year Computer Science Student</h5>
        <h5 className='text-light'>(Currently working on small screen responsiveness. Website just live for videos for now)</h5>
        <CTA/>
        <HeaderSocials/>

        <a href='#Portfolio' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

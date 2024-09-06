import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/mohib-rehman-892930245/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/ImJehtts' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials

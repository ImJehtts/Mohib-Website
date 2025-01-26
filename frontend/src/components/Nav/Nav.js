import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {PiScroll} from "react-icons/pi"
import {MdOutlineSchool} from "react-icons/md"
import {FaLaptopCode} from "react-icons/fa";
import {MdOutlineMessage} from "react-icons/md"



const Nav = () => {
  return (
    <nav>
      <a href='#Header'><AiOutlineHome/></a>
      <a href='#About'><AiOutlineUser/></a>
      <a href='#Skills'><PiScroll/></a>
      <a href='#School'><MdOutlineSchool/></a>
      <a href='#Portfolio'><FaLaptopCode/></a>
      <a href='#Contact'><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav

import React from 'react'
import './Navbar.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {HiOutlineUserAdd} from 'react-icons/hi'
import {GiOpenBook} from 'react-icons/gi'
import {MdMedicalServices} from 'react-icons/md'
import {MdContactless} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav]= useState('#Home')
  return (
    <div className='Nav'>
     <div> <a href= "#Home" onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}><AiTwotoneHome/></a></div>
      <a href= "#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><HiOutlineUserAdd/></a>
      <a href= "#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiOpenBook/></a>
      <a href= "#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><MdMedicalServices/></a>
      <a href= "#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdContactless/></a>
      </div>
  )
}

export default Navbar
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {SiIndeed} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className ='header__socials'>
        <a href="https://linkedin.com" target ="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com" target ="_blank"> <VscGithub/></a>
        <a href="https://indeed.com" target ="_blank"> <SiIndeed/></a>
        <a href="https://instagram.com" target ="_blank"> <FaInstagramSquare/></a>

    </div>
  )
}

export default HeaderSocial
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RxGithubLogo} from 'react-icons/rx'
import {SiIndeed} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className ='header__socials'>
        <a href="https://www.linkedin.com/in/indra-thapa-1a8ab0219" rel="opener"> <BsLinkedin/> </a>
        <a href="https://github.com/ithapa1" rel="opener"> <RxGithubLogo/></a>
        <a href="https://indeed.com" rel="opener"> <SiIndeed/></a>
        <a href="https://instagram.com" rel="opener"> <FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocial
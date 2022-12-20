import React from 'react'
import './Footer.css'
import {MdFacebook} from 'react-icons/md'
import {FaInstagramSquare} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {RiLinkedinFill} from 'react-icons/ri'
import {SiIndeed} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href ='#' className= 'footer__logo'>Summary</a>

      <ul className = 'alllinks'>
        <li><a href ='#Home' >Home</a></li>
        <li><a href ='#About' >About</a></li>
        <li><a href ='#experience' >Experience</a></li>
        <li><a href ='#services' >Services</a></li>
        <li><a href ='#portfolio' >Portfolio</a></li>
        <li><a href ='#Testimonials' >References</a></li>
        <li><a href ='#Contact' >Contact</a></li>
      </ul>

<div className= 'footer__socials'>
  <a href='https://www.facebook.com'><MdFacebook/></a>
  <a href='https://www.instagram.com'><FaInstagramSquare/></a>
  <a href='https://www.twitter.com'><GrTwitter/></a>
  <a href='https://www.linkedin.com'><RiLinkedinFill/></a>
  <a href='https://www.indeed.com'><SiIndeed/></a>
  </div>
  <div className="footer__copyright">
    <small>&copy; personal Portfolio. All right reserved</small>
  </div>
    </footer>
  )
}

export default Footer
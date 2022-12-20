import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../Assets/1.jpg'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <div id="Home">
      <div className="container header__container">
        <h3>Hi, I am</h3>
        <h1>Indra Thapa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className = 'me'>
          <img src = {ME} alt='me' />
        </div>

        <a href= "contact" className = 'scroll__Down'> Scroll Down</a>
      </div>
    </div>
  )
}

export default Header
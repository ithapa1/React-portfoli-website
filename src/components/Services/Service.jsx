import React from 'react'
import './Service.css'
import {HiOutlineCheck} from 'react-icons/hi'
const Service = () => {
  return (
    <section id = 'Services'>
      <h5 className ='offer__items'>Offer That I Can Do</h5>
      <h2 className='service__items'>Services</h2>
      <div className="container services__container">
        <article className = 'service'>
          <div className ="service__head">
            <h3>Backend Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Expertise to maintain mechanism that process data and performs actions on websites.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Experience in using Java, J2EE, JDK, JDBC, JSP, Hibernate, Servlets etc.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Experience in using various tools and IDEs for development and design like WebStorm, VS Code, Intellij.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Have a knowledge of PHP, Python, Java, JS, TS, R, Swift, Node Js.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Collaborating and working closely with the back-end team to ensure seamless and flawless integration.</p>
            </li>
          </ul>
          </article>
{/* END OF UI/UX DESIGN */}
<article className = "service">
          <div className ="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className='service__list'>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>knowledge in developing User Interface (UI) Applications and professional Web Applications using Web
Standards.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Knowledge of HTML, CSS, JAVASCRIPT and REACT, ANGULAR, VUE JS etc.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Solid experience with Responsive Web Design (RWD) using Bootstrap.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Experience in creating test suites using jasmine and worked on tools like NPM (node package manager),
Bower, Grunt.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon' />
              <p>Expertise in React JS framework to develop the SPA.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
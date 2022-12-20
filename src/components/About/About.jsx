import React from 'react'
import './About.css'
import ME from '../../Assets/skyme.jpg'
import {FaAward} from 'react-icons/fa'
import {RiUserStarFill} from 'react-icons/ri'
import {BsFillFolderFill} from 'react-icons/bs'
const About = () => {
  return (
    <section id ='About'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="About__me">
          <div className="About__me-image">
            <img className='abm-img' src={ME} alt='skyme.jpg' />
          </div>
        </div>
<div className="About__content">
     <div className="About__cards">
      <article className='About__card'>
        <FaAward className='About-icon'/>
        <h5> Experience</h5>
        <small>3+ Years Working Experience</small>
      </article>
      <article className='About__card'>
        <RiUserStarFill className='About-icon'/>
        <h5> Clients</h5>
        <small>10+ clients worldwide</small>
      </article>
      <article className='About__card'>
        <BsFillFolderFill className='About-icon'/>
        <h5> Projects</h5>
        <small>10+ Completed Projects </small>
      </article>

          </div>

          <p>
          A software developer with over 3 years of experience specializing in frontend and backend engineering.
           Fluent in development languages, HTML, CSS, JavaScript, Type- script, Php, Java, Python along with development frameworks,
          Springboot, Angular, Vue JS, React, Node JS etc.        
            </p>

            <a href='Contact' className= 'btn btn-primary'>Let's Talk</a>
         </div>
        </div>
      </section>
  )
}

export default About
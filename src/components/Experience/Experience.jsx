import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'
const Experience = () => {
  return (
    <section id = 'Experience'>
      <h5 className='skills__item'>Skills That I Have</h5>
      <h2 className='experience__item'>My Experience</h2>

      <div className="container experience__container">
        <div className="Experience__Frontend">
          <h3 className='Frontend__Langauage'>Frontend Language Skills</h3>
          <div className="experience__content">
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>React.js</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>Node Package Manager(NPM)</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>Angular.js</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
        {/* End of Frontend  */}
        <div className="Experience__Backend">
        <h3 className='Backend__Language'>Backend Language Skills</h3>
          <div className="experience__backend">
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>Ruby</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className= 'experience__details'>
              <HiBadgeCheck />
              <h4>mangoDB</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience
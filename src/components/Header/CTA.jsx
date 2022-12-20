import React from 'react'
import CV from '../../Assets/ITResume-1.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
        <a href= {CV} Download className= 'CV' >Download CV</a>
        <a href="#contact" className ='btn btn-primary' >Let's Talk About ME </a>
    </div>
  )
}

export default CTA
import React from 'react'
import './Portfolio.css'
import P1 from '../../Assets/p1.png'
import P2 from '../../Assets/p2.png'
// import P3 from '../../Assets/p3.png'
// import P4 from '../../Assets/p4.png'
const Portfolio = () => {
  return (
    <section id = 'Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className ='portfolio__item'>
          <div className ='portfolio__item-image'>
          <img src ={P1} alt="" />
          </div>
          <h3>Portfolio1</h3>
          <div className ='portfolio__image-Git'>
          <a href ='https://github.com' className ='btn' target ='blank'>Github</a>
          <a href ='https://www.webull.com/' className ='btn' target ='blank'>Lets have a Demo</a></div>
        </article>
        
        <article className ='portfolio__item'>
          <div className ='portfolio__item-image'>
          <img src ={P2} alt="" />
          </div>
          <h3>Portfolio2</h3>
          <div className ='portfolio__image-Git'>
          <a href ='https://github.com' className ='btn' target ='blank'>Github</a>
          <a href ='https://www.webull.com/' className ='btn' target ='blank'>Lets have a Demo</a></div>
        </article>

        {/* <article className ='portfolio__item'>
          <div className ='portfolio__item-image'>
          <img src ={P3} alt="" />
          </div>
          <h3>Portfolio3</h3>
          <div className ='portfolio__image-Git'>
          <a href ='https://github.com' className ='btn' target ='blank'>Github</a>
          <a href ='https://dribbble.com/alien_pixels' className ='btn' target ='blank'>Lets have a Demo</a></div>
        </article>

        <article className ='portfolio__item'>
          <div className ='portfolio__item-image'>
          <img src ={P4} alt="" />
          </div>
          <h3>Portfolio4</h3>
          <div className ='portfolio__image-Git'>
          <a href ='https://github.com' className ='btn' target ='blank'>Github</a>
          <a href ='https://dribbble.com/alien_pixels' className ='btn' target ='blank'>Lets have a Demo</a></div>
        </article> */}
      </div>
      </section>
  )
}

export default Portfolio
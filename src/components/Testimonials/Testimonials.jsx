import React from 'react'
import './Testimonials.css'
import T1 from '../../Assets/cubic.jpeg'
import T2 from'../../Assets/Tupple.png'
import T3 from '../../Assets/Raven.jpeg'
import T4 from '../../Assets/ArcPy.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id = 'References'>
      <h5>Clients Review </h5>
      <h2>References</h2>

      <Swiper className="container references__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className= "reference">
          <div className= 'client_T'>
            <img src = {T4} alt = "Client First" />
            </div>
            <h5 className = "client__name">Arcpy Technologies</h5>
            <small className ='client__review'>
            At Arcpy, we have always had the goal of leveraging cutting-edge technology to feed a growing global population.
            Today's farmers must continually produce more with less resources.
            We are committed to developing farming through technology and innovation to assist growers in maximizing yields and ROI with less labor and financial resources.
            </small>
        </SwiperSlide>
        <SwiperSlide className= "reference">
          <div className= 'client_T'>
            <img src = {T2} alt = "Client 2nd" />
            </div>
            <h5 className = "client__name">Tupple Technologies</h5>
            <small className ='client__review'>
            A complete technology consulting company is Tuppl Technologies.
            Implementing small-to-midsize IT projects, creating data-driven solutions,
            controlling product and software development cycles,
            and offering staffing and business management services are some of our specialties.
            </small>
        </SwiperSlide>
        <SwiperSlide className= "reference">
          <div className= 'client_T'>
            <img src = {T3} alt = "Client 3rd" />
            </div>
            <h5 className = "client__name">Raven Technologies</h5>
            <small className ='client__review'>
            We are aware of what is necessary to advance your career.
            In order to help consultants who want to advance their IT careers
            and non-IT professionals who want to launch their IT careers,
            we provide boot camp training sessions. Our training sessions
            are led by experts with vast backgrounds in the IT sector.
            </small>
        </SwiperSlide>
        <SwiperSlide className= "reference">
          <div className= 'client_T'>
            <img src = {T1} alt = "Client 4th" />
            </div>

            <h5 className = "client__name">Cubic Technologies</h5>
            <small className ='client__review'>
            "Building partnerships with partners
             who can successfully and efficiently deliver 
             specialized digital solutions is essential for agencies.
            Our go-to partner for application and software development is Cubic Technologies."
            </small>
          </SwiperSlide>
      </Swiper>


     </section>
  )
}

export default Testimonials
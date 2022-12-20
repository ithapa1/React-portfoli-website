import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {SiViber} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id = 'Contact'>
   <h5>Reach Out</h5> 
   <h2>Address Me</h2>

   <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdEmail className ="contact__option-icon"/>
        <h4>Email</h4>
        <h5>specialindra123@gmail.com</h5>
        <a href="specialindra123@gmail.com">Reach me out</a>
      </article>
      {/* first option */}
      <article className="contact__option">
        <SiViber className ="contact__option-icon"/>
        <h4>Viber</h4>
        <h5>Indra</h5>
        <a href="https://www.viber.com/indra/">Reach me out</a>
      </article>
      {/* 2nd option */}
      <article className="contact__option">
        <BsWhatsapp className ="contact__option-icon"/>
        <h4>WhatsApp</h4>
        <h5>IThapa</h5>
        <a href="https://api.whatsapp.com">Reach me out</a>
      </article>
      {/* 3rd option */}
    </div>
    <form action = "">
      <input type ="text" name ="name" placeholder= 'Your Full Name' required />
      <input type ="email" name ="email" placeholder= 'Your Email' required />
      <textarea name ="message" rows= "8" placeholder="Your Message" required ></textarea>
      <button type= "submit" className ='btn btn-primary' >Send Message</button>
    </form>
   </div>
    </section>
  )
}

export default Contact
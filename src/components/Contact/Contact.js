import React from 'react'
import './Contact.css'
import four from '../../assets/Ellipse 2.png'

const Contact = () => {
  return (
    <div className='contacts' id='Contact'>
        <div className='contact-inner'>
    <p className='contact-para'>Connect With Us</p>
     <h3 className='contact-title'>We’re just a message away.</h3>
     <p className='contact-para-center'>Making career choices can be overwhelming. Consult our experts for guidance to help you make informed decisions that align with your goals.</p>
    </div>
    <div className='form-contents'>
    <p className='from-heading'>Get in Touch With Our Career Experts!
        </p>
        <form>
            <input placeholder='Full Name '/>
            <input placeholder='Email '/>
            <input placeholder='Message'/>
            <a className='touch'>Submit</a>
        </form>  
    </div>



    </div>
  )
}

export default Contact
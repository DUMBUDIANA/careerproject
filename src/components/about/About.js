import React from 'react'
import us from '../../assets/us.png'
import absolute from '../../assets/absolute.png'
import './About.css'

const About = () => {
  return (
    <div id='About'>
     <p className='para-about'>Know Us</p>
     <h2>We are your partner in <br/> 
     career development</h2>
     <img src={absolute} alt='us' className='absolute'/>
    <div className='about-container'>
   <div>
    <img src={us} className='us' alt='us'/>
   </div>
   <div className='us-infor'>
    <div className='us-inner'>
        <h4>Our Mission</h4>
        <p>Empowering individuals with accessible career guidance , fostering lifelong learning and inclusive opportunities. We strive to provide the tools and support needed to unlock potential and navigate career paths. </p>
    </div>
    <div className='us-inner'>
        <h4>Our Mission</h4>
        <p>Empowering individuals with accessible career guidance , fostering lifelong learning and inclusive opportunities. We strive to provide the tools and support needed to unlock potential and navigate career paths. </p>
    </div>

   </div>
        </div>
    </div>
  )
}

export default About
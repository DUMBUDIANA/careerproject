import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <div className='contact'>
      <div className='footer'>
      <div className='sam'>
        <h4 className='footer-heading'>SkillsetHub</h4>
        <p className='footer-para'>Skillset Hub is a dynamic platform that empowers individuals with resources for personal and professional development.</p>
      </div>
      <div className='flex'>

    
      <div className='same'>
        <p>Services</p>
        <p>Career Test</p>
      </div>
      <div className='same'>
        <p>About Us</p>
        <p>About Us</p> 
      </div>
      <div className="social-icons same">
      <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/yourLinkedInPage" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaLinkedinIn />
        
      </a>
      <a href="mailto:yourEmail@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FcGoogle />
      </a>
    </div>
    </div>
    {/* <div className='line'></div> */}
    </div>
    <div>
   
    </div>
    <div className='line'></div>
    </div>
  );
}

export default Footer;

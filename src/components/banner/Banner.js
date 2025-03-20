
import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaRobot } from "react-icons/fa";


const Banner = () => {
  const navigate = useNavigate();

  // Navigate to AI chat page
  const goToAIChat = () => {
    navigate('/AIchart');
  };

  return (
    <div className="hero" id='home'>
      <div className="hero-inner flex-center flex-col">
        <h1 className=''>
          Empowering You <span> to make informed decisions </span>
        </h1>
        <p className="hero-text">Personalized guidance for every step</p>
      </div>
      <div className="icons">
        <a
          href="https://wa.me/+263777512934"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with me on WhatsApp"
          className="icon app"
        >
          <FaWhatsapp size={50} color="white" bg-colour="green" />
        </a>

        <a href="tel:+263777512934" title="Call me" className="icon phone">
          <FaPhone size={50} color="white" bg="blue" />
        </a>

        <div onClick={goToAIChat} title="Chat with AI" className="icon ai">
          <FaRobot size={50} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

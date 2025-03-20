import React from 'react';
import Data from './Dataset2'; // Import your Data array
import './Personality.css'

const PersonalityCheck = () => {
  return (
    <div className='personcheck'>
      <p className='para'>Know Your Personality</p>
      <h2>We are your partner in <br/>career development</h2>
      <div>
      <div className='items'> 
        {Data.map((item) => (
          
          <div key={item.id} className="data-item">
            {/* Placeholder image; replace with actual images as needed */}
            <img src={item.src} alt={item.title}  className='img'/> 
            <h4 className='item-title'>{item.title}</h4>
            <p className='item-text'>{item.text}</p>
          </div>
       
          
      
        ))}
           
            </div>
          
      </div>
      {/* <a className='link'>Our Assessments</a> */}
      <a 
        className='link' 
        href="https://www.16personalities.com/free-personality-test" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Take a personal test
      </a>
      {/* <link></link> */}
    </div>
  );
};

export default PersonalityCheck;

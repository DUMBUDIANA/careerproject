// import React, { useState } from 'react';
// // import './Form.css'; 
// import Data from './Data';
// import './Services.css'
// import account from '../../assets/acount.png'


// const ServicesDetails = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     closePopup();
//   };

//   return (
//     <div className='services-section' id='Services'>
//        <p className='para-services'>Discover Your Path</p>
//        <h2 className=''>Explore opportunities to change<br/>
//        or discover careers</h2>
//       <div className="service-information">
//         {Data.map((service) => (
//           <div key={service.id} className="services-inner">
//             <img src={account} alt='image' className='account'/>
//             <h3 className='font card3'>{service.title}</h3>
//             <p className='font40 service-text'>{service.text}</p>
//           </div>
//         ))}
//       </div>
//         <a  href='#Contact' className='font40 learn'>Talk to our experts</a>

//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-inner">
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="text" placeholder="Your Name" required />
//               <input type="email" placeholder="Your Email" required />
//               <textarea placeholder="Your Message" required></textarea>
//               <button type="submit">Submit</button>
//               <button type="button" onClick={closePopup}>Close</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesDetails;



import React from 'react';
import Data from './Data';
import './Services.css';
import account from '../../assets/acount.png';

const ServicesDetails = () => {
  return (
    <div className='services-section' id='Services'>
      <p className='para-services'>Discover Your Path</p>
      <h2>Explore opportunities to change<br/> or discover careers</h2>

      <div className="service-information">
        {Data.map((service) => (
          <div key={service.id} className="services-inner">
            <img src={account} alt='service' className='account'/>
            <h3 className='font card3'>{service.title}</h3>
            <p className='font40 service-text'>{service.text}</p>
          </div>
        ))}
      </div>

      {/* Direct Link to Contact Form */}
      <a href="#Contact" className='font40 learn'>Talk to our experts</a>
    </div>
  );
};

export default ServicesDetails;

 
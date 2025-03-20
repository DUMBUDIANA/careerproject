// import React, { useState } from 'react';
// import './Testmonials.css';
// import Testmonialsdata from './Testmonialsdata';

// const Testmonials = () => {
//   const [activeId, setActiveId] = useState(null);

//   const handleImageClick = (id) => {
//     setActiveId(activeId === id ? null : id); // Toggle active state
//   };

//   return (
//     <div className='outer'>
//       <div>
//         <p className='para'>Know Us</p>
//         <h2>We are your partner in <br /> career development</h2>
//       </div>
//       <div className='testimonials-container'>
//         {Testmonialsdata.map((testimonial) => (
//           <div key={testimonial.id} className='testimonial-card' onClick={() => handleImageClick(testimonial.id)}>
//             <img
//               src={testimonial.src}
//               alt={testimonial.Name}
//               className={activeId === testimonial.id ? 'active' : ''}
//             />
//           </div>
//         ))}
//       </div>
//       {activeId && (
//         <div className='testimonial-text'>
//           <h3>{Testmonialsdata.find(t => t.id === activeId).Name}</h3>
//           <p>{Testmonialsdata.find(t => t.id === activeId).text}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Testmonials;



import React, { useState } from 'react';
import './Testmonials.css';
import Testmonialsdata from './Testmonialsdata';

const Testmonials = () => {
  const [activeId, setActiveId] = useState(null);

  const handleImageClick = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle active state
  };

  return (
    <div className='outer' id='Testimonial'>
      <div>
        <p className='para'>Know Us</p>
        <h2>We are your partner in <br /> career development</h2>
      </div>
      <div className='testimonials-container'>
        {Testmonialsdata.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-card ${activeId === testimonial.id ? 'active' : ''}`}
            onClick={() => handleImageClick(testimonial.id)}
          >
            <img
              src={testimonial.src}
              alt={testimonial.Name}
            />
          </div>
        ))}
      </div>
      {activeId && (
        <div className='testimonial-text'>
          <h3>{Testmonialsdata.find(t => t.id === activeId).Name}</h3>
          <p>{Testmonialsdata.find(t => t.id === activeId).text}</p>
        </div>
      )}
    </div>
  );
}

export default Testmonials;


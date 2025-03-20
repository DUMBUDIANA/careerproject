// import React, { useEffect, useState } from 'react';
// import ExpertsData from './ExpertsData';
// import './Experts.css'; // Your CSS file

// const Experts = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % ExpertsData.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//     <p className='para'>Meet Experts</p>
//      <h2></h2>
//     <div className="carousel">
//       <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
//         {ExpertsData.map((expert, index) => (
//           <div
//             key={expert.id}
//             className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
//           >
//             <img src={expert.imgSrc} alt={expert.name} />
//             {activeIndex === index && (
//               <div className="active-text-overlay">
//                 <h4>{expert.name}</h4>
//                 <p>{expert.info}</p>
//               </div>
//             )}
//             <div className="image-overlay" />
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Experts;


import React, { useEffect, useState } from 'react';
import ExpertsData from './ExpertsData';
import './Experts.css';

const Experts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1); // Increase index continuously
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset to the start once we've scrolled through the duplicate images
  const trackStyle = {
    transform: `translateX(-${(activeIndex % ExpertsData.length) * 25}%)`,
    transition: 'transform 0.5s ease',
  };

  return (
    <div id='Experts'>
      <p className='para'>Meet Experts</p>
      <h2>World-class excellence <br/>within your grasp </h2>
      <div className="carousel">
        <div className="carousel-track" style={trackStyle}>
          {[...ExpertsData, ...ExpertsData].map((expert, index) => ( // Duplicate the images
            <div
              key={index} // Use index here since we're duplicating items
              className={`carousel-item ${activeIndex % ExpertsData.length === index ? 'active' : ''}`}
            >
              <img src={expert.imgSrc} alt={expert.name} />
              {activeIndex % ExpertsData.length === index && (
                <div className="active-text-overlay">
                  <h4>{expert.name}</h4>
                  <p>{expert.info}</p>
                </div>
              )}
              <div className="image-overlay" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;


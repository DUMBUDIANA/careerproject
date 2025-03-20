// src/components/FAQ.js
import React, { useState } from 'react';
import faqDataset from './faqDataset';
import './FAQ.css'; // Style as needed

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle answer visibility
  };

  return (
    <div className="faq-container">
      <h2 className='headingh2'>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqDataset.map((item) => (
          <li key={item.id} className="faq-item">
            <button onClick={() => toggleAnswer(item.id)} className="faq-question">
              {item.question}
              <span className={`faq-arrow ${activeId === item.id ? 'active' : ''}`}>▼</span> {/* Arrow icon */}
            </button>
            {activeId === item.id && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;


import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <div className='nav'>
        <Link to="/" className='logo'>
          Skillset<span className='black'>Hub</span>
        </Link>
        <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`inner ${isMenuOpen ? 'show' : ''}`}>
          {/* <a><Link to="/">Home</Link></a> */}
          <Link to="/" className='nav-link'>Home</Link>

          <a href="#Services" className='nav-link'>Services</a>
          <a href="#About" className='nav-link'>About</a>
          <a href="#Experts" className='nav-link'>Experts</a>
          <a href="#Posts" className='nav-link'>Latest</a>
          <a href="#Contact" className='nav-link'>Contact</a>
          <div className='Contact'>
            <Link to="" className='signup'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;


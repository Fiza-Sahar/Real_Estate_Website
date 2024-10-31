import React, { useState } from 'react';
import logo from '../../Assets/Images/Logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle menu visibility
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img className={`logo ${isMenuOpen ? 'active-logo' : ''}`} src={logo} width={100} alt="Logo" />
        <button className="h-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'} {/* Toggle icon: X when open, hamburger when closed */}
        </button>
        <div className={`flexCenter h-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#residencies">Residencies</a>
          <a href="#our-values">Our Values</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className='button'>
            <a href="#contact-us">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;

import React from 'react';
import logo from '../../Assets/Images/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} width={100} alt="Logo" />
        <div className="flexCenter h-menu">
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
  )
}

export default Header;

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../Assets/Images/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Brief Description */}
        <div className="footer-section footer-logo">
          <img src={logo} alt="Company Logo" className="footer-logo-image" />
          <p className="footer-description">
            Your trusted partner for exceptional service and quality. Let’s create something great together.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h4>Contact Information</h4>
          <p>123 Main St, Your City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

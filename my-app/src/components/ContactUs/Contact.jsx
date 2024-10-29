import React from 'react';
import './Contact.css';
import contactImage from '../../Assets/Images/Company-01.jpg'; // Replace with your image path
import { MdPhone, MdChat, MdVideocam, MdMessage } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-us">
      {/* Container for image and contact information */}
      <div className="contact-container">
        {/* Image Section */}
       

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We are here to assist you! Reach out to us through any of the methods below.
          </p>
          <div className="contact-cards">
            {/* Call Card */}
            <div className="contact-card">
              <MdPhone className="contact-icon" />
              <h3>Call Us</h3>
              <p>Get immediate assistance by calling our support team.</p>
            </div>

            {/* Chat Card */}
            <div className="contact-card">
              <MdChat className="contact-icon" />
              <h3>Chat with Us</h3>
              <p>Start a live chat with our customer service.</p>
            </div>

            {/* Video Call Card */}
            <div className="contact-card">
              <MdVideocam className="contact-icon" />
              <h3>Video Call</h3>
              <p>Schedule a video call with our experts.</p>
            </div>

            {/* Messages Card */}
            <div className="contact-card">
              <MdMessage className="contact-icon" />
              <h3>Send a Message</h3>
              <p>Leave us a message, and we’ll get back to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

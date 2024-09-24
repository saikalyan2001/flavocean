import React from 'react';
import './Contact.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

function Contact() {
  return (
    <div className="contact-container" id='contact'>
      <p className="contact-text">CONTACT US</p>
      <h2 className="contact-heading">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-info-heading">Opening hours</h3>
          <p className="contact-info-text">Daily: 9.30 AM–6.00 PM</p>
          <p className="contact-info-text">Sunday & Holidays: Closed</p>
          <h3 className="contact-info-heading info-heading">Contact info</h3>
          <p className="contact-info-text">77408 Satterfield Motorway Suite 469</p>
          <p className="contact-info-text">New Antonetta, BC K3L6P6</p>
          <br />
          <p className="contact-info-text">example@info.com</p>
          <p className="contact-info-text">(617) 495-9400-326</p>
          <h3 className="contact-info-heading info-heading">Social contact</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="contact-form">
          <h3 className="contact-form-heading">Drop us a line</h3>
          <form className="contact-form-form">
            <div className="form-row">
              <input type="text" id="name" name="name" className="form-input" placeholder="Your Name *" required />
              <input type="email" id="email" name="email" className="form-input" placeholder="Your Email *" required />
            </div>
            <div className="form-row">
              <input type="tel" id="phone" name="phone" className="form-input" placeholder="Your Phone" required />
              <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" required />
            </div>
            <div className="form-row">
              <textarea id="message" name="message" className="form-textarea" placeholder="Your Message ..." required></textarea>
            </div>
            <button type="submit" className="contact-form-button">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

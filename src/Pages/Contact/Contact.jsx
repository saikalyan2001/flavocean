import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({}); // State for error messages

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Perform submit action (e.g., send data to server)
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container" id='contact'>
      <p className="contact-text">REACH OUT TO US</p>
      <h2 className="contact-heading">We'd Love to Hear from You</h2>
      <div className="contact-content">
        <div className="contact-info">
          {/* Original contact info code */}
          <h3 className="contact-info-heading">Opening hours</h3>
          <p className="contact-info-text">Daily: 9.30 AM–6.00 PM</p>
          <p className="contact-info-text">Sunday & Holidays: Closed</p>
          <h3 className="contact-info-heading info-heading">Contact info</h3>
          <p className="contact-info-text">115-4-432/B, Srinivasa Colony, Nallapadu</p>
          <p className="contact-info-text">Andhra Pradesh-522002, INDIA</p>
          <br />
          <p className="contact-info-text">info@flavoursocean.com</p>
          <p className="contact-info-text">(+91) 456-7890-3990</p>
          <h3 className="contact-info-heading info-heading">Social contact</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="contact-form">
          <h3 className="contact-form-heading">Drop us a Message</h3>
          <form className="contact-form-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errors.name ? 'error-input' : ''}`}
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error-input' : ''}`}
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-row">
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${errors.phone ? 'error-input' : ''}`}
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <textarea
                id="message"
                name="message"
                className={`form-textarea ${errors.message ? 'error-input' : ''}`}
                placeholder="Your Message ..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <button type="submit" className="contact-form-button">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

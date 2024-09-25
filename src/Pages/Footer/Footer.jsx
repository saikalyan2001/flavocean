import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-main-content">
        <div className="footer-subscription">
          <h2 className="footer-subscription-title">Subscribe Newsletter</h2>
          <div className="footer-subscription-form">
            <input
              className="footer-subscription-input"
              type="text"
              placeholder="Your email"
            />
            <button className="footer-subscription-button">
              <span>Subscribe Now</span>
            </button>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-info">
          <div className="footer-info-item footer-info-bakery">
            <h2 className="footer-info-title logo-title">Flavour's Ocean.</h2>
          </div>
          <div className="footer-info-item footer-info-contact">
            <h2 className="footer-info-title">Contact Info</h2>
            <p className="footer-info-address">115-4-432/B, Srinivasa Colony, Nallapadu</p>
            <p className="footer-info-city">Nallapadu Rural, Andhra Pradesh-522002, INDIA</p>
            <p className="footer-info-email">info@flavoursocean.com</p>
            <p className="footer-info-phone">(+91) 456-7890-3990</p>
            <div className="footer-info-social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-info-social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-info-social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-info-social-icon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="footer-info-item footer-info-links">
            <h2 className="footer-info-title">Quick Links</h2>
            <p className="footer-info-link">Company History</p>
            <p className="footer-info-link">About Us</p>
            <p className="footer-info-link">Contact Us</p>
            <p className="footer-info-link">Services</p>
            <p className="footer-info-link">Privacy Policy</p>
          </div>
          <div className="footer-info-item footer-info-hours">
            <div className="border">
            <h2 className="footer-info-title">Opening Hours</h2>
            <p className="footer-info-hour" data-day="Monday:">
              09 AM - 06 PM
            </p>
            <p className="footer-info-hour" data-day="Tuesday:">
              09 AM - 06 PM
            </p>
            <p className="footer-info-hour" data-day="Wednesday:">
              09 AM - 06 PM
            </p>
            <p className="footer-info-hour" data-day="Thursday:">
              09 AM - 06 PM
            </p>
            <p className="footer-info-hour" data-day="Friday:">
              09 AM - 06 PM
            </p>
            <p className="footer-info-hour" data-day="Saturday - Sunday:">
              <span className="closed">Closed</span>
            </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            <span className="footer-logo">Flavour's Ocean</span> © 2024 All Rights Reserved
          </p>
          <div className="footer-bottom-links">
            <a href="/terms-of-service" className="footer-bottom-link">Terms of Service</a>
            <span className="footer-bottom-line"> | </span>
            <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

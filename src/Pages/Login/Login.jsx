import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./Login.css";


import {
  MdSearch,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdMenu,
  MdClose
} from "react-icons/md"; // Add arrow icons

const Login = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search pop-up

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(
        ".login-navbar"
      ).offsetHeight;
      if (window.scrollY >= navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev); // Toggle the search pop-up
  };

  return (
    <div id="lg">
      <nav className="login-navbar">
        <div className="login-logo">
          <h2 className="login-brand-logo">Flavour's Ocean</h2>
        </div>

        <div className="hamburger" onClick={() => {
  const navLinks = document.querySelector('.login-nav-links');
  navLinks.classList.toggle('active');
}}>
  <MdMenu className="login-icon" /> {/* Replace MdMenu with your preferred hamburger icon */}
</div>


        <ul className="login-nav-links">
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              className="login-active-link"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="login-nav-other-links">
          <li className="login-icon-link">
            <p className="login-active-link">
              <MdAccountCircle
                className="login-icon-acc"
                onClick={() => navigate("/login")}
              />
            </p>
          </li>
        </ul>
      </nav>

      <div className="login-heading">
        <h2 className="login-h2">My Account</h2>
        <p className="login-p"> <a href="" className="back-home" onClick={() => navigate("/")}>Home</a> - My Account</p>
      </div>

      <div className="login-container">
        <div className="form-head">
          <h1 className="form-heading">Login</h1>
        </div>

        <form className="login-form" id="login-form">
          <label htmlFor="username"  className="login-label">
            Username Or Email Address *
          </label>
          <input type="text"  id="username" name="username" />

          <label htmlFor="password" className="login-label">
            Password *
          </label>
          <input type="text"  id="password" name="password" />

          <div className="log-remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="login-label">
              Remember Me
            </label>
          </div>

          <button className="login-btn">Log in</button>

          <a href="#" className="lost-pass">
            Lost your password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;

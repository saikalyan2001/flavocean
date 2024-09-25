import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search pop-up

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(
        ".login-sticky-navbar"
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

        <div className="login-form">
          <label htmlFor="" className="login-label">
            Username Or Email Address *
          </label>
          <input type="text" />

          <label htmlFor="" className="login-label">
            Password *
          </label>
          <input type="text" />

          <div className="log-remember">
            <input type="checkbox" />
            <label htmlFor="" className="login-label">
              Remember Me
            </label>
          </div>

          <button className="login-btn">Log in</button>

          <a href="" className="lost-pass">
            Lost your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

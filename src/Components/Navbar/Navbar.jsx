import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import "./Navbar.css";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
  const { themeColor } = useContext(ThemeContext);
  const [isSticky, setIsSticky] = useState(false);

  const navbarStyle = {
    backgroundColor: themeColor,
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
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

  return (
    <>
      {/* Sticky Navbar */}
      <nav className={`sticky-navbar ${isSticky ? "visible" : "hidden"}`}>
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="flavors-ocean Logo"
            className="sticky-logo-image"
          />
        </div>

        <ul className="nav-links">
          <li>
            <Link smooth to="#top" className="active-link">
              Home
            </Link>
          </li>
          {/* Use HashLink for smooth scrolling */}
          <li>
            <Link smooth to="#about" className="active-link">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#shop" className="active-link">
              Shop
            </Link>
          </li>
          <li>
            <Link smooth to="#services" className="active-link">
              Services
            </Link>
          </li>
          <li>
            <Link smooth to="#gallery" className="active-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link smooth to="#contact" className="active-link">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="nav-other-links">
          {/* ... other links ... */}
          <li className="icon-link">
            <NavLink className="active-link">
              <MdSearch className="icon" />
            </NavLink>
          </li>
          <li className="icon-link">
            <NavLink to="/account" className="active-link">
              <MdAccountCircle className="icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

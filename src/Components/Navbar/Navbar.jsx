import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import "./Navbar.css";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { themeColor } = useContext(ThemeContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search pop-up

  const navigate = useNavigate();

  const navbarStyle = {
    backgroundColor: themeColor,
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        document.querySelector(".sticky-navbar").offsetHeight;
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
    <>
      {/* Sticky Navbar */}
      <nav className={`sticky-navbar ${isSticky ? "visible" : "hidden"}`}>
        <div className="logo">
          <h2 className="brand-logo">Flavour's Ocean</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="top" smooth={true} duration={500} className="active-link">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="active-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="shop"
              smooth={true}
              duration={500}
              className="active-link"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="active-link"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="active-link"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="active-link"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="nav-other-links">
          <li className="icon-link">
            <p className="active-link">
              <MdAccountCircle
                className="icon-acc"
                onClick={() => navigate("/login")}
              />
            </p>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

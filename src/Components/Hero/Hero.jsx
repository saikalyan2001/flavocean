import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css"; // Import CSS for styling
import { ThemeContext } from "../../ThemeContext";
// import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import {
  MdAccountCircle,
  MdSearch,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdMenu,
  MdClose
} from "react-icons/md"; // Add arrow icons

const heroData = [
  {
    title: "Taste From The Good Old Days.",
    description: "Trend Spotted by Europe Locals - Colorful Macarons!",
    imageUrl: "/hero/banner-image-1.png",
    // bgColor: "#DB7093", 
    bgColor: "#f48c1c  ", // Orange
  },
  {
    title: "Taste From The Good Old Days.",
    description: "Trend Spotted by Europe Locals - Colorful Macarons!",
    imageUrl: "/hero/banner-image-2.png",
    // bgColor: "#4169E1", // 
    bgColor: "#e42c2c    ", // Red
  },
  {
    title: "Taste From The Good Old Days.",
    description: "Trend Spotted by Europe Locals - Colorful Macarons!",
    imageUrl: "/hero/banner-image-3.png",
    // bgColor: "#2E8B57", // 
    bgColor: "#d44474   ", // Pink
  },
];

function Hero() {
  const { changeThemeColor } = useContext(ThemeContext); // Access changeThemeColor from context
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState("slide-in"); // For sliding effect
  const [animationKey, setAnimationKey] = useState(0); // Key to force animation restart
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    const navLinks = document.querySelector('.nav-links');

    if (menuOpen) {
        navLinks.classList.remove('show'); // Start closing animation
        setTimeout(() => {
            navLinks.classList.remove('active'); // Remove active class after animation
        }, 500); // Match the timeout with the CSS transition duration
    } else {
        navLinks.classList.add('active'); // Make the menu active
        setTimeout(() => {
            navLinks.classList.add('show'); // Start opening animation
        }, 10); // Small delay to allow active to apply before show
    }
};


  
  const navigate = useNavigate();

  useEffect(() => {
    const currentBgColor = heroData[currentIndex].bgColor;
    changeThemeColor(currentBgColor); // Update theme color based on hero section

    // Update the CSS variable for the navbar
    document.documentElement.style.setProperty(
      "--navbar-bg-color",
      currentBgColor
    );

    const interval = setInterval(() => {
      setSlide("slide-out"); // Start slide-out effect

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        setSlide("slide-in"); // Start slide-in effect after changing content
        setAnimationKey((prevKey) => prevKey + 1); // Increment key to restart animation
      }, 1000); // Duration of the slide-out effect
    }, 6000); // Total time for each image (including delay)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, changeThemeColor]);

  const goToNextSlide = () => {
    setSlide("slide-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
      setSlide("slide-in");
      setAnimationKey((prevKey) => prevKey + 1);
    }, 2000); // Adjust timing for smooth transition
  };

  const goToPrevSlide = () => {
    setSlide("slide-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? heroData.length - 1 : prevIndex - 1
      );
      setSlide("slide-in");
      setAnimationKey((prevKey) => prevKey + 1);
    }, 2000); // Adjust timing for smooth transition
  };

  const contentRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      contentRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          ref.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Initial Navbar */}
      <nav className="navbar" id="top">
  <div className="logo">
    <h2 className="brand-logo">Flavour's Ocean</h2>
  </div>

  {/* Hamburger Icon */}
  <div className="hamburger" onClick={toggleMenu}>
    {menuOpen ? <MdClose className="icon" /> : <MdMenu className="icon" />}
  </div>

  {/* Sidebar Navigation Links */}
  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
    {/* Close Icon */}
    <li className="close-icon" onClick={toggleMenu}>
      <MdClose className="icon" />
    </li>

    <li>
      <Link to="top" smooth={true} duration={500} className="active-link">
        Home
      </Link>
    </li>
    <li>
      <Link to="about" smooth={true} duration={500} className="active-link">
        About
      </Link>
    </li>
    <li>
      <Link to="shop" smooth={true} duration={500} className="active-link">
        Shop
      </Link>
    </li>
    <li>
      <Link to="services" smooth={true} duration={500} className="active-link">
        Services
      </Link>
    </li>
    <li>
      <Link to="gallery" smooth={true} duration={500} className="active-link">
        Gallery
      </Link>
    </li>
    <li>
      <Link to="contact" smooth={true} duration={500} className="active-link">
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


      <section
        className="hero"
        style={{ background: heroData[currentIndex].bgColor }}
      >
        <div className="carousel-content">
          <div className={`hero-content ${slide}`} key={animationKey}>
            <h1 className="hero-title">{heroData[currentIndex].title}</h1>
            <p className="hero-description">
              {heroData[currentIndex].description}
            </p>
            <a href="/shop" className="btn-primary">
              <span>Explore Now</span>
            </a>
          </div>
          <div className={`hero-image ${slide}`}>
            <img
              src={heroData[currentIndex].imageUrl}
              alt="Ice Cream"
              className={`hero-img ${slide}`}
            />
          </div>
        </div>
        <div className="carousel-arrows">
          <button className="carousel-arrow prev" onClick={goToPrevSlide}>
            <MdArrowBackIos />
          </button>
          <button className="carousel-arrow next" onClick={goToNextSlide}>
            <MdArrowForwardIos />
          </button>
        </div>
      </section>

      <div className="bottom-banner">
        <div className="content" ref={(el) => (contentRefs.current[0] = el)}>
          <span className="number">01</span>
          <div className="text">
            <h2>Bakery</h2>
            <p>
              Excepteur sint occaecat cupidat non sunt culpa qui officia
              deserunt mollit anim est laborum.
            </p>
          </div>
        </div>

        <div className="content" ref={(el) => (contentRefs.current[1] = el)}>
          <span className="number">02</span>
          <div className="text">
            <h2>Pastry Cake</h2>
            <p>
              Excepteur sint occaecat cupidat non sunt culpa qui officia
              deserunt mollit anim est laborum.
            </p>
          </div>
        </div>

        <div className="content" ref={(el) => (contentRefs.current[2] = el)}>
          <span className="number">03</span>
          <div className="text">
            <h2>Confectionery</h2>
            <p>
              Excepteur sint occaecat cupidat non sunt culpa qui officia
              deserunt mollit anim est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

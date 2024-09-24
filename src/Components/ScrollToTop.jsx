// src/Components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Ensure this path is correct

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      &#8593; {/* Up arrow character */}
    </button>
  );
};

export default ScrollToTop;

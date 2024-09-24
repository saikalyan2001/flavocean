// Parallax.js
import React from 'react';
import './Parallax.css'; // Import the CSS file for parallax styling

const Parallax = ({ children, image }) => {
  return (
    <div className="parallax">
      <div className="parallax-background" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="parallax-overlay"></div>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default Parallax;

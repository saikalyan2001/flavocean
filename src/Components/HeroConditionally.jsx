// src/Components/HeroConditionally.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero/Hero'; // Import the Hero component

const HeroConditionally = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/' && <Hero />} {/* Conditionally include the Hero component */}
    </>
  );
};

export default HeroConditionally;

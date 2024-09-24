// src/App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Services from "./Pages/Services/Services";
import Gallery from "./Pages/Gallery/Gallery";
import Promotion from "./Pages/Promotion/Promotion";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import HeroConditionally from "./Components/HeroConditionally";
import ScrollToTop from "./Components/ScrollToTop"; // Ensure this import is correct
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroConditionally />
        <About />
        <Shop />
        <Services />
        <Gallery />
        <Promotion />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Services from "./Pages/Services/Services";
import Gallery from "./Pages/Gallery/Gallery";
import Promotion from "./Pages/Promotion/Promotion";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import HeroConditionally from "./Components/HeroConditionally";
import ScrollToTop from "./Components/ScrollToTop"; 
import Login from "./Pages/Login/Login";
import LoadingSpinner from "./Components/LoadingSpinner"; // Import the loading spinner

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get the current location for navigation

  useEffect(() => {
    // Set loading to true when navigating to a new page
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false); // Simulate loading duration
      }, 1000); // Adjust the delay as needed
    };

    handleRouteChange(); // Trigger the function on the initial render

    return () => {
      setLoading(false); // Clean up loading state when unmounting
    };
  }, [location]); // Run the effect when the location changes

  if (loading) {
    return <LoadingSpinner />; // Use the loading spinner
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <>
              <HeroConditionally />
              <About />
              <Shop />
              <Services />
              <Gallery />
              <Promotion />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

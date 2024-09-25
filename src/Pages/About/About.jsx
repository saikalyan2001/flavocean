import React from "react";
import "./About.css";
import useOnScreen from "../../useOnScreen";

function About() {
  const [containerRef, isContainerOnScreen] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="about-container" ref={containerRef} id="about">
      <p className="story-text">OUR STORY</p>
      <h2 className="service-heading">
        Blending Tradition & Innovation <br /> Established in 2024
      </h2>
      <div className="image-container">
        <div className="text-left">
          <h3 className="text-title">About Flavour's Ocean</h3>
          <p className="text-paragraph">
            Flavour's Ocean is a destination where culinary artistry meets
            passion. We are dedicated to crafting extraordinary dishes that
            blend the finest ingredients with a touch of innovation. Whether
            you're seeking a classic comfort dish or an adventurous flavor
            combination, Flavour's Ocean promises an unforgettable dining
            experience that celebrates the joy of food and community.
          </p>
          <div className="signature-container">
            <span className="signature-text">flavors ocean</span>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img
            src="about/ice-cream-1.png"
            alt="About Bagery"
            className={`about-image ${isContainerOnScreen ? "slide-in" : ""}`}
            style={{
              animationDelay: isContainerOnScreen ? "0.5s" : "0s", // Apply delay when the image is on screen
            }}
          />
        </div>
        <div className="text-right">
          <h3 className="text-title">Flavour's Ocean Overview</h3>
          <p className="text-paragraph">
            Discover the unparalleled richness of taste with Flavour's Ocean.
            Immerse yourself in a world where every ingredient tells a story,
            and every dish brings a journey of delightful experiences. Dive into
            a culinary adventure that satisfies not just your hunger but your
            soul.
          </p>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span>
            Crafted with the finest ingredients.
          </div>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span>
            Innovative culinary techniques.
          </div>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span>A memorable dining
            experience.
          </div>
        </div>
      </div>
      <div className="contact-us-container">
        <button className="contact-us-btn">
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );
}

export default About;

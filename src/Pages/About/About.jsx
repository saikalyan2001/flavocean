import React from "react";
import "./About.css";
import useOnScreen from "../../useOnScreen";

function About() {
  const [containerRef, isContainerOnScreen] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="about-container" ref={containerRef} id="about">
      <p className="story-text">OUR STORY</p>
      <h2 className="service-heading">
        Traditional & Modern Service <br /> Since 1990
      </h2>
      <div className="image-container">
        <div className="text-left">
          <h3 className="text-title">About Bagery</h3>
          <p className="text-paragraph">
            Excepteur sint occaecat cupidat non proident sunt in culpa qui
            officia deserunt mollit anim est laborum. magni dolores eos ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            aliquam quaerat voluptatem.
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
          <h3 className="text-title">Bagery Overview</h3>
          <p className="text-paragraph">
            Accusan enim ipsam voluptam quia voluptas sit aspern odit aut sed
            quia consequnt magni dolores eos qui ratione voluptatem. Sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet.
          </p>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span> Ratione voluptatem.
            sequi nesciunt.
          </div>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span> Ratione voluptatem.
          </div>
          <div className="tick-mark">
            <span className="tick-icon">&#10003;</span> Ratione voluptatem
            sequi.
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

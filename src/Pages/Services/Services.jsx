import React, { useState, useEffect, useRef } from "react";
import './Services.css';

const serviceData = [
  {
    "para": "Cone Ice Creams",
    "heading": "Accusan enim ipsam voluptam quia voluptas sit aspern odit aut sed quia consequnt.",
    "button": "Read More",
    "image": "/services/Cone-Ice-Creams.jpeg"
  },
  {
    "para": "Fresh Bread",
    "heading": "Accusan enim ipsam voluptam quia voluptas sit aspern odit aut sed quia consequnt.",
    "button": "Read More",
    "image": "/services/Fresh-Bread.jpeg"
  },
  {
    "para": "Piece Cake",
    "heading": "Accusan enim ipsam voluptam quia voluptas sit aspern odit aut sed quia consequnt.",
    "button": "Read More",
    "image": "/services/Piece-Cake.jpeg"
  },
  {
    "para": "Sweet Donuts",
    "heading": "Accusan enim ipsam voluptam quia voluptas sit aspern odit aut sed quia consequnt.",
    "button": "Read More",
    "image": "/services/Sweet-Donuts.jpeg"
  }
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    serviceRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="services-container" id="services">
      <p className="services-description">SERVICES</p>
      <h2 className="services-heading">Quality & Passion with <br /> our Services!</h2>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className="service-item"
            ref={el => serviceRefs.current[index] = el}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={service.image} alt={service.para} className="service-image" />
            <h3 className="service-title">{service.para}</h3>
            <p className="service-description">{service.heading}</p>
            <button 
              className={`service-button ${hoveredIndex === index ? 'hovered' : ''}`}
            >
              <span>{service.button}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

import React, { useState, useEffect, useRef } from "react";
import './Services.css';

const serviceData = [
  {
    "para": "Cone Ice Creams",
    "heading": "Delight in our cone ice creams, made with creamy goodness and a variety of flavors to choose from.",
    "button": "Read More",
    "image": "/services/Cone-Ice-Creams.jpeg"
  },
  {
    "para": "Choco Bar",
    "heading": "Treat yourself to our rich choco bars, offering a perfect balance of sweetness and smooth chocolate.",
    "button": "Read More",
    "image": "/services/Fresh-Bread.jpeg"
  },
  {
    "para": "Kulfi",
    "heading": "Enjoy our traditional kulfi, a frozen treat that’s creamy, flavorful, and perfect for any occasion.",
    "button": "Read More",
    "image": "/services/Piece-Cake.jpeg"
  },
  {
    "para": "Cup Ice Cream",
    "heading": "Try our cup ice creams, ideal for enjoying your favorite flavors anywhere, anytime.",
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
      <p className="services-description">WHAT WE OFFER</p>
      <h2 className="services-heading">Excellence & Dedication in <br /> Every Service!</h2>

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
            {/* <button 
              className={`service-button ${hoveredIndex === index ? 'hovered' : ''}`}
            >
              <span>{service.button}</span>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

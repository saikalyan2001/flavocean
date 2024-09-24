import React, { useEffect } from 'react';
import './Promotion.css'; // Ensure this import is present

const imageData = [
  {
    id: 1,
    image: "/promotion/promotion-1.jpg",
    alt: "Flavour 1",
    className: "promotion-flavour-image promotion-image-slide-in",
  },
  {
    id: 2,
    image: "/promotion/promotion-2.jpg",
    alt: "Flavour 2",
    className: "promotion-flavour-image promotion-image-slide-in",
  },
];

const imageData2 = [
  {
    id: 1,
    image: "/promotion/promotion-3.jpg",
    alt: "Flavour 3",
    className: "promotion-flavour-image3 promotion-image-slide-in",
  },
];

function Promotion() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.promotion-info-container, .promotion-info-container2');
      const images = document.querySelectorAll('.promotion-image-slide-in');
      const windowHeight = window.innerHeight;
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) { // Adjust the value as needed
          element.classList.add('promotion-slide-in-active');
        }
      });

      images.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < windowHeight - 100) { // Adjust the value as needed
          img.classList.add('promotion-image-slide-in-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="promotion-container">
      <div className="promotion-content">
        <p className="promotion-text">PROMOTION</p>
        <h1 className="promotion-heading">
          Check all Flavours <br /> Summer Promo
        </h1>

        <div className="promotion-layout">
          <div className="promotion-images-container">
            {imageData.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={img.alt}
                className={img.className}
              />
            ))}
          </div>

          <div className="promotion-info-container promotion-slide-in">
            <img
              src="/promotion/price.jpeg"
              alt="Promo banner"
              className="promotion-info-image"
            />
            <h2 className="promotion-info-heading">
              A Taste all Folks Keep <br /> Coming to
            </h2>
            <p className="promotion-info-text">
              Excepteur sint occaecat cupidat proident sunt culpa officia
              deserunt mollit anim est laborum.
            </p>
            <button className="promotion-button"><span>Let's Order Now</span></button>
          </div>
        </div>

        <div className="promotion-layout">
          <div className="promotion-info-container2 promotion-slide-in">
            <img
              src="/promotion/price.jpeg"
              alt="Promo banner"
              className="promotion-info-image"
            />
            <h2 className="promotion-info-heading">
              A Taste all Folks Keep <br /> Coming to
            </h2>
            <p className="promotion-info-text">
              Excepteur sint occaecat cupidat proident sunt culpa officia
              deserunt mollit anim est laborum.
            </p>
            <button className="promotion-button"><span>Let's Order Now</span></button>
          </div>

          <div className="promotion-images-container">
            {imageData2.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={img.alt}
                className={img.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;

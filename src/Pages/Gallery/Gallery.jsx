import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const allImages = {
    "ICE CREAM": [
      "/gallery/IceCream/project-3-1.jpg",
      "/gallery/IceCream/project-2-1.jpg",
      "/gallery/IceCream/project-1-1.jpg",
    ],
    PANCAKES: [
      "/gallery/Pancakes/Product-1.jpg",
      "/gallery/Pancakes/Product-5.jpg",
      "/gallery/Pancakes/Product-8.jpg",
    ],
    "FRESH BREAD": [
      "/gallery/FreshBread/Product-5.jpg",
      "/gallery/FreshBread/Product-6.jpg",
      "/gallery/FreshBread/Product-7.jpg",
    ],
    MUFFIN: [
      "/gallery/Muffin/Product-2.jpg",
      "/gallery/Muffin/Product-4.jpg",
      "/gallery/Muffin/Product-9.jpg",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFood, setSelectedFood] = useState("ICE CREAM");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const images = allImages[selectedFood] || [];

  useEffect(() => {
    const container = document.querySelector(".gallery-frames");
    container.style.transition = "none";
    container.style.transform = `translateX(-${(currentIndex + 1) * 320}px)`;
    container.offsetHeight; // trigger reflow
    container.style.transition = "transform 0.5s ease";
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleFoodClick = (foodItem) => {
    setSelectedFood(foodItem);
    setCurrentIndex(0); // Reset the index when food item changes

    // Add flip class to gallery frames
    const frames = document.querySelectorAll(".gallery-frame");
    frames.forEach((frame) => {
      // Ensure we are not applying the effect to duplicate frames
      if (!frame.classList.contains("flip")) {
        frame.classList.add("flip");
      }
    });

    // Remove flip class from all frames after animation ends
    setTimeout(() => {
      frames.forEach((frame) => {
        frame.classList.remove("flip");
      });
    }, 300); // Duration should match CSS transition time
  };

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-content">
        <p className="gallery-title">IMAGE GALLERY</p>
        <h1 className="gallery-subtitle">
          Explore Our <br /> Collection
        </h1>
        <p className="gallery-description">
          Discover the beauty captured through our lens. Each image tells a
          story, bringing to life the moments that inspire us. Enjoy the journey
          through our stunning visuals.
        </p>
        <div className="gallery-arrows">
          <button className="arrow prev-arrow" onClick={handlePrev}>
            &#8592;
          </button>
          <button className="arrow next-arrow" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
      <div className="gallery-photos">
        <div className="food-sections">
          {Object.keys(allImages).map((foodItem) => (
            <p
              key={foodItem}
              className={`food-item ${
                foodItem === selectedFood ? "active" : ""
              }`}
              onClick={() => handleFoodClick(foodItem)}
            >
              {foodItem}
            </p>
          ))}
        </div>
        <div className="gallery-frames-container">
          <div
            className="gallery-frames"
            style={{ transform: `translateX(-${(currentIndex + 1) * 320}px)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-frame">
                <div className="gallery-image-wrapper">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-image"
                    onClick={() => openModal(image)}
                  />
                  <div className="gallery-overlay">
                    <span
                      className="plus-icon"
                      onClick={() => openModal(image)}
                    >
                      +
                    </span>
                    <p className="overlay-text">{selectedFood}</p>
                  </div>
                </div>
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index + images.length} className="gallery-frame">
                <div className="gallery-image-wrapper">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1} Repeat`}
                    className="gallery-image"
                    onClick={() => openModal(image)}
                  />
                  <div className="gallery-overlay">
                    <span
                      className="plus-icon"
                      onClick={() => openModal(image)}
                    >
                      +
                    </span>
                    <p className="overlay-text">{selectedFood}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Modal" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default Gallery;

import './Shop.css';
import { useState, useRef } from 'react';

const products = [
  { id: 1, title: 'Vanilla Ice Cream', price: '$10.00', rating: 5, image: '/shop/Product-1.jpg' },
  { id: 2, title: 'Italian Bread', price: '$15.00', rating: 5, image: '/shop/Product-4.jpg' },
  { id: 3, title: 'Quality Ice Cream', price: '$15.00', rating: 5, image: '/shop/Product-3.jpg' },
  { id: 4, title: 'Cone Ice Cream', price: '$15.00', rating: 5, image: '/shop/Product-2.jpg' }
];

function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from the first product
  const productRef = useRef(null);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % products.length); // Loop back to 0 after reaching last product
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + products.length) % products.length); // Loop back to the last product if at the start
  };

  return (
    <div className="shop-container" id='shop'>
      <div className="shop-text">
        <p className="para-shop">OUR STORE</p>
        <div className="heading-container">
          <h1 className="heading-shop">Explore Our Tasty <br /> Offerings.</h1>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-buttons">
          <button className="carousel-button prev" onClick={handlePrev}>‹</button>
          <button className="carousel-button next" onClick={handleNext}>›</button>
        </div>
        <div
          className="product-carousel"
          style={{
            transform: `translateX(-${currentIndex * 250}px)`, // Adjust the offset based on index
            transition: 'transform 0.5s ease' // Smooth transition
          }}
          ref={productRef}
        >
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-price">{product.price}</div>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-rating">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
              </p>
              <button className="add-to-cart-button">
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

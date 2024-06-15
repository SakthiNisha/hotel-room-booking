import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide} className="slider-button">❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button onClick={nextSlide} className="slider-button">❯</button>
    </div>
  );
};

export default ImageSlider;

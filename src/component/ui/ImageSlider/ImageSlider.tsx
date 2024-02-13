import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageSlider.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="image-slider">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={goToPreviousSlide}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

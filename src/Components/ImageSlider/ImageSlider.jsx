import { useState } from "react";
import "./ImageSlider.css";

const images = [
  "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5-4.jpg",
  "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5-3.jpg",
  "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5-2.jpg",
  "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5-1.jpg",
  "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : images.length - 1
    );
  };

  return (
    <div className="image-slider">
      <div className="large-image">
        <img src={images[currentIndex]} alt="Selected" />
      </div>
      <div className="thumbnail-container">
        <button onClick={handleLeftClick} className="nav-button left-button">
          &lt;
        </button>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                index === currentIndex ? "selected" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ transform: `translateX(-${currentIndex * 110}px)` }}
            />
          ))}
        </div>
        <button onClick={handleRightClick} className="nav-button right-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

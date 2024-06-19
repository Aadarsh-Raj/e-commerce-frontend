import { useState } from "react";
import "./Card.css";
import { CiHeart } from "react-icons/ci";
import { FaSearchengin } from "react-icons/fa";
import PopupCard from "../PopupCard/PopupCard";
import Ratings from "../Rating/Ratings";

const Card = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-6.jpg"
  );
  const hoverImageSrc =
    "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-6-1.jpg";

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setImageSrc(hoverImageSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(
      "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-6.jpg"
    );
  };

  const handleQuickViewClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="cardMainContainer
    "
    >
      <div className="card">
        <svg
          height="100%"
          width="100%"
          className="border"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y2="0" x2="600" y1="0" x1="0" className="top" />
          <line y2="-960" x2="0" y1="360" x1="0" className="left" />
          <line y2="360" x2="-600" y1="360" x1="240" className="bottom" />
          <line y2="960" x2="240" y1="0" x1="240" className="right" />
        </svg>

        <div className="cardLogo">
          <div className="wishlistIcon">
            <CiHeart />
          </div>
          <div className="quickView" onClick={handleQuickViewClick}>
            <FaSearchengin />
          </div>
          <img
            src={imageSrc}
            alt="cloth"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="addToCartText">Add to Cart</div>

        {isPopupVisible && <PopupCard handleClosePopup={handleClosePopup} />}
      </div>
      <div className="cartBottomDetails">
        <h3>NECK TANK TOP</h3>
        <h4>&#8377; 399</h4>
        <Ratings />
      </div>
    </div>
  );
};

export default Card;

import { useState } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Ratings from "../Rating/Ratings";
import SelectableSize from "../SelectableSize/SelectableSize";
import "./PopupCard.css";

const PopupCard = ({ handleClosePopup }) => {
  const [count, setCount] = useState(1);

  const incrementHandle = () => {
    setCount(count + 1);
  };

  const decrementHandle = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="popup">
        <div className="popupContent">
          <span className="closePopup" onClick={handleClosePopup}>
            &times;
          </span>
          <div className="popupMain">
            <div className="popupMainLeft">
              <h2>Product Quick View Popup</h2>
              <Ratings />
              <h4>
                Vender: <span className="productDetails">Optimal</span>
              </h4>
              <h4>
                Product Type: <span className="productDetails">Taps</span>
              </h4>
              <p>In Stock </p>
              <h4>
                Price: <span className="productPrice"> &#8377; 3000 </span>
                <span
                  style={{ textDecoration: "line-through" }}
                  className="productDetails"
                >
                  4999
                </span>
              </h4>
              {/* <p>Size: XS</p> */}
              <SelectableSize />

              <div className="cartBtnContainer">
                <button class="CartBtn">
                  <span class="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(17, 17, 17)"
                      class="cart"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p class="text">Add to Cart</p>
                </button>
                <div className="incDecBtn">
                  <button className="decBtn" onClick={decrementHandle}>
                    -
                  </button>
                  <span>{count}</span>
                  <button className="incBtn" onClick={incrementHandle}>
                    +
                  </button>
                </div>
              </div>
              <div className="productDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                at doloribus animi, quisquam debitis et incidunt doloremque,
                error tempora temporibus nemo laboriosam. Odit sunt quam
                possimus sit nam sed eveniet!
              </div>
            </div>
            <div className="popupMainRight">
              {/* <div className="popupMainRightImage">
                <img
                  src="https://template.annimexweb.com/optimal-rtl/assets/images/products/product-5.jpg"
                  alt="girl"
                />
              </div> */}
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;

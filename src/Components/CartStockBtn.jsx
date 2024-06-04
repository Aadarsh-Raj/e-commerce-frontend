import React from "react";
import "./Styles/cartstockbtn.css"
import outOfStockPng from "../Assets/sold-tag-icon.png"
import addToCartPng from "../Assets/add-to-cart.png"
const CartStockBtn = (props) => {
  return (
    <>
      <button
        className="cart-stock-btn"
        style={
          props.stock == 0
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "black", color: "white" }
        }
        
          disabled= {props.stock== 0 ? true: false}
        
      >
        <p>
        {props.stock !== 0 ? "ADD TO CART" : "OUT OF STOCK"}
        </p>
        
        {
            props.stock == 0 ? <img src={outOfStockPng} alt="" /> : <img src={addToCartPng} alt="" />
        }
        
      </button>
    </>
  );
};

export default CartStockBtn;

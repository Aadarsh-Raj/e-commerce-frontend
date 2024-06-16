import React from "react";
import "./Styles/cartstockbtn.css"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TbGardenCartOff } from "react-icons/tb";
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
            props.stock == 0 ? <TbGardenCartOff />
            : <MdOutlineShoppingCartCheckout />
        }
        
      </button>
    </>
  );
};

export default CartStockBtn;

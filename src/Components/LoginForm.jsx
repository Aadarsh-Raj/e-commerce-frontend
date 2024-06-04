import React from "react";
import "./Styles/loginform.css";
import { useDispatch, useSelector } from "react-redux";
import { setBuyerSellerTag } from "../redux/counterSlice";
const LoginForm = () => {
  const buyerSellerTag = useSelector((state) => state.counter.buyerSellerTag);

  return (
    <>
      <div className="login-form-container">
        <h2>Login Here</h2>
        <form action="" className="login-form">
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter password" />
          <select
            name=""
            id=""
            value={buyerSellerTag}
            disabled
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <input type="submit" />
        </form>
      
      </div>
    </>
  );
};

export default LoginForm;

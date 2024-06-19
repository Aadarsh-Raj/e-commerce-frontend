import React from "react";
import "./Styles/loginform.css";
import { useDispatch, useSelector } from "react-redux";
import { setBuyerSellerTag } from "../redux/counterSlice";
const LoginForm = () => {
  const buyerSellerTag = useSelector((state) => state.counter.buyerSellerTag);
  const apiUrl = useSelector((state) => state.counter.apiUrl);
  const dispatch = useDispatch();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.children[0].value,
          password: e.target.children[1].value,
        }),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-form-container">
        <h2>Login Here</h2>
        <form action="" className="login-form" onSubmit={loginUser}>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter password" />
          <select name="" id="" value={buyerSellerTag} disabled>
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

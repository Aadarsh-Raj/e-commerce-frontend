import React from "react";
import BuyerSellerTag from "./BuyerSellerTag";
import "./Styles/loginpage.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { setBuyerSellerTag, setIsLoginFormActive } from "../redux/counterSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const changeTag = (tag) => {
    dispatch(setBuyerSellerTag(tag));
  };
  const buyerSellerTag = useSelector((state) => state.counter.buyerSellerTag);
  const isLoginFormActive = useSelector(
    (state) => state.counter.isLoginFormActive
  );
  const changeLoginStatus = () => {
    dispatch(setIsLoginFormActive(!isLoginFormActive));
  };
  console.log(isLoginFormActive);
  return (
    <>
      <div className="login-container">
        <div className="user-type-container">
          <div className="buyer-container" onClick={() => changeTag("Buyer")}>
            <BuyerSellerTag
              tag={"Buyer"}
              className={buyerSellerTag === "Buyer" && "active-tag"}
            />
          </div>
          <div className="seller-container" onClick={() => changeTag("Seller")}>
            <BuyerSellerTag
              tag={"Seller"}
              className={buyerSellerTag === "Seller" && "active-tag"}
            />
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-signup-switcher">
            <label class="switch">
              <input class="cb" type="checkbox" />
              <span class="toggle" onClick={changeLoginStatus}>
                <span class="left">Login</span>
                <span class="right">Sign Up</span>
              </span>
            </label>
          </div>
          {isLoginFormActive ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </>
  );
};

export default LoginPage;

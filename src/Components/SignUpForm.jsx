import React from "react";
import "./Styles/loginform.css";
import { useSelector, useDispatch} from "react-redux";
const SignUpForm = () => {
    const buyerSellerTag = useSelector((state)=> state.counter.buyerSellerTag);
  return (
    <>
      <div
        className="login-form-container signup-form-container" >
        <h2>Sign Up</h2>
        <form action="" className="login-form">
          <input type="email" placeholder="Enter your Email" required="true" />
          <input
            type="password"
            placeholder="Create password"
            required="true"
          />
          <input
            type="password"
            placeholder="Enter your password again"
            required="true"
          />
          <input type="text" value={buyerSellerTag} required="true" disabled/>
          <input
            type="text"
            placeholder="Enter your Full Name"
            required="true"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your Full Address"
            required="true"
          ></textarea>
          <input
            type="Number"
            minLength={10}
            maxLength={10}
            placeholder="Enter your Mobile Number"
            required="true"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;

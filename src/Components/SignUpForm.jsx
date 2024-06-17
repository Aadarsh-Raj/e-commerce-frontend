import React from "react";
import "./Styles/loginform.css";
import { useSelector, useDispatch } from "react-redux";
const SignUpForm = () => {
  const buyerSellerTag = useSelector((state) => state.counter.buyerSellerTag);
  const apiUrl = useSelector((state)=>state.counter.apiUrl);
  const signUpUser = async (e)=>{
    e.preventDefault();
    if(e.target.children[1].value !== e.target.children[2].value){
      console.log("Password didn't match")
      return ;
    }
    const formInputs = {
      email:e.target.children[0].value,
      password: e.target.children[1].value,
      role:buyerSellerTag.toLowerCase(),
      name: e.target.children[4].value,
      address:e.target.children[5].value,
      phoneNumber:e.target.children[6].value
    }
    try {
      const response = await fetch(`${apiUrl}/user/create`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formInputs)
      })
      const data = await response.json();
      if(!data.success){
        throw new Error(data.message)
      }
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="login-form-container signup-form-container">
        <h2>Sign Up</h2>
        <form action="" className="login-form" onSubmit={signUpUser}>
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
          <select value={buyerSellerTag} required="true" disabled>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
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

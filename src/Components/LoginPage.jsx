import React from 'react';
import BuyerSellerTag from './BuyerSellerTag';
import "./Styles/loginpage.css";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
const LoginPage = () => {
  
  return (
    <>
        <div className="login-container">
            <div className="buyer-container">
                
            <BuyerSellerTag tag={"Buyer"} />
            </div>
            <div className="seller-container">
            <BuyerSellerTag tag={"Seller"} />
            {/* <LoginForm /> */}
            <SignUpForm />
            </div>
        </div>
    
    </>
  )
}

export default LoginPage

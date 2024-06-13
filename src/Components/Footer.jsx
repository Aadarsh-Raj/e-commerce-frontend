import React from "react";
import "./Styles/footer.css";
import { MdEmail } from "react-icons/md";
import sitelogo from "./../Assets/S.png";
import SocialMediaContainer from "./SocialMediaContainer";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-first">
          <div className="footer-logo">
            <img src={sitelogo} alt="" />
          </div>
          <h1>Cloth World</h1>
          <p>A-7, xyz, India</p>
          <p>Phone: (+91) 123 456 7890 | Email: clothworld.online@gmail.com</p>
        </div>
        <div className="footer-second" style={{ display: "flex" }}>
          <div className="footer-second-1">
            <h4>NEWSLETTER SIGN UP</h4>
            <p>
              Enter your email to receive daily news and get 20% Off Coupon for
              all items.
            </p>
            <div className="input-b">
              <input
                className="input-box"
                type="email"
                placeholder="Enter your email "
              />
              <button className="send_button">
                <MdEmail />
              </button>
            </div>
            <div> <SocialMediaContainer /> </div>
          </div>
          <div className="footer-second-1">
            <h4>INFORMATIONS</h4>
            <li>My Account</li>
            <li>About Us</li>
            <li>Login</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </div>
          <div className="footer-second-1">
            <h4>QUICK SHOP</h4>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sportswear</li>
            <li>Sale</li>
          </div>
          <div className="footer-second-1">
            <h4>CUSTOMER SERVICES</h4>
            <li>Request Personal Data</li>
            <li>FAQ's</li>
            <li>Contact Us</li>
            <li>Orders and Returns</li>
            <li>Support Center</li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

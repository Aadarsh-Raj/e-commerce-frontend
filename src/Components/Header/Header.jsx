import "../Styles/Header.css";
import { GoPerson } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { FaBlogger } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { Link } from "react-router-dom";
import SocialMediaContainer from "../SocialMediaContainer";

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const handleNavItem = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <nav>
      <div className="navBar">
        <div className="navleft">
          <div className="tooltip">
            <Link to="/myprofile">
              <GoPerson size={"1.6rem"} />
              <span className="tooltiptext">Account</span>
            </Link>
          </div>
          <div className="tooltip">
            <BsCart size={"1.5rem"} />
            <span className="tooltiptext">Cart</span>
          </div>
          <div className="tooltip">
            <Link to="/mywishlist">
              <CiHeart size={"1.9rem"} />
              <span className="tooltiptext">Wishlist</span>
            </Link>
          </div>
          <div>
            <div className="container">
              <input
                type="text"
                name="text"
                className="input"
                required
                placeholder="Type to search..."
              />
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Search</title>
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <label className="hamberMenuPopup">
          <input type="checkbox" />
          <div className="burger" tabIndex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="hamberMenuPopup-window">
            {/* <legend>Actions</legend> */}
            <ul>
              <li>
                <button>
                  <Link to="/">
                    <CiHome />
                    <span>Home</span>
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <GiClothes />
                  <span>Products</span>
                </button>
              </li>

              <li>
                <button>
                  <FaBlogger />
                  <span>Blogs</span>
                </button>
              </li>
              <li>
                <button>
                  <CiCircleInfo />
                  <span>About Us</span>
                </button>
              </li>
              <hr />
              <li>
                <button>
                  <Link to="/myprofile">
                    <GoPerson />
                    <span>Account</span>
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <BsCart />
                  <span>Cart</span>
                </button>
              </li>
              <li>
                <button>
                  <CiHeart />
                  <span>Wishlist</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <div className="logo">
          <Link to="/">
            <img src="./s.png" alt="logo" />
          </Link>
        </div>

        {/* <div className="hamberMenu">
          <RxHamburgerMenu size={"1.9rem"} />
        </div> */}
        <SocialMediaContainer />
        
      </div>

      <div className="navBottom">
        <div className="navBtn">
          <div
            className={activeNavItem === "Home" ? "active" : ""}
            onClick={() => handleNavItem("Home")}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={activeNavItem === "Products" ? "active" : ""}
            onClick={() => handleNavItem("Products")}
          >
            Products
          </div>
        </div>
        <div className="navBtn">
          <div
            className={activeNavItem === "Blog" ? "active" : ""}
            onClick={() => handleNavItem("Blog")}
          >
            Blog
          </div>
          <div
            className={activeNavItem === "About Us" ? "active" : ""}
            onClick={() => handleNavItem("About Us")}
          >
            About Us
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

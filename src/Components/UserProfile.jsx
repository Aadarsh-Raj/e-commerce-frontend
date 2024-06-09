import React from "react";
import "./Styles/userprofile.css";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <>
      <div className="userprofile-container">
        <div className="user-info-container">
          Name: <br />
          Type: <br />
          Address: <br />
          UserId: <br />
          Phone Number:
        </div>
        <div className="user-order-container">
          <button>
            <Link to="/">Orders</Link>
          </button>{" "}
          <button>
            <Link to="/">Carted items</Link>
          </button>
          <button>
            <Link to="/mywishlist">whislists</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

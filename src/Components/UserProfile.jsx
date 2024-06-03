import React from "react";
import "./Styles/userprofile.css";
const UserProfile = () => {
  return (
    <>

      <div className="userprofile-container">
        <div className="user-info-container">
          Name: <br />Type: <br />Address: <br />UserId: <br />Phone Number:
        </div>
        <div className="user-order-container">
        <button>Orders</button> <button>Carted items</button><button>whislists</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

import React from "react";
import "./Styles/Header.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialMediaContainer = () => {
  return (
    <>
      <div className="socoalMedia">
        <div className="tooltip">
          <FaWhatsapp />
          <span className="tooltiptext">WhatsApp</span>
        </div>
        <div className="tooltip">
          <FaInstagram />
          <span className="tooltiptext">Instagram</span>
        </div>
        <div className="tooltip">
          <FaFacebookF />
          <span className="tooltiptext">Facebook</span>
        </div>
        <div className="tooltip">
          <Link to="https://www.linkedin.com/in/ugam-raj-seervi-85a00455/">
            <FaLinkedin />
            <span className="tooltiptext">Linkedln</span>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;

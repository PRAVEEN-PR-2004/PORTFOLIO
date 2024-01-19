import React from "react";
import "./Footer.css";
import { FaSchool, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer scroll-transition">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSchool size={20} style={{ color: "#fff", marginRight: "2rem" }} />

            <div>
              <p>SRI SHAKTHI INSTITUTE</p>
              <p>Coimbatore</p>
            </div>
          </div>
          <div className="phone">
            <h4>
             <FaPhone size={20} style={{ color: "#fff",marginRight:"2rem" }} />

                9598412160
           
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />praveen@gamil.com
            </h4>
          </div>

        </div>
        <div className="right">
          <h4>ABOUT </h4>
          <p>Enthusiastic frontend developer on a journey to conquer the realms of full-stack development. College student passionate about crafting seamless user experiences through code and design. 
          </p>
          <br></br>
          <div className="social"> {/* Corrected class name */}
          <a href="https://www.linkedin.com/in/praveen-p-r-15-09-2004-ttp/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="https://github.com/PRAVEEN-PR-2004" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="https://wa.me/919597412160"  target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;

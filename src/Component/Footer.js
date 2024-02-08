import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import './FooterStyle.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__contact-info">
            <h3>Contact Me:</h3>
            <br></br>
            <a href="mailto:contact@yourportfolio.com"><FaEnvelope style={{marginRight:"10px"}}/> contact@yourportfolio.com</a>
            <span><FaHome style={{marginRight:"10px"}} /> Your Address</span>
            <a href="tel:+123456789"><FaPhone style={{marginRight:"10px"}}/> +123456789</a>
          </div>
        </div>
        <div className="footer__right">
          <p style={{fontSize:"20px",fontWeight:"700"}}>ABOUT:</p>
          <br></br>
          <p>Your portfolio description goes here.About: Your portfolio description goes here.About: Your portfolio description goes here.About: Your portfolio description goes here.About: Your portfolio description goes here.</p>
          <div className="footer__social">
            <a href="https://github.com/yourusername"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
            <a href="https://wa.me/yourphonenumber"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import './FooterStyle.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__contact-info">
            <h3 style={{marginTop:"1.5%"}}>CONTACT ME:</h3>
            <br></br>
            <span><FaHome style={{marginRight:"10px"}} /> SIET</span>
            <a href="tel:+123456789"><FaPhone style={{marginRight:"10px"}}/> 9597412160</a>
            <a href="mailto:contact@yourportfolio.com"><FaEnvelope style={{marginRight:"10px"}}/> praveen2004ttp@gmail.com</a>
          </div>
        </div>
        <div className="footer__right">
          <p style={{fontSize:"20px",fontWeight:"700"}}>ABOUT:</p>
          
          <p>Frontend developer & freelancer passionate about crafting captivating digital experiences through innovative design and seamless functionality. Let's collaborate and turn your vision into reality. Contact me today!

</p>
          <div className="footer__social">
            <a href="https://github.com/PRAVEEN-PR-2004"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/praveen-p-r-15-09-2004-ttp/"><FaLinkedin /></a>
            <a href="https://wa.me/919597412160"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

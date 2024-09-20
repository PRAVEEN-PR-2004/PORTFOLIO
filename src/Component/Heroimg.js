import React from 'react';
import img1 from '../assets/portfolio1.jpg';
import { Link } from 'react-router-dom';
import './Heroimgstyle.css';

function Heroimg() {
    return (
      
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={img1} alt="intoimg" />
            </div>
            <div className="content">
                <p id='name'>HI, I'M PRAVEEN P R.</p>
                <h1>MERN STACK DEVELOPER</h1>
                <div>
                    <Link to="/project" className="homebtn">
                        Projects
                    </Link>
                    <Link to="/contact" className="homebtn homebtn-light">
                        Contacts
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Heroimg;

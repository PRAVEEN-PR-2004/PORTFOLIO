
import "./Heroimgstyle.css"

import React from 'react'
import img1 from '../assets/portfolio1.jpg'
import { Link } from "react-router-dom"
function Heroimg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={img1} alt="intoimg"/>
        </div>
        <div className="content">
            <p>HI, I'M PRAVEEN P R.</p>
            <h1>FRONTENT DEVELOPER</h1>
            <div>
                <Link to='/project' className="btn">Projects</Link>
                <Link to='/contact' className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
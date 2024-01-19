import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'

function AboutContent() {
  return (
    <div className='about'>
        <div className='left'> 
        <h1>Who Am I</h1>
        <p>Hey there! I'm Praveen P R, a college student diving into frontend development with a passion for creating intuitive user experiences. Eager to transition into full-stack, I'm dedicated to learning and growing my skills. I thrive on the fusion of design and coding and am excited about the possibilities in tech's ever-evolving landscape</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
        </div>
        <div className='right'>
           
        </div>
    </div>
  )
}

export default AboutContent
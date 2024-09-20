import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

function AboutContent() {
  return (
    <Slide duration={1000} triggerOnce>
    <div className='about'>
      <div className='left'>
        <h1>Who Am I</h1>
        <p>
        Hey there! I'm Praveen P R, a college student diving into MERN and Java development with a passion for creating intuitive and efficient user experiences. Eager to expand my full-stack skills, I'm dedicated to learning and growing in both frontend and backend technologies. I thrive on the blend of design, coding, and problem-solving, and I'm excited about the endless possibilities in tech's ever-evolving landscape.
        </p>
        <Link to='/contact'>
          <button className='homebtn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='imgcontent'>
          <img
            src='https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/coding-freak.gif'
            alt='Coding Animation'
            className='profile-image'
          />
        </div>
      </div>
    </div>
    </Slide>
  );
}

export default AboutContent;

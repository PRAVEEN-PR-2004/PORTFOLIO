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
          Hey there! I'm Praveen P R, a college student diving into frontend
          development with a passion for creating intuitive user experiences.
          Eager to transition into full-stack, I'm dedicated to learning and
          growing my skills. I thrive on the fusion of design and coding and am
          excited about the possibilities in tech's ever-evolving landscape.
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

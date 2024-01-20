import React from "react";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Heroimg2 from "../Component/Heroimg2";
import AboutContent from "../Component/AboutContent"
import Skill from "../Component/Skill";

const About = () => {
  return <div>
    
    <Navbar/>
    <Heroimg2  heading="ABOUT" text="Im a friendly frontend developer"/>
    <AboutContent/>
    <Skill/>
   <Footer/>
  </div>;
};

export default About;

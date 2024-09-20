import React, { useEffect } from "react";

import Navbar from '../Component/Navbar'
import Heroimg2 from "../Component/Heroimg2";
import AboutContent from "../Component/AboutContent"
import Skill from "../Component/Skill";
import Footer from "../Component/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

  return (
    <div>
      
      
      <Navbar />
      <Heroimg2 heading="ABOUT" text="I'm a friendly mern developer" />
      <AboutContent />
      <Skill />
      <Footer />
    </div>
  );
};

export default About;

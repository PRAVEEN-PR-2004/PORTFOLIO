import React,{useEffect} from "react";
import Navbar from "../Component/Navbar";

import Heroimg2 from "../Component/Heroimg2";
import WorkCart from "../Component/WorkCart";
import Footer from "../Component/Footer";



const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  return (
    <>
    
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my best projects" />
      
      <WorkCart />
      <Footer/>


    </>
  );
};

export default Project;

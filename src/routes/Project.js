import React from "react";
import Navbar from "../Component/Navbar";

import Heroimg2 from "../Component/Heroimg2";
import WorkCart from "../Component/WorkCart";
import Footer from "../Component/Footer";


const Project = () => {
  return (
    <>
      
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent projects" />
      
      <WorkCart />
      <Footer/>


    </>
  );
};

export default Project;

import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Heroimg2 from "../Component/Heroimg2";
import WorkCart from "../Component/WorkCart";
import ScrollTransition from "../Component/Scroll";

const Project = () => {
  return (
    <>
      <ScrollTransition />
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent projects" />
      
      <WorkCart />

      <Footer />
    </>
  );
};

export default Project;

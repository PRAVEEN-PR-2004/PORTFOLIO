import React,{useEffect} from "react";
import Navbar from "../Component/Navbar";
import Heroimg from "../Component/Heroimg";

import WorkCart from "../Component/WorkCart";
import Footer from "../Component/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  return (
    <div>
      <Navbar />
      <Heroimg />
      <WorkCart />
      <Footer/>
    </div>
  );
}

export default Home;

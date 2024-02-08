import React from "react";
import Navbar from "../Component/Navbar";
import Heroimg from "../Component/Heroimg";

import WorkCart from "../Component/WorkCart";
import Footer from "../Component/Footer";

function Home() {
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

import React,{ useEffect} from "react";
import Navbar from "../Component/Navbar";

import Heroimg2 from "../Component/Heroimg2";
import Form from "../Component/Form";
import Footer from "../Component/Footer";



const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
 
      <Navbar />
      <Heroimg2 heading="CONTACTS" text="Lets have a chat" />
      <Form />
      <Footer/>
      
    </div>
  );
};

export default Contact;

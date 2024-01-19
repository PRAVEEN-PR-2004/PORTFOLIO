import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Heroimg2 from "../Component/Heroimg2";
import Form from "../Component/Form";
import ScrollTransition from '../Component/Scroll'


const Contact = () => {
  return (
    <div>
 <ScrollTransition/>
      <Navbar />
      <Heroimg2 heading="CONTACTS" text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

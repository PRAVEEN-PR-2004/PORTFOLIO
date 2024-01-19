import React from "react";
import "./Form.css";
const Form = () => {
  return <div className="form">
    <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="8" placeholder="Type your message here"/>
        <button className="btn">sumbit</button>
    </form>
  </div>
};

export default Form;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4w9xzlc', 'template_ptjh5gp', form.current, {
        publicKey: 'p1H47IM9LKDnV1-ai',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Show success message
          window.alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Email Not sent successfully!');
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />6
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;

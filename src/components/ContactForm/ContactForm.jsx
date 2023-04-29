import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {StyledButton2} from "../StyledButton"
import "./ContactForm.css"

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY,
      )
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
  <div className="containerF">
  <div className="form_container">
    <h3 className="form_title">DROP ME A LINE</h3>
    <form ref={form} onSubmit={sendEmail} className="contact_form">
    <div className="form_label">
      <label />
      <input type="text" name="user_name" placeholder="name" required/>
    </div>
    <div className="form_label">
      <label />
      <input type="email" name="user_email" placeholder="email" required/>
    </div>
    <div className="form_message">
      <label />
      <textarea name="message" cols="30" rows="5" placeholder="message" required/>
    </div>
    <div className="submit">
      <StyledButton2 type="submit" value="Send" id="submit">send</StyledButton2>
      </div>
    </form>
  </div>
  </div>
    )
  }

  export default ContactForm
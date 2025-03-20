import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Services.css'

export const ContactUs = ({ loggedInEmail }) => {
  const form = useRef();
  const [formEmail, setFormEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (loggedInEmail !== formEmail) {
      alert("Please sign in to send a message");
      return;
    }

    emailjs
      .sendForm(
        "service_xnc02hi", // Replace with your Email.js service ID
        "template_i1ywaja", // Replace with your Email.js template ID
        form.current,
        "tVpkbkaQlo8YnvTHz" // Replace with your Email.js public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="message-inner" id="Contact">
    <div className="message-infor">
      <p className='font40 contact-para'>Connect With Us</p>
      <h3 className=' font contact-title'>We’re just a message away.</h3>
      <p className='font40 contact-para-center'>Making career choices can be overwhelming. Consult our experts for guidance to help you make informed decisions that align with your goals.</p>
    </div>
    <div className="form-inner">
      <p className="form-details">Get in Touch With Our Career Experts!</p>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <input type="text" name="name" required placeholder="Full Name"/>

        {/* <label>Email add</label> */}
        <input
        placeholder="Email"
          type="email"
          name="email"
          value={formEmail}
          onChange={(e) => setFormEmail(e.target.value)}
          required
        />

        {/* <label>Message</label> */}
        <textarea name="message" required style={{ resize: "none" }} placeholder="Message" />

        <input type="submit" value="Send" className="btn-submit"/>
      </form>
      {!loggedInEmail && <p>Please log in to send a message.</p>}
    </div>
    </div>
  );
};







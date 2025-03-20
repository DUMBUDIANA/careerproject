import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Form.css'

export const ContactUs = () => {
  const form = useRef();
  const [user, setUser] = useState(null); // Store the logged-in user

  // Check authentication status on component mount
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set logged-in user
      } else {
        setUser(null); // User not signed in
      }
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to send a message.");
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
          alert("Message sent successfully!"); // Show success popup
          form.current.reset(); // Clear form fields after successful submission
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send the message. Please try again."); // Show error popup
        }
      );
  };

  return (
    <div id="Contact" className="">
      <div>
      <p className='contact-para'>Connect With Us</p>
     <h3 className='contact-title'>We’re just a message away.</h3>
     <p className='contact-para-center'>Making career choices can be overwhelming. Consult our experts for guidance to help you make informed decisions that align with your goals.</p>
    </div>
      <p>Get Intouch with our experts</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea 
          name="message" 
          required
          style={{ resize: "none" }} // Disable resizing
        />
        <textarea name="message" autocomplete="off" required />

        <input type="submit" value="Send" />
      </form>
      {!user && <p>Please log in to send a message.</p>} {/* Display login reminder */}
    </div>
  );
};

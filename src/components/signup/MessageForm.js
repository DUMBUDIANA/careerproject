// src/components/MessageForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!auth.currentUser) {
    navigate("/signin");
    return null;
  }

  const handleSendMessage = () => {
    alert("Message sent to experts!");
    setMessage("");
  };

  return (
    <div>
      <h2>Send a Message to Experts</h2>
      <textarea
        placeholder="Type your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageForm;


import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
// import './ChatComponent.css'; // Optional: Your CSS file for styling

const AIchart = () => {
  const [message, setMessage] = useState(''); // User input
  const [response, setResponse] = useState(''); // API response

  const sendMessage = async () => {
    try {
      // Send the message to the Flask API
      const res = await axios.post(
        'http://localhost:5000/api/chat', // Flask API endpoint
        { message }, // Request body
        { headers: { 'Content-Type': 'application/json' } } // Ensure JSON format
      );
      setResponse(res.data.response); // Update the response state with the API response
    } catch (error) {
      console.error("Error in chat:", error); // Log any errors for debugging
    }
  };

  return (
    <div>
      {/* Input for user message */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question"
      />
      {/* Button to send the message */}
      <button onClick={sendMessage}>Send</button>
      {/* Display the API response */}
      <p>Response: {response}</p>
    </div>
  );
};

export default AIchart;

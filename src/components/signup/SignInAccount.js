
import React, { useState } from "react";
// import './SignIn.css'; // Ensure this file exists
import { auth, signInWithEmailAndPassword, googleProvider, signInWithPopup } from "../../firebase"; // Import auth and functions

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle user sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null); // Clear error before submission
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign in successful!");
    } catch (err) {
      setError(err.message); // Set error message on failure
    }
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google sign-in successful!");
    } catch (err) {
      setError(err.message); // Set error message if Google sign-in fails
    }
  };

  return (
    <div className='sign'>
      <div className='form'>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default SignIn;

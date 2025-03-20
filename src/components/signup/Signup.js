
// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import { auth, googleProvider } from "../../firebase";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import './Signup.css';
// import '../services/Services'
// import { FcGoogle } from 'react-icons/fc';

// const Signup = ({ onAuthSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       onAuthSuccess(true);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       onAuthSuccess(true);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };


//   return (
//     <div className='sign'>
//       <div className='sign-inner'>
//         {/* <p>Logo</p> */}
//         <p className="sign-para">Join us today to unlock your career potential and access valuable resources!</p>
//       </div>
//       <div className='form'>
//         <p className="para2">Welcome to SkillSet Hub</p>
//         <p className="create-account">Create your account</p>
//         <p className="already">Already have an account? <Link to="/signin" className="sign-link">Sign In</Link></p>
//         <form onSubmit={handleSignup} className='form'>
//         <label htmlFor="username" className="label">Username</label>
//           <input
//             type="text"
//             placeholder="enter your name"
//             className='input'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//        <label htmlFor="email" className="label">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             className='input'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//        <label htmlFor="password" className="label">Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             className='input'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
        
        
//         <div className="buttons">
//         <button type="submit" className='btn btn1'>Sign Up</button>
//         {error && <p className="error-message">{error}</p>}
//         <button onClick={handleGoogleSignIn} className='btn btn2'>
//     <FcGoogle /> <span className="span">Google </span>
//   </button>
//       </div>
//       </form>
//       </div>
//     </div>
//   );
// };



// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import './Signup.css';
import { Link} from 'react-router-dom';

const Signup = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email; // Get the signed-up user's email
      onAuthSuccess(userEmail); // Notify parent component about the logged-in email
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const userEmail = userCredential.user.email; // Get the signed-in user's email
      onAuthSuccess(userEmail); // Notify parent component
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='sign'>
      <div className='sign-inner'>
      {/* <p>Logo</p> */}
      <p className="sign-para">Join us today to unlock your career potential and access valuable resources!</p>
   </div>
   <div className='form-outer'>
    <p className="para2">Welcome to SkillSet Hub</p>
    <p className="create-account">Create your account</p>
     <p className="already">Already have an account? <Link to="/signin" className="sign-link">Sign In</Link></p>
  
      <form onSubmit={handleSignup} className='form'>
        <label htmlFor="username" className="label">Username</label>
        <input
          type="text"
          placeholder="enter your name"
          className='input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          placeholder="Email"
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          placeholder="Password"
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttons">
          <button type="submit" className='btn btn1'>Sign Up</button>
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleGoogleSignIn} className='btn btn2'>
            <FcGoogle /> <span className="span">Google </span>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup; // Ensure the default export is present

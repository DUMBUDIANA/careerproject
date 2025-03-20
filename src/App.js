
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './index.css';


// Components
import Nav from './components/Nav';
import Banner from './components/banner/Banner';
// import Signup from './components/signup/Signup';
import Services from './components/services/Services';
import About from './components/about/About';
import PersonalityCheck from './components/personality/PersonalityCheck';
import Posts from './components/posts/Posts';
import PostDetails from './components/posts/Postdetails';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
// import MessageForm from './components/signup/MessageForm';
import { auth } from './firebase';
import { ContactUs } from "./components/services/ContactUs";
import AIchart from "./components/banner/AIchart";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [setUser] = useState(null);
  const [user, setUser] = useState(null);

  const [loggedInEmail, setLoggedInEmail] = useState(null); // State to store email

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser); // Update authentication status
      setLoggedInEmail(currentUser ? currentUser.email : null); // Store email if logged in
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);
  // Callback function to handle authentication success
  const handleAuthSuccess = (email) => {
    setLoggedInEmail(email); // Update the loggedInEmail state
    setIsAuthenticated(true); // Set authentication status to true
  };

  // Private Route to protect components
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/signup" replace />;
  };

  return (
    <Router>
      {/* Navbar */}
      <Nav />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner id="home" />
              <Services />
              <About />
              <PersonalityCheck id="personality" />
              <Posts id="posts" />
             
              <FAQ id="faq" />
              <ContactUs loggedInEmail={loggedInEmail} />
              <Footer id="footer" />
            </>
          }
        />

        {/* Authentication Pages */}
        {/* <Route
          path="/signup"
          element={<Signup onAuthSuccess={handleAuthSuccess} />}
        /> */}

        {/* Protected Route Example */}
        {/* <Route
          path="/messages"
          element={
            <PrivateRoute>
              <MessageForm />
            </PrivateRoute>
          }
        /> */}

        {/* Dynamic Post Details */}
        <Route path="/post/:id" element={<PostDetails />} />

        {/* Contact Us with loggedInEmail */}
        <Route
          path="/contactus"
          element={<ContactUs loggedInEmail={loggedInEmail} />}
        />
           <Route path="/AIchart" element={<AIchart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

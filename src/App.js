
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import './App.css';
// import './index.css';

// // Components
// import Nav from './components/Nav';
// import Banner from './components/banner/Banner';
// import Services from './components/services/Services';
// import About from './components/about/About';
// import PersonalityCheck from './components/personality/PersonalityCheck';
// import Posts from './components/posts/Posts';
// import PostDetails from './components/posts/Postdetails';
// import FAQ from './components/faq/FAQ';
// import Footer from './components/footer/Footer';
// import { auth } from './firebase';
// import { ContactUs } from "./components/services/ContactUs";
// import AIchart from "./components/banner/AIchart";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loggedInEmail, setLoggedInEmail] = useState(null);

//   // Monitor authentication state
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setIsAuthenticated(!!currentUser);
//       setLoggedInEmail(currentUser ? currentUser.email : null);
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Banner id="home" />
//               <Services />
//               <About />
//               <PersonalityCheck id="personality" />
//               <Posts id="posts" />
//               <FAQ id="faq" />
//               <ContactUs loggedInEmail={loggedInEmail} />
//               <Footer id="footer" />
//             </>
//           }
//         />
//         <Route path="/post/:id" element={<PostDetails />} />
//         <Route path="/contactus" element={<ContactUs loggedInEmail={loggedInEmail} />} />
//         <Route path="/AIchart" element={<AIchart />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './index.css';

// Components
import Nav from './components/Nav';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import About from './components/about/About';
import PersonalityCheck from './components/personality/PersonalityCheck';
import Posts from './components/posts/Posts';
import PostDetails from './components/posts/Postdetails';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
import { auth } from './firebase';
import { ContactUs } from "./components/services/ContactUs";
import AIchart from "./components/banner/AIchart";

const App = () => {
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setLoggedInEmail(currentUser ? currentUser.email : null);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
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
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/contactus" element={<ContactUs loggedInEmail={loggedInEmail} />} />
        <Route path="/AIchart" element={<AIchart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;



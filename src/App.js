// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import UploadPage from './pages/UploadPage';
import DisplayPage from './pages/DisplayPage';
// import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route path="/signin" element={<UploadPage />} />
          <Route path="/home" element={<Home />} />

          <Route path="/signup" element={<DisplayPage />} />
        </Routes>

      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

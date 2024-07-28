// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DueDate from './components/DueDate';
import Contact from './components/Contact';
import EnquiryForm from './components/EnquiryForm';
import AboutUs from './components/AboutUs';
import AdSwitcher from './components/AdSwitcher';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
       <Header />
       <Navigation />
       <div className='container container-fluid'>
      <Routes>      
        <Route path="/" element={<AdSwitcher />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
      </div>
      <DueDate/>
      <MissionVision />
      <Footer />
      </div>
    </Router>
  );
}

export default App;

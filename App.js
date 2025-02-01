import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AllRestaurants from './components/AllRestaurants';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedRestaurants />
              <HowItWorks />
            </>
          } />
          <Route path="/restaurants" element={<AllRestaurants />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

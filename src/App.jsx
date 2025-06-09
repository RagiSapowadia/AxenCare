import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';

import AboutUs from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import OurTeam from './pages/OurTeam';



const Home = () => (
  <>
    <Hero />
    <Services />
    <Banner />
    <Subscribe />
    <Banner2 />
  </>
);


const App = () => {
  return (
   
      <div className="overflow-x-hidden bg-white text-dark">
        <Navbar />
        <div className='p-11'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam/>} />
        </Routes>
        <Footer />
      </div>
   
  );

}

export default App
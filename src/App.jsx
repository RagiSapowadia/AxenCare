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
import AxenCareCopyright from './components/Footer/CopyRight';
import TestimonialSlider from './components/Hero/Testimonials';
import PartnerSlider from './components/Services/PartnerSlider';
import CareBeyondCoverage from './components/Banner/CareBeyond';

const Home = () => (
  <main className="flex flex-col">
    <Hero />
    <PartnerSlider />
    <CareBeyondCoverage />
    <Services />
    <Banner />
    {/* <Subscribe /> */}
    <TestimonialSlider />
    <Banner2 />
  </main>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
      </div>
      <Footer />
      <AxenCareCopyright />
    </div>
  );
}

export default App
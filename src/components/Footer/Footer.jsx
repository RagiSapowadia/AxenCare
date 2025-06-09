// AxenCareFooter.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social media icons

const AxenCareFooter = () => {
  return (
    <footer className="bg-green-50 py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Section: Logo and Tagline */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex items-center mb-4">
            {/* Placeholder for AxenCare Logo - ideally you'd import an SVG or image */}
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-700">
              Axen<span className="text-green-600">Care</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            We believe that healthcare should be accessible, comprehensive, and personalized.
          </p>

          {/* Contact Information */}
          <div className="mt-8 text-gray-600 text-sm">
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 0110.04 0L17 5.95V7h2V5.95a9 9 0 00-14 0L1 5.95V7h2V5.95l2.05-1.9zm0 8a7 7 0 0110.04 0L17 13.95V15h2v-1.05a9 9 0 00-14 0L1 13.95V15h2v-1.05l2.05-1.9z" clipRule="evenodd"></path>
              </svg>
              <span>
                201-Manglam Paradise Mall, Plot no 8, Manglam Place, Sector 3, Rohini Delhi, 110085
              </span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a href="mailto:hello@axencare.in" className="hover:underline">hello@axencare.in</a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a href="tel:011-43658206" className="hover:underline">011-43658206</a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Plans</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Contact</a></li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
              <FaFacebook />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Terms and Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Refund Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200">E-Shipping & Delivery Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AxenCareFooter;
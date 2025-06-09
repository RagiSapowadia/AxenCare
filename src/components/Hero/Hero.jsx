// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const images = [
  {
    id: 1,
    url: 'https://axencare.in/wp-content/uploads/2025/05/A1.png', // Replace with your actual image path
    alt: 'Smiling woman meditating',
  },
  {
    id: 2,
    url: 'https://axencare.in/wp-content/uploads/2025/05/B1.png', // Placeholder, replace with your images
    alt: 'Happy family outdoors',
  },
  {
    id: 3,
    url: 'https://axencare.in/wp-content/uploads/2025/05/C1.png', // Placeholder, replace with your images
    alt: 'Doctor consulting patient',
  },
];

const HeroSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Optional: Auto-play slider (uncomment to enable)
  // useEffect(() => {
  //   const interval = setInterval(goToNext, 5000); // Change image every 5 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-green-600 font-sans text-white overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-sm uppercase tracking-widest text-gray-200 mb-2">
            YOUR COMPLETE HEALTH AND WELLNESS PACKAGE
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            All for your family <span className="text-green-300">Complete Wellness</span>
          </h1>
          <p className="text-base md:text-lg max-w-lg mb-8 opacity-90 mx-auto lg:mx-0">
            Access comprehensive health coverage with expert guidance, discounts, and additional wellness benefits at an affordable price.
          </p>
          <button className="flex items-center justify-center lg:justify-start text-white text-lg font-semibold py-3 px-6 rounded-full hover:underline transition-all duration-300 group mx-auto lg:mx-0">
            START EXPLORING
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* Right Content - Image Slider */}
        <div className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-10 flex items-center justify-center z-10">
          {/* Main Image - Removed rounded-xl and shadow-2xl to match `image_7f438d.jpg` which has no explicit border/shadow */}
          <img
            src={images[currentImageIndex].url}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out"
          />

          {/* Slider Navigation Arrows - Styling adjusted to match `image_7f438d.jpg` */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white z-20"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-10 w-10 text-white" /> {/* Increased size to match */}
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white z-20"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-10 w-10 text-white" /> {/* Increased size to match */}
          </button>

          {/* Slider Dots - Styled to match `image_7f438d.jpg` */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom wave-like divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform -skew-y-3 origin-bottom-left"></div>
    </section>
  );
};

export default HeroSlider;
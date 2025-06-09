// src/components/PlansSection.jsx
import React from 'react';
import HealthPlanCards from '../Subscribe/Subscribe'; // Assuming HealthPlanCards.jsx is in the same 'components' directory

const Banner = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      {/* Top Hero Section - Now using the image as a background */}
      <div
        className="relative  bg-right bg-no-repeat py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col  justify-start z-0"
        style={{ backgroundImage: `url('https://axencare.in/wp-content/uploads/2025/04/illustrated-money.png')` }} /* Replace with the actual path to your image_89a4d4.png */
      >
        {/* Dark overlay to make text pop, if needed - adjust opacity */}
        {/* <div className="absolute inset-0 bg-black opacity-10 z-10"></div> */}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left z-20">
          {/* Left Content (Text and Button) */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-12 lg:mb-0 text-white">
            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4">
              Our Plans, Your Peace of Mind
            </h1>
            <h2 className="text-green-300 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic leading-tight mb-8">
              choose what fits you best
            </h2>
            <p className="text-base md:text-lg max-w-xxl mb-8 opacity-90">
              With an array of services that range from diagnostic discounts to emergency room coverage, we are committed to providing you with the peace of mind you deserve.
            </p>
            <button className=" text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-teal-600 transition-colors duration-300 shadow-lg">
              START EXPLORING
            </button>
          </div>

          {/* Right Content (Illustration from background image) */}
          {/* Since image_89a4d4.png contains the illustration, we don't need a separate placeholder div here.
              The illustration is part of the background image itself. */}
          <div className="lg:w-1/2 h-64 md:h-80 lg:h-96 flex items-center justify-center">
            {/* The illustration is part of the background image now */}
          </div>
        </div>
      </div>

      {/* Pricing Cards Section - Positioned to sit on the wave of the background image */}
      {/* We need to measure or visually estimate the correct negative margin to align with the wave. */}
      <div className="relative z-10 -mt-20 md:-mt-36 lg:-mt-48 xl:-mt-52"> {/* Adjust these negative margins carefully */}
        <HealthPlanCards/>
      </div>
    </div>
  );
};

export default Banner;
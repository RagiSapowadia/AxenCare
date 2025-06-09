// src/components/CareBeyondCoverage.jsx
import React from 'react';

const CareBeyondCoverage = () => {
  const features = [
    'Discounts on Diagnostic Tests & Medicines',
    'Free Comprehensive Health Check-Up',
    'Eye & Dental Benefits',
    'Mental Wellness Benefits',
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Section: Text Content */}
        <div className="flex flex-col text-left">
          {/* Top faded text - Font size reduced by 2 points (e.g., text-5xl -> text-3xl, text-6xl -> text-4xl, text-7xl -> text-5xl) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl opacity-50 font-bold text-green-100 leading-tight mb-2 select-none">
            Care Beyond <br /> Coverage
          </h2>

          {/* Main headings - Font sizes reduced by 2 points */}
          <h3 className="text-xl md:text-xl font-bold text-gray-900 leading-tight mb-2 -mt-10 md:-mt-12 lg:-mt-14">
            Coverage That Covers <br /> You.
          </h3>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-600 leading-tight mb-8">
            real stories. <br /> real protection.
          </h3>

          {/* Description Paragraph - Font size reduced by 2 points */}
          <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8">
            We believe that healthcare should be accessible, comprehensive, and personalized. Our mission is to transform the healthcare experience by offering tailored insurance plans that prioritize your well-being.
          </p>

          {/* Benefits List - Font size reduced by 2 points */}
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {/* Custom arrow icon using SVG - Color matched to image */}
                <svg className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.293 8l-3.646-3.646a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 8z"/>
                  <path d="M4.293 8l-3.646-3.646a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L4.293 8z"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Image Placeholder */}
        <div className="flex justify-center items-center h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          {/* This is the empty space for your image */}
          {/* You can add an <img> tag here later, for example: */}
          {/* <img src="/path/to/your/image.jpg" alt="Smiling family" className="w-full h-full object-cover" /> */}
          <img className="text-gray-500 text-xl" src='https://axencare.in/wp-content/uploads/2025/04/kid-playing-with-paper-plane-1024x819.jpg' alt='Kid playing with paper plane'/>
        </div>

      </div>
    </section>
  );
};

export default CareBeyondCoverage;
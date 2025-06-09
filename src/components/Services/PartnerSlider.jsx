// src/components/PartnerSlider.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Icons for slider navigation

// Sample Partner Logos Data (replace image URLs with your actual logos)
const partnerLogos = [
  {
    id: 1,
    name: 'Orange HealthLabs',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=Orange+HealthLabs', // Placeholder for Orange HealthLabs
  },
  {
    id: 2,
    name: 'Redcliffe Labs',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=Redcliffe+Labs', // Placeholder for Redcliffe Labs
  },
  {
    id: 3,
    name: 'Healthians',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=Healthians', // Placeholder for Healthians
  },
  {
    id: 4,
    name: 'Skinnsi',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=Skinnsi', // Placeholder for Skinnsi
  },
  {
    id: 5,
    name: 'MediCare+',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=MediCare+', // Additional placeholder for demonstration
  },
  {
    id: 6,
    name: 'Wellness Hub',
    imageUrl: 'https://placehold.co/150x50/ffffff/000000?text=Wellness+Hub', // Additional placeholder for demonstration
  },
];

const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Starting index of the visible logos
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default for large screens, matching image

  // Function to calculate items per page based on screen width
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      setItemsPerPage(4);
    } else if (window.innerWidth >= 768) { // md breakpoint
      setItemsPerPage(3);
    } else if (window.innerWidth >= 640) { // sm breakpoint
        setItemsPerPage(2);
    } else { // xs and smaller
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage(); // Set initial items per page
    window.addEventListener('resize', updateItemsPerPage); // Listen for resize events
    return () => window.removeEventListener('resize', updateItemsPerPage); // Cleanup
  }, []);

  const totalLogos = partnerLogos.length;

  // Calculate the actual current items to display
  // This handles wrapping around for a continuous feel
  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(partnerLogos[(currentIndex + i) % totalLogos]);
    }
    return visible;
  };

  const visibleLogos = getVisibleLogos();

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLogos) % totalLogos);
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xl font-medium text-teal-600 mb-2">In Association With</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 leading-tight mb-12">
          most trusted experts
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute -left-4 sm:left-0 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
            aria-label="Previous partner"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Logos Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center w-full max-w-5xl">
            {visibleLogos.map((partner) => (
              <div
                key={partner.id}
                // Refined border and shadow to match the image more closely
                className="flex items-center justify-center bg-white rounded-lg border border-gray-200 p-4 h-24 w-full max-w-[200px] shadow-sm"
              >
                <img
                  src={partner.imageUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/150x50/cccccc/000000?text=Logo+Error`;
                    e.target.alt = `Error loading ${partner.name} logo`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute -right-4 sm:right-0 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
            aria-label="Next partner"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
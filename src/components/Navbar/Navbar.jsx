import React, { useState } from 'react';

// Header component for the application, featuring a logo, navigation, and a call-to-action button.
const Header = () => {
  // State to manage the visibility of the mobile navigation menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu's open/close state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main header container:
    // - Padded horizontally and vertically.
    // - White background with a subtle shadow at the bottom.
    // - Uses flexbox to align items.
    // - Responsive: on small screens, items might stack or align differently.
    <header className="bg-white p-4 shadow-sm font-sans relative z-10">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          {/* SVG for the AxenCare logo icon */}
          <svg
            className="w-8 h-8 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
              fill="#20B2AA" // Teal color for the main shape
            />
            <path
              d="M12 2L5 5.5V10.5L12 7V2ZM12 7L19 10.5V5.5L12 2V7Z"
              fill="#3CB371" // Green color for the top/highlight
            />
            <path
              d="M12 7L5 10.5V17.5L12 21V7ZM12 7L19 17.5V10.5L12 7Z"
              fill="#2E8B57" // Darker green for the bottom/shadow
            />
          </svg>
          {/* Logo Text - "AxenCare" with specific color variations */}
          <span className="font-bold text-2xl tracking-tight">
            <span className="text-teal-500">Axen</span>
            <span className="text-green-600">Care</span>
          </span>
        </div>

        {/* Mobile menu toggle button (hamburger icon) */}
        {/* Visible only on small screens, hidden on medium and larger. */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-400 hover:text-white hover:bg-teal-500"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links and Call-to-Action Button */}
        {/* Hidden on small screens by default, shown if menu is open.
            Always visible and aligned right on medium and larger screens. */}
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm md:flex-grow">
            {/* Navigation Links */}
            <a href="#home" className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-teal-600 mr-4 p-2 rounded-md transition duration-300">
              Home
            </a>
            <a href="#about" className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-teal-600 mr-4 p-2 rounded-md transition duration-300">
              About Us
            </a>
            {/* Plans Dropdown (simulated) */}
            <div className="relative inline-block text-left">
              <a
                href="#plans"
                className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-teal-600 mr-4 p-2 rounded-md transition duration-300"
              >
                Plans
                <svg
                  className="inline-block h-4 w-4 ml-1 -mt-1 transform rotate-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              {/* Actual dropdown content would go here, hidden by default and shown on hover/click */}
            </div>
            <a href="#contact" className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-teal-600 mr-4 p-2 rounded-md transition duration-300">
              Contact us
            </a>
          </div>
          {/* Call-to-Action Button */}
          <div>
            <button className="inline-block text-sm px-6 py-2 leading-none border rounded text-white bg-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-600 mt-4 md:mt-0 transition duration-300 shadow-md">
              Request a Call Back
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

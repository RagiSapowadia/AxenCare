import React from 'react';

// FeatureCard component for displaying an individual feature with an icon, title, and description.
// It takes 'icon', 'title', and 'description' as props.
const FeatureCard = ({ icon, title, description }) => {
  return (
    // Card container with a dashed border, rounded corners, padding, and centered text.
    // The dashed border visually mimics the image's layout.
    <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center text-center h-full">
      {/* Icon container - uses dynamic SVG for flexibility and styling */}
      <div className="text-green-500 mb-4">
        {icon}
      </div>
      {/* Feature Title */}
      <h3 className="text-lg font-semibold text-green-700 mb-2 leading-tight">
        {title}
      </h3>
      {/* Feature Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main FeatureCards component that renders a grid of FeatureCard components.
const FeatureCards = () => {
  return (
    // Container for the entire grid, with responsive padding and margin.
    // Uses a grid layout that adjusts columns based on screen size (1, 2, or 4 columns).
    <div className="p-4 sm:p-8 lg:p-12 bg-white font-sans m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Feature Card: Clear and Honest Plans */}
        <FeatureCard
          icon={
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          }
          title="Clear and Honest Plans"
          description="No hidden clauses, no jargon – just straight answers."
        />

        {/* Second Feature Card: Fast and Friendly Support */}
        <FeatureCard
          icon={
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7 0c.78 0 1.5.15 2.16.4l-2.16-2.16zM5.84 14.4l-2.16 2.16c.66-.25 1.38-.4 2.16-.4zm13.12 0c.96-.34 2.05-.53 3.16-.53v-2c-1.32 0-2.6.28-3.79.78l.63 1.75zm-16.12 0l.63-1.75c-1.19-.5-2.47-.78-3.79-.78v2c1.11 0 2.2-.19 3.16-.53z" />
            </svg>
          }
          title="Fast and Friendly Support"
          description="Real people, real help, whenever you need it."
        />

        {/* Third Feature Card: Fresh and Innovative */}
        <FeatureCard
          icon={
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.78-7 8.94V12H5V6.3l7-3.11v7.8z" />
            </svg>
          }
          title="Fresh and Innovative"
          description="A new approach to health and wellness, designed with you in mind"
        />

        {/* Fourth Feature Card: Tailored for You */}
        <FeatureCard
          icon={
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 5c-1.11-.35-2.36-.6-3.8-.75C15.82 3.51 14.07 3 12 3c-1.77 0-3.41.44-4.99 1.22-.92.47-1.74 1.07-2.45 1.83C3.65 6.88 3 7.82 3 9c0 1.45.62 2.74 1.6 3.73l-.68 1.44C2.81 14.71 2 16.32 2 18h20c0-1.68-.81-3.29-2.22-4.13l-.68-1.44c.98-.99 1.6-2.28 1.6-3.73 0-1.18-.65-2.12-1.56-2.83-.71-.76-1.53-1.36-2.45-1.83C15.41 3.44 13.77 3 12 3c-1.77 0-3.41.44-4.99 1.22zM12 5c1.45 0 2.87.3 4.16.89.7.31 1.3.73 1.8 1.2.6.54 1.04 1.2 1.28 1.91.24.71.36 1.46.36 2.22 0 .97-.33 1.84-.98 2.53-.65.69-1.52 1.15-2.44 1.29l-.68 1.44c-.75 1.57-1.16 3.29-1.16 5.01h-2c0-1.72-.41-3.44-1.16-5.01l-.68-1.44c-.92-.14-1.79-.6-2.44-1.29-.65-.69-.98-1.56-.98-2.53 0-.76.12-1.51.36-2.22.24-.71.68-1.37 1.28-1.91.5-.47 1.1-.89 1.8-1.2C9.13 5.3 10.55 5 12 5z" />
            </svg>
          }
          title="Tailored for You"
          description="Flexible plans that fit your life, not the other way around."
        />
      </div>
    </div>
  );
};

export default FeatureCards;

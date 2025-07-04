// AxenCareCopyright.jsx
import React from 'react';

const AxenCareCopyright = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className="bg-teal-600 py-4 flex items-center justify-center font-sans">
      <p className="text-white text-sm text-center">
        Copyright &copy; {currentYear} AxenCare | Powered by AxenCare
      </p>
    </div>
  );
};

export default AxenCareCopyright;
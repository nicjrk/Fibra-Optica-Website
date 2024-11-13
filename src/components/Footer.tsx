import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#003366] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} FiberTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};
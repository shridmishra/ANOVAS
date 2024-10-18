"use client";

import React from 'react';

const GradientButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="relative inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-full overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#7344EF] to-[#CD3AFA] group"
    >
      {/* This span creates the hover effect */}
      <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:bg-gradient-to-r group-hover:from-[#CD3AFA] group-hover:to-[#7344EF]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GradientButton;

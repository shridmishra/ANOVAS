"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

export const WhatsAppStickyIcon = () => {
  // Media query to detect mobile devices
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="fixed bottom-8 right-9 z-50 items-center">
      <a
        href="https://wa.me/your-phone-number" 
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center shadow-lg text-white hover:bg-green-600 transition-transform duration-300 ease-in-out bg-green-500 rounded-lg ${isMobile ? 'text-sm' : 'text-lg'}`}
        style={{ fontFamily: 'Sora, sans-serif' }} 
      >
        <FaWhatsapp className={`h-${isMobile ? '8' : '10'} w-${isMobile ? '8' : '10'} ml-2`} />
        <div className={`m-2 p-1 font-semibold ${isMobile ? 'text-base' : 'text-lg'}`}>Chat on WhatsApp</div>
      </a>
    </div>
  );
};

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
        className="rounded-full flex items-center shadow-lg bg-green-500 text-white hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-105"
        style={{ fontFamily: 'Sora, sans-serif' }} 
      >
        <FaWhatsapp className="h-10 w-10 lg:ml-2 rounded-full" />
        {!isMobile && ( 
          <div className=" m-2 p-1 text-lg font-semibold">Chat on WhatsApp</div>
        )}
      </a>
    </div>
  );
};

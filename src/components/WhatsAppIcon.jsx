"use client";

import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppStickyIcon = () => {
  return (
    <div className="fixed bottom-8 right-9 z-50"> {/* Adjusted to right-4 */}
      <a
        href="https://wa.me/your-phone-number" // Replace with your WhatsApp number or link
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
      >
        <FaWhatsapp  className="bg-green-600 h-10 w-10 rounded-full"/>
       
      </a>
    </div>
  );
};

"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const CtaButton = () => {
  return (
    <div>
        <div className="relative inline-block">
      <button className="relative flex items-center justify-start p-4 rounded-full bg-white text-black hover:text-white  hover:bg-gradient-to-r from-indigo-600 to-purple-500">
        {/* Circle with icon */}
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-red-500 rounded-full transition-transform duration-300 ease-in-out transform group-hover:translate-x-64 hover:text-black">
          <IoIosArrowForward className="text-white" />
        </div>
        <span className="ml-3 transition-transform duration-300 ease-in-out  transform group-hover:-translate-x-11">
          Connect On WhatsApp
        </span>
      </button>
    </div>
    </div>
  
  );
};
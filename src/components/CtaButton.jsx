"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const CtaButton = () => {
  return (
    <div className="flex justify-center lg:justify-start font-sora">
      <div className="relative inline-block group">
        <button className="relative flex items-center justify-start p-4 rounded-full bg-white text-black hover:text-white hover:bg-gradient-to-r from-indigo-600 to-purple-500">
          {/* Circle with icon */}
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full transition-transform duration-300 ease-in-out transform lg:group-hover:translate-x-56 group-hover:translate-x-44 hover:text-black group-hover:bg-white">
            <div className="text-white group-hover:bg-white group-hover:text-black rounded-full">
              <IoIosArrowForward className="text-white group-hover:text-black group-hover:rounded-full group-hover:m-2" />
            </div>
          </div>
          <span className="ml-2 md:ml-3 text-sm md:text-base lg:text-lg whitespace-nowrap transition-transform duration-300 ease-in-out transform group-hover:-translate-x-8 md:group-hover:-translate-x-11 font-semibold">
            Connect On WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

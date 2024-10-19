"use client";

import React from "react";
import { CtaButton } from "./CtaButton";

const ConnectCard = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="relative p-4 w-full max-w-full mx-auto transition-transform duration-300 hover:scale-105 lg:p-10"> {/* Full width for desktop */}
        {/* Inner subtle glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 opacity-10 blur-lg"></div>
        <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-center text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Need More Clarity?
          </h2>
          <p className="text-lg text-center text-gray-300 mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            We'd love to connect on a call!
          </p>
          <div className="flex justify-center">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;

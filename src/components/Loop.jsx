"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AiOutlineTeam, AiOutlineSetting, AiOutlineCustomerService, AiOutlineBulb, AiOutlineDollar, AiOutlineCheckCircle } from "react-icons/ai"; // Stylish icons

export const ServicesLoop = () => {
  const reasons = [
    { text: "Expert Team", icon: <AiOutlineTeam className="text-6xl mb-4" /> },
    { text: "Customized Solutions", icon: <AiOutlineSetting className="text-6xl mb-4" /> },
    { text: "24/7 Customer Support", icon: <AiOutlineCustomerService className="text-6xl mb-4" /> },
    { text: "Innovative Technologies", icon: <AiOutlineBulb className="text-6xl mb-4" /> },
    { text: "Affordable Pricing", icon: <AiOutlineDollar className="text-6xl mb-4" /> },
    { text: "Commitment to Customers", icon: <AiOutlineCheckCircle className="text-6xl mb-4" /> },
  ];

  const title = "Why Choose Us?";

  return (
    <div className="overflow-hidden py-8 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="text-center mb-14">
        <h1 className="text-white font-sora font-bold ">
          <TextGenerateEffect words={title} />
        </h1>
      </div>

      <div className="flex items-center justify-center space-x-6 animate-marquee text-center">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-72 h-72 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg text-white p-6 transform transition-transform duration-300 hover:scale-110"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            {reason.icon}
            <p className="text-2xl font-semibold">{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

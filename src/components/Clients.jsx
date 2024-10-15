"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/digiabhay.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/digiabhay2.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/digiabhay2.png",
  },
 
 
];

export function Clients() {
  return (
    <div className="flex flex-row items-center mr-10 justify-center mb-5 w-full ">
      <AnimatedTooltip items={people} />
    </div>
  );
}

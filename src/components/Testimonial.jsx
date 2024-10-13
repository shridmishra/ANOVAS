"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden p-6">
      {/* Section title */}
      <div className="text-left mb-12">
        <h1 className="text-black dark:text-white font-sora font-bold text-4xl">
          <TextGenerateEffect words={title} />
        </h1>
      </div>

      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const title = "What People Say";

const testimonials = [
  {
    quote:
      "The experience was transformative. It changed the way I perceive my surroundings and made me appreciate the beauty in everyday life.",
    name: "Emma Watson",
    title: "Actress & Activist",
  },
  {
    quote:
      "I never knew how much impact a single project could have on the community. Truly inspiring!",
    name: "Malala Yousafzai",
    title: "Nobel Laureate & Educator",
  },
  {
    quote:
      "This project is a testament to what collaboration can achieve. It has brought people together like never before.",
    name: "Barack Obama",
    title: "Former President of the USA",
  },
  {
    quote:
      "An incredible journey that not only enhanced my skills but also allowed me to contribute to something bigger than myself.",
    name: "Elon Musk",
    title: "CEO of SpaceX & Tesla",
  },
  {
    quote:
      "I found a new passion through this initiative. It reignited my drive to make a difference in the world.",
    name: "Oprah Winfrey",
    title: "Media Executive & Philanthropist",
  },
];

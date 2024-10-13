"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Cards() {
  const title = `Our Projects `;

  return (
    <div className=" mx-auto p-32 w-full font-sora dark:bg-black">
      {/* Section title */}
      <div className="text-left mb-12  p-4">
        <h1 className="text-white font-sora font-bold">
          <TextGenerateEffect words={title} />
        </h1>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Project 1 */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2
              className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
            >
              Project Oxygen
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Oxygen provides real-time atmospheric analysis and environmental
              impact insights to keep you informed about your surroundings.
            </p>
          </div>
          <Image
            src="/project-oxygen.png"
            width={500}
            height={500}
            alt="Oxygen project image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* Project 2 */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2
            className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            Project Phoenix
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Phoenix is a next-gen, AI-driven platform designed to resurrect
            outdated systems into high-performance, scalable solutions.
          </p>
        </WobbleCard>

        {/* Project 3 */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
        >
          <div className="max-w-sm">
            <h2
              className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
            >
              Project Titan
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Titan, the ultimate cloud infrastructure solution, enables rapid
              deployment of global applications with unmatched reliability and
              scalability.
            </p>
          </div>
          <Image
            src="/project-titan.png"
            width={500}
            height={500}
            alt="Titan project image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

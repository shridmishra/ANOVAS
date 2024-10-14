"use client";
import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Card } from "./ui/Card";

export const Projects = () =>{

  const title = "Our Projects" 
  return (
    (<div className="w-full h-full py-20 bg-black z-50">
       {/* Section title */}
       <div className="text-center">
        <h1 className="text-black dark:text-white font-sora font-bold text-4xl">
          <TextGenerateEffect words={title} />
        </h1>
      </div>
      
        <div className="lg:flex justify-center items-center p-4 font-sora ">
        <Card 
            imageUrl="/digiabhay.png"
            category="PortFolio"
            title="Digi Abhay"
            siteUrl="https://example.com"
                 />

              <Card 
            imageUrl="/rajeshwari2.png"
            category="E-commerce"
            title="Rajeshwari Textiles"
            siteUrl="https://example.com"
                 />

          <Card 
            imageUrl="/r-consultant.png"
            category="Website"
            title="R-Consultant"
            siteUrl="https://example.com"
                 />

        </div>
   
    </div>)
  );
}


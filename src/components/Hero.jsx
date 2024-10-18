"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';
import { CtaButton } from './CtaButton';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between h-screen p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 font-sora relative">
        {/* Right side: Spline 3D scene with masking */}
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
          <div className="splineContainer w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <Spline
              scene="https://prod.spline.design/mfRtGsAorXCjiXCA/scene.splinecode"
            />
          </div>
        </div>

        {/* Left side: Content */}
        <div className="text-center md:text-left md:w-1/2 text-white lg:ml-52 z-10">
        
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug max-w-xl capitalize text-gray-100 mb-6">
            Boost your start to the next level
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-md text-gray-300 leading-relaxed">
  We build websites and apps to bring your vision to life and help your business grow.
</p>

          
          <CtaButton>
            Let’s get started
          </CtaButton>
        </div>

        {/* Vignette overlay */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="vignetteCircle w-[500px] h-[500px] rounded-full bg-black opacity-50 z-0"></div>
        </div>
      </section>

      {/* CSS for vignette and masking */}
      <style jsx>{`
        .vignetteCircle {
          background: radial-gradient(circle, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 90%);
        }
        .splineContainer {
          clip-path: circle(45% at 50% 45%);
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Hero;

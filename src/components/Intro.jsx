"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { CtaButton } from "./CtaButton";
import { Clients } from "./Clients";

export function Intro() {
  const words = ["E-Commerce", "Portfolio", "Landing Page", "Course Site"];

  const [projectKey, setProjectKey] = useState(0);
  const [clientKey, setClientKey] = useState(0);
  const [showCounters, setShowCounters] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const timer = setTimeout(() => {
      setShowCounters(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectComplete = () => {
    setTimeout(() => {
      setProjectKey((prevKey) => prevKey + 1);
    }, 1500);
  };

  const handleClientComplete = () => {
    setTimeout(() => {
      setClientKey((prevKey) => prevKey + 1);
    }, 1500);
  };

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-8"
      >
        Welcome To <br />
        <Highlight className="text-black dark:text-white font-sora lg:text-7xl">
          Anovas Devs
        </Highlight>
      </motion.h1>

      <div className="mt-24 mb-24 flex flex-col items-center">
        <div className="text-5xl md:text-6xl lg:text-7xl flex flex-col md:flex-row font-sora text-gray-700 dark:text-gray-100 items-center justify-center">
          <div className="lg:mr-1 mb-4 lg:mb-0 font-semibold">We Build</div>
          <FlipWords words={words} />
        </div>
      </div>

      {/* Clients Section */}
      <div className="mt-10 lg:mt-12 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center lg:p-6 md:p-10">
          <div className="flex flex-col items-center">
            <Clients />
            {showCounters ? (
              <motion.div
                key={clientKey}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora mt-2"
              >
                <CountUp
                  start={0}
                  end={300}
                  duration={2}
                  suffix="+"
                  onComplete={handleClientComplete}
                />
              </motion.div>
            ) : (
              <div className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white font-sora mt-2">
                0+
              </div>
            )}
            <div className="text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
              Clients
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-center lg:p-6 md:p-10">
        <Clients />
          <div className="flex flex-col items-center">
            {showCounters ? (
              <motion.div
                key={projectKey}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora mt-2"
              >
                <CountUp
                  start={0}
                  end={150}
                  duration={2}
                  suffix="+"
                  onComplete={handleProjectComplete}
                />
              </motion.div>
            ) : (
              <div className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white font-sora mt-2">
                0+
              </div>
            )}
            <p className="text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
              Projects
            </p>
          </div>
        </div>

        {/* Additional Section (e.g., Services) */}
        <div className="flex flex-col items-center lg:p-6 md:p-10">
        <Clients />
          <div className="flex flex-col items-center">
            {showCounters ? (
              <motion.div
                key={projectKey} // You may want to create a separate key for this section
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora mt-2"
              >
                <CountUp
                  start={0}
                  end={50} // Example count for another section
                  duration={2}
                  suffix="+"
                />
              </motion.div>
            ) : (
              <div className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white font-sora mt-2">
                0+
              </div>
            )}
            <p className="text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
              Services
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://wa.me/yourwhatsappphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-4 mb-8 text-white font-sora font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out text-lg md:text-xl"
        >
          <CtaButton />
        </a>
      </div>
    </HeroHighlight>
  );
}

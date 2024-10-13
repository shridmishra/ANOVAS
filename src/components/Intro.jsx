"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { FaWhatsapp } from "react-icons/fa";

export function Intro() {
  const words = ["E-Commerce", "Portfolio", "Landing Page", "Course Site"];

  const [projectKey, setProjectKey] = useState(0);
  const [clientKey, setClientKey] = useState(0);
  const [revenueKey, setRevenueKey] = useState(0);
  const [showCounters, setShowCounters] = useState(false); 

  useEffect(() => {
    // Delay the start of the counters by 1.5 seconds
    const timer = setTimeout(() => {
      setShowCounters(true);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on component unmount
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

  const handleRevenueComplete = () => {
    setTimeout(() => {
      setRevenueKey((prevKey) => prevKey + 1);
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

      <div className="mt-24 mb-10 text-center text-5xl md:text-6xl lg:text-7xl font-sora text-gray-700 dark:text-gray-300">
        <strong>We Build</strong> <FlipWords words={words} /> <br />
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center p-6 md:p-10">
          {/* Counter for Projects */}
          {showCounters ? (
            <motion.div
              key={projectKey}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-6xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora"
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
            <div className="text-6xl font-bold text-gray-800 dark:text-white font-sora">
              0+
            </div>
          )}
          <p className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
            Projects
          </p>
        </div>

        <div className="flex flex-col items-center p-6 md:p-10">
          {/* Counter for Clients */}
          {showCounters ? (
            <motion.div
              key={clientKey}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-6xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora"
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
            <div className="text-6xl font-bold text-gray-800 dark:text-white font-sora">
              0+
            </div>
          )}
          <p className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
            Clients
          </p>
        </div>

        <div className="flex flex-col items-center p-6 md:p-10">
          {/* Counter for Revenue */}
          {showCounters ? (
            <motion.div
              key={revenueKey}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-6xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 font-sora"
            >
              <CountUp
                start={0}
                end={10000}
                duration={2}
                prefix="$"
                suffix="+"
                onComplete={handleRevenueComplete}
              />
            </motion.div>
          ) : (
            <div className="text-6xl font-bold text-gray-800 dark:text-white font-sora">
              $0+
            </div>
          )}
          <p className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-300 font-sora">
            Revenue
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://wa.me/yourwhatsappphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-2 mt-4 mb-8 bg-green-500 text-white font-sora font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out text-lg md:text-xl"
        >
          <FaWhatsapp className="mr-2 h-10" />
          Connect on WhatsApp
        </a>
      </div>
    </HeroHighlight>
  );
}

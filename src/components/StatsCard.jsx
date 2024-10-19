"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

// Animation variants for card container and text
const cardContainer = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { cursor: 'pointer', scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)' },
};

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.3 } },
};

// Counter component to animate numbers from 0 to the target value
const Counter = ({ value }) => {
  const motionValue = useMotionValue(0); // Initialize motion value at 0
  const [displayValue, setDisplayValue] = useState(0); // Local state for displaying value

  useEffect(() => {
    // Start the animation from 0 to the target value
    const animation = animate(motionValue, value, { duration: 2, ease: "easeOut" });

    // Update the display value based on motionValue
    const updateDisplayValue = () => {
      setDisplayValue(Math.round(motionValue.get()));
      requestAnimationFrame(updateDisplayValue);
    };

    updateDisplayValue(); // Start updating display value

    // Clean up the animation when the component unmounts
    return () => {
      animation.stop();
      cancelAnimationFrame(updateDisplayValue); // Clean up the loop
    };
  }, [motionValue, value]); // Ensure value is in dependencies

  return <span>{displayValue + '+'}</span>;
};

// Stats Card component with the animated Counter
const StatsCard = ({ value, label, bgColor, svg, withCircle, withAsterisk, withStar }) => {
  return (
    <motion.div
      className={`relative p-24 rounded-2xl shadow-xl ${bgColor} min-w-[300px] flex flex-col overflow-hidden border-2 border-black`}
      variants={cardContainer}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.10)', // Inner shadow effect
      }}
    >
      <div className="absolute inset-0 opacity-50">{svg}</div>
      {withCircle && (
        <div
          className="absolute top-[-50px] left-[-250px] w-96 h-96 
                     border-[45px] border-[#636363] opacity-20 
                     rounded-full"
          style={{ background: "transparent" }}
        />
      )}
      {withStar && (
        <svg
          className="absolute top-[-20px] left-[-250px] w-30 h-30 text-gray-50 opacity-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(180deg)" }}
          aria-hidden="true" // Add aria-hidden for decorative SVG
        >
          <path d="M12 .587l3.668 7.568 8.174 1.189-5.917 5.768 1.397 8.153L12 18.896l-7.322 3.843 1.397-8.153-5.917-5.768 8.174-1.189L12 .587z" />
        </svg>
      )}
      {withAsterisk && (
        <svg
          className="absolute top-[-20px] left-[-92px] w-80 h-80 text-gray-500 opacity-20"
          viewBox="0 0 34 34"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true" // Add aria-hidden for decorative SVG
        >
          <text x="50%" y="50%" textAnchor="middle" fontSize="48" fill="currentColor" dy=".35em">*</text>
        </svg>
      )}
      <motion.h2 className="text-6xl font-bold z-10 text-left" variants={textVariant}>
        <Counter value={value} />
      </motion.h2>
      <motion.p className="mt-2 text-[2.2rem] font-bold z-10 text-right" variants={textVariant}>
        {label}
      </motion.p>
    </motion.div>
  );
};

export default StatsCard;

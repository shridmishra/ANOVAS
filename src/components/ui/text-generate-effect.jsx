"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textSize = "text-6xl", // Default for larger screens
  mobileTextSize = "text-2xl", // Add mobile text size
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView, entry } = useInView({ triggerOnce: false, threshold: 0.1 }); // triggerOnce: false for repeated animation
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      });
    } else {
      animate("span", { opacity: 0, filter: "blur(10px)" }, { duration: 0 }); // Reset the animation on exit
    }
  }, [inView, entry?.isIntersecting]); // Trigger animation based on visibility

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={ref}> {/* This ref will observe when the element enters the viewport */}
      <div className="mt-4">
        <div
          className={cn(
            "dark:text-white text-black leading-snug tracking-wide",
            `md:${textSize}`, // Apply the larger size on medium and above
            mobileTextSize // Apply smaller size for mobile
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

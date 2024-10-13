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
  textSize = "text-6xl", // Increase the default text size
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Observe when the element is in view
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
    }
  }, [inView]);

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
            textSize // Dynamically apply the text size class
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

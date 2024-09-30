"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkSlider from "./WhatWeDoSlider";

// Define the type for fadeIn function's parameters
type FadeInDirection = "up" | "down" | "left" | "right";

const fadeIn = (direction: FadeInDirection = "up", delay: number = 0.3) => {
  let x = 0, y = 0;
  
  // Adjust movement based on direction
  if (direction === "up") y = 30;
  if (direction === "down") y = -30;
  if (direction === "left") x = 30;
  if (direction === "right") x = -30;
  
  return {
    hidden: {
      opacity: 0,
      x, // x-axis movement for entering
      y, // y-axis movement for entering
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7, // Adjust duration for smoothness
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -30 : direction === "left" ? 30 : 0, // Reverse for x-axis
      y: direction === "up" ? -30 : direction === "down" ? 30 : 0, // Reverse for y-axis
      transition: {
        duration: 0.7, // Adjust duration for smoothness
      },
    },
  };
};

// Define the component with React.FC type annotation
const WhatWeDo: React.FC = () => {
  return (
    <div className="h-screen flex items-center px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 items-center h-full">
          
          {/* Service Slider Section - Cards come from the top */}
          <motion.div
            variants={fadeIn("up", 0.7)} // Cards slide in from the top, exit going back up
            initial="hidden"
            whileInView="show" // Trigger animation when in view
            viewport={{ once: false }} // Repeat animation on scroll
            exit="exit" // Exit triggers the reverse animation
            className="w-full xl:max-w-[65%] md:mt-12 lg:mt-16 h-full flex items-center"
          >
            <WorkSlider />
          </motion.div>

          {/* Text Section */}
          <div className="flex flex-col text-center xl:w-[30vw] lg:text-left mb-12 md:mb-16">
            
            {/* Title "What We Do" coming from the right */}
            <motion.h2
              variants={fadeIn("right", 0.3)} // Title slides in from the right, exits to the right
              initial="hidden"
              whileInView="show" // Trigger animation when in view
              viewport={{ once: false }} // Repeat animation on scroll
              exit="exit" // Exit triggers the reverse animation
              className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var"
            >
              What <span className="text-purple-500">We Do</span>
            </motion.h2>

            {/* Description text coming from the bottom */}
            <motion.p
              variants={fadeIn("down", 0.5)} // Paragraph comes from the bottom, exits going back down
              initial="hidden"
              whileInView="show" // Trigger animation when in view
              viewport={{ once: false }} // Repeat animation on scroll
              exit="exit" // Exit triggers the reverse animation
              className="text-sm md:text-base mb-4 max-w-[400px] mx-auto mt-6 lg:mt-10 lg:mx-0 text-neutral-400"
            >
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions tailored to your business. We&apos;re committed to turning your digital ideas into reality with cutting-edge technology and expert services.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

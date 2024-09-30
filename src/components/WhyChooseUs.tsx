'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WhyChooseUsSlider from '../components/WhyChooseUsSlider';

// Fade-in animation function with reverse logic
const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0, // Horizontal movement
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0, // Vertical movement
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7, // Adjust the duration for smoothness
        delay: delay,
      },
    },
  };
};

// Main Index component
const WhyChooseUs: React.FC = () => {
  const ref = useRef(null); // Reference for in-view tracking
  const isInView = useInView(ref, { once: false }); // Trigger the animation when in view

  return (
    <div className="h-screen flex items-center justify-center py-16 lg:py-36 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center h-full">
          
          {/* Text Section */}
          <div className="flex text-center xl:w-[30vw] flex-col lg:text-left mb-12 lg:mb-0">
            <motion.h2
              variants={fadeIn("left", 0.3)} // Animate heading from the left
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'} // Animate on scroll
              exit="hidden"
              className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var"
            >
              Why Choose <span className="text-purple-500">Us</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("down", 0.5)} // Animate paragraph from the bottom
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'} // Animate on scroll
              exit="hidden"
              className="text-sm md:text-base text-neutral-400 mb-4 max-w-[400px] mx-auto mt-10 lg:mx-0"
            >
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We&apos;re committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </motion.p>
          </div>

          {/* Service Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.7)} // Animate slider from the top
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'} // Animate on scroll
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WhyChooseUsSlider/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

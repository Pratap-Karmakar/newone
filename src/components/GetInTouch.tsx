"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";
import { BsArrowRight } from "react-icons/bs";

// Fade-in animation function
const fadeIn = (direction: "up" | "down" = "up", delay: number = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : -30, // Vertical motion based on direction
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
  };
};

export function GetInTouch() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false }); // Check if the component is in view

  return (
    <div
      ref={ref}
      className="h-screen bg-emerald-50 text-black pt-24 md:pt-32 lg:pt-36 pb-10 px-4 relative overflow-hidden flex items-center justify-center"
    >
      <WavyBackground className="w-full mx-auto">
        {/* Animated heading */}
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Control animation based on visibility
          className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center"
        >
          Get In <span className="text-purple-600">Touch</span>
        </motion.p>

        {/* Animated subheading */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Control animation based on visibility
          className="text-base md:text-lg mt-4 font-bold px-20 py-8 inter-var text-center"
        >
          Ready to take your digital presence to the next level? Contact us today to discuss your project and discover how NAIYO24 PRIVATE LIMITED can help you achieve your digital goals.
        </motion.p>

        {/* Animated form */}
        <motion.form
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Control animation based on visibility
          className="flex flex-col gap-6 w-full pt-10 mx-auto max-w-2xl"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <motion.input
              type="text"
              placeholder="Name"
              className="input w-full md:w-1/2 p-4 border border-purple-400 bg-[#FFEB55] text-black rounded-md focus:ring-2 focus:ring-purple-400"
              variants={fadeIn("up", 0.6)} // Shuffle effect
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="input w-full md:w-1/2 p-4 border border-purple-400 bg-[#FFEB55] text-black rounded-md focus:ring-2 focus:ring-purple-400"
              variants={fadeIn("up", 0.6)} // Shuffle effect
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />
          </div>

          <motion.input
            type="text"
            placeholder="Subject"
            className="input w-full p-4 border bg-[#FFEB55] text-black border-purple-400 rounded-md focus:ring-2 focus:ring-purple-400"
            variants={fadeIn("up", 0.6)} // Shuffle effect
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          />

          <motion.textarea
            placeholder="Message"
            className="textarea w-full p-4 border bg-[#FFEB55] text-black border-purple-400 rounded-md h-32 resize-none focus:ring-2 focus:ring-purple-400"
            variants={fadeIn("up", 0.6)} // Shuffle effect
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          ></motion.textarea>

          {/* Animated Button */}
          <motion.button
            variants={fadeIn("down", 0.8)} // Change direction for the button
            initial="hidden"
            animate={inView ? "show" : "hidden"} // Control animation based on visibility
            className="bg-purple-600 rounded-full py-3 px-8 max-w-[170px] mx-auto hover:shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center relative group"
          >
            <span className="transition-all duration-500">Let&apos;s Talk</span>
            <BsArrowRight className="absolute right-5 text-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.form>
      </WavyBackground>
    </div>
  );
}

"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "./variants"; // Import your fadeIn variant

export function BackgroundLinesDemo() {
  // Using useInView from 'react-intersection-observer'
  const { ref, inView } = useInView({
    threshold: 0.1, // Animation will trigger when 10% of the element is in view
    triggerOnce: false, // Re-triggers every time the component enters the view
  });

  return (
    <BackgroundLines className="h-screen flex bg-emerald-50 text-black items-center justify-center w-full flex-col md:flex-row px-14">
      {/* Text coming from top */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate based on visibility
        variants={fadeIn({ direction: "up" })} // Enhanced fadeIn with 'up' direction
        className="md:w-1/2 flex flex-col items-start md:pr-8"
      >
        <h2 className="bg-clip-text text-left bg-gradient-to-b text-black text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Welcome to <br /> <span className="text-purple-600">NAIYO24 PRIVATE LIMITED</span>
        </h2>
      </motion.div>

      <div className="md:w-1/2 flex flex-col items-start">
        {/* Text coming from left */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeIn({ direction: "left", delay: 0.2 })} // Enhanced fadeIn with 'left' direction and delay
        >
          <h2 className="bg-clip-text text-transparent text-left text-gray-800 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight bg-[#FFEB55]">
            Innovating Your Digital Presence
          </h2>
        </motion.div>

        {/* Text coming from right */}
        <motion.p
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeIn({ direction: "right", delay: 0.4 })} // Enhanced fadeIn with 'right' direction and longer delay
          className="w-[80vw] mx-auto md:w-full text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-left"
        >
          At NAIYO24 PRIVATE LIMITED, we’re committed to transforming your
          digital dreams into reality. As a leading provider of online
          application and website development services, our mission is to
          deliver cutting-edge solutions that propel your business forward in
          the digital world.
        </motion.p>
      </div>
    </BackgroundLines>
  );
}

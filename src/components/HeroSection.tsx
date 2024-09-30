"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      {/* Spotlight elements */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-24 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Content */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Subtitle */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            className="uppercase tracking-widest text-xs text-center text-blue-100  max-w-80"
          >
            <span className="font-bold text-purple-400">Naiyo24</span>,
            Innovating Tomorrow, Today.
          </motion.div>

          {/* Main Text */}
          <TextGenerateEffect
            className="text-center text-[32px] md:text-4xl lg:text-5xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          {/* Subtext */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-neutral-200"
          >
            Building the Future, One Line of Code at a Time.
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: +10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact">
              <MagicButton
                title="Let's Talk"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

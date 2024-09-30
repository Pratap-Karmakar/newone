'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from './variants'; // Ensure correct path
import TeamDataSlider from './TeamDataSlider';

const TeamData: React.FC = () => {
    const ref = useRef(null); // Create ref to monitor when the component is in view
    const isInView = useInView(ref, { once: false }); // Tracks visibility

    return (
        <div className='h-screen text-center bg-emerald-50 text-black' ref={ref}>
            <div className='container mx-auto h-full flex flex-col justify-center items-center'>
                
                {/* Text */}
                <motion.h2
                    variants={fadeIn({ direction: 'right', delay: 0.2 })} // "Meet Our" from the right
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                    exit="hidden"
                    className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center pb-10"
                >
                    <span className="text-gray-800">Meet Our </span>

                    {/* "Team" comes from the left */}
                    <motion.span
                        variants={fadeIn({ direction: 'left', delay: 0.3 })} // "Team" from the left
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                        exit="hidden"
                        className="text-purple-600"
                    >
                        Team
                    </motion.span>
                </motion.h2>

                {/* Slider */}
                <motion.div
                    variants={fadeIn({ direction: 'up', delay: 0.4 })} // Slider comes from the top
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                    exit="hidden"
                    className="w-full"
                >
                    <TeamDataSlider />
                </motion.div>
            </div>
        </div>
    );
};

export default TeamData;

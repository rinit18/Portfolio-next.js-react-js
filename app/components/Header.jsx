// Import global styles, assets, and necessary libraries
import '@/app/globals.css'; // Global CSS for styling
import { assets } from '@/assets/assets'; // Import asset paths
import Image from 'next/image'; // Optimized Image component for better performance in Next.js
import React from 'react'; // React library
import { motion } from "motion/react"
import { spring } from 'motion';

// Header Component
const Header = () => {
  return (
    // Main container for the header section
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4">
      {/* Profile Image */}
      <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type:spring, stiffness: 100, damping: 20 }}
      >
        <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32" />
      </motion.div>

      {/* Greeting and Name */}
      <motion.h3 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        {/* Text with a typewriter effect */}
        <span className="typewriter-text">Hi! I'm Rinit Bhowmick</span>
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6 hand-icon" />
      </motion.h3>

      {/* Title/Role */}
      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-3xl md:text-6xl lg:text-[66px] font-Ovo">
        Fullstack web developer based in Kolkata
      </motion.h1>

      {/* Introduction Text */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="max-w-2xl mx-auto font-Ovo">
        I'm a fullstack web developer based in Kolkata, India. I love to build web applications and
        websites that are fast, responsive, and accessible.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="Right Arrow Icon" className="w-4" />
        </motion.a>

        {/* Resume Download Button */}
        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header; // Export the Header component

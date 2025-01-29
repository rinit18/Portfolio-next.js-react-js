import { assets, serviceData } from '@/assets/assets'; // Import assets and service data
import React from 'react'; // Import React
import Image from 'next/image'; // Import Next.js optimized Image component
import { motion } from "motion/react"; // Import Framer Motion

// Services Component
const Services = () => {
  return (
    // Main container for the Services section
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1 }}
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">What I offer</motion.h4>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">My services</motion.h2>

      {/* Introductory Text */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'm a fullstack web developer based in Kolkata, India. I specialize in building fast, responsive, and accessible web applications 
        and websites. I enjoy creating solutions that help people and businesses thrive online.
      </motion.p>

      {/* Services Grid */}
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.6, delay: 0.9 }}
      
      className="grid grid-cols-auto gap-6 my-10">
        {/* Map through serviceData to display each service */}
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{ scale: 1.05 }}
            key={index} // Unique key for each service item
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            {/* Service Icon */}
            <Image src={icon} alt={title} className="w-10" />

            {/* Service Title */}
            <h3 className="text-lg my-4 text-gray-700">
              {title}
            </h3>

            {/* Service Description */}
            <p className="text-sm text-gray-600 leading-5">
              {description}
            </p>

            {/* Link to Read More */}
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image alt="Arrow" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services; // Export the Services component

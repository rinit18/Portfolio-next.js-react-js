import { assets, infoList, toolsData } from '@/assets/assets'; // Import assets, information list, and tools data
import React from 'react'; // Import React
import Image from 'next/image'; // Import Next.js optimized Image component
import { motion } from "motion/react"

// About Component
const About = () => {
  return (
    // Main container for the About section
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20 bg-purple-50 min-h-screen"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1 }}
    >
      {/* Section Heading */}
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      {/* Section Title */}
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>

      {/* About Content */}
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* User Image */}
        <motion.div 
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* About Text and Info */}
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex-1">
          {/* About Description */}
          <p className="mb-10 max-w-2xl font-Ovo">
            As a fresher full-stack developer, you are enthusiastic about learning and growing in the field of web development. 
            You possess foundational knowledge of both front-end and back-end technologies, including HTML, CSS, JavaScript, React, 
            and various back-end frameworks like Node.js or SpringBoot. My passion for creating dynamic and interactive user interfaces 
            is matched by an eagerness to solve complex problems on the server side. With a commitment to continuous learning and adapting 
            to the ever-evolving tech landscape, I aim to contribute to building innovative, scalable, and high-performance web applications. 
            My goal is to bridge the gap between the user experience and functionality by leveraging your skills in both front-end and back-end development.
          </p>

          {/* Info List */}
          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {/* Map through infoList to display each item */}
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
              whileHover={{scale: 1.05}}
                key={index} // Unique key for each info item
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                {/* Icon */}
                <Image src={icon} alt={title || "Image"} className="w-7 mt-3" />
                {/* Title */}
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                {/* Description */}
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="my-6 text-gray-700 font-Ovo">Tools I used</motion.h4>

          {/* Tools Grid */}
          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1.5, delay: 0.6 }}className="flex items-center gap-3 sm:gap-5">
            {/* Map through toolsData to display each tool */}
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale: 1.1}}
                key={index} // Unique key for each tool
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About; // Export the About component

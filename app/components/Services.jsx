import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { SERVICES } from '@/config';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute -bottom-10 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-purple-400 tracking-widest uppercase text-sm font-Ovo"
      >What I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent"
      >My Services</motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-slate-400"
      >
        Backend-focused developer based in Kolkata, India — building scalable microservices,
        event-driven systems, and high-performance APIs that power production applications.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-5 my-10"
      >
        {SERVICES.map(({ emoji, title, description, gradient }, index) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.25 }}
            key={index}
            className={`border rounded-2xl px-8 py-10 cursor-pointer duration-500 
              bg-gradient-to-br ${gradient} backdrop-blur-sm glass`}
          >
            <div className="text-3xl mb-4">{emoji}</div>
            <h3 className="text-lg font-semibold my-3 text-slate-200">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            <a
              href="#contact"
              className="flex items-center gap-2 text-sm mt-5 text-purple-400 font-medium hover:gap-3 transition-all duration-300"
            >
              Learn more
              <Image alt="Arrow" src={assets.right_arrow} className="w-4 opacity-70" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

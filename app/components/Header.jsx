import { assets } from '@/assets/assets';
import '@/app/globals.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react"
import { spring } from 'motion';
import { PERSONAL, LINKS, HERO_BADGES, ROLES, STATUS } from '@/config';

const Header = () => {
  // Role cycling state
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4 relative">

      {/* Floating purple glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
        bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent
        rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 -left-20 w-64 h-64
        bg-indigo-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 -right-20 w-48 h-48
        bg-purple-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Profile Image with Open to Work badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: spring, stiffness: 100, damping: 20 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 blur-lg opacity-50 scale-110" />
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32 relative z-10 ring-2 ring-purple-400/50 ring-offset-2 ring-offset-transparent"
        />
        {/* Open to Work badge */}
        {STATUS.available && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20
            flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-emerald-300 whitespace-nowrap">
              {STATUS.label}
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo text-slate-200"
      >
        <span className="typewriter-text">{PERSONAL.greeting}</span>
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6 hand-icon" />
      </motion.h3>

      {/* Role cycling animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={roleIndex}
            initial={{ y: 40, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl lg:text-[60px] font-Ovo bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent"
          >
            {ROLES[roleIndex]}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-slate-400 -mt-1"
      >
        {PERSONAL.tagline}
      </motion.p>

      {/* Tech badge row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto"
      >
        {HERO_BADGES.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-white/5 border border-purple-500/30
            rounded-full text-purple-300 backdrop-blur-sm hover:bg-purple-500/10
            hover:border-purple-400/60 transition-all duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-purple-500/40 rounded-full
          bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center gap-2
          hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg hover:shadow-purple-900/50
          hover:scale-105 transition-all duration-300"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={LINKS.resume}
          download
          className="px-10 py-3 border border-slate-600/60 rounded-full flex items-center gap-2
          text-slate-300 hover:bg-white/5 hover:border-purple-400/50
          hover:text-purple-300 transition-all duration-300"
        >
          My resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-1 group">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              className="text-slate-500 group-hover:text-purple-400 transition-colors"
              stroke="currentColor" strokeWidth="2"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;

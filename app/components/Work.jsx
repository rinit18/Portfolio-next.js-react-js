import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react"
import { PROJECTS, LINKS } from '@/config';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20 relative"
    >
      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-purple-400 tracking-widest uppercase text-sm font-Ovo"
      >My portfolio</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent"
      >My Latest Work</motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-slate-400"
      >
        A showcase of backend systems, microservice platforms, and event-driven architectures
        built with production-grade technologies.
      </motion.p>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl
            relative cursor-pointer group overflow-hidden shadow-lg shadow-black/40"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Tech tag badges (always visible at top) */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {project.tags && project.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="text-[10px] px-2 py-0.5 bg-black/70 border border-purple-500/40 rounded-full text-purple-300 font-semibold backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project info card */}
            <Link
              href={project.details ? `/project/${project.slug}` : (project.github || LINKS.github)}
              className="w-10/12 rounded-xl absolute bottom-5 left-1/2
              -translate-x-1/2 py-3 px-5 flex items-center justify-between
              duration-500 group-hover:bottom-7 glass border-white/10 shadow-xl
              hover:bg-white/10 transition-colors"
            >
              <div>
                <h2 className="font-semibold text-white group-hover:text-purple-300 transition-colors">{project.title}</h2>
                <p className="text-xs text-purple-400 font-medium mt-0.5">{project.description}</p>
                {project.highlight && (
                  <p className="text-[10px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ✦ {project.highlight}
                  </p>
                )}
              </div>
              <div
                className="border border-white/20 rounded-full w-9 aspect-square flex items-center justify-center
                group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300"
              >
                <Image src={assets.send_icon} alt="View" className="w-5 brightness-200" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2
        text-purple-300 border border-purple-700/50 rounded-full py-3 px-10 mx-auto my-20
        hover:bg-purple-800/20 hover:border-purple-500 duration-500 font-Ovo glass"
      >
        View on GitHub
        <Image src={assets.right_arrow_bold} alt="Arrow" className="w-4 opacity-70" />
      </motion.a>
    </motion.div>
  );
};

export default Work;

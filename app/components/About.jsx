import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"
import { PERSONAL, INFO_CARD_DATA, TECH_STACK, STATS } from '@/config';

const toolsData = [assets.vscode, assets.intellij, assets.mongodb, assets.eclipse, assets.git];
const infoIcons = [
  { icon: assets.code_icon },
  { icon: assets.edu_icon },
  { icon: assets.project_icon },
];

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20 min-h-screen relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Glow blob */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-purple-400 tracking-widest uppercase text-sm font-Ovo"
      >Introduction</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent"
      >About Me</motion.h2>

      {/* ── Stat Counters ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center justify-center gap-6 sm:gap-10 mt-8 mb-4"
      >
        {STATS.map(({ value, label }, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
              {value}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-16"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 blur-xl opacity-30 scale-105" />
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl relative z-10 shadow-2xl shadow-purple-900/40" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-6 max-w-2xl font-Ovo text-slate-400 leading-relaxed text-[15px]">
            I am a <span className="text-purple-300 font-semibold">backend-focused developer</span> with a strong interest in building scalable and reliable web systems. My primary stack includes{' '}
            <span className="text-slate-200 font-semibold">Java 17, Spring Boot, Kafka, and PostgreSQL</span>, with experience designing microservices and event-driven architectures.
          </p>
          <p className="mb-10 max-w-2xl font-Ovo text-slate-400 leading-relaxed text-[15px]">
            I specialize in API design, distributed communication, caching, and system performance optimization — using technologies like{' '}
            <span className="text-slate-200 font-semibold">gRPC, Redis, Docker</span>, and observability tools such as{' '}
            <span className="text-slate-200 font-semibold">Prometheus and Grafana</span>.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {INFO_CARD_DATA.map(({ title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.04, y: -4 }}
                key={index}
                className="glass rounded-2xl p-5 cursor-default hover:border-purple-500/30 transition-all duration-500"
              >
                <Image src={infoIcons[index].icon} alt={title} className="w-7 mt-3 opacity-80" />
                <h3 className="my-3 font-semibold text-slate-200 text-sm">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10"
          >
            <h4 className="mb-4 text-slate-300 font-Ovo font-semibold">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 max-w-2xl">
              {TECH_STACK.map(({ name, color }, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default transition-all duration-300"
                  style={{
                    borderColor: color + '55',
                    color: color,
                    backgroundColor: color + '15',
                  }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="mt-10 mb-4 text-slate-300 font-Ovo font-semibold"
          >Tools I Use</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, y: -4 }}
                key={index}
                className="glass flex items-center justify-center w-12 sm:w-14 aspect-square
                rounded-xl cursor-pointer hover:border-purple-500/40 duration-500"
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

export default About;

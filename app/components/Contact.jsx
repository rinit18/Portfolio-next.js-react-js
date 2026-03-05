import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { PERSONAL, LINKS } from '@/config';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", LINKS.web3formsKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully! ✓");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-6 md:px-[12%] py-16 overflow-hidden relative"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-violet-700/15 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-purple-400 tracking-widest uppercase text-sm font-Ovo"
      >{PERSONAL.contactSubtitle}</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent"
      >{PERSONAL.contactTitle}</motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-slate-400"
      >{PERSONAL.contactMessage}</motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl w-full mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Your name"
            required
            className="w-full p-3 outline-none rounded-lg glass border-white/10 bg-white/5
            text-slate-200 placeholder-slate-500 focus:border-purple-500/50 transition-colors duration-300"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Your email"
            required
            className="w-full p-3 outline-none rounded-lg glass border-white/10 bg-white/5
            text-slate-200 placeholder-slate-500 focus:border-purple-500/50 transition-colors duration-300"
            name="email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Your message..."
          required
          className="w-full p-3 outline-none rounded-lg glass border-white/10 bg-white/5
          text-slate-200 placeholder-slate-500 mb-6 focus:border-purple-500/50 transition-colors duration-300"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="flex items-center justify-center gap-2 px-10 py-3
          bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full w-auto mx-auto
          hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg hover:shadow-purple-900/50
          duration-300 font-Ovo border border-purple-500/30"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="Arrow icon" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center text-sm text-purple-400">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;

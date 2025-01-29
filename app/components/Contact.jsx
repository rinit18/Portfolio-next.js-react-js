import { assets } from '@/assets/assets'; // Import assets for images
import React, { useState } from 'react'; // Import React and useState hook
import Image from 'next/image'; // Import Next.js optimized Image component
import { motion } from "motion/react"; // Import Framer Motion

// Contact Component
const Contact = () => {
  // State to store the result message after form submission
  const [result, setResult] = useState("");

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending...."); // Display a temporary message while the form is being submitted

    const formData = new FormData(event.target); // Capture form data
    formData.append("access_key", "e82078ef-6a04-4fa3-86fa-e8435210a780"); // Add the access key for Web3Forms API

    // Make a POST request to the Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json(); // Parse the response data

    if (data.success) {
      // If the form is successfully submitted
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset the form fields
    } else {
      // Handle any errors returned by the API
      console.log("Error", data);
      setResult(data.message); // Display the error message
    }
  };

  return (
    // Main container for the Contact section
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Heading */}
      <motion.h4 
       initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">Get in touch</motion.h2>

      {/* Introductory Text */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you. Whether you have a question about my work,
        want to collaborate on a project, or just want to say hi, feel free to send me a message.
      </motion.p>

      {/* Contact Form */}
      <motion.form 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.5, delay: 0.9 }}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Input Fields */}
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          {/* Name Input */}
          <motion.input
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
          />
          {/* Email Input */}
          <motion.input
          initial={{x: 50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>

        {/* Message Textarea */}
        <motion.textarea
         initial={{y: 100, opacity: 0}}
         whileInView={{x: 0, opacity: 1}}
         transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
          type="submit"
          className="flex items-center gap-2 px-8 py-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-Ovo"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="Arrow icon" className="w-4" />
        </motion.button>

        {/* Result Message */}
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact; // Export the Contact component

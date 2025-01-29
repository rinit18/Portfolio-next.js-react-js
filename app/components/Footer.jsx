import { assets } from '@/assets/assets'; // Import assets for images
import React from 'react'; // Import React
import Image from 'next/image'; // Import Next.js optimized Image component

// Footer Component
const Footer = () => {
  return (
    // Footer container with margin, background color, and padding
    <div className="mt-10 bg-gray-600 text-white py-4">
      
      {/* Center-aligned content */}
      <div className="text-center">

        {/* Logo image */}
        <Image 
          src={assets.logo} 
          alt="Company logo" 
          className="w-36 mx-auto mb-4" 
        />

        {/* Email section with icon and text */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image 
            src={assets.mail_icon} 
            alt="Mail icon" 
            className="w-6" 
          />
          <span>rbbsl13@gmail.com</span>
        </div>

        {/* Social media links */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Facebook link */}
          <a 
            href="https://www.facebook.com/robbert.corupt.1/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition duration-300"
          >
            <Image 
              src={assets.facebook} 
              alt="Facebook" 
              className="w-6" 
            />
          </a>

          {/* Instagram link */}
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition duration-300"
          >
            <Image 
              src={assets.instagram} 
              alt="Instagram" 
              className="w-6" 
            />
          </a>

          {/* LinkedIn link */}
          <a 
            href="www.linkedin.com/in/rinit-bhowmick"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-700 transition duration-300"
          >
            <Image 
              src={assets.linkedln} 
              alt="LinkedIn" 
              className="w-6" 
            />
          </a>
        </div>

        {/* Footer copyright text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Rinit Bhowmick. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer; // Export the Footer component


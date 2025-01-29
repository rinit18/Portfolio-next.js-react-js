// Import necessary modules and assets
import { assets } from '@/assets/assets'; // Import asset paths
import Image from 'next/image'; // Optimized Image component from Next.js
import React, { useEffect, useRef, useState } from 'react'; // React and its hooks

const Navbar = () => {
  // State to track whether the page is scrolled
  const [isScroll, setIsScroll] = useState(false);

  // Reference for the side menu (mobile menu)
  const sideMenuRef = useRef();

  // Function to open the side menu
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  // Function to close the side menu
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  // Effect to toggle `isScroll` state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50); // Set true if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Background for the navbar */}
      <div className="fixed top-0 right-0 w-full  -z-10 translate-y-[-90%] rounded-b-2xl overflow-hidden">
        <Image src={assets.header_bg_color} alt="Header Background" className="w-auto h-auto" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-5 xl:px-8  py-4 flex 
        justify-between items-center z-50  ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm text-gray' : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full border border-black px-12 py-3 bg-gray-100
          ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'}`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right section with theme toggle and buttons */}
        <div className="flex items-center gap-4">
        

          {/* Contact button for desktop */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 bg-gray 
          text-black rounded-full border border-black hover:bg-gray-100 hover:text-black-300 ml-4 font-Ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>

          {/* Menu button for mobile */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 
          h-screen bg-rose-50 transition duration-500"
        >
          {/* Close button for side menu */}
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close Icon" className="w-5 cursor-pointer" />
          </div>

          {/* Mobile menu links */}
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

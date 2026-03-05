import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '@/config';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-5 xl:px-8 py-4 flex
        justify-between items-center z-50 transition-all duration-500 ${isScroll
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo_dark} alt="Logo" className="w-28 cursor-pointer mr-14 opacity-90" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full
          border border-white/10 px-12 py-3 bg-white/5 backdrop-blur-sm">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                className="font-Ovo text-slate-300 hover:text-purple-300 transition-colors duration-300 text-sm"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Contact CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-8 py-2
            text-white bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full
            hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg hover:shadow-purple-900/40
            hover:scale-105 ml-4 font-Ovo text-sm transition-all duration-300 border border-purple-500/30"
          >
            Contact
            <Image src={assets.arrow_icon_dark} alt="Arrow" className="w-3 brightness-200" />
          </a>

          {/* Mobile menu toggle */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_white} alt="Menu" className="w-6 opacity-80" />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
          h-screen bg-black/90 backdrop-blur-xl border-l border-white/5 transition duration-500"
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_white} alt="Close" className="w-5 cursor-pointer opacity-70" />
          </div>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                className="font-Ovo text-slate-300 hover:text-purple-300 transition-colors duration-300"
                onClick={closeMenu}
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

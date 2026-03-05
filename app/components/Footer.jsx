import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { LINKS } from '@/config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-10 py-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle footer glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* Logo */}
        <Image
          src={assets.logo_dark}
          alt="Logo"
          className="w-36 mx-auto mb-5 opacity-80"
        />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent mb-6" />

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src={assets.mail_icon_dark} alt="Mail" className="w-4 opacity-60" />
          <a
            href={`mailto:${LINKS.email}`}
            className="text-slate-400 hover:text-purple-400 transition-colors duration-300 text-sm"
          >
            {LINKS.email}
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* GitHub */}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-9 h-9 rounded-full glass hover:border-purple-500/50 hover:bg-purple-600/20
            flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-slate-400 hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-9 h-9 rounded-full glass hover:border-blue-500/50 hover:bg-blue-600/20
            flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Image src={assets.linkedln} alt="LinkedIn" className="w-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>

          {/* Facebook */}
          <a
            href={LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="w-9 h-9 rounded-full glass hover:border-blue-400/50 hover:bg-blue-500/20
            flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Image src={assets.facebook} alt="Facebook" className="w-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>

          {/* Instagram */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-9 h-9 rounded-full glass hover:border-pink-500/50 hover:bg-pink-600/20
            flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Image src={assets.instagram} alt="Instagram" className="w-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-600">
          © {year} <span className="text-purple-500">Rinit Bhowmick</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

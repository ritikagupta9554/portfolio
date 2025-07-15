import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/ritika-gupta-523597220/',
    color: 'hover:text-blue-400',
    name: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/ritikagupta9554',
    color: 'hover:text-purple-400',
    name: 'GitHub',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:guptaritika569@gmail.com',
    color: 'hover:text-red-400',
    name: 'Email',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/60 dark:bg-white/10 backdrop-blur-md border border-yellow-400 px-6 py-2 rounded-full shadow-lg flex items-center justify-between w-full max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 sm:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="sm:hidden mt-2 bg-black/60 backdrop-blur-md border border-yellow-400 rounded-xl px-4 py-2 flex flex-col gap-3 text-center text-sm">
            <a href="#home" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      {/* Floating Social Media Bubbles */}
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-yellow-400 ${link.color} transition-all hover:scale-110 shadow-md hover:ring-2 hover:ring-yellow-300/30`}
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}

            {/* Tooltip */}
            <span className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-1 text-xs text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;

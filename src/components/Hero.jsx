import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#0d0d0d] text-white overflow-hidden">
      
      {/* Background Gradients & Blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#0d0d0d] opacity-60 z-0" />
      <div className="absolute w-72 h-72  rounded-full blur-[140px] opacity-20 -top-20 -left-20 z-0" />
      <div className="absolute w-72 h-72  rounded-full blur-[140px] opacity-20 -bottom-20 -right-20 z-0" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-6"
      >
        <div className="relative">
          <img
            src="src/assets/ritika-profile.png"
            alt="Ritika Gupta"
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-25 blur-2xl animate-pulse -z-10" />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="z-10 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ritika
      </motion.h1>

      {/* Subtitle with Typewriter */}
      <motion.p
        className="z-10 mt-4 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Typewriter
          words={['UI/UX Designer', 'Creative Thinker', 'Visual Storyteller']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.p>

      {/* Resume Button */}
      <motion.a
        href="/src/assets/Ritika Gupta(UI Designer).pdf"
        download
        className="z-10 mt-8 inline-block px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.07 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Download Resume
      </motion.a>

      {/* Social Icons */}
      <motion.div
        className="z-10 mt-6 flex space-x-5 text-2xl text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <a href="https://linkedin.com/in/ritika-gupta-523597220/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ritikagupta9554" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all">
          <FaGithub />
        </a>
        {/* <a href="https://dribbble.com/ritikadesigns" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-all">
          <FaDribbble />
        </a> */}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 z-10 text-white text-sm animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {/* <p className="text-gray-400">Scroll Down ↓</p> */}
      </motion.div>
    </section>
  );
};

export default Hero;

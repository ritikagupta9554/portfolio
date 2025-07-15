import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'DigiVets',
    description: 'A comprehensive veterinary service booking and management platform designed to streamline pet care. Features include real-time appointment scheduling, teleconsultation with licensed veterinarians, and a pet health record system. Built with a responsive UI using React and Node.js, it integrates secure payment gateways and push notifications to enhance user experience for pet owners and clinics.',
    link: 'https://digivets.com/',
  },
  {
    title: 'Niramaya Yoga',
    description: 'A mobile-first wellness app focused on homeopathy and yoga, offering a clean and intuitive UI. Users can access personalized yoga routines, book consultations with certified homeopaths, and track wellness goals through an interactive dashboard. Developed using React Native for cross-platform compatibility, it incorporates soothing animations and a minimalist design to promote a calming user experience.',
    link: 'https://niramayayoga.online/',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-[#0d0d0d] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projectList.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 rounded-xl border-2 border-yellow-400 bg-white/5 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20 hover:scale-[1.02] transition-all duration-300 block overflow-hidden"
          >
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400/30 to-transparent opacity-50 hover:opacity-80 transition-opacity duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white/90 relative z-10">{project.title}</h3>
            <p className="text-gray-400 text-sm relative z-10">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
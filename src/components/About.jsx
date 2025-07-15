import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Figma',
  'Wireframing',
  'User Research',
  'UI Design',
  'Responsive Design',
  // 'Framer Motion',
  'HTML/CSS',
  'React',
];

const tools = [
  'Adobe XD',
  'Figma',
  'Canva',
  // 'Notion',
  // 'Zeplin',
  'Git',
  'Visual Studio Code',
];

const tabs = ['Bio', 'Skills', 'Tools'];

const About = () => {
  const [activeTab, setActiveTab] = useState('Bio');

  const renderContent = () => {
    switch (activeTab) {
      case 'Bio':
        return (
          <motion.div
            key="bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row gap-10 max-w-5xl mx-auto text-left text-gray-300"
          >
            {/* Left Column - Single Bio Card */}
            <div className="md:w-2/3 space-y-6">
              <h3 className="text-2xl font-semibold text-white">👩‍💻 About Ritika Gupta</h3>
              <motion.div
                key="bio-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative p-6 rounded-xl border-2 border-yellow-400 bg-white/5 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20 hover:scale-[1.01] transition-all duration-300 space-y-0"
              >
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400/30 to-transparent opacity-50 hover:opacity-80 transition-opacity duration-300" />
                <div className="relative z-10 text-sm space-y-4">
                  {[
                    "I'm Ritika Gupta, a UI/UX designer who thrives on turning ideas into elegant, user-centered designs. I blend creativity with usability to deliver intuitive and accessible experiences.",
                    "My journey began with a curiosity about human behavior and design systems. Over time, I’ve built a design philosophy rooted in empathy, simplicity, and purpose-driven aesthetics.",
                    "I completed a hands-on internship at Digiquest Consultancy Services Pvt. Ltd. where I worked on mobile-first client projects, collaborated with developers, and designed solutions from concept to delivery.",
                    "I’m skilled in tools like Figma, Adobe XD, and Framer Motion. I constantly explore new trends in design, motion, and microinteractions to keep my work fresh and relevant.",
                    "My goal is simple: create digital experiences that aren’t just beautiful — but meaningful, human, and joyful to use.",
                  ].map((text, i) => (
                    <p key={i}>
                      {text.split('Digiquest Consultancy Services Pvt. Ltd.').map((part, j) =>
                        j === 1 ? (
                          <span key={j} className="text-pink-400 font-medium">
                            Digiquest Consultancy Services Pvt. Ltd.
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="md:w-1/3 space-y-6 mt-10 md:mt-0">
              <h4 className="text-xl font-semibold text-white">✨ Testimonials</h4>
              {[
                {
                  quote: "“Ritika's designs always hit the mark. She takes feedback seriously and transforms it into thoughtful solutions.”",
                  author: "— UI Lead, Digiquest",
                },
                {
                  quote: "“Her attention to detail and visual creativity is impressive. She has a great sense of balance and flow.”",
                  author: "— Project Manager",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative p-4 rounded-xl border-2 border-yellow-400 bg-white/5 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20 hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400/30 to-transparent opacity-50 hover:opacity-80 transition-opacity duration-300" />
                  <p className="text-sm italic relative z-10">{testimonial.quote}</p>
                  <p className="mt-2 text-pink-400 text-sm font-medium relative z-10">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'Skills':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="relative px-4 py-2 rounded-full border-2 border-yellow-400 bg-white/10 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-400/30 to-transparent opacity-50 hover:opacity-80 transition-opacity duration-300" />
                <span className="relative z-10 text-white text-sm">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Tools':
        return (
          <motion.div
            key="tools"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="relative px-4 py-2 rounded-full border-2 border-yellow-400 bg-white/10 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-400/30 to-transparent opacity-50 hover:opacity-80 transition-opacity duration-300" />
                <span className="relative z-10 text-white text-sm">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 bg-[#0d0d0d] text-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-72 h-72 rounded-full blur-[150px] opacity-20 -top-10 -left-20 z-0" />
      <div className="absolute w-72 h-72 rounded-full blur-[150px] opacity-20 -bottom-10 -right-20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          About Me
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border ${
                activeTab === tab
                  ? 'bg-white text-black border-white'
                  : 'text-white border-white/20 hover:bg-white/10'
              } transition-all duration-300 text-sm font-medium`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default About;

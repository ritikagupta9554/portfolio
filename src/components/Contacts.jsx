import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center bg-[#0d0d0d] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-xl mx-auto mb-8 text-lg"
      >
        I'm always open to discussing product design work or partnership
        opportunities. Feel free to drop a message ✉️
      </motion.p>

      <motion.a
        href="mailto:guptaritika569@gmail.com"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="inline-block px-8 py-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
      >
        guptaritika569@gmail.com
      </motion.a>
    </section>
  );
};

export default Contact;

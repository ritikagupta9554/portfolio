// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contacts';

const App = () => {
  return (
    <div className="bg-[#0d0d0d] text-white font-sans scroll-smooth">
      <Navbar />
      <section id="home" className="min-h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="min-h-screen snap-start">
        <About />
      </section>
      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen snap-start">
        <Contact />
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-4">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:ritikagupta@example.com"
          className="inline-block px-6 py-3 mt-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all"
        >
          ritikagupta@example.com
        </a>
      </section> */}

      <Footer />
    </div>
  );
};

export default App;

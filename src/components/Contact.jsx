const Contact = () => (
  <section className="py-16 px-6 bg-gradient-to-r from-pink-100 to-purple-100 text-center" id="contact">
    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
    <p>Email: <a href="mailto:guptaritika569@gmail.com" className="underline">guptaritika569@gmail.com</a></p>
    <p>Phone: <a href="tel:+919554929098" className="underline">+91 9554929098</a></p>
    <div className="flex justify-center gap-4 mt-4 text-xl">
      <a href="https://github.com/ritikagupta9554" target="_blank" className="hover:text-purple-700">GitHub</a>
      <a href="https://www.linkedin.com/in/ritika-gupta-523597220" target="_blank" className="hover:text-purple-700">LinkedIn</a>
    </div>
  </section>
);

export default Contact;

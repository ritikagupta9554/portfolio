const skills = ["Figma", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git", "SQL"];

const Skills = () => (
  <section className="py-16 px-6 bg-gray-50" id="skills">
    <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <span key={i} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;

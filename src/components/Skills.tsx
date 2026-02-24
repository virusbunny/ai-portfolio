export default function Skills() {
  const skills = ["React", "TypeScript", "Python", "AI/ML", "FastAPI"];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass p-8 rounded-xl hover:scale-105 transition text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
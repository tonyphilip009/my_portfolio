function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "MySQL",
    "PostgreSQL",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Skills
          </p>

          <h2 className="section-title mt-3">
            Technologies I work with.
          </h2>

          <p className="section-subtitle">
            A collection of technologies and tools I use to build modern
            applications and solve practical problems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="card card-hover flex min-h-24 items-center justify-center text-center"
            >
              <span className="font-medium text-slate-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
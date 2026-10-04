import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Projects
          </p>

          <h2 className="section-title mt-3">
            Things I've built.
          </h2>

          <p className="section-subtitle">
            A selection of projects that showcase my experience with
            full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card card-hover flex h-full flex-col overflow-hidden"
            >
              {/* Project image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
              )}

              {/* Project content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Project title */}
                <h3 className="text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub button */}
                {project.github && (
                  <div className="mt-auto pt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      View Project →
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
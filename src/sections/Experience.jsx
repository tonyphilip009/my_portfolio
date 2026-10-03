function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Experience
          </p>

          <h2 className="section-title mt-3">
            Where I've gained practical experience.
          </h2>

          <p className="section-subtitle">
            Hands-on experience working with security monitoring,
            log analysis and security tools.
          </p>
        </div>

        {/* Experience card */}
        <div className="mt-10 max-w-4xl">
          <div className="card card-hover">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              {/* Experience details */}
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                  Security Operations Center
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                  SOC Intern
                </h3>

                <p className="mt-3 text-slate-300">
                  Security Operations Center Intern
                </p>

                <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
                  Worked with security monitoring, log analysis and SIEM
                  tools while gaining practical experience in a
                  Security Operations Center environment.
                </p>
              </div>

              {/* Experience type */}
              <div className="shrink-0">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  Internship
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
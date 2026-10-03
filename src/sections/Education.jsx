function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Education
          </p>

          <h2 className="section-title mt-3">
            My academic background.
          </h2>

          <p className="section-subtitle">
            My academic journey in Computer Science and Engineering.
          </p>
        </div>

        {/* Education card */}
        <div className="mt-10 max-w-4xl">
          <div className="card card-hover">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                  Bachelor's Degree
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                  B.Tech Computer Science and Engineering
                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
                  Currently pursuing B.Tech in Computer Science and
                  Engineering, with a focus on software development,
                  backend technologies and cybersecurity.
                </p>
              </div>

              <div className="shrink-0">
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  B.Tech
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
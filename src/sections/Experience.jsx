function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A timeline of my professional experience and the technologies
            I have worked with.
          </p>
        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Center Timeline */}
          <div className="absolute left-3 top-0 h-full w-px bg-gray-700 md:left-1/2 md:-translate-x-1/2" />


          {/* ========================= */}
          {/* FULL STACK INTERNSHIP */}
          {/* ========================= */}

          <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT */}
            <div className="ml-10 md:ml-0 md:pr-10 md:text-right">

              <p className="text-sm font-medium text-gray-500">
                Jun 2026 – Present
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Python Django Full Stack Developer Intern
              </h3>

              <p className="mt-2 text-gray-300">
                Luminar Technolab
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Kerala, India
              </p>

            </div>


            {/* Timeline Dot */}
            <div className="absolute left-3 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-black shadow-[0_0_12px_rgba(96,165,250,0.8)] md:left-1/2" />


            {/* RIGHT */}
            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <p className="leading-7 text-gray-400">
                Developing full-stack web applications using Django,
                Django REST Framework, React, and MySQL.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-500">

                <li>
                  • Building REST APIs and implementing CRUD operations
                  with Django REST Framework.
                </li>

                <li>
                  • Working with Django models, ORM, authentication,
                  URL routing, and admin functionality.
                </li>

                <li>
                  • Creating responsive frontend interfaces and
                  connecting them with backend APIs.
                </li>

                <li>
                  • Using Git and GitHub for version control and
                  project development.
                </li>

              </ul>


              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Python
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Django
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  DRF
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  React
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  MySQL
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Git
                </span>

              </div>

            </div>

          </div>


          {/* ========================= */}
          {/* SOC INTERNSHIP */}
          {/* ========================= */}

          <div className="relative md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT */}
            <div className="ml-10 md:ml-0 md:pr-10 md:text-right">

              <p className="text-sm font-medium text-gray-500">
                Feb 2026 – May 2026
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                SOC Intern
              </h3>

              <p className="mt-2 text-gray-300">
                Terraeagle
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Bengaluru, India
              </p>

            </div>


            {/* Timeline Dot */}
            <div className="absolute left-3 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-black shadow-[0_0_12px_rgba(96,165,250,0.8)] md:left-1/2" />


            {/* RIGHT */}
            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <p className="leading-7 text-gray-400">
                Worked in a Security Operations Center environment,
                monitoring security events and analysing logs.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-500">

                <li>
                  • Analysed security logs and alerts using monitoring
                  dashboards.
                </li>

                <li>
                  • Worked with Wazuh for security monitoring
                  and threat detection.
                </li>

                <li>
                  • Investigated security events and assisted with
                  alert analysis and reporting.
                </li>

                <li>
                  • Gained practical experience with SOC workflows,
                  log analysis, and security monitoring.
                </li>

              </ul>


              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Wazuh
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Log Analysis
                </span>

                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                  Threat Detection
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
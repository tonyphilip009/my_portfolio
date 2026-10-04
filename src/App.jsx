import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero3D from "./components/Hero3D";
import Education from "./sections/Education";

import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        {/* ==================== HOME ==================== */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden"
        >
          <div className="container-custom flex min-h-screen items-center">
            <div className="grid w-full items-center gap-12 py-24 lg:grid-cols-2">

              {/* Hero Content */}
              <div className="relative z-10">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                  Full Stack Developer
                </p>

                <h1 className="text-5xl font-bold leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
                  Hi, I'm{" "}
                  <span className="text-blue-400">
                    Tony Philip
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                  Computer Science and Engineering student passionate
                  about building modern web applications, solving
                  problems and exploring cybersecurity.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* 3D Hero */}
              <div className="relative z-0">
                <Hero3D />
              </div>

            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section
          id="about"
          className="section-padding"
        >
          <div className="container-custom">

            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                About Me
              </p>

              <h2 className="section-title mt-3">
                Building things with code and curiosity.
              </h2>

              <p className="section-subtitle">
                I am a Computer Science and Engineering student
                interested in full-stack development, backend
                technologies, APIs and cybersecurity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Full Stack Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Building complete web applications using modern
                  frontend and backend technologies.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Backend Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Working with Django, Django REST Framework,
                  FastAPI and databases to create scalable APIs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Problem Solving
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Practicing Python, DSA and coding problems to
                  improve logical thinking and programming skills.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  React Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Creating responsive and interactive interfaces
                  using React, Vite, Tailwind CSS and APIs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Cybersecurity
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Exploring SIEM, threat detection, log analysis
                  and security monitoring.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Continuous Learning
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Continuously learning new technologies and
                  improving development skills through projects.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <Skills />

        {/* ==================== EDUCATION ==================== */}
        <Education />

        {/* ==================== PROJECTS ==================== */}
        <Projects />

        {/* ==================== EXPERIENCE ==================== */}
        <Experience />

        {/* ==================== RESUME ==================== */}
        <Resume />

        {/* ==================== CONTACT ==================== */}
        <section
          id="contact"
          className="section-padding"
        >
          <div className="container-custom">

            {/* Contact Header */}
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Contact
              </p>

              <h2 className="section-title mt-3">
                Let's build something together.
              </h2>

              <p className="section-subtitle">
                I'm open to opportunities, collaborations and
                interesting projects.
              </p>
            </div>

            {/* Contact Card */}
            <div className="mt-10 max-w-2xl rounded-2xl border border-slate-700/60 bg-slate-900/40 p-8">

              <div className="space-y-6">

                {/* Email */}
                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tonyphilip43@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-lg text-blue-400 transition-colors hover:text-blue-300"
                  >
                    {/* Mail Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        rx="2"
                      />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>

                    tonyphilip43@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-lg text-slate-300">
                    Kerala, India
                  </p>
                </div>

                {/* Social Profiles */}
                <div>
                  <p className="text-sm text-slate-500">
                    Profiles
                  </p>

                  <div className="mt-3 flex gap-3">

                    {/* GitHub */}
                    <a
                      href="https://github.com/tonyphilip009"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-700
                        bg-slate-800/40
                        text-slate-400
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-slate-500
                        hover:bg-slate-800
                        hover:text-white
                      "
                    >
                      {/* GitHub Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/tony-philip-056238264"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-700
                        bg-slate-800/40
                        text-slate-400
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-500/50
                        hover:bg-blue-500/10
                        hover:text-blue-400
                      "
                    >
                      {/* LinkedIn Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                      </svg>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero3D from "./components/Hero3D";

import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroContentRef = useRef(null);

  const aboutRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutCardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
      ==========================================
      HERO ANIMATION
      ==========================================
      */

      const heroTimeline = gsap.timeline();

      heroTimeline.from(heroContentRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      /*
      ==========================================
      ABOUT CONTENT ANIMATION
      ==========================================
      */

      gsap.fromTo(
        aboutContentRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      /*
      ==========================================
      ABOUT CARDS ANIMATION
      ==========================================
      */

      const cards = aboutCardsRef.current.children;

      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutCardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /*
      ==========================================
      REFRESH SCROLLTRIGGER
      ==========================================
      */

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      {/* ==========================================
          PERSISTENT 3D PARTICLE BACKGROUND
      ========================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <Hero3D />
      </div>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className="relative z-10">
        {/* ==========================================
            HOME
        ========================================== */}

        <section
          id="home"
          className="relative min-h-screen overflow-hidden"
        >
          <div className="container-custom flex min-h-screen items-center">
            <div className="grid w-full items-center gap-12 py-24 lg:grid-cols-2">
              {/* HERO TEXT */}

              <div
                ref={heroContentRef}
                className="relative z-10"
              >
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
                  Computer Science and Engineering student
                  passionate about building modern web
                  applications, solving problems and exploring
                  cybersecurity.
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
            </div>
          </div>
        </section>

        {/* ==========================================
            ABOUT
        ========================================== */}

        <section
          ref={aboutRef}
          id="about"
          className="section-padding"
        >
          <div className="container-custom">
            <div
              ref={aboutContentRef}
              className="max-w-3xl"
            >
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

            <div
              ref={aboutCardsRef}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Full Stack */}

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Full Stack Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Building complete web applications using
                  modern frontend and backend technologies.
                </p>
              </div>

              {/* Backend */}

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Backend Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Working with Django, Django REST Framework,
                  FastAPI and databases to create scalable APIs.
                </p>
              </div>

              {/* Problem Solving */}

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Problem Solving
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Practicing Python, DSA and coding problems to
                  improve logical thinking and programming skills.
                </p>
              </div>

              {/* React */}

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  React Development
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Creating responsive and interactive interfaces
                  using React, Vite, Tailwind CSS and APIs.
                </p>
              </div>

              {/* Cybersecurity */}

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <h3 className="text-xl font-semibold text-slate-50">
                  Cybersecurity
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Exploring SIEM, threat detection, log analysis
                  and security monitoring.
                </p>
              </div>

              {/* Continuous Learning */}

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

        {/* ==========================================
            OTHER SECTIONS
        ========================================== */}

        <Skills />

        <Education />

        <Projects />

        <Experience />

        <Resume />

        <Contact />
      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />
    </div>
  );
}

export default App;
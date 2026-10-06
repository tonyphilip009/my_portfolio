import { useLayoutEffect, useRef, useState } from "react";
import projects from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [filter, setFilter] = useState("All");

  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const summaryRef = useRef(null);
  const filtersRef = useRef(null);
  const projectsGridRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const strengthCardsRef = useRef(null);

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);

  const filters = ["All", "Completed", "In Progress"];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==================== SECTION HEADING ====================

      gsap.fromTo(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",

          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // ==================== PROJECT SUMMARY ====================

      gsap.fromTo(
        summaryRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: summaryRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // ==================== FILTER BUTTONS ====================

      gsap.fromTo(
        filtersRef.current.children,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // ==================== PROJECT CARDS ====================

      gsap.fromTo(
        projectsGridRef.current.children,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // ==================== BOTTOM SECTION ====================

      gsap.fromTo(
        bottomSectionRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",

          scrollTrigger: {
            trigger: bottomSectionRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // ==================== STRENGTH CARDS ====================

      gsap.fromTo(
        strengthCardsRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: strengthCardsRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==================== SECTION HEADING ==================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
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

        {/* ==================== PROJECT SUMMARY ==================== */}

        <div
          ref={summaryRef}
          className="mt-8 flex flex-wrap gap-3"
        >
          <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
            <span className="font-semibold text-slate-50">
              {projects.length}
            </span>{" "}
            Projects
          </div>

          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            <span className="font-semibold">
              {completedProjects}
            </span>{" "}
            Completed
          </div>

          <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            <span className="font-semibold">
              {inProgressProjects}
            </span>{" "}
            In Progress
          </div>
        </div>

        {/* ==================== PROJECT FILTERS ==================== */}

        <div
          ref={filtersRef}
          className="mt-8 flex flex-wrap gap-3"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              type="button"
              onClick={() => setFilter(filterOption)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === filterOption
                  ? "scale-105 border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "border-slate-700 bg-slate-900/70 text-slate-400 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-300"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* ==================== PROJECTS GRID ==================== */}

        <div
          ref={projectsGridRef}
          className="mt-10 grid gap-8 lg:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="card card-hover flex h-full flex-col overflow-hidden border border-slate-800/70 bg-slate-950/85 transition-all duration-500 hover:border-blue-400/30"
            >

              {/* ==================== PROJECT IMAGE ==================== */}

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              )}

              {/* ==================== PROJECT CONTENT ==================== */}

              <div className="flex flex-1 flex-col bg-slate-950/70 p-6">

                {/* ==================== BADGES ==================== */}

                <div className="mb-3 flex flex-wrap items-center gap-2">

                  {project.featured && (
                    <span className="inline-flex w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Featured Project
                    </span>
                  )}

                  {project.status && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                        project.status === "Completed"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      />

                      {project.status}
                    </span>
                  )}

                </div>

                {/* ==================== PROJECT TITLE ==================== */}

                <h3 className="text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>

                {/* ==================== PROJECT OVERVIEW ==================== */}

                <div className="mt-4">

                  <h4 className="text-sm font-semibold text-slate-200">
                    Project Overview
                  </h4>

                  <p className="mt-2 leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                </div>

                {/* ==================== TECHNOLOGIES ==================== */}

                {project.technologies &&
                  project.technologies.length > 0 && (
                    <div className="mt-6">

                      <h4 className="mb-3 text-sm font-semibold text-slate-200">
                        Technology Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                          >
                            {technology}
                          </span>
                        ))}

                      </div>

                    </div>
                  )}

                {/* ==================== ARCHITECTURE ==================== */}

                {project.stackSummary && (
                  <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">

                    <h4 className="text-sm font-semibold text-slate-200">
                      Architecture
                    </h4>

                    <div className="mt-3 space-y-2 text-sm">

                      {project.stackSummary.frontend && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Frontend:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.frontend}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.backend && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Backend:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.backend}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.database && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Database:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.database}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.threeD && (
                        <div>
                          <span className="font-medium text-blue-300">
                            3D:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.threeD}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.buildTool && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Build Tool:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.buildTool}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.platform && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Platform:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.platform}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.environment && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Environment:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.environment}
                          </span>
                        </div>
                      )}

                      {project.stackSummary.monitoring && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Monitoring:
                          </span>{" "}
                          <span className="text-slate-400">
                            {project.stackSummary.monitoring}
                          </span>
                        </div>
                      )}

                    </div>

                  </div>
                )}

                {/* ==================== KEY FEATURES ==================== */}

                {project.features &&
                  project.features.length > 0 && (
                    <div className="mt-6">

                      <h4 className="text-sm font-semibold text-slate-200">
                        Key Features
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1 text-blue-400">
                              ✓
                            </span>

                            <span>
                              {feature}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>
                  )}

                {/* ==================== DENTAL CLINIC HIGHLIGHT ==================== */}

                {project.title === "Dental Clinic Website" && (
                  <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                    <h4 className="text-sm font-semibold text-blue-300">
                      Booking & Availability
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Patients can select a dentist, choose a date, view
                      available time slots, and submit an appointment.
                      The backend validates availability and prevents
                      double bookings.
                    </p>

                  </div>
                )}

                {/* ==================== DEVELOPER PORTFOLIO HIGHLIGHT ==================== */}

                {project.title === "Developer Portfolio" &&
                  project.highlights &&
                  project.highlights.length > 0 && (
                    <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                      <h4 className="text-sm font-semibold text-blue-300">
                        Development Highlights
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1 text-blue-400">
                              ✓
                            </span>

                            <span>
                              {highlight}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>
                  )}

                {/* ==================== DEVELOPER PORTFOLIO LEARNING ==================== */}

                {project.title === "Developer Portfolio" &&
                  project.learning &&
                  project.learning.length > 0 && (
                    <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">

                      <h4 className="text-sm font-semibold text-slate-200">
                        What I'm Learning
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.learning.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1 text-blue-400">
                              →
                            </span>

                            <span>
                              {item}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>
                  )}

                {/* ==================== SOC HIGHLIGHT ==================== */}

                {project.title ===
                  "SOC Home Lab for Threat Detection and Incident Response" && (
                  <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                    <h4 className="text-sm font-semibold text-blue-300">
                      Threat Detection & Investigation
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      The lab simulates real-world attacks and uses
                      Microsoft Sentinel analytics rules to detect
                      suspicious activity, investigate incidents, and
                      analyze security logs.
                    </p>

                  </div>
                )}

                {/* ==================== PROJECT BUTTONS ==================== */}

                <div className="mt-auto flex flex-wrap gap-3 pt-8">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200"
                    >
                      View GitHub

                      <span className="ml-2">
                        →
                      </span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Live Demo

                      <span className="ml-2">
                        ↗
                      </span>
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-xl border border-slate-700/60 bg-slate-900/70 p-8 text-center">
            <p className="text-slate-400">
              No projects found for this filter.
            </p>
          </div>
        )}

        {/* ==================== WHY THESE PROJECTS MATTER ==================== */}

        <div
          ref={bottomSectionRef}
          className="mt-16 border-t border-slate-800 pt-12"
        >
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              What These Projects Show
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-slate-50">
              More than just code.
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              These projects demonstrate my ability to design, build and
              connect different parts of modern applications while solving
              practical problems.
            </p>

          </div>

          {/* ==================== PROJECT STRENGTHS ==================== */}

          <div
            ref={strengthCardsRef}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5">
              <h4 className="font-semibold text-slate-100">
                Full-Stack Development
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Building applications across frontend, backend and database
                layers.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5">
              <h4 className="font-semibold text-slate-100">
                API Integration
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Connecting React interfaces with Django REST APIs and
                handling application data.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5">
              <h4 className="font-semibold text-slate-100">
                Problem Solving
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Implementing validation, availability logic and reliable
                application workflows.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5">
              <h4 className="font-semibold text-slate-100">
                Continuous Learning
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Continuously improving my skills by building and refining
                real-world projects.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const resumeRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading animation
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
            trigger: resumeRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Resume card animation
      gsap.fromTo(
        cardRef.current,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, resumeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={resumeRef}
      id="resume"
      className="section-padding"
    >
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headingRef} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Resume
          </p>

          <h2 className="section-title mt-3">
            My professional profile.
          </h2>

          <p className="section-subtitle">
            Explore my skills, experience, projects and technical
            background in detail.
          </p>
        </div>

        {/* Resume Card */}
        <div
          ref={cardRef}
          className="mt-12 max-w-4xl"
        >
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-700/60
              bg-slate-900/40
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-slate-900/60
            "
          >
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">

              {/* Resume Information */}
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/30
                      bg-blue-500/10
                      text-2xl
                    "
                  >
                    📄
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-50">
                      Tony Philip
                    </h3>

                    <p className="mt-1 text-slate-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                  Computer Science and Engineering student focused on
                  full-stack development, Django, React, REST APIs,
                  databases and cybersecurity.
                </p>

                {/* Resume Highlights */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                    Python
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                    Django
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                    React
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                    REST APIs
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                    Cybersecurity
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-500
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-400
                    hover:shadow-lg
                    hover:shadow-blue-500/20
                  "
                >
                  View Resume

                  <span className="ml-2">
                    ↗
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-700
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-blue-500/50
                    hover:bg-slate-800
                    hover:text-white
                  "
                >
                  Download PDF

                  <span className="ml-2">
                    ↓
                  </span>
                </a>

              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
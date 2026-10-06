import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);

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
            trigger: experienceRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Experience timeline animation
      gsap.fromTo(
        timelineRef.current.children,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="min-h-screen bg-slate-950/70 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div ref={headingRef} className="mb-20">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A timeline of my professional experience and the technologies
            I have worked with.
          </p>

        </div>


        {/* ==========================================
            TIMELINE
        ========================================== */}

        <div
          ref={timelineRef}
          className="relative"
        >

          {/* CENTER TIMELINE LINE */}

          <div
            className="
              absolute
              left-3
              top-0
              h-full
              w-px
              bg-slate-700
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* ========================================
              FULL STACK INTERNSHIP
          ======================================== */}

          <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT CARD */}

            <div className="ml-10 md:ml-0 md:pr-10">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]
                  md:text-right
                "
              >

                <p className="text-sm font-medium text-blue-400">
                  Jun 2026 – Present
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-slate-50">
                  Python Django Full Stack Developer Intern
                </h3>

                <p className="mt-2 text-slate-300">
                  Luminar Technolab
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Kerala, India
                </p>

              </div>

            </div>


            {/* TIMELINE DOT */}

            <div
              className="
                absolute
                left-3
                top-8
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                border-2
                border-blue-400
                bg-slate-950
                shadow-[0_0_16px_rgba(96,165,250,0.9)]
                md:left-1/2
              "
            />


            {/* RIGHT CARD */}

            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]
                "
              >

                <p className="leading-7 text-slate-300">
                  Developing full-stack web applications using Django,
                  Django REST Framework, React, and MySQL.
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">

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


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Python
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Django
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    DRF
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    React
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    MySQL
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Git
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================
              SOC INTERNSHIP
          ======================================== */}

          <div className="relative md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT CARD */}

            <div className="ml-10 md:ml-0 md:pr-10">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]
                  md:text-right
                "
              >

                <p className="text-sm font-medium text-blue-400">
                  Feb 2026 – May 2026
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-slate-50">
                  SOC Intern
                </h3>

                <p className="mt-2 text-slate-300">
                  Terraeagle
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Bengaluru, India
                </p>

              </div>

            </div>


            {/* TIMELINE DOT */}

            <div
              className="
                absolute
                left-3
                top-8
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                border-2
                border-blue-400
                bg-slate-950
                shadow-[0_0_16px_rgba(96,165,250,0.9)]
                md:left-1/2
              "
            />


            {/* RIGHT CARD */}

            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]
                "
              >

                <p className="leading-7 text-slate-300">
                  Worked in a Security Operations Center environment,
                  monitoring security events and analysing logs.
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">

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


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Wazuh
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Log Analysis
                  </span>

                  <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Threat Detection
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // REDUCED MOTION CHECK
      // ==========================================

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const timelineItems = Array.from(
        timelineRef.current.querySelectorAll(
          ".experience-item"
        )
      );

      const cards = Array.from(
        timelineRef.current.querySelectorAll(
          ".experience-card"
        )
      );

      const dots = Array.from(
        timelineRef.current.querySelectorAll(
          ".timeline-dot"
        )
      );

      const tags = timelineRef.current.querySelectorAll(
        ".experience-tag"
      );

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            timelineLineRef.current,
            ...timelineItems,
            ...cards,
            ...dots,
            ...tags,
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
          }
        );

        return;
      }

      // ==========================================
      // STEP 1
      // SECTION HEADING REVEAL
      // ==========================================

      gsap.fromTo(
        headingRef.current,
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
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ==========================================
      // STEP 2
      // TIMELINE LINE DRAW
      // ==========================================

      gsap.fromTo(
        timelineLineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // ==========================================
      // STEP 3
      // EXPERIENCE ITEM REVEAL
      // ==========================================

      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: index * 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // STEP 4
      // TIMELINE DOT ANIMATION
      // ==========================================

      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",

            scrollTrigger: {
              trigger: dot,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Continuous subtle glow
        gsap.to(dot, {
          boxShadow:
            "0 0 24px rgba(96,165,250,1)",

          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ==========================================
      // STEP 5
      // EXPERIENCE CARD CONTENT
      // ==========================================

      cards.forEach((card) => {
        const content =
          card.querySelectorAll(
            ".experience-reveal"
          );

        gsap.fromTo(
          content,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: "power2.out",

            scrollTrigger: {
              trigger: card,
              start: "top 76%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // STEP 6
      // BULLET POINT REVEAL
      // ==========================================

      cards.forEach((card) => {
        const bullets =
          card.querySelectorAll(
            ".experience-bullet"
          );

        gsap.fromTo(
          bullets,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",

            scrollTrigger: {
              trigger: card,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // STEP 7
      // TECHNOLOGY TAG REVEAL
      // ==========================================

      cards.forEach((card) => {
        const cardTags =
          card.querySelectorAll(
            ".experience-tag"
          );

        gsap.fromTo(
          cardTags,
          {
            y: 12,
            opacity: 0,
            scale: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.07,
            ease: "back.out(1.5)",

            scrollTrigger: {
              trigger: card,
              start: "top 68%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // STEP 8
      // 3D CARD TILT
      // ==========================================

      cards.forEach((card) => {
        const handleMouseMove = (event) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          const rotateY =
            ((x - centerX) / centerX) * 3;

          const rotateX =
            ((centerY - y) / centerY) * 3;

          gsap.to(card, {
            rotateX,
            rotateY,
            y: -6,
            scale: 1.01,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        card.addEventListener(
          "mousemove",
          handleMouseMove
        );

        card.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        card._handleMouseMove =
          handleMouseMove;

        card._handleMouseLeave =
          handleMouseLeave;
      });

      // ==========================================
      // STEP 9
      // CARD HOVER GLOW
      // ==========================================

      cards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            borderColor:
              "rgba(96,165,250,0.5)",
            boxShadow:
              "0 0 35px rgba(59,130,246,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            borderColor:
              "rgba(51,65,85,0.6)",
            boxShadow:
              "0 0 0 rgba(59,130,246,0)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener(
          "mouseenter",
          handleEnter
        );

        card.addEventListener(
          "mouseleave",
          handleLeave
        );

        card._handleEnter = handleEnter;
        card._handleLeave = handleLeave;
      });

      // ==========================================
      // STEP 10
      // SCROLL PARALLAX POLISH
      // ==========================================

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -8 : 8,
          ease: "none",

          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // ==========================================
      // PERFORMANCE
      // ==========================================

      gsap.set(
        [
          headingRef.current,
          timelineLineRef.current,
          ...cards,
          ...dots,
          ...tags,
        ],
        {
          force3D: true,
        }
      );

      // ==========================================
      // CLEANUP EVENT LISTENERS
      // ==========================================

      return () => {
        cards.forEach((card) => {
          card.removeEventListener(
            "mousemove",
            card._handleMouseMove
          );

          card.removeEventListener(
            "mouseleave",
            card._handleMouseLeave
          );

          card.removeEventListener(
            "mouseenter",
            card._handleEnter
          );

          card.removeEventListener(
            "mouseleave",
            card._handleLeave
          );
        });
      };
    }, experienceRef);

    ScrollTrigger.refresh();

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

        <div
          ref={headingRef}
          className="mb-20"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A timeline of my professional experience
            and the technologies I have worked with.
          </p>
        </div>


        {/* ==========================================
            TIMELINE
        ========================================== */}

        <div
          ref={timelineRef}
          className="relative"
          style={{
            perspective: "1200px",
          }}
        >

          {/* ========================================
              TIMELINE LINE
          ======================================== */}

          <div
            ref={timelineLineRef}
            className="
              absolute
              left-3
              top-0
              h-full
              w-px
              origin-top
              bg-gradient-to-b
              from-blue-400
              via-slate-700
              to-slate-800
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* ========================================
              FULL STACK INTERNSHIP
          ======================================== */}

          <div className="experience-item relative mb-24 md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT CARD */}

            <div className="ml-10 md:ml-0 md:pr-10">

              <div
                className="
                  experience-card
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                  transition-colors
                  duration-300
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                  willChange: "transform",
                }}
              >

                <p className="experience-reveal text-sm font-medium text-blue-400">
                  Jun 2026 – Present
                </p>

                <h3 className="experience-reveal mt-3 text-2xl font-semibold text-slate-50">
                  Python Django Full Stack Developer Intern
                </h3>

                <p className="experience-reveal mt-2 text-slate-300">
                  Luminar Technolab
                </p>

                <p className="experience-reveal mt-1 text-sm text-slate-500">
                  Kerala, India
                </p>

              </div>

            </div>


            {/* TIMELINE DOT */}

            <div
              className="
                timeline-dot
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
                md:left-1/2
              "
            />


            {/* RIGHT CARD */}

            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <div
                className="
                  experience-card
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                  willChange: "transform",
                }}
              >

                <p className="experience-reveal leading-7 text-slate-300">
                  Developing full-stack web applications
                  using Django, Django REST Framework,
                  React, and MySQL.
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">

                  <li className="experience-bullet">
                    • Building REST APIs and implementing
                    CRUD operations with Django REST
                    Framework.
                  </li>

                  <li className="experience-bullet">
                    • Working with Django models, ORM,
                    authentication, URL routing, and admin
                    functionality.
                  </li>

                  <li className="experience-bullet">
                    • Creating responsive frontend
                    interfaces and connecting them with
                    backend APIs.
                  </li>

                  <li className="experience-bullet">
                    • Using Git and GitHub for version
                    control and project development.
                  </li>

                </ul>


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Python
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Django
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    DRF
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    React
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    MySQL
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Git
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================
              SOC INTERNSHIP
          ======================================== */}

          <div className="experience-item relative md:grid md:grid-cols-2 md:gap-16">

            {/* LEFT CARD */}

            <div className="ml-10 md:ml-0 md:pr-10">

              <div
                className="
                  experience-card
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                  willChange: "transform",
                }}
              >

                <p className="experience-reveal text-sm font-medium text-blue-400">
                  Feb 2026 – May 2026
                </p>

                <h3 className="experience-reveal mt-3 text-2xl font-semibold text-slate-50">
                  SOC Intern
                </h3>

                <p className="experience-reveal mt-2 text-slate-300">
                  Terraeagle
                </p>

                <p className="experience-reveal mt-1 text-sm text-slate-500">
                  Bengaluru, India
                </p>

              </div>

            </div>


            {/* TIMELINE DOT */}

            <div
              className="
                timeline-dot
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
                md:left-1/2
              "
            />


            {/* RIGHT CARD */}

            <div className="ml-10 mt-8 md:ml-0 md:mt-0 md:pl-10">

              <div
                className="
                  experience-card
                  rounded-2xl
                  border
                  border-slate-700/60
                  bg-slate-900/55
                  p-6
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                  willChange: "transform",
                }}
              >

                <p className="experience-reveal leading-7 text-slate-300">
                  Worked in a Security Operations
                  Center environment, monitoring security
                  events and analysing logs.
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">

                  <li className="experience-bullet">
                    • Analysed security logs and alerts
                    using monitoring dashboards.
                  </li>

                  <li className="experience-bullet">
                    • Worked with Wazuh for security
                    monitoring and threat detection.
                  </li>

                  <li className="experience-bullet">
                    • Investigated security events and
                    assisted with alert analysis and
                    reporting.
                  </li>

                  <li className="experience-bullet">
                    • Gained practical experience with SOC
                    workflows, log analysis, and security
                    monitoring.
                  </li>

                </ul>


                {/* TECHNOLOGIES */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Wazuh
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Log Analysis
                  </span>

                  <span className="experience-tag rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs text-slate-300">
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
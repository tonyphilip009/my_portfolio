import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);
  const cardsRef = useRef(null);

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution:
        "Sahyadri College of Engineering and Management",
      location: "Mangalore, India",
      duration: "2022 - Present",
      result: "CGPA: 8.1",
    },
    {
      degree: "Class XII",
      field: "PUC / PCMC",
      institution:
        "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      duration: "2020 - 2022",
      result: "83.86%",
    },
    {
      degree: "Class X",
      field: "State Board",
      institution:
        "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      duration: "2018 - 2019",
      result: "9A+, 1A",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // REDUCED MOTION CHECK
      // ==========================================

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = Array.from(
        cardsRef.current.children
      );

      const dots = timelineRef.current.querySelectorAll(
        ".education-dot"
      );

      const revealElements =
        timelineRef.current.querySelectorAll(
          ".education-reveal"
        );

      const results =
        timelineRef.current.querySelectorAll(
          ".education-result"
        );

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            timelineLineRef.current,
            ...cards,
            ...dots,
            ...revealElements,
            ...results,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
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
      // EDUCATION CARD REVEAL
      // ==========================================

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
          rotateX: 8,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

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
            duration: 0.55,
            ease: "back.out(2)",

            scrollTrigger: {
              trigger: dot,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Subtle continuous glow
        gsap.to(dot, {
          boxShadow:
            "0 0 24px rgba(34,211,238,0.95)",
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ==========================================
      // STEP 5
      // CARD CONTENT REVEAL
      // ==========================================

      cards.forEach((card) => {
        const content =
          card.querySelectorAll(".education-reveal");

        gsap.fromTo(
          content,
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
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
      // RESULT BADGE REVEAL
      // ==========================================

      cards.forEach((card) => {
        const result =
          card.querySelector(".education-result");

        if (!result) return;

        gsap.fromTo(
          result,
          {
            scale: 0.75,
            opacity: 0,
            y: 10,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "back.out(1.7)",

            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // STEP 7
      // 3D CARD MOUSE TILT
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
            ((x - centerX) / centerX) * 4;

          const rotateX =
            ((centerY - y) / centerY) * 4;

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

        card._handleMouseMove = handleMouseMove;
        card._handleMouseLeave = handleMouseLeave;
      });

      // ==========================================
      // STEP 8
      // CARD HOVER GLOW
      // ==========================================

      cards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            borderColor:
              "rgba(34,211,238,0.5)",
            boxShadow:
              "0 0 35px rgba(34,211,238,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            borderColor:
              "rgba(30,41,59,1)",
            boxShadow:
              "0 0 0 rgba(34,211,238,0)",
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
      // STEP 9
      // RESULT HOVER
      // ==========================================

      results.forEach((result) => {
        const handleEnter = () => {
          gsap.to(result, {
            y: -3,
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(result, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        result.addEventListener(
          "mouseenter",
          handleEnter
        );

        result.addEventListener(
          "mouseleave",
          handleLeave
        );

        result._handleEnter = handleEnter;
        result._handleLeave = handleLeave;
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
          ...revealElements,
          ...results,
        ],
        {
          force3D: true,
        }
      );

      // ==========================================
      // CLEANUP
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

        results.forEach((result) => {
          result.removeEventListener(
            "mouseenter",
            result._handleEnter
          );

          result.removeEventListener(
            "mouseleave",
            result._handleLeave
          );
        });
      };
    }, educationRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==========================================
            HEADING
        ========================================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            My Academic Journey
          </h2>

          <p className="leading-relaxed text-slate-400">
            My academic journey has given me a strong
            foundation in computer science, programming,
            and problem-solving.
          </p>
        </div>


        {/* ==========================================
            TIMELINE
        ========================================== */}

        <div
          ref={timelineRef}
          className="relative mt-12"
          style={{
            perspective: "1200px",
          }}
        >

          {/* ========================================
              VERTICAL LINE
          ======================================== */}

          <div
            ref={timelineLineRef}
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-[2px]
              origin-top
              bg-gradient-to-b
              from-cyan-400
              via-slate-600
              to-slate-800
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* ========================================
              EDUCATION CARDS
          ======================================== */}

          <div
            ref={cardsRef}
            className="space-y-10"
          >

            {education.map((item, index) => (
              <div
                key={index}
                className={`education-item relative flex flex-col items-center md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* ==================================
                    TIMELINE DOT
                ================================== */}

                <div
                  className="
                    education-dot
                    absolute
                    left-4
                    z-10
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    border-2
                    border-cyan-400
                    bg-slate-950
                    md:left-1/2
                  "
                />


                {/* ==================================
                    EDUCATION CARD
                ================================== */}

                <div
                  className={`w-full md:w-[45%] ml-10 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >

                  <div
                    className="
                      education-card
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-900/70
                      p-6
                    "
                    style={{
                      transformStyle:
                        "preserve-3d",
                      willChange: "transform",
                    }}
                  >

                    {/* DATE + LOCATION */}

                    <div className="education-reveal mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                      <span className="text-sm font-medium text-cyan-400">
                        {item.duration}
                      </span>

                      <span className="text-sm text-slate-500">
                        {item.location}
                      </span>

                    </div>


                    {/* DEGREE */}

                    <h3 className="education-reveal mb-1 text-xl font-semibold text-white">
                      {item.degree}
                    </h3>


                    {/* FIELD */}

                    <p className="education-reveal mb-3 text-sm text-cyan-400">
                      {item.field}
                    </p>


                    {/* INSTITUTION */}

                    <p className="education-reveal mb-2 font-medium text-slate-300">
                      {item.institution}
                    </p>


                    {/* RESULT */}

                    <div className="education-result inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                      {item.result}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend",
      skills: ["Django", "Django REST Framework", "FastAPI"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Cybersecurity",
      skills: ["Wazuh", "Wireshark", "Nmap", "Burp Suite"],
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

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            ...cardsRef.current.children,
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          }
        );

        return;
      }

      // ==========================================
      // DAY 28 — STEP 1
      // Section heading reveal
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
            trigger: skillsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ==========================================
      // DAY 28 — STEP 2
      // Skill category cards reveal
      // ==========================================

      const cards = Array.from(cardsRef.current.children);

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
          rotateX: 8,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ==========================================
      // DAY 28 — STEP 3
      // Individual card content reveal
      // ==========================================

      cards.forEach((card) => {
        const title = card.querySelector(".skill-category-title");
        const pills = card.querySelectorAll(".skill-pill");

        gsap.fromTo(
          title,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",

            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          pills,
          {
            y: 15,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.45,
            stagger: 0.06,
            ease: "back.out(1.4)",

            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ==========================================
      // DAY 28 — STEP 4
      // Skill pill hover polish
      // ==========================================

      const skillPills =
        cardsRef.current.querySelectorAll(".skill-pill");

      skillPills.forEach((pill) => {
        const handleMouseEnter = () => {
          gsap.to(pill, {
            y: -4,
            scale: 1.06,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(pill, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        pill.addEventListener(
          "mouseenter",
          handleMouseEnter
        );

        pill.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        pill._handleMouseEnter = handleMouseEnter;
        pill._handleMouseLeave = handleMouseLeave;
      });

      // ==========================================
      // DAY 28 — STEP 5
      // Card 3D hover polish
      // ==========================================

      cards.forEach((card) => {
        const handleMouseMove = (event) => {
          const rect = card.getBoundingClientRect();

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
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
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
      // DAY 28 — STEP 6
      // Scroll-based card glow
      // ==========================================

      cards.forEach((card) => {
        const glow =
          card.querySelector(".skill-card-glow");

        gsap.to(glow, {
          opacity: 0.65,
          scale: 1.15,
          ease: "none",

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      });

      // ==========================================
      // DAY 28 — STEP 7
      // Section parallax
      // ==========================================

      gsap.to(headingRef.current, {
        y: -20,
        ease: "none",

        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // ==========================================
      // PERFORMANCE
      // ==========================================

      gsap.set(
        [
          headingRef.current,
          ...cards,
          ...skillPills,
        ],
        {
          force3D: true,
        }
      );

      // ==========================================
      // CLEANUP
      // ==========================================

      return () => {
        skillPills.forEach((pill) => {
          pill.removeEventListener(
            "mouseenter",
            pill._handleMouseEnter
          );

          pill.removeEventListener(
            "mouseleave",
            pill._handleMouseLeave
          );
        });

        cards.forEach((card) => {
          card.removeEventListener(
            "mousemove",
            card._handleMouseMove
          );

          card.removeEventListener(
            "mouseleave",
            card._handleMouseLeave
          );
        });
      };
    }, skillsRef);

    // Refresh ScrollTrigger after everything is initialized
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Skills
          </p>

          <h2 className="section-title mt-3">
            Technologies I work with.
          </h2>

          <p className="section-subtitle">
            A collection of technologies and tools I use
            to build modern applications and solve
            practical problems.
          </p>
        </div>


        {/* ==========================================
            SKILL CARDS
        ========================================== */}

        <div
          ref={cardsRef}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{
            perspective: "1200px",
          }}
        >

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}

              initial={false}

              whileHover={{
                y: -10,
                scale: 1.02,

                transition: {
                  duration: 0.25,
                },
              }}

              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}

              className="card card-hover group relative overflow-hidden border border-slate-800/60 bg-slate-950/80 p-6 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
            >

              {/* ==================================
                  CARD GLOW
              ================================== */}

              <div
                className="skill-card-glow pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20"
                style={{
                  transform:
                    "translateZ(20px)",
                  opacity: 0.3,
                }}
              />


              {/* ==================================
                  SECONDARY GLOW
              ================================== */}

              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all duration-700 group-hover:bg-blue-500/15"
                style={{
                  transform:
                    "translateZ(10px)",
                }}
              />


              {/* ==================================
                  CATEGORY TITLE
              ================================== */}

              <h3
                className="skill-category-title relative z-10 mb-5 text-xl font-semibold text-slate-100"
                style={{
                  transform:
                    "translateZ(30px)",
                }}
              >
                {category.title}
              </h3>


              {/* ==================================
                  SKILLS
              ================================== */}

              <div
                className="relative z-10 flex flex-wrap gap-3"
                style={{
                  transform:
                    "translateZ(35px)",
                }}
              >

                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}

                    className="skill-pill cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-sm transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-400/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"

                    whileHover={{
                      rotateZ: 1,
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}

                    style={{
                      willChange: "transform",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
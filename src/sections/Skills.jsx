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
      // ==================== HEADING ANIMATION ====================

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
            once: true,
          },
        }
      );

      // ==================== CARDS ANIMATION ====================

      gsap.fromTo(
        cardsRef.current.children,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==================== SECTION HEADING ==================== */}

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
            A collection of technologies and tools I use to build modern
            applications and solve practical problems.
          </p>
        </div>

        {/* ==================== SKILL CARDS ==================== */}

        <div
          ref={cardsRef}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}

              /* ==================== 3D HOVER ==================== */

              whileHover={{
                y: -10,
                rotateX: 6,
                rotateY: -6,
                scale: 1.02,

                transition: {
                  duration: 0.25,
                },
              }}

              style={{
                transformStyle: "preserve-3d",
              }}

              className="card card-hover group relative overflow-hidden border border-slate-800/60 bg-slate-950/80 p-6 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
            >

              {/* ==================== 3D GLOW ==================== */}

              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20"
                style={{
                  transform: "translateZ(20px)",
                }}
              />

              {/* ==================== CATEGORY TITLE ==================== */}

              <h3
                className="relative z-10 mb-5 text-xl font-semibold text-slate-100"
                style={{
                  transform: "translateZ(30px)",
                }}
              >
                {category.title}
              </h3>

              {/* ==================== SKILLS ==================== */}

              <div
                className="relative z-10 flex flex-wrap gap-3"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}

                    whileHover={{
                      y: -5,
                      scale: 1.08,
                      rotateZ: 1,
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}

                    className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-sm transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-400/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
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
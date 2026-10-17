
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
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
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
      skills: ["Git", "GitHub", "VS Code", "Postman", "GitHub Copilot"],
    },
  ];

  useLayoutEffect(() => {
    const section = skillsRef.current;
    const heading = headingRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !heading || !cardsContainer) return;

    const cards = Array.from(cardsContainer.children);
    const allPills = cardsContainer.querySelectorAll(".skill-pill");

    // Ensure all content is visible before animations begin.
    gsap.set([heading, ...cards], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    });

    gsap.set(
      cardsContainer.querySelectorAll(
        ".skill-category-title, .skill-pill"
      ),
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }
    );

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // Section heading reveal.
      gsap.fromTo(
        heading,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Reveal cards without hiding their individual contents.
      gsap.fromTo(
        cards,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: cardsContainer,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Scroll-based card glow.
      cards.forEach((card) => {
        const glow = card.querySelector(".skill-card-glow");

        if (glow) {
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
        }
      });

      // Subtle section parallax.
      gsap.to(heading, {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Performance optimization.
      gsap.set([heading, ...cards, ...allPills], {
        force3D: true,
      });

      // Skill pill hover animations.
      allPills.forEach((pill) => {
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

        pill.addEventListener("mouseenter", handleMouseEnter);
        pill.addEventListener("mouseleave", handleMouseLeave);

        pill._handleMouseEnter = handleMouseEnter;
        pill._handleMouseLeave = handleMouseLeave;
      });

      // Card hover and 3D tilt.
      cards.forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const handleMouseMove = (event) => {
          const rect = card.getBoundingClientRect();

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const rotateY = ((x - centerX) / centerX) * 4;
          const rotateX = ((centerY - y) / centerY) * 4;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        card._handleMouseEnter = handleMouseEnter;
        card._handleMouseMove = handleMouseMove;
        card._handleMouseLeave = handleMouseLeave;
      });

      // Clean up event listeners.
      return () => {
        allPills.forEach((pill) => {
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
            "mouseenter",
            card._handleMouseEnter
          );
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
    }, section);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="section-padding overflow-hidden"
    >
      <div className="container-custom">
        {/* Section heading */}
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

        {/* Skill cards */}
        <div
          ref={cardsRef}
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
          style={{
            perspective: "1200px",
          }}
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="
                card
                card-hover
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800/70
                bg-gradient-to-br
                from-slate-900/95
                via-slate-950/95
                to-slate-950
                p-5
                sm:p-7
                shadow-lg
                shadow-black/20
                transition-colors
                duration-300
                hover:border-blue-400/40
                hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
              "
            >
              {/* Card glow */}
              <div
                className="
                  skill-card-glow
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-blue-400/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-blue-400/20
                "
                style={{
                  transform: "translateZ(20px)",
                  opacity: 0.3,
                }}
              />

              {/* Secondary glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16
                  h-32
                  w-32
                  rounded-full
                  bg-blue-500/5
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:bg-blue-500/15
                "
                style={{
                  transform: "translateZ(10px)",
                }}
              />

              {/* Category title */}
              <h3
                className="
                  skill-category-title
                  relative
                  z-10
                  mb-4
                  text-lg
                  sm:mb-5
                  sm:text-xl
                  font-semibold
                  tracking-tight
                  text-slate-100
                  transition-colors
                  duration-300
                  group-hover:text-blue-100
                "
                style={{
                  transform: "translateZ(30px)",
                  opacity: 1,
                }}
              >
                {category.title}
              </h3>

              {/* Skills */}
              <div
                className="
                  relative
                  z-10
                  flex
                  flex-wrap
                  gap-2
                  sm:gap-3
                "
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="
                      skill-pill
                      relative
                      rounded-full
                      border
                      border-slate-700/70
                      bg-slate-800/60
                      px-3
                      py-1.5
                      text-xs
                      sm:px-4
                      sm:py-2
                      sm:text-sm
                      font-medium
                      text-slate-300
                      shadow-sm
                      transition-colors
                      duration-300
                      hover:border-blue-400/60
                      hover:bg-blue-400/10
                      hover:text-blue-300
                      hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                    "
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
                      opacity: 1,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

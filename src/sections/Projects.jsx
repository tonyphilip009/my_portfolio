
import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import projects from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [filter, setFilter] = useState("All");

  const projectsRef = useRef(null);

  // ==================== HEADING REFS ====================

  const headingRef = useRef(null);
  const headingLabelRef = useRef(null);
  const headingTitleRef = useRef(null);
  const headingSubtitleRef = useRef(null);

  // ==================== OTHER REFS ====================

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
      : projects.filter(
          (project) => project.status === filter
        );

  const filters = [
    "All",
    "Completed",
    "In Progress",
  ];

  /*
  ==================================================
  MAIN ANIMATION SYSTEM
  ==================================================
  */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const projectCards = Array.from(
        projectsGridRef.current?.children || []
      );

      const filterButtons = Array.from(
        filtersRef.current?.children || []
      );

      const strengthCards = Array.from(
        strengthCardsRef.current?.children || []
      );

      /*
      ==================================================
      REDUCED MOTION
      ==================================================
      */

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingLabelRef.current,
            headingTitleRef.current,
            headingSubtitleRef.current,
            ...Array.from(
              summaryRef.current?.children || []
            ),
            ...filterButtons,
            ...projectCards,
            bottomSectionRef.current,
            ...strengthCards,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotate: 0,
          }
        );

        return;
      }

      /*
      ==================================================
      SECTION LABEL
      ==================================================
      */

      gsap.fromTo(
        headingLabelRef.current,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      SECTION TITLE
      ==================================================
      */

      gsap.fromTo(
        headingTitleRef.current,
        {
          y: 55,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      TITLE PARALLAX
      ==================================================
      */

      gsap.to(headingTitleRef.current, {
        y: -12,
        ease: "none",

        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /*
      ==================================================
      SECTION SUBTITLE
      ==================================================
      */

      gsap.fromTo(
        headingSubtitleRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.18,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      PROJECT SUMMARY
      ==================================================
      */

      const summaryCards = Array.from(
        summaryRef.current?.children || []
      );

      gsap.fromTo(
        summaryCards,
        {
          y: 35,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.5)",

          scrollTrigger: {
            trigger: summaryRef.current,
            start: "top 88%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      SUMMARY CARD HOVER
      ==================================================
      */

      summaryCards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            y: -5,
            scale: 1.04,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.25,
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

        card._summaryEnter = handleEnter;
        card._summaryLeave = handleLeave;
      });

      /*
      ==================================================
      FILTER BUTTONS REVEAL
      ==================================================
      */

      gsap.fromTo(
        filterButtons,
        {
          y: 35,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 88%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      FILTER BUTTON HOVER
      ==================================================
      */

      filterButtons.forEach((button) => {
        const handleEnter = () => {
          if (
            button.textContent.trim() === filter
          ) {
            return;
          }

          gsap.to(button, {
            y: -3,
            scale: 1.03,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          if (
            button.textContent.trim() === filter
          ) {
            return;
          }

          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        button.addEventListener(
          "mouseenter",
          handleEnter
        );

        button.addEventListener(
          "mouseleave",
          handleLeave
        );

        button._filterEnter = handleEnter;
        button._filterLeave = handleLeave;
      });

      /*
      ==================================================
      PROJECT CARD REVEAL
      ==================================================
      */

      gsap.fromTo(
        projectCards,
        {
          y: 75,
          opacity: 0,
          rotateX: 7,
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
            trigger: projectsGridRef.current,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      PROJECT CARD CONTENT REVEAL
      ==================================================
      */

      projectCards.forEach((card) => {
        const image = card.querySelector("img");

        const badges =
          card.querySelectorAll(
            ".project-badge"
          );

        const title =
          card.querySelector(
            ".project-title"
          );

        const overview =
          card.querySelector(
            ".project-overview"
          );

        const technologies =
          card.querySelectorAll(
            ".project-technology"
          );

        const architecture =
          card.querySelector(
            ".project-architecture"
          );

        const features =
          card.querySelectorAll(
            ".project-feature"
          );

        const highlight =
          card.querySelector(
            ".project-highlight"
          );

        const learning =
          card.querySelector(
            ".project-learning"
          );

        const buttons =
          card.querySelectorAll(
            ".project-button"
          );

        /*
        ==============================
        IMAGE REVEAL
        ==============================
        */

        if (image) {
          gsap.fromTo(
            image,
            {
              opacity: 0,
              scale: 1.08,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",

              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        BADGES
        ==============================
        */

        if (badges.length > 0) {
          gsap.fromTo(
            badges,
            {
              y: 15,
              opacity: 0,
              scale: 0.85,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "back.out(1.7)",

              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        TITLE
        ==============================
        */

        if (title) {
          gsap.fromTo(
            title,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",

              scrollTrigger: {
                trigger: card,
                start: "top 73%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        OVERVIEW
        ==============================
        */

        if (overview) {
          gsap.fromTo(
            overview,
            {
              y: 18,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",

              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        TECHNOLOGIES
        ==============================
        */

        if (technologies.length > 0) {
          gsap.fromTo(
            technologies,
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
              stagger: 0.05,
              ease: "back.out(1.4)",

              scrollTrigger: {
                trigger: card,
                start: "top 65%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        ARCHITECTURE
        ==============================
        */

        if (architecture) {
          gsap.fromTo(
            architecture,
            {
              y: 20,
              opacity: 0,
              scale: 0.98,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",

              scrollTrigger: {
                trigger: architecture,
                start: "top 90%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        FEATURES
        ==============================
        */

        if (features.length > 0) {
          gsap.fromTo(
            features,
            {
              x: -15,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.out",

              scrollTrigger: {
                trigger: card,
                start: "top 60%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        SPECIAL HIGHLIGHT
        ==============================
        */

        if (highlight) {
          gsap.fromTo(
            highlight,
            {
              y: 20,
              opacity: 0,
              scale: 0.97,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",

              scrollTrigger: {
                trigger: highlight,
                start: "top 90%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        LEARNING SECTION
        ==============================
        */

        if (learning) {
          gsap.fromTo(
            learning,
            {
              y: 20,
              opacity: 0,
              scale: 0.97,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",

              scrollTrigger: {
                trigger: learning,
                start: "top 90%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }

        /*
        ==============================
        BUTTONS
        ==============================
        */

        if (buttons.length > 0) {
          gsap.fromTo(
            buttons,
            {
              y: 20,
              opacity: 0,
              scale: 0.92,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.5)",

              scrollTrigger: {
                trigger: card,
                start: "top 55%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        }
      });

      /*
      ==================================================
      PROJECT CARD 3D TILT
      ==================================================
      */

      projectCards.forEach((card) => {
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
            y: -7,
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

      /*
      ==================================================
      PROJECT IMAGE HOVER
      ==================================================
      */

      projectCards.forEach((card) => {
        const image =
          card.querySelector("img");

        if (!image) return;

        const handleEnter = () => {
          gsap.to(image, {
            scale: 1.04,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        image.addEventListener(
          "mouseenter",
          handleEnter
        );

        image.addEventListener(
          "mouseleave",
          handleLeave
        );

        image._handleEnter =
          handleEnter;

        image._handleLeave =
          handleLeave;
      });

      /*
      ==================================================
      PROJECT CARD GLOW
      ==================================================
      */

      projectCards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            borderColor:
              "rgba(59,130,246,0.5)",
            boxShadow:
              "0 0 35px rgba(59,130,246,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            borderColor:
              "rgba(30,41,59,0.7)",
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

        card._handleEnter =
          handleEnter;

        card._handleLeave =
          handleLeave;
      });

      /*
      ==================================================
      PROJECT BUTTON HOVER
      ==================================================
      */

      projectCards.forEach((card) => {
        const buttons =
          card.querySelectorAll(
            ".project-button"
          );

        buttons.forEach((button) => {
          const handleEnter = () => {
            gsap.to(button, {
              y: -3,
              scale: 1.04,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(button, {
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          button.addEventListener(
            "mouseenter",
            handleEnter
          );

          button.addEventListener(
            "mouseleave",
            handleLeave
          );

          button._buttonEnter =
            handleEnter;

          button._buttonLeave =
            handleLeave;
        });
      });

      /*
      ==================================================
      FEATURED PROJECT BADGE
      ==================================================
      */

      projectCards.forEach((card) => {
        const featured =
          card.querySelector(
            ".project-featured"
          );

        if (!featured) return;

        gsap.to(featured, {
          boxShadow:
            "0 0 18px rgba(59,130,246,0.18)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /*
      ==================================================
      PROJECT CARD PARALLAX
      ==================================================
      */

      projectCards.forEach(
        (card, index) => {
          gsap.to(card, {
            y:
              index % 2 === 0
                ? -8
                : 8,

            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      );

      /*
      ==================================================
      BOTTOM SECTION
      ==================================================
      */

      gsap.fromTo(
        bottomSectionRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: bottomSectionRef.current,
            start: "top 88%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      STRENGTH CARDS
      ==================================================
      */

      gsap.fromTo(
        strengthCards,
        {
          y: 50,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: strengthCardsRef.current,
            start: "top 88%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      STRENGTH CARD HOVER
      ==================================================
      */

      strengthCards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            y: -6,
            scale: 1.02,
            borderColor:
              "rgba(59,130,246,0.45)",
            boxShadow:
              "0 0 28px rgba(59,130,246,0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
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

        card._strengthEnter =
          handleEnter;

        card._strengthLeave =
          handleLeave;
      });

      /*
      ==================================================
      PERFORMANCE
      ==================================================
      */

      gsap.set(
        [
          headingLabelRef.current,
          headingTitleRef.current,
          headingSubtitleRef.current,
          ...summaryCards,
          ...filterButtons,
          ...projectCards,
          bottomSectionRef.current,
          ...strengthCards,
        ],
        {
          force3D: true,
        }
      );

      /*
      ==================================================
      REFRESH
      ==================================================
      */

      ScrollTrigger.refresh();

      /*
      ==================================================
      CLEANUP
      ==================================================
      */

      return () => {
        projectCards.forEach((card) => {
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

          const image =
            card.querySelector("img");

          if (image) {
            image.removeEventListener(
              "mouseenter",
              image._handleEnter
            );

            image.removeEventListener(
              "mouseleave",
              image._handleLeave
            );
          }

          const buttons =
            card.querySelectorAll(
              ".project-button"
            );

          buttons.forEach((button) => {
            button.removeEventListener(
              "mouseenter",
              button._buttonEnter
            );

            button.removeEventListener(
              "mouseleave",
              button._buttonLeave
            );
          });
        });

        summaryCards.forEach((card) => {
          card.removeEventListener(
            "mouseenter",
            card._summaryEnter
          );

          card.removeEventListener(
            "mouseleave",
            card._summaryLeave
          );
        });

        filterButtons.forEach((button) => {
          button.removeEventListener(
            "mouseenter",
            button._filterEnter
          );

          button.removeEventListener(
            "mouseleave",
            button._filterLeave
          );
        });

        strengthCards.forEach((card) => {
          card.removeEventListener(
            "mouseenter",
            card._strengthEnter
          );

          card.removeEventListener(
            "mouseleave",
            card._strengthLeave
          );
        });
      };
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  /*
  ==================================================
  FILTER CHANGE ANIMATION
  ==================================================
  */

  useLayoutEffect(() => {
    if (!projectsGridRef.current) {
      return;
    }

    const cards = Array.from(
      projectsGridRef.current.children
    );

    if (cards.length === 0) {
      return;
    }

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    ScrollTrigger.refresh();
  }, [filter]);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p
            ref={headingLabelRef}
            className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400"
          >
            Projects
          </p>

          <h2
            ref={headingTitleRef}
            className="section-title mt-3"
          >
            Things I've built.
          </h2>

          <p
            ref={headingSubtitleRef}
            className="section-subtitle"
          >
            A selection of projects that showcase my
            experience with full-stack development and
            modern web technologies.
          </p>
        </div>

        {/* ==================================================
            PROJECT SUMMARY
        ================================================== */}

        <div
          ref={summaryRef}
          className="mt-7 flex flex-wrap gap-2 sm:gap-3"
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

        {/* ==================================================
            PROJECT FILTERS
        ================================================== */}

        <div
          ref={filtersRef}
          className="mt-7 flex flex-wrap gap-2 sm:gap-3"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              type="button"
              onClick={() =>
                setFilter(filterOption)
              }
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

        {/* ==================================================
            PROJECTS GRID
        ================================================== */}

        <div
          ref={projectsGridRef}
          className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-2"
          style={{
            perspective: "1200px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="card card-hover flex h-full flex-col overflow-hidden border border-slate-800/70 bg-slate-950/85 transition-all duration-500"
              style={{
                transformStyle:
                  "preserve-3d",
                willChange: "transform",
              }}
            >

              {/* ==================================================
                  PROJECT IMAGE
              ================================================== */}

              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover sm:h-56 lg:h-64"
                  />
                </div>
              )}

              {/* ==================================================
                  PROJECT CONTENT
              ================================================== */}

              <div className="flex flex-1 flex-col bg-slate-950/70 p-5 sm:p-6">

                {/* ==================================================
                    BADGES
                ================================================== */}

                <div className="mb-3 flex flex-wrap items-center gap-2">

                  {project.featured && (
                    <span
                      className="project-badge project-featured inline-flex w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400"
                    >
                      Featured Project
                    </span>
                  )}

                  {project.status && (
                    <span
                      className={`project-badge inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                        project.status ===
                        "Completed"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status ===
                          "Completed"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      />

                      {project.status}
                    </span>
                  )}

                </div>

                {/* ==================================================
                    PROJECT TITLE
                ================================================== */}

                <h3 className="project-title text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>

                {/* ==================================================
                    PROJECT OVERVIEW
                ================================================== */}

                <div className="project-overview mt-4">

                  <h4 className="text-sm font-semibold text-slate-200">
                    Project Overview
                  </h4>

                  <p className="mt-2 leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                </div>

                {/* ==================================================
                    TECHNOLOGIES
                ================================================== */}

                {project.technologies &&
                  project.technologies.length >
                    0 && (
                    <div className="mt-6">

                      <h4 className="mb-3 text-sm font-semibold text-slate-200">
                        Technology Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="project-technology rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>

                    </div>
                  )}

                {/* ==================================================
                    ARCHITECTURE
                ================================================== */}

                {project.stackSummary && (
                  <div className="project-architecture mt-6 rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">

                    <h4 className="text-sm font-semibold text-slate-200">
                      Architecture
                    </h4>

                    <div className="mt-3 space-y-2 text-sm">

                      {project.stackSummary
                        .frontend && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Frontend:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .frontend
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .backend && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Backend:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .backend
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .database && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Database:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .database
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .threeD && (
                        <div>
                          <span className="font-medium text-blue-300">
                            3D:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .threeD
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .buildTool && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Build Tool:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .buildTool
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .platform && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Platform:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .platform
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .environment && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Environment:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .environment
                            }
                          </span>
                        </div>
                      )}

                      {project.stackSummary
                        .monitoring && (
                        <div>
                          <span className="font-medium text-blue-300">
                            Monitoring:
                          </span>{" "}
                          <span className="text-slate-400">
                            {
                              project
                                .stackSummary
                                .monitoring
                            }
                          </span>
                        </div>
                      )}

                    </div>

                  </div>
                )}

                {/* ==================================================
                    KEY FEATURES
                ================================================== */}

                {project.features &&
                  project.features.length >
                    0 && (
                    <div className="mt-6">

                      <h4 className="text-sm font-semibold text-slate-200">
                        Key Features
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.features.map(
                          (feature) => (
                            <li
                              key={feature}
                              className="project-feature flex items-start gap-2 text-sm text-slate-400"
                            >
                              <span className="mt-1 text-blue-400">
                                ✓
                              </span>

                              <span>
                                {feature}
                              </span>
                            </li>
                          )
                        )}

                      </ul>

                    </div>
                  )}

                {/* ==================================================
                    DENTAL CLINIC HIGHLIGHT
                ================================================== */}

                {project.title ===
                  "Dental Clinic Website" && (
                  <div className="project-highlight mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                    <h4 className="text-sm font-semibold text-blue-300">
                      Booking & Availability
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Patients can select a dentist,
                      choose a date, view available
                      time slots, and submit an
                      appointment. The backend
                      validates availability and
                      prevents double bookings.
                    </p>

                  </div>
                )}

                {/* ==================================================
                    DEVELOPER PORTFOLIO HIGHLIGHT
                ================================================== */}

                {project.title ===
                  "Developer Portfolio" &&
                  project.highlights &&
                  project.highlights.length >
                    0 && (
                    <div className="project-highlight mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                      <h4 className="text-sm font-semibold text-blue-300">
                        Development Highlights
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.highlights.map(
                          (highlight) => (
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
                          )
                        )}

                      </ul>

                    </div>
                  )}

                {/* ==================================================
                    DEVELOPER PORTFOLIO LEARNING
                ================================================== */}

                {project.title ===
                  "Developer Portfolio" &&
                  project.learning &&
                  project.learning.length >
                    0 && (
                    <div className="project-learning mt-6 rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">

                      <h4 className="text-sm font-semibold text-slate-200">
                        What I'm Learning
                      </h4>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">

                        {project.learning.map(
                          (item) => (
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
                          )
                        )}

                      </ul>

                    </div>
                  )}

                {/* ==================================================
                    PROJECT BUTTONS
                ================================================== */}

                <div className="mt-auto flex flex-wrap gap-3 pt-8">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button inline-flex w-full items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-300 transition duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200 sm:w-auto sm:py-2"
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
                      className="project-button inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 sm:w-auto sm:py-2"
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

        {/* ==================================================
            EMPTY STATE
        ================================================== */}

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-xl border border-slate-700/60 bg-slate-900/70 p-8 text-center">
            <p className="text-slate-400">
              No projects found for this filter.
            </p>
          </div>
        )}

        {/* ==================================================
            WHY THESE PROJECTS MATTER
        ================================================== */}

        <div
          ref={bottomSectionRef}
          className="mt-12 border-t border-slate-800 pt-10 sm:mt-16 sm:pt-12"
        >
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              What These Projects Show
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-slate-50">
              More than just code.
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              These projects demonstrate my ability
              to design, build and connect different
              parts of modern applications while
              solving practical problems.
            </p>

          </div>

          {/* ==================================================
              PROJECT STRENGTHS
          ================================================== */}

          <div
            ref={strengthCardsRef}
            className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4"
          >

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 sm:p-5">

              <h4 className="font-semibold text-slate-100">
                Full-Stack Development
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Building applications across
                frontend, backend and database
                layers.
              </p>

            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 sm:p-5">

              <h4 className="font-semibold text-slate-100">
                API Integration
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Connecting React interfaces with
                Django REST APIs and handling
                application data.
              </p>

            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 sm:p-5">

              <h4 className="font-semibold text-slate-100">
                Problem Solving
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Implementing validation,
                availability logic and reliable
                application workflows.
              </p>

            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 sm:p-5">

              <h4 className="font-semibold text-slate-100">
                Continuous Learning
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Continuously improving my skills by
                building and refining real-world
                projects.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const resumeRef = useRef(null);

  // ==================== HEADING REFS ====================

  const headingRef = useRef(null);
  const headingLabelRef = useRef(null);
  const headingTitleRef = useRef(null);
  const headingSubtitleRef = useRef(null);

  // ==================== CARD REFS ====================

  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const highlightsRef = useRef(null);
  const buttonsRef = useRef(null);
  const accentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const highlightItems = Array.from(
        highlightsRef.current?.children || []
      );

      const buttons = Array.from(
        buttonsRef.current?.children || []
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
            cardRef.current,
            iconRef.current,
            nameRef.current,
            roleRef.current,
            descriptionRef.current,
            ...highlightItems,
            ...buttons,
            accentRef.current,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotation: 0,
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
          y: 50,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
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
      HEADING PARALLAX
      ==================================================
      */

      gsap.to(headingTitleRef.current, {
        y: -10,
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
          y: 25,
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
      RESUME CARD
      ==================================================
      */

      gsap.fromTo(
        cardRef.current,
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
          duration: 1,
          delay: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      ICON REVEAL
      ==================================================
      */

      gsap.fromTo(
        iconRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: -20,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          delay: 0.3,
          ease: "back.out(1.7)",

          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      NAME REVEAL
      ==================================================
      */

      gsap.fromTo(
        nameRef.current,
        {
          x: 25,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.35,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      ROLE REVEAL
      ==================================================
      */

      gsap.fromTo(
        roleRef.current,
        {
          x: 25,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          delay: 0.42,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      DESCRIPTION REVEAL
      ==================================================
      */

      gsap.fromTo(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.45,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 78%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      RESUME HIGHLIGHTS STAGGER
      ==================================================
      */

      gsap.fromTo(
        highlightItems,
        {
          y: 20,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.5)",

          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 88%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      HIGHLIGHT HOVER
      ==================================================
      */

      highlightItems.forEach((item) => {
        const handleEnter = () => {
          gsap.to(item, {
            y: -4,
            scale: 1.05,
            borderColor:
              "rgba(59,130,246,0.5)",
            backgroundColor:
              "rgba(30,41,59,0.8)",
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            borderColor:
              "rgba(51,65,85,1)",
            backgroundColor:
              "rgba(30,41,59,0.5)",
            duration: 0.25,
            ease: "power2.out",
          });
        };

        item.addEventListener(
          "mouseenter",
          handleEnter
        );

        item.addEventListener(
          "mouseleave",
          handleLeave
        );

        item._handleEnter = handleEnter;
        item._handleLeave = handleLeave;
      });

      /*
      ==================================================
      BUTTON REVEAL
      ==================================================
      */

      gsap.fromTo(
        buttons,
        {
          y: 25,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.5)",

          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 90%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      BUTTON HOVER
      ==================================================
      */

      buttons.forEach((button) => {
        const handleEnter = () => {
          gsap.to(button, {
            y: -4,
            scale: 1.04,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.25,
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

        button._handleEnter = handleEnter;
        button._handleLeave = handleLeave;
      });

      /*
      ==================================================
      CARD 3D TILT
      ==================================================
      */

      const handleCardMouseMove = (event) => {
        const rect =
          cardRef.current.getBoundingClientRect();

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

        gsap.to(cardRef.current, {
          rotateX,
          rotateY,
          y: -5,
          scale: 1.005,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const handleCardMouseLeave = () => {
        gsap.to(cardRef.current, {
          rotateX: 0,
          rotateY: 0,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      cardRef.current.addEventListener(
        "mousemove",
        handleCardMouseMove
      );

      cardRef.current.addEventListener(
        "mouseleave",
        handleCardMouseLeave
      );

      /*
      ==================================================
      CARD GLOW
      ==================================================
      */

      const handleCardEnter = () => {
        gsap.to(cardRef.current, {
          borderColor:
            "rgba(59,130,246,0.5)",
          boxShadow:
            "0 0 40px rgba(59,130,246,0.12)",
          backgroundColor:
            "rgba(15,23,42,0.65)",
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const handleCardLeave = () => {
        gsap.to(cardRef.current, {
          borderColor:
            "rgba(51,65,85,0.6)",
          boxShadow:
            "0 0 0 rgba(59,130,246,0)",
          backgroundColor:
            "rgba(15,23,42,0.4)",
          duration: 0.35,
          ease: "power2.out",
        });
      };

      cardRef.current.addEventListener(
        "mouseenter",
        handleCardEnter
      );

      cardRef.current.addEventListener(
        "mouseleave",
        handleCardLeave
      );

      /*
      ==================================================
      ICON FLOAT
      ==================================================
      */

      gsap.to(iconRef.current, {
        y: -4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ==================================================
      BOTTOM ACCENT
      ==================================================
      */

      gsap.fromTo(
        accentRef.current,
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: accentRef.current,
            start: "top 95%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      CARD PARALLAX
      ==================================================
      */

      gsap.to(cardRef.current, {
        y: -8,
        ease: "none",

        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /*
      ==================================================
      FORCE GPU ACCELERATION
      ==================================================
      */

      gsap.set(
        [
          headingLabelRef.current,
          headingTitleRef.current,
          headingSubtitleRef.current,
          cardRef.current,
          iconRef.current,
          nameRef.current,
          roleRef.current,
          descriptionRef.current,
          ...highlightItems,
          ...buttons,
          accentRef.current,
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
        cardRef.current.removeEventListener(
          "mousemove",
          handleCardMouseMove
        );

        cardRef.current.removeEventListener(
          "mouseleave",
          handleCardMouseLeave
        );

        cardRef.current.removeEventListener(
          "mouseenter",
          handleCardEnter
        );

        cardRef.current.removeEventListener(
          "mouseleave",
          handleCardLeave
        );

        highlightItems.forEach((item) => {
          item.removeEventListener(
            "mouseenter",
            item._handleEnter
          );

          item.removeEventListener(
            "mouseleave",
            item._handleLeave
          );
        });

        buttons.forEach((button) => {
          button.removeEventListener(
            "mouseenter",
            button._handleEnter
          );

          button.removeEventListener(
            "mouseleave",
            button._handleLeave
          );
        });
      };
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

        {/* ==================== SECTION HEADER ==================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p
            ref={headingLabelRef}
            className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400"
          >
            Resume
          </p>

          <h2
            ref={headingTitleRef}
            className="section-title mt-3"
          >
            My professional profile.
          </h2>

          <p
            ref={headingSubtitleRef}
            className="section-subtitle"
          >
            Explore my skills, experience, projects and
            technical background in detail.
          </p>
        </div>

        {/* ==================== RESUME CARD ==================== */}

        <div
          ref={cardRef}
          className="mt-12 max-w-4xl"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
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
            "
          >
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">

              {/* ==================== RESUME INFORMATION ==================== */}

              <div>

                {/* PROFILE HEADER */}

                <div className="flex items-center gap-4">

                  <div
                    ref={iconRef}
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
                    style={{
                      willChange: "transform",
                    }}
                  >
                    📄
                  </div>

                  <div>
                    <h3
                      ref={nameRef}
                      className="text-2xl font-semibold text-slate-50"
                    >
                      Tony Philip
                    </h3>

                    <p
                      ref={roleRef}
                      className="mt-1 text-slate-400"
                    >
                      Full Stack Developer
                    </p>
                  </div>

                </div>

                {/* DESCRIPTION */}

                <p
                  ref={descriptionRef}
                  className="mt-6 max-w-2xl text-sm leading-7 text-slate-400"
                >
                  Computer Science and Engineering student
                  focused on full-stack development, Django,
                  React, REST APIs, databases and
                  cybersecurity.
                </p>

                {/* ==================== RESUME HIGHLIGHTS ==================== */}

                <div
                  ref={highlightsRef}
                  className="mt-6 flex flex-wrap gap-3"
                >
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

              {/* ==================== BUTTONS ==================== */}

              <div
                ref={buttonsRef}
                className="flex flex-col gap-3 sm:flex-row md:flex-col"
              >

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

            {/* ==================== BOTTOM ACCENT ==================== */}

            <div
              ref={accentRef}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
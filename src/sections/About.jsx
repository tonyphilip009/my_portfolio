import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  const introHeadingRef = useRef(null);
  const skillsHeadingRef = useRef(null);

  const bottomRef = useRef(null);

  const bottomText =
    "I am continuously learning, building projects and improving my problem-solving skills with the goal of becoming a strong software developer.";

  const bottomWords = bottomText.split(" ");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      /*
      ==========================================
      REDUCED MOTION
      ==========================================
      */

      if (prefersReducedMotion) {
        return;
      }

      /*
      ==========================================
      DAY 27 — STEP 1
      SECTION HEADING REVEAL
      ==========================================
      */

      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 2
      INTRODUCTION PARAGRAPHS
      ==========================================
      */

      const introParagraphs = introRef.current
        ? Array.from(
            introRef.current.querySelectorAll("p")
          )
        : [];

      if (introParagraphs.length > 0) {
        gsap.from(introParagraphs, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 3
      ABOUT CARDS
      ==========================================
      */

      const cards = cardsRef.current
        ? Array.from(
            cardsRef.current.querySelectorAll(".about-card")
          )
        : [];

      if (cards.length > 0) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 4
      SUBHEADING ANIMATIONS
      ==========================================
      */

      if (introHeadingRef.current) {
        gsap.from(introHeadingRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",

          scrollTrigger: {
            trigger: introHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (skillsHeadingRef.current) {
        gsap.from(skillsHeadingRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",

          scrollTrigger: {
            trigger: skillsHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 5
      BOTTOM STATEMENT
      ==========================================
      */

      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",

          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 6
      CARD HOVER ANIMATION
      ==========================================
      */

      cards.forEach((card) => {
        const title = card.querySelector("h4");
        const description = card.querySelector("p");

        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });

          if (title) {
            gsap.to(title, {
              y: -3,
              duration: 0.25,
              ease: "power2.out",
            });
          }

          if (description) {
            gsap.to(description, {
              y: -2,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          if (title) {
            gsap.to(title, {
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          }

          if (description) {
            gsap.to(description, {
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener(
          "mouseenter",
          handleMouseEnter
        );

        card.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        card._handleMouseEnter = handleMouseEnter;
        card._handleMouseLeave = handleMouseLeave;
      });

      /*
      ==========================================
      DAY 27 — STEP 7
      CARD CONTENT REVEAL
      ==========================================
      */

      cards.forEach((card) => {
        const title = card.querySelector("h4");
        const description = card.querySelector("p");

        const cardContent = [
          title,
          description,
        ].filter(Boolean);

        if (cardContent.length === 0) {
          return;
        }

        gsap.from(cardContent, {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /*
      ==========================================
      DAY 27 — STEP 10
      HEADING PARALLAX
      ==========================================
      */

      if (
        headingRef.current &&
        sectionRef.current
      ) {
        gsap.to(headingRef.current, {
          y: -20,
          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      /*
      ==========================================
      DAY 27 — STEP 11
      BOTTOM WORD REVEAL
      ==========================================
      */

      const words = bottomRef.current
        ? Array.from(
            bottomRef.current.querySelectorAll(
              ".about-word"
            )
          )
        : [];

      if (words.length > 0) {
        gsap.from(words, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.035,
          ease: "power2.out",

          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /*
      ==========================================
      PERFORMANCE
      ==========================================
      */

      const performanceTargets = [
        headingRef.current,
        ...cards,
        ...words,
      ].filter(Boolean);

      if (performanceTargets.length > 0) {
        gsap.set(performanceTargets, {
          force3D: true,
        });
      }
    }, section);

    /*
    ==========================================
    CLEANUP
    ==========================================
    */

    return () => {
      const cards = section.querySelectorAll(
        ".about-card"
      );

      cards.forEach((card) => {
        if (card._handleMouseEnter) {
          card.removeEventListener(
            "mouseenter",
            card._handleMouseEnter
          );
        }

        if (card._handleMouseLeave) {
          card.removeEventListener(
            "mouseleave",
            card._handleMouseLeave
          );
        }

        delete card._handleMouseEnter;
        delete card._handleMouseLeave;
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* =========================
            HEADING
        ========================== */}

        <div
          ref={headingRef}
          className="about-heading relative z-10"
        >
          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building with{" "}
            <span>code & curiosity.</span>
          </h2>
        </div>

        {/* =========================
            ABOUT CONTENT
        ========================== */}

        <div className="about-content">

          {/* Introduction */}

          <div
            ref={introRef}
            className="about-intro"
          >
            <h3 ref={introHeadingRef}>
              Who I am
            </h3>

            <p>
              I am a Computer Science and Engineering
              student with a strong interest in full-stack
              web development and cybersecurity.
            </p>

            <p>
              I enjoy building practical applications
              and understanding how systems work behind
              the scenes. My development experience
              includes Django, React, REST APIs, databases
              and modern web technologies.
            </p>

            <p>
              I also have hands-on experience in a
              Security Operations Center environment,
              working with security logs, monitoring
              dashboards and SIEM tools.
            </p>
          </div>

          {/* Skills / Areas */}

          <div className="about-skills">
            <h3 ref={skillsHeadingRef}>
              What I work with
            </h3>

            <div
              ref={cardsRef}
              className="about-grid"
            >

              {/* Full Stack */}

              <div className="about-card">
                <h4>
                  Full-Stack
                </h4>

                <p>
                  Building complete web applications
                  from frontend to backend.
                </p>
              </div>

              {/* Django */}

              <div className="about-card">
                <h4>
                  Django
                </h4>

                <p>
                  Backend development, APIs,
                  authentication and databases.
                </p>
              </div>

              {/* React */}

              <div className="about-card">
                <h4>
                  React
                </h4>

                <p>
                  Creating interactive and responsive
                  frontend applications.
                </p>
              </div>

              {/* REST APIs */}

              <div className="about-card">
                <h4>
                  REST APIs
                </h4>

                <p>
                  Designing and consuming APIs for
                  modern applications.
                </p>
              </div>

              {/* Cybersecurity */}

              <div className="about-card">
                <h4>
                  Cybersecurity
                </h4>

                <p>
                  Security monitoring, logs, SIEM
                  and threat detection.
                </p>
              </div>

              {/* Problem Solving */}

              <div className="about-card">
                <h4>
                  Problem Solving
                </h4>

                <p>
                  Python, DSA and logical
                  problem solving.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div
          ref={bottomRef}
          className="about-bottom"
        >
          <p>
            {bottomWords.map((word, index) => (
              <span
                key={index}
                className="about-word"
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
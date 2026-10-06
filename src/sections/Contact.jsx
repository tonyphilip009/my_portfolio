import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  // ==================== REFS ====================

  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const cardRef = useRef(null);
  const cardGlowRef = useRef(null);
  const contactItemsRef = useRef(null);
  const profilesRef = useRef(null);
  const profileButtonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const contactItems = Array.from(
        contactItemsRef.current?.children || []
      );

      const profileButtons = Array.from(
        profileButtonsRef.current?.children || []
      );

      /*
      ==================================================
      REDUCED MOTION
      ==================================================
      */

      if (prefersReducedMotion) {
        gsap.set(
          [
            labelRef.current,
            titleRef.current,
            subtitleRef.current,
            cardRef.current,
            cardGlowRef.current,
            ...contactItems,
            profilesRef.current,
            ...profileButtons,
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
        labelRef.current,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      SECTION TITLE
      ==================================================
      */

      gsap.fromTo(
        titleRef.current,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      TITLE PARALLAX
      ==================================================
      */

      gsap.to(titleRef.current, {
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
        subtitleRef.current,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      CONTACT CARD REVEAL
      ==================================================
      */

      gsap.fromTo(
        cardRef.current,
        {
          y: 70,
          opacity: 0,
          rotateX: 6,
          scale: 0.97,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      CONTACT ITEMS STAGGER
      ==================================================
      */

      gsap.fromTo(
        contactItems,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: contactItemsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      EMAIL / LOCATION HOVER
      ==================================================
      */

      contactItems.forEach((item) => {
        const handleEnter = () => {
          gsap.to(item, {
            x: 4,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          gsap.to(item, {
            x: 0,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", handleEnter);
        item.addEventListener("mouseleave", handleLeave);

        item._handleEnter = handleEnter;
        item._handleLeave = handleLeave;
      });

      /*
      ==================================================
      EMAIL LINK ANIMATION
      ==================================================
      */

      const emailLink =
        contactItemsRef.current?.querySelector(
          ".contact-email"
        );

      if (emailLink) {
        const handleEmailEnter = () => {
          gsap.to(emailLink, {
            x: 4,
            scale: 1.02,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleEmailLeave = () => {
          gsap.to(emailLink, {
            x: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        emailLink.addEventListener(
          "mouseenter",
          handleEmailEnter
        );

        emailLink.addEventListener(
          "mouseleave",
          handleEmailLeave
        );

        emailLink._handleEnter = handleEmailEnter;
        emailLink._handleLeave = handleEmailLeave;
      }

      /*
      ==================================================
      PROFILES LABEL
      ==================================================
      */

      gsap.fromTo(
        profilesRef.current,
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
            trigger: profilesRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      PROFILE BUTTONS STAGGER
      ==================================================
      */

      gsap.fromTo(
        profileButtons,
        {
          y: 25,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "back.out(1.6)",

          scrollTrigger: {
            trigger: profileButtonsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      ==================================================
      PROFILE BUTTON HOVER
      ==================================================
      */

      profileButtons.forEach((button) => {
        const handleEnter = () => {
          gsap.to(button, {
            y: -4,
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        button.addEventListener("mouseenter", handleEnter);
        button.addEventListener("mouseleave", handleLeave);

        button._handleEnter = handleEnter;
        button._handleLeave = handleLeave;
      });

      /*
      ==================================================
      CONTACT CARD 3D TILT
      ==================================================
      */

      const handleCardMouseMove = (event) => {
        const rect =
          cardRef.current.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
          ((x - centerX) / centerX) * 2.5;

        const rotateX =
          ((centerY - y) / centerY) * 2.5;

        gsap.to(cardRef.current, {
          rotateX,
          rotateY,
          y: -5,
          scale: 1.005,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
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
          overwrite: "auto",
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
      CONTACT CARD BORDER + INTERNAL GLOW
      ==================================================
      */

      const handleCardEnter = () => {
        gsap.to(cardRef.current, {
          borderColor:
            "rgba(59,130,246,0.55)",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(cardGlowRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleCardLeave = () => {
        gsap.to(cardRef.current, {
          borderColor:
            "rgba(51,65,85,0.6)",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(cardGlowRef.current, {
          opacity: 0,
          scale: 0.96,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
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
          labelRef.current,
          titleRef.current,
          subtitleRef.current,
          cardRef.current,
          cardGlowRef.current,
          ...contactItems,
          profilesRef.current,
          ...profileButtons,
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

        contactItems.forEach((item) => {
          item.removeEventListener(
            "mouseenter",
            item._handleEnter
          );

          item.removeEventListener(
            "mouseleave",
            item._handleLeave
          );
        });

        profileButtons.forEach((button) => {
          button.removeEventListener(
            "mouseenter",
            button._handleEnter
          );

          button.removeEventListener(
            "mouseleave",
            button._handleLeave
          );
        });

        if (emailLink) {
          emailLink.removeEventListener(
            "mouseenter",
            emailLink._handleEnter
          );

          emailLink.removeEventListener(
            "mouseleave",
            emailLink._handleLeave
          );
        }
      };
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="section-padding px-5 sm:px-6"
    >
      <div className="container-custom">

        {/* ==================== CONTACT HEADER ==================== */}

        <div
          ref={headingRef}
          className="max-w-3xl"
        >
          <p
            ref={labelRef}
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-blue-400
            "
          >
            Contact
          </p>

          <h2
            ref={titleRef}
            className="section-title mt-3"
          >
            Let's build something together.
          </h2>

          <p
            ref={subtitleRef}
            className="section-subtitle"
          >
            I'm open to opportunities, collaborations and
            interesting projects.
          </p>
        </div>


        {/* ==================== CONTACT CARD ==================== */}

        <div
          ref={cardRef}
          className="
            relative
            mt-8
            w-full
            max-w-2xl
            overflow-hidden
            rounded-2xl
            border
            sm:mt-10
            border-slate-700/60
            bg-gradient-to-br
            from-slate-900/95
            via-slate-950/95
            to-slate-950
            p-5
            sm:p-6
            md:p-8
            shadow-lg
            shadow-black/20
            transition-colors
            duration-300
          "
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >

          {/* ==================== INTERNAL CARD GLOW ==================== */}

          <div
            ref={cardGlowRef}
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              border
              border-blue-400/25
              bg-blue-400/[0.025]
              opacity-0
              scale-[0.96]
              shadow-[inset_0_0_45px_rgba(59,130,246,0.08)]
            "
          />

          {/* ==================== CONTENT ==================== */}

          <div
            ref={contactItemsRef}
            className="
              relative
              z-10
              space-y-5
              sm:space-y-7
            "
          >

            {/* ==================== EMAIL ==================== */}

            <div
              className="
                rounded-xl
                border
                border-slate-800/70
                bg-slate-900/40
                p-3.5
                sm:p-4
                transition-colors
                duration-300
                hover:border-blue-500/30
                hover:bg-slate-900/60
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Email
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tonyphilip43@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="
                  contact-email
                  mt-2
                  inline-flex
                  items-center
                  gap-2
                  break-all
                  text-sm
                  font-medium
                  text-blue-400
                  sm:text-base
                  transition-colors
                  duration-300
                  hover:text-blue-300
                "
              >
                {/* Email Icon */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="16"
                    x="2"
                    y="4"
                    rx="2"
                  />

                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                tonyphilip43@gmail.com
              </a>
            </div>


            {/* ==================== LOCATION ==================== */}

            <div
              className="
                rounded-xl
                border
                border-slate-800/70
                bg-slate-900/40
                p-3.5
                sm:p-4
                transition-colors
                duration-300
                hover:border-blue-500/30
                hover:bg-slate-900/60
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Location
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-medium
                  text-slate-300
                "
              >
                Kerala, India
              </p>
            </div>


            {/* ==================== PROFILES ==================== */}

            <div
              ref={profilesRef}
              className="
                rounded-xl
                border
                border-slate-800/70
                bg-slate-900/40
                p-3.5
                sm:p-4
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Profiles
              </p>

              <div
                ref={profileButtonsRef}
                className="mt-3 flex flex-wrap gap-3 sm:mt-4"
              >

                {/* ==================== GITHUB ==================== */}

                <a
                  href="https://github.com/tonyphilip009"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    sm:h-11
                    sm:w-11
                    justify-center
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-800/50
                    text-slate-400
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-slate-500
                    hover:bg-slate-800
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-slate-950/40
                  "
                >
                  {/* GitHub Icon */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>


                {/* ==================== LINKEDIN ==================== */}

                <a
                  href="https://www.linkedin.com/in/tony-philip-056238264"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    sm:h-11
                    sm:w-11
                    justify-center
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-800/50
                    text-slate-400
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-blue-500/50
                    hover:bg-blue-500/10
                    hover:text-blue-400
                    hover:shadow-lg
                    hover:shadow-blue-500/10
                  "
                >
                  {/* LinkedIn Icon */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
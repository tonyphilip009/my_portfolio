import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="section-padding"
    >
      <div
        ref={contentRef}
        className="container-custom"
      >

        {/* CONTACT HEADER */}

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="section-title mt-3">
            Let's build something together.
          </h2>

          <p className="section-subtitle">
            I'm open to opportunities, collaborations and
            interesting projects.
          </p>

        </div>


        {/* CONTACT CARD */}

        <div className="mt-10 max-w-2xl rounded-2xl border border-slate-700/60 bg-slate-900/40 p-8">

          <div className="space-y-6">

            {/* EMAIL */}

            <div>

              <p className="text-sm text-slate-500">
                Email
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tonyphilip43@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-lg text-blue-400 transition-colors hover:text-blue-300"
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


            {/* LOCATION */}

            <div>

              <p className="text-sm text-slate-500">
                Location
              </p>

              <p className="mt-1 text-lg text-slate-300">
                Kerala, India
              </p>

            </div>


            {/* PROFILES */}

            <div>

              <p className="text-sm text-slate-500">
                Profiles
              </p>

              <div className="mt-3 flex gap-3">

                {/* GITHUB */}

                <a
                  href="https://github.com/tonyphilip009"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-700
                    bg-slate-800/40
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-500
                    hover:bg-slate-800
                    hover:text-white
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


                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/tony-philip-056238264"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-700
                    bg-slate-800/40
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/50
                    hover:bg-blue-500/10
                    hover:text-blue-400
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
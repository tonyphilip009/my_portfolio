import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Sahyadri College of Engineering and Management",
      location: "Mangalore, India",
      duration: "2022 - Present",
      result: "CGPA: 8.1",
    },
    {
      degree: "Class XII",
      field: "PUC / PCMC",
      institution: "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      duration: "2020 - 2022",
      result: "83.86%",
    },
    {
      degree: "Class X",
      field: "State Board",
      institution: "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      duration: "2018 - 2019",
      result: "9A+, 1A",
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
          duration: 1.5,
          ease: "power3.out",

          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      // ==================== EDUCATION CARDS ANIMATION ====================

      gsap.fromTo(
        cardsRef.current.children,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className="section-padding"
    >
      <div className="container-custom">

        {/* ==================== HEADING ==================== */}

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
            My academic journey has given me a strong foundation in computer
            science, programming, and problem-solving.
          </p>
        </div>

        {/* ==================== TIMELINE ==================== */}

        <div className="relative mt-12">

          {/* ==================== VERTICAL LINE ==================== */}

          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-[2px]
              bg-slate-600/80
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div
            ref={cardsRef}
            className="space-y-10"
          >

            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* ==================== TIMELINE DOT ==================== */}

                <div
                  className="
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
                    shadow-[0_0_14px_rgba(34,211,238,0.75)]
                    md:left-1/2
                  "
                />

                {/* ==================== EDUCATION CARD ==================== */}

                <div
                  className={`w-full md:w-[45%] ml-10 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-cyan-400/50">

                    {/* ==================== DATE AND LOCATION ==================== */}

                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm font-medium text-cyan-400">
                        {item.duration}
                      </span>

                      <span className="text-sm text-slate-500">
                        {item.location}
                      </span>
                    </div>

                    {/* ==================== DEGREE ==================== */}

                    <h3 className="mb-1 text-xl font-semibold text-white">
                      {item.degree}
                    </h3>

                    {/* ==================== FIELD ==================== */}

                    <p className="mb-3 text-sm text-cyan-400">
                      {item.field}
                    </p>

                    {/* ==================== INSTITUTION ==================== */}

                    <p className="mb-2 font-medium text-slate-300">
                      {item.institution}
                    </p>

                    {/* ==================== RESULT ==================== */}

                    <div className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
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
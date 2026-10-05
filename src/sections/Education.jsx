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
      // Heading animation
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

      // Education cards animation
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

        {/* Heading */}
        <div ref={headingRef} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
            Education
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Academic Journey
          </h2>

          <p className="text-slate-400 leading-relaxed">
            My academic journey has given me a strong foundation in computer
            science, programming, and problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-1/2" />

          <div ref={cardsRef} className="space-y-10">

            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center`}
              >

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan-400 border-4 border-slate-950 md:-translate-x-1/2 z-10" />

                {/* Education Card */}
                <div
                  className={`w-full md:w-[45%] ml-10 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300">

                    {/* Date and Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <span className="text-sm text-cyan-400 font-medium">
                        {item.duration}
                      </span>

                      <span className="text-sm text-slate-500">
                        {item.location}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.degree}
                    </h3>

                    {/* Field */}
                    <p className="text-cyan-400 text-sm mb-3">
                      {item.field}
                    </p>

                    {/* Institution */}
                    <p className="text-slate-300 font-medium mb-2">
                      {item.institution}
                    </p>

                    {/* Result */}
                    <div className="inline-flex px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">
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
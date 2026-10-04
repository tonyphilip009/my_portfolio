function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Sahyadri College of Engineering and Management",
      location: "Mangalore, India",
      year: "2022 - Present",
      result: "CGPA: 8.1",
    },
    {
      degree: "Class XII / PUC",
      field: "PCMC",
      institution: "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      year: "2020 - 2022",
      result: "83.86%",
    },
    {
      degree: "Class X",
      field: "State Board",
      institution: "Holy Family Higher Secondary School Rajapuram",
      location: "Kasaragod, India",
      year: "2018 - 2019",
      result: "9A+, 1A",
    },
  ];

  return (
    <section
      id="education"
      className="section-padding"
    >
      <div className="container-custom">

        {/* Section Header */}

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Education
          </p>

          <h2 className="section-title mt-3">
            My academic journey.
          </h2>

          <p className="section-subtitle">
            My educational background and the foundation
            that shaped my technical skills.
          </p>

        </div>


        {/* Education Timeline */}

        <div className="relative mt-12">

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-3
              top-0
              h-full
              w-px
              bg-slate-700
              md:left-5
            "
          />


          <div className="space-y-10">

            {education.map((item, index) => (

              <div
                key={index}
                className="relative pl-10 md:pl-14"
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-3
                    top-7
                    flex
                    h-5
                    w-5
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-blue-400
                    bg-slate-950
                    md:left-5
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                </div>


                {/* Education Card */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-700/60
                    bg-slate-900/40
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/40
                    hover:bg-slate-900/70
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      md:flex-row
                      md:items-start
                      md:justify-between
                    "
                  >

                    {/* Education Information */}

                    <div>

                      <p className="text-sm font-medium text-blue-400">
                        {item.year}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-slate-50 md:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-slate-300">
                        {item.field}
                      </p>

                      <p className="mt-4 text-slate-400">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.location}
                      </p>

                    </div>


                    {/* Result */}

                    <div className="shrink-0">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-blue-500/30
                          bg-blue-500/10
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-blue-300
                        "
                      >
                        {item.result}
                      </span>

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
function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <div className="card card-hover mx-auto max-w-4xl text-center">
          {/* Section label */}
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Resume
          </p>

          {/* Heading */}
          <h2 className="section-title mt-3">
            Want to know more about me?
          </h2>

          {/* Description */}
          <p className="section-subtitle mx-auto">
            Download my resume to learn more about my skills, experience,
            education and projects.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="btn-primary">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
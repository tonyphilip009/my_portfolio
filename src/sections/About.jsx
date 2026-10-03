function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            About Me
          </p>

          <h2 className="section-title mt-3">
            Building with curiosity and purpose.
          </h2>

          <p className="section-subtitle">
            I am a Computer Science and Engineering student passionate about
            web development, backend development and cybersecurity.
          </p>
        </div>

        {/* About card */}
        <div className="card card-hover mt-10 max-w-4xl">
          <p className="text-base leading-relaxed text-slate-300">
            I enjoy building practical applications and learning new
            technologies. I like turning ideas into useful software while
            continuously improving my development and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
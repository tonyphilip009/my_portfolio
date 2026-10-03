function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex min-h-screen items-center pt-32"
    >
      <div className="container-custom w-full">
        <div className="max-w-3xl">

          {/* Small intro */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Welcome to my portfolio
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Tony Philip
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I build modern web applications using React, Django and REST APIs.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary inline-block"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="btn-secondary inline-block"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
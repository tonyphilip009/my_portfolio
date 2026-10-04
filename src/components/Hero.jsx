import Hero3D from "./Hero3D";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-cyan-400 text-sm md:text-base tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            TONY PHILIP
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300">
            Full-Stack Developer
          </h2>

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            I build modern, responsive web applications using
            React, Django and other modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE — 3D */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
          <Hero3D />
        </div>

      </div>
    </section>
  );
}

export default Hero;
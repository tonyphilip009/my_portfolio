import BasicCube from "../three/BasicCube";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Tony Philip
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 mt-6 max-w-xl">
            Computer Science Engineering student passionate about
            web development, cybersecurity, and building modern
            applications.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - 3D Cube */}
        <div className="h-[500px] w-full">
          <BasicCube />
        </div>

      </div>
    </section>
  );
}

export default Hero;
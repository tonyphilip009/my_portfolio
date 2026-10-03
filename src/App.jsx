import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero3D from "./components/Hero3D";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home */}
        <section id="home" className="hero-section">

          <div className="hero-content">
            <p className="hero-small-text">
              Hello, I'm
            </p>

            <h1>
              Tony Philip
            </h1>

            <h2>
              Full Stack Developer
            </h2>

            <p>
              I build modern web applications using
              Django, React and modern web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects">
                View Projects
              </a>

              <a href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-3d">
            <Hero3D />
          </div>

        </section>

        {/* About */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            I'm a Computer Science and Engineering student
            interested in full-stack development and
            cybersecurity.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>

          <p>
            Python • Django • React • JavaScript • SQL •
            REST API • Git
          </p>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>

          <p>
            My projects will be displayed here.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact Me</h2>

          <p>
            Interested in working together? Feel free to
            get in touch.
          </p>

          <p>
            Email: your-email@example.com
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
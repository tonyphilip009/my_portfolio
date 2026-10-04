import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero3D from "./components/Hero3D";

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* =========================
            HOME
        ========================== */}

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


        {/* =========================
            ABOUT
        ========================== */}

        <section id="about" className="about-section">

          <div className="about-container">

            {/* Heading */}

            <div className="about-heading">

              <p className="section-label">
                ABOUT ME
              </p>

              <h2>
                Building with{" "}
                <span>code & curiosity.</span>
              </h2>

            </div>


            {/* About Content */}

            <div className="about-content">

              {/* Introduction */}

              <div className="about-intro">

                <h3>
                  Who I am
                </h3>

                <p>
                  I am a Computer Science and Engineering
                  student with a strong interest in full-stack
                  web development and cybersecurity.
                </p>

                <p>
                  I enjoy building practical applications
                  and understanding how systems work behind
                  the scenes. My development experience
                  includes Django, React, REST APIs, databases
                  and modern web technologies.
                </p>

                <p>
                  I also have hands-on experience in a
                  Security Operations Center environment,
                  working with security logs, monitoring
                  dashboards and SIEM tools.
                </p>

              </div>


              {/* Skills / Areas */}

              <div className="about-skills">

                <h3>
                  What I work with
                </h3>

                <div className="about-grid">

                  {/* Full Stack */}

                  <div className="about-card">

                    <h4>
                      Full-Stack
                    </h4>

                    <p>
                      Building complete web applications
                      from frontend to backend.
                    </p>

                  </div>


                  {/* Django */}

                  <div className="about-card">

                    <h4>
                      Django
                    </h4>

                    <p>
                      Backend development, APIs,
                      authentication and databases.
                    </p>

                  </div>


                  {/* React */}

                  <div className="about-card">

                    <h4>
                      React
                    </h4>

                    <p>
                      Creating interactive and responsive
                      frontend applications.
                    </p>

                  </div>


                  {/* REST APIs */}

                  <div className="about-card">

                    <h4>
                      REST APIs
                    </h4>

                    <p>
                      Designing and consuming APIs for
                      modern applications.
                    </p>

                  </div>


                  {/* Cybersecurity */}

                  <div className="about-card">

                    <h4>
                      Cybersecurity
                    </h4>

                    <p>
                      Security monitoring, logs, SIEM
                      and threat detection.
                    </p>

                  </div>


                  {/* Problem Solving */}

                  <div className="about-card">

                    <h4>
                      Problem Solving
                    </h4>

                    <p>
                      Python, DSA and logical
                      problem solving.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Bottom Statement */}

            <div className="about-bottom">

              <p>
                I am continuously learning, building
                projects and improving my problem-solving
                skills with the goal of becoming a strong
                software developer.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================== */}

        <section id="skills">

          <h2>
            Skills
          </h2>

          <p>
            Python • Django • React • JavaScript • SQL •
            REST API • Git
          </p>

        </section>


        {/* =========================
            PROJECTS
        ========================== */}

        <section id="projects">

          <h2>
            Projects
          </h2>

          <p>
            My projects will be displayed here.
          </p>

        </section>


        {/* =========================
            CONTACT
        ========================== */}

        <section id="contact">

          <h2>
            Contact Me
          </h2>

          <p>
            Interested in working together? Feel free
            to get in touch.
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
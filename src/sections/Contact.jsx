function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="section-title mt-3">
            Let's build something together.
          </h2>

          <p className="section-subtitle">
            Interested in working together? Feel free to get in touch.
            I'm always open to discussing projects, opportunities and
            new ideas.
          </p>
        </div>

        {/* Contact information */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="card card-hover group"
          >
            <p className="text-sm font-medium text-blue-400">
              Email
            </p>

            <p className="mt-3 break-all text-slate-300 transition group-hover:text-white">
              your-email@example.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="card card-hover group"
          >
            <p className="text-sm font-medium text-blue-400">
              GitHub
            </p>

            <p className="mt-3 break-all text-slate-300 transition group-hover:text-white">
              github.com/yourusername
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="card card-hover group"
          >
            <p className="text-sm font-medium text-blue-400">
              LinkedIn
            </p>

            <p className="mt-3 break-all text-slate-300 transition group-hover:text-white">
              linkedin.com/in/yourusername
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
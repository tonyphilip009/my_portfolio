function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="/#home"
          className="text-xl font-bold tracking-tight text-slate-50 transition hover:text-blue-400"
        >
          Tony Philip
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/#home"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="/#about"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="/#skills"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="/#experience"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Experience
          </a>

          <a
            href="/#education"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Education
          </a>

          <a
            href="/#resume"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Resume
          </a>

          <a
            href="/#contact"
            className="btn-primary px-4 py-2 text-sm"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
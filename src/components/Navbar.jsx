import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  /*
   * Navigate to a section
   */
  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    // Set active item immediately
    setActiveSection(sectionId);

    // Close mobile menu
    setIsOpen(false);

    // Fixed navbar height
    const navbarHeight = 80;

    // Calculate exact section position
    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    // Move immediately
    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "auto",
    });

    // Update URL hash
    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  /*
   * Detect which section is currently visible
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) =>
          document.getElementById(
            link.href.substring(1)
          )
        )
        .filter(Boolean);

      /*
       * Use the middle of the viewport as the
       * activation point.
       */
      const activationPoint =
        window.scrollY +
        window.innerHeight * 0.5;

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (sectionTop <= activationPoint) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * Set active section from URL when page loads
   */
  useEffect(() => {
    const hash = window.location.hash.replace(
      "#",
      ""
    );

    if (hash) {
      const validSection = navLinks.some(
        (link) =>
          link.href.substring(1) === hash
      );

      if (validSection) {
        setActiveSection(hash);
      }
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">

      <div className="container-custom flex items-center justify-between py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
          className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
            activeSection === "home"
              ? "text-blue-400"
              : "text-white hover:text-blue-400"
          }`}
        >
          Tony<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          {navLinks.map((link) => {
            const sectionId =
              link.href.substring(1);

            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    sectionId
                  )
                }
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-400 transition-all duration-200 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white transition-colors duration-200 hover:text-blue-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-md md:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => {
              const sectionId =
                link.href.substring(1);

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      sectionId
                    )
                  }
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
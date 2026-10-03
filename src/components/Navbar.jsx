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

  // Close mobile menu when a navigation link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-80px 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">

      <div className="container-custom flex items-center justify-between py-4">

        {/* Logo / Name */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className={`text-2xl font-bold tracking-tight transition duration-300 ${
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
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-medium transition duration-300 ${
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white transition duration-300 hover:text-blue-400 md:hidden"
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
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-base font-medium transition duration-300 ${
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
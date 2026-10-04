import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
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
      console.warn(`Section #${sectionId} was not found.`);
      return;
    }

    // Immediately change active navigation item
    setActiveSection(sectionId);

    // Close mobile menu
    setIsOpen(false);

    // Fixed navbar height
    const navbarHeight = 80;

    // Get exact section position
    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    // Scroll to section
    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

    // Update URL hash without browser jump
    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-slate-950/80
        backdrop-blur-md
      "
    >

      {/* ==================== NAVBAR ==================== */}

      <div
        className="
          container-custom
          flex
          items-center
          justify-between
          py-4
        "
      >

        {/* ==================== LOGO ==================== */}

        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
            transition-colors
            duration-200
            hover:text-blue-400
          "
        >
          Tony
          <span className="text-blue-500">
            .
          </span>
        </a>


        {/* ==================== DESKTOP NAVIGATION ==================== */}

        <div
          className="
            hidden
            items-center
            gap-6
            md:flex
          "
        >

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
                className={`
                  relative
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }
                `}
              >

                {link.name}

                {/* ==================== UNDERLINE ==================== */}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-0.5
                    rounded-full
                    bg-blue-400
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />

              </a>
            );
          })}

        </div>


        {/* ==================== MOBILE MENU BUTTON ==================== */}

        <button
          type="button"
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            text-2xl
            text-white
            transition-colors
            duration-200
            hover:text-blue-400
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ==================== MOBILE NAVIGATION ==================== */}

      {isOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-slate-950/95
            px-6
            py-6
            backdrop-blur-md
            md:hidden
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
            "
          >

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
                  className={`
                    relative
                    w-fit
                    text-base
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-blue-400"
                    }
                  `}
                >

                  {link.name}

                  {/* Mobile underline */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-0.5
                        w-full
                        rounded-full
                        bg-blue-400
                      "
                    />
                  )}

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
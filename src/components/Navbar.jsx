import { useEffect, useState } from "react";

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
   * Detect the section currently visible while scrolling
   */

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) =>
          document.getElementById(link.href.substring(1))
        )
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    setActiveSection(sectionId);
    setIsOpen(false);

    const navbarHeight = 80;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

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
            group
            text-2xl
            font-bold
            tracking-tight
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:text-blue-400
          "
        >
          Tony
          <span
            className="
              text-blue-500
              transition-all
              duration-300
              group-hover:text-cyan-400
              group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]
            "
          >
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
                  group
                  relative
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }
                `}
              >
                {link.name}

                {/* ==================== HOVER UNDERLINE ==================== */}

                <span
                  className={`
                    absolute
                    left-1/2
                    -bottom-1
                    h-0.5
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-400
                    to-cyan-400
                    shadow-[0_0_8px_rgba(59,130,246,0.35)]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
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
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700/60
            bg-slate-900/40
            text-xl
            text-slate-200
            transition-all
            duration-300
            hover:border-blue-500/40
            hover:bg-slate-800/70
            hover:text-blue-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400/40
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
            px-5
            py-6
            shadow-lg
            shadow-black/20
            backdrop-blur-md
            md:hidden
          "
        >
          <div
            className="
              flex
              flex-col
              gap-1
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
                    group
                    relative
                    w-full
                    rounded-lg
                    px-3
                    py-3
                    text-base
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-slate-300 hover:bg-slate-900/60 hover:text-blue-400"
                    }
                  `}
                >
                  {link.name}

                  {/* Mobile active indicator */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.5
                      -translate-y-1/2
                      rounded-full
                      bg-gradient-to-b
                      from-blue-400
                      to-cyan-400
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
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
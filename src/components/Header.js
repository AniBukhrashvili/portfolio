import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to white mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex text-ink transition-colors hover:text-accent"
    >
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <circle
          cx="8"
          cy="8"
          r="6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor" />
      </svg>
    </button>
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="nav-roll text-[14px] font-normal text-ink/80"
    >
      <span>{label}</span>
      <span className="text-accent" aria-hidden="true">
        {label}
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="container sticky top-0 z-40 bg-page/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-3.5">
        <a href="#home" className="shrink-0" onClick={close}>
         {/* TODO: Add logo */}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
            <li>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="relative flex h-6 w-6 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-[2px] w-5 bg-ink/80 transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-ink/80 transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mobile-nav absolute left-0 top-full z-50 w-full bg-page/95 py-4 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col items-end gap-4 px-6">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} onClick={close} />
              </li>
            ))}
            <li>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

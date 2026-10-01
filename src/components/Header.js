import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="nav-roll text-[14px] font-normal text-white/80"
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
    <header className="container sticky top-0 z-40 border-b border-white/10 bg-page/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-3.5">
        <a href="#home" className="shrink-0" onClick={close}>
         {/* TODO: Add logo */}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
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
            className={`absolute h-[2px] w-5 bg-white/80 transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-white/80 transition-transform duration-300 ${
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
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

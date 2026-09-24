import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ani-bukhrashvili-a5313622b",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.8h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AniBukhrashvili",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-page/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-9 py-4">
          <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Ani Bukhrashvili"
              className="h-9 w-9 invert mix-blend-screen"
            />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="group relative flex h-10 w-10 items-center justify-center"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`absolute h-[2px] w-7 bg-white transition-all duration-300 ${
                open
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-[5px] group-hover:translate-x-1 group-hover:-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-7 bg-white transition-all duration-300 ${
                open
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-[5px] group-hover:-translate-x-1 group-hover:translate-y-[7px]"
              }`}
            />
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className={`nav-overlay fixed inset-0 z-20 bg-black/40 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`nav-panel fixed inset-y-0 right-0 z-30 mt-[72px] flex w-[320px] flex-col border-l border-white/10 bg-page px-8 pt-20 backdrop-blur-md ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-6">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 text-3xl font-bold text-white/80 transition-colors hover:text-accent"
              >
                <span className="text-sm font-semibold text-accent">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-white/10 py-6">
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-white/60 transition-colors hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:bukhrashviliiani@gmail.com"
            className="mt-4 block text-sm font-medium text-white/60 transition-colors hover:text-accent"
          >
            bukhrashviliiani@gmail.com
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;

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
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AniBukhrashvili",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:bukhrashviliiani@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
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
          <div className="flex items-center gap-6 justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:") ? undefined : "noreferrer"
                }
                aria-label={social.label}
                className="text-white/60 transition-colors hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

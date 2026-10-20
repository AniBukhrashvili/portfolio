import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ani-bukhrashvili-a5313622b",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AniBukhrashvili",
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    external: true,
  },
];

function Footer() {
  return (
    <footer className="relative">
      <div className="container pb-8 pt-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
          >
            LOGO
          </a>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-light text-ink/70"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
            <a
              href="mailto:bukhrashviliiani@gmail.com"
              className="transition-colors hover:text-accent"
            >
              bukhrashviliiani@gmail.com
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-5">
          <p className="text-xs font-light text-ink/40">
            © {new Date().getFullYear()} Ani Bukhrashvili
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

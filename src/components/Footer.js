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
    <footer className="relative bg-page/80 backdrop-blur-md">
      <div className="container pb-8 pt-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="italic font-light text-ink/60  hover:text-accent"
          >
            Ani Bukhrashvili
          </a>

          <nav
            aria-label="Footer"
            className="flex flex-col gap-x-6 gap-y-3 text-sm font-light text-ink/70 mr-20"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5  hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
            <a
              href="mailto:bukhrashviliiani@gmail.com"
              className=" hover:text-accent"
            >
              bukhrashviliiani@gmail.com
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-dashed border-ink/10 pt-5">
          <p className="text-xs font-light text-ink/40">
            © {new Date().getFullYear()} Ani Bukhrashvili
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

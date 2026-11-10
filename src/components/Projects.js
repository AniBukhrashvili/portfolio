import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const featured = [
  {
    title: "Partner Panel",
    href: "https://partner.klipy.com",
    company: "KLIPY · 2025 — 2026",
    description:
      "Dashboard I built from scratch for external API partners. The React and TypeScript UI covers account management, usage monitoring, and performance charts, with Recharts on top of REST data.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    related: [
      {
        title: "Ads Manager",
        href: "https://partner.klipy.com/ads-manager",
        description:
          "Built from scratch inside the partner panel so partners can create and manage ads.",
      },
    ],
  },
  {
    title: "KLIPY",
    href: "https://klipy.com",
    company: "KLIPY · 2025 — 2026",
    description:
      "Product site for GIFs, stickers, and clips. I contributed to the Next.js frontend, focusing on performance, SEO, and UX so key pages loaded faster and were easier to find.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    title: "Georgia Travel",
    href: "https://georgia.travel/ka",
    company: "Artmedia · 2022 — 2023",
    description:
      "Official multilingual tourism platform. I built and maintained client-facing, responsive pages used to plan a trip to Georgia, working from Figma to production.",
    stack: ["React", "TypeScript", "SCSS", "SEO"],
  },
];

const alsoShipped = [
  {
    title: "Places Georgia Travel",
    href: "https://places.georgia.travel/",
    detail:
      "[Artmedia] Guides to places, cities, and things to do in Georgia.",
  },
  {
    title: "Youth Tbilisi",
    href: "https://youthtbilisi.ge",
    detail:
      "[Artmedia] Programs and opportunities for young people in Tbilisi.",
  },
  {
    title: "Watersprint",
    href: "https://watersprint.com",
    detail:
      "[Artmedia] Company site for a Swedish water-disinfection company. I built the WordPress frontend, including PHP templates.",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">
          Projects 
          <span className="ml-1 text-sm font-light italic text-ink/50">
            I've worked on
          </span>
        </h2>

        <ul className="mt-1">
          {featured.map((project) => (
            <li key={project.title} className="border-b border-ink/10">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-6 outline-none"
              >
                <span className="flex items-start justify-between gap-6">
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
                      {project.company}
                    </span>
                    <span className="mt-1.5 block text-lg font-medium text-ink group-hover:text-accent">
                      {project.title}
                    </span>
                    <span className="mt-2 block max-w-3xl text-sm font-light leading-6 text-ink/60">
                      {project.description}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-medium text-ink/70"
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink/40 group-hover:text-accent" />
                </span>
              </a>
              {project.related?.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group ml-4 flex items-start justify-between gap-6 border-t border-ink/10 py-4 sm:ml-6"
                >
                  <span className="min-w-0">
                    <span className="block text-base font-medium text-ink group-hover:text-accent">
                      {item.title}
                    </span>
                    <span className="mt-1 block max-w-3xl text-sm font-light leading-5 text-ink/50">
                      {item.description}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 h-3 w-3 shrink-0 text-ink/40 group-hover:text-accent" />
                </a>
              ))}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-ink/80">Also shipped</h3>
          <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
            {alsoShipped.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-4"
                >
                  <span className="min-w-0">
                    <span className="block text-base font-medium text-ink group-hover:text-accent">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-sm font-light leading-6 text-ink/50">
                      {project.detail}
                    </span>
                    <span className="mt-2 flex flex-wrap gap-2">
                      {project.stack && project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-medium text-ink/70"
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1.5 h-3 w-3 shrink-0 text-ink/40 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs font-light italic text-ink/50">
            I&apos;ve worked on many more real projects than these.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

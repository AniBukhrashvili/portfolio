import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const projects = [
  {
    title: "Georgia Travel",
    href: "https://georgia.travel/ka",
    description: "Official tourism site for planning a trip to Georgia",
  },
  {
    title: "Places Georgia Travel",
    href: "https://places.georgia.travel/",
    description: "Guides to places, cities and things to do in Georgia",
  },
  {
    title: "KLIPY",
    href: "https://klipy.com",
    description: "Platform for GIFs, stickers and clips",
  },
  {
    title: "Partner Panel",
    href: "https://partner.klipy.com",
    description: "Dashboard for API partners to manage accounts and usage",
  },
  {
    title: "Youth Tbilisi",
    href: "https://youthtbilisi.ge",
    description: "Programs and opportunities for young people in Tbilisi",
  },
  {
    title: "Watersprint",
    href: "https://watersprint.com",
    description: "Company site for chemical-free water disinfection",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">
            Real Projects
            <span className="ml-1 text-sm font-light text-ink/50 italic">that I worked on</span>
        </h2>        
        <ul className="mt-4">
          {projects.map((project) => (
            <li key={project.title} className="border-b border-ink/10">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-4 outline-none"
              >
                <span className="min-w-0">
                  <span className="block text-base font-medium text-ink group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-sm font-light text-ink/50">
                    {project.description}
                  </span>
                </span>
                <ArrowUpRight className="h-3 w-3 shrink-0 text-ink/40 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light italic text-ink/50">
            I&apos;ve worked on many more real projects than these.
          </p>
          <a
            href="https://github.com/AniBukhrashvili"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-light text-ink/50  hover:text-accent sm:justify-end"
          >
            Personal projects
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

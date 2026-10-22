import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const projects = [
  { title: "Georgia Travel", href: "https://georgia.travel/ka" },
  { title: "Places Georgia Travel", href: "https://places.georgia.travel/" },
  { title: "KLIPY", href: "https://klipy.com" },
  { title: "Partner Panel", href: "https://partner.klipy.com" },
  { title: "Youth Tbilisi", href: "https://youthtbilisi.ge" },
  { title: "Watersprint", href: "https://watersprint.com" },
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
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="block py-3 text-base font-medium text-ink group transition-colors outline-none"
            >
              <li className="border-b border-ink/10 flex items-center justify-between group-hover:text-accent transition-colors">
                  {project.title}
                <ArrowUpRight className="h-3 w-3 group-hover:text-accent transition-colors" />
              </li>
            </a>
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
            className="flex items-center gap-1.5 text-sm font-light text-ink/50 transition-colors hover:text-accent sm:justify-end"
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

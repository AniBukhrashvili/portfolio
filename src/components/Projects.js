import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const projects = [
  { title: "Georgia Travel", href: "#" },
  { title: "Places Georgia Travel", href: "#" },
  { title: "Youth Tbilisi", href: "#" },
  { title: "Watersprint", href: "#" },
  { title: "KLIPY", href: "#" },
  { title: "Partner Panel", href: "#" },
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
            <li key={project.title} className="border-b border-ink/10 flex items-center justify-between group">
              <a
                href={project.href}
                className="block py-3 text-base font-medium text-ink group-hover:text-accent transition-colors"
              >
                {project.title}
              </a>
              <ArrowUpRight className="h-3 w-3 group-hover:text-accent transition-colors" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

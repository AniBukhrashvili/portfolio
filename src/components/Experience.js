import artmedia from "../assets/companies/artmedia.jpg";
import klipy from "../assets/companies/klipy.jpg";
import smartsoft from "../assets/companies/smartsoft.jpg";

const roles = [
  {
    company: "SmartSoft",
    role: "Frontend Developer",
    period: "Jul 2026 — Present",
    location: "Hybrid",
    logo: smartsoft,
    summary: ``,
  },
  {
    company: "KLIPY",
    role: "Full Stack Developer",
    period: "Feb 2025 — Jul 2026",
    location: "Hybrid",
    logo: klipy,
    summary: `
      • Built a Partner Panel from scratch for API integrators to manage accounts, monitor usage, and track key performance metrics

      • Contributed to the KLIPY API platform for GIFs, stickers, and other content, helping applications increase user engagement and revenue

      • Implemented REST API integrations to enable efficient data flow and seamless communication between frontend and backend services

      • Worked in Agile teams, participating in sprint planning, backlog grooming, reviews, and retrospectives

      • Focused on scalability, performance, and developer experience across external API integrations
    `,
  },
  {
    company: "Artmedia",
    role: "Frontend Developer",
    period: "Oct 2022 — Jan 2025",
    location: "Hybrid",
    logo: artmedia,
    summary: `
      • Worked on a wide range of client projects across different industries within a software development company

      • Built responsive, interactive, and user-focused web interfaces using React.js and Next.js

      • Styled and structured UI components using Tailwind CSS and BEM methodology to maintain scalable and consistent frontend architecture

      • Improved SEO performance and ensured cross-browser compatibility across multiple projects

      • Focused on improving user experience, performance, and visual consistency across applications

      • Actively contributed to Agile development processes, including sprint planning, task estimation, and team collaboration
    `,
  },
];

function ArrowUpRight({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M6.5 4.5h5v5" />
    </svg>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="container py-12 xl:py-18">
        <div className="flex gap-4 items-center justify-between">
          <div>
            <h2 className="text-xl font-medium tracking-medium text-ink">
              Experience
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-px w-8 bg-accent"
            />
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink/50 transition-colors hover:text-accent"
          >
            Resume
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <ol className="mt-4">
          {roles.map((job, index) => (
            <li
              key={job.company}
              className="group border-b border-ink/10 py-8 transition-colors duration-300 hover:border-accent"
            >
              <div className="flex gap-4 md:gap-5">
                <span className="font-mono text-base text-ink/30 transition-colors duration-300 group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-ink/5">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between sm:gap-4 flex-col sm:flex-row">
                    <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                      {job.role}
                    </h3>
                    <p className="shrink-0 pt-0.5 text-sm font-medium text-ink italic">
                      {job.period}
                    </p>
                  </div>

                  <p className="text-base font-medium text-ink/50">
                    {job.company}
                    <span className="mx-1.5 text-ink/25">·</span>
                    {job.location}
                  </p>

                  <p className="mt-2 max-w-4xl text-base font-medium text-ink">
                    {job.summary}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;

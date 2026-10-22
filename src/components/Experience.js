import artmedia from "../assets/companies/artmedia.jpg";
import klipy from "../assets/companies/klipy.jpg";
import smartsoft from "../assets/companies/smartsoft.jpg";
import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const roles = [
  {
    company: "SmartSoft",
    role: "Frontend Developer",
    period: "Jul 2026 — Present",
    location: "Hybrid",
    logo: smartsoft,
    summary: [
      "Develop interactive iGaming games using PixiJS",
      "Collaborate with an Agile team of animators, graphic designers, developers, testers and UI/UX designers",
      "Focus on smooth animations, performance optimization and a consistent player experience across different devices and browsers",
      "Transform design assets from Figma and Photoshop into engaging, interactive game screens",
    ],
  },
  {
    company: "KLIPY",
    role: "Full Stack Developer",
    period: "Feb 2025 — Jul 2026",
    location: "Hybrid",
    logo: klipy,
    summary: [
      "Built a Partner Panel from scratch for API integrators to manage accounts, monitor usage and track key performance metrics",
      "Contributed to performance, SEO and UX improvements on the KLIPY website built with Next.js, enhancing page load speed and search visibility",
      "Implemented REST API integrations to enable efficient data flow and seamless communication between frontend and backend services",
      "Mentored a teammate through code reviews, explaining project architecture, technical decisions and implementation details to encourage knowledge sharing, code quality and professional growth",
      "Worked in Agile teams, participating in sprint planning, backlog grooming, reviews and retrospectives",
      "Used GitLab and Jira for version control, code reviews, and Agile/Scrum workflows",
    ],
  },
  {
    company: "Artmedia",
    role: "Frontend Developer",
    period: "Oct 2022 — Jan 2025",
    location: "Hybrid",
    logo: artmedia,
    summary: [
      "Worked on a wide range of client projects across different industries within a software development company",
      "Developed dynamic, responsive interfaces using React, Next.js, TypeScript, Tailwind CSS, SCSS",
      "Implemented backend logic and API integrations using Node.js and REST APIs; managed server-side functionality with PHP for WordPress projects",
      "Implemented end-to-end testing with Cypress to ensure reliability and user experience",
      "Improved performance and accessibility using Lighthouse audits and optimization best practices",
      "Worked in an Agile (Scrum) environment using GitHub, Jira, and Trello; participated in standups, sprint planning, grooming, and retrospectives",
      "Focused on improving user experience, performance, and visual consistency across applications",
      "Translated Figma designs into production-ready, pixel-perfect, responsive UI components",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="container py-12 xl:py-18">
        <div className="flex gap-4 items-center justify-between">
          <h2 className="text-xl font-light tracking-medium text-ink">
            Experience
            <span className="ml-1 text-sm font-light text-ink/50 italic">
              work
            </span>
          </h2>
          <a
            href="/Ani Bukhrashvili - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink/50  hover:text-accent"
          >
            Resume
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <ol className="mt-4">
          {roles.map((job, index) => (
            <li
              key={job.company}
              className="group border-b border-dashed border-ink/10 py-8  duration-300 hover:border-accent"
            >
              <div className="flex gap-4 md:gap-5">
                <span className="font-mono text-base text-ink/30  duration-300 group-hover:text-accent">
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
                    <p className="shrink-0 pt-0.5 text-sm font-medium text-ink/50 italic">
                      {job.period}
                    </p>
                  </div>

                  <p className="text-base font-light text-ink/50">
                    {job.company}
                    <span className="mx-1.5 text-ink/25">·</span>
                    {job.location}
                  </p>

                  {job.summary.length > 0 && (
                    <ul className="mt-3 max-w-4xl list-disc space-y-1.5 pl-4 text-base font-light text-ink/70 marker:text-ink/40">
                      {job.summary.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
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

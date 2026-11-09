import artmedia from "../assets/companies/artmedia.jpg";
import klipy from "../assets/companies/klipy.jpg";
import smartsoft from "../assets/companies/smartsoft.jpg";
import ArrowUpRight from "../assets/svgs/ArrowUpRight";

const roles = [
  {
    company: "SmartSoft",
    role: "Frontend Developer",
    period: "Jul 2026 — Present",
    location: "Tbilisi · Hybrid",
    logo: smartsoft,
    summary: [
      "Build production iGaming interfaces with PixiJS, including animation, layout, and interaction across desktop and mobile browsers",
      "Turn Figma and Photoshop assets into game screens and keep the player experience consistent across devices",
      "Work with animators, designers, developers, and testers to ship game UI that holds up under real play",
      "Improve game performance by recording in Performance DevTools under different CPU and network conditions and optimizing from those recordings",
    ],
  },
  {
    company: "KLIPY",
    role: "Frontend Developer",
    period: "Feb 2025 — Jul 2026",
    location: "Tbilisi · Hybrid",
    logo: klipy,
    summary: [
      "Built the partner panel from scratch in React and TypeScript so API partners can manage accounts, monitor usage, and read performance charts with Recharts",
      "Built the Ads Manager from scratch inside that same project, so partners can create and manage ads alongside the rest of the panel",
      "Connected the dashboard to backend services through REST integrations for account, usage, and metrics data",
      "Improved performance, SEO, and UX on the Next.js KLIPY website, with faster page loads and clearer search visibility",
      "Mentored a teammate through code reviews, walking through architecture and implementation decisions",
    ],
  },
  {
    company: "Artmedia",
    role: "Frontend Developer",
    period: "Oct 2022 — Jan 2025",
    location: "Tbilisi · Hybrid",
    logo: artmedia,
    summary: [
      "Built and maintained multilingual production sites, including georgia.travel, places.georgia.travel, youthtbilisi.ge, and watersprint.com",
      "Shipped responsive interfaces with React, Next.js, TypeScript, Tailwind CSS, and SCSS, from Figma through production",
      "Integrated REST APIs and Node.js services, and handled server-side work in PHP for the WordPress project",
      "Added Cypress end-to-end coverage and used Lighthouse to improve performance and accessibility",
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

import ArrowUpRight from "../assets/svgs/ArrowUpRight";
import CodeEditor from "./CodeEditor";
import DinoGame from "./DinoGame";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ani-bukhrashvili-a5313622b",
  },
  {
    label: "GitHub",
    href: "https://github.com/AniBukhrashvili",
  },
];

// TODO: Add stack
const stack = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Tailwind" },
  { name: "PixiJS" },
];

function StackMarquee() {
  return (
    <div className="group flex h-full min-h-20 items-center overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_90%,transparent)]">
      <div className="logo-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-6 px-5"
            aria-hidden={copy === 1}
          >
            {stack.map((item) => (
              <div
                key={`${copy}-${item.name}`}
                className="flex items-center gap-2 text-ink/80"
              >
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// TODO: Add slot card
function SlotCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ink/5 p-3">
      <div className="grid grid-cols-3 gap-1 rounded-lg border border-ink/10 bg-page p-1.5">
        {/* {reels.map((reel) => (
          <SlotReel key={reel.duration} duration={reel.duration} delay={reel.delay} />
        ))} */}
        slot reel slot reel slot reel slot reel slot
      </div>
      <p className="mt-2 text-[11px] font-medium text-ink/55">
        <span className="text-accent">PixiJS</span>
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container grid items-center py-9 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 xl:gap-20 lg:py-18 xl:py-20">
        <div className="min-w-0">
          <p className="text-3xl sm:text-4xl font-medium">
            <span className="wave" aria-hidden="true">
              👋
            </span>
            <span className="italic text-ink/70"> Hi, I'm</span>
          </p>

          <h1 className="mt-3 font-bold uppercase leading-[0.85] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            <span className="block text-ink">Ani Bukhrashvili</span>
          </h1>

          <div className="mt-7 flex flex-col gap-2 text-base font-medium text-accent sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="exp-pulse h-1.5 w-1.5 rounded-full bg-accent" />
              Frontend Developer
            </span>
          </div>

          <p className="mt-6 max-w-lg text-base font-medium leading-7 text-ink/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-ink/80">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              Resume
              <ArrowUpRight />
            </a>
            <a
              href="mailto:bukhrashviliiani@gmail.com"
              className="hover:text-accent"
            >
              bukhrashviliiani@gmail.com
            </a>
          </div>

          <a
            href="#experience"
            className="mt-9 inline-flex w-fit max-w-full items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-ink/55 hover:text-accent"
          >
            <span className="scroll-nudge mb-1.5 flex h-6 w-4 items-start justify-center rounded-full border border-ink/30 p-1">
              <span className="h-1 w-0.5 rounded-full bg-accent" />
            </span>
            Scroll to explore
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-12">
          <li className="overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 sm:col-span-12">
            <DinoGame />
          </li>

          <li className="sm:col-span-5">
            <CodeEditor />
          </li>
          <li className="sm:col-span-4">
            <SlotCard />
          </li>
          <li className="flex flex-col gap-1 justify-end rounded-2xl border border-ink/10 bg-ink/5 px-3 py-3 sm:col-span-3">
            <p className="text-5xl font-semibold leading-none text-ink">3+</p>
            <p className="mt-1.5 text-lg font-normal leading-tight text-ink/55">
              Years of experience
            </p>
          </li>

          <li className="sm:col-span-8">
            <StackMarquee />
          </li>
          <li className="sm:col-span-4">
            <a
              href="#projects"
              className="flex h-full min-h-20 flex-col justify-end rounded-2xl border border-ink/10 bg-ink/5 p-5 text-ink transition-colors hover:text-accent"
            >
              <span className="inline-flex items-center gap-2 text-xl font-semibold leading-tight">
                Projects
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;

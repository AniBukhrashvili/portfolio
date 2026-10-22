import css from "../assets/stack/css.svg";
import gsap from "../assets/stack/gsap.svg";
import html5 from "../assets/stack/html5.svg";
import javascript from "../assets/stack/javascript.svg";
import nextjs from "../assets/stack/nextjs.svg";
import nodejs from "../assets/stack/nodejs.svg";
import pixijs from "../assets/stack/pixijs.svg";
import react from "../assets/stack/react.svg";
import reactrouter from "../assets/stack/reactrouter.svg";
import redux from "../assets/stack/redux.svg";
import sass from "../assets/stack/sass.svg";
import tailwind from "../assets/stack/tailwind.svg";
import tanstack from "../assets/stack/tanstack.svg";
import typescript from "../assets/stack/typescript.svg";
import ArrowUpRight from "../assets/svgs/ArrowUpRight";
import CodeEditor from "./CodeEditor";
import DinoGame from "./DinoGame";
import SlotCard from "./SlotCard";

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

const stack = [
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css },
  { name: "Sass", icon: sass },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "PixiJS", icon: pixijs },
  { name: "React Router", icon: reactrouter },
  { name: "Tailwind", icon: tailwind },
  { name: "Redux", icon: redux },
  { name: "TanStack Query", icon: tanstack },
  { name: "GSAP", icon: gsap },
  { name: "Node.js", icon: nodejs },
];

function StackMarquee() {
  return (
    <div className="group flex h-full min-h-20 items-center overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_90%,transparent)]">
      <div
        className="logo-marquee flex w-max"
        style={{ animationDuration: `${stack.length * 2.8}s` }}
      >
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
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--stack-tile)] p-1.5">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="whitespace-nowrap text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
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

          <p className="mt-6 max-w-lg text-base font-light leading-7 text-ink/70">
            I build modern, high-performance web experiences that combine clean UI, thoughtful UX and smooth interactions. 
            With 4+ years of experience, I work across React, Next.js, TypeScript and PixiJS, developing everything from scalable web platforms and API integrations to interactive iGaming experiences.
            <br />
            <br />
            At SmartSoft, I focus on game interfaces, animations and performance. Previously, at KLIPY and Artmedia, I built API-driven platforms and client-facing products across different industries.
            I value clean, maintainable code, collaboration and turning complex ideas into intuitive experiences.
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
            <p className="text-5xl font-semibold leading-none text-ink">4+</p>
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
              className="flex h-full min-h-20 flex-col justify-end rounded-2xl border border-ink/10 bg-ink/5 p-5 text-ink  hover:text-accent"
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

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Completed Projects" },
  { value: "3", label: "Companies" },
];

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container flex flex-col justify-center pb-56 pt-56">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base font-semibold text-white/80">
          <span className="wave text-lg" aria-hidden="true">
            👋
          </span>
          Hi, I&apos;m Ani Bukhrashvili
        </p>
        <h1 className="mt-6 text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
          <span className="block text-accent">Frontend</span>
          <span className="block text-white">Developer</span>
        </h1>
        <p className="mt-6 max-w-lg text-base font-medium leading-7 text-white/70">
          I build modern, responsive, and user-friendly web applications with 3+
          years of experience in React, Next.js, and TypeScript.
        </p>
        <p className="mt-3 text-sm font-medium text-white/50">
          📍 Tbilisi, Georgia
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex w-fit items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-page transition-opacity hover:opacity-90"
        >
          Let&apos;s Talk
        </a>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-white/55">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for new opportunities
        </p>
      </div>

      <ul className="z-20 mt-10 flex flex-wrap gap-8 px-6 pb-10 md:absolute md:bottom-8 md:right-12 md:mt-0 md:flex-col md:items-end md:gap-6 md:px-0 md:pb-0">
        {stats.map((stat) => (
          <li key={stat.label} className="text-left md:text-right">
            <p className="text-4xl font-extrabold text-accent md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold text-white/50">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "PixiJS",
  "Arduino",
];

function Stack() {
  return (
    <section id="stack" className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">
          Stack
          <span className="ml-1 text-sm font-light italic text-ink/50">
            I work with
          </span>
        </h2>
        <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-ink/10 bg-ink/5 px-5 py-5">
          {stack.map((name) => (
            <li key={name} className="text-sm font-medium text-ink/80">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stack;

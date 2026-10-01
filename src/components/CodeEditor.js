function CodeEditor() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ink/5 p-3">
      <div className="overflow-hidden rounded-lg border border-ink/10 bg-[var(--code-bg)]">
        <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[10px] text-ink/40">
            page.tsx
          </span>
        </div>
        <pre className="whitespace-pre-wrap px-3 py-2.5 font-mono text-[10px] leading-4 text-ink/75">
          <span className="text-[var(--code-kw)]">import</span> Image{" "}
          <span className="text-[var(--code-kw)]">from</span>{" "}
          <span className="text-[var(--code-str)]">&quot;next/image&quot;</span>
          {"\n\n"}
          <span className="text-[var(--code-kw)]">
            export default function
          </span>{" "}
          <span className="text-[var(--code-fn)]">Card</span>() {"{"}
          {"\n"}
          {"  "}
          <span className="text-[var(--code-kw)]">return</span> ({"\n"}
          {"    "}
          <span className="text-[var(--code-tag)]">&lt;&gt;</span>
          {"\n"}
          {"      "}
          <span className="text-[var(--code-tag)]">&lt;h1&gt;</span>
          {"\n"}
          {"        "}I&apos;m Ani, Frontend Developer
          {"\n"}
          {"      "}
          <span className="text-[var(--code-tag)]">&lt;/h1&gt;</span>
          {"\n"}
          {"      "}
          <span className="text-[var(--code-tag)]">&lt;Image</span>{" "}
          <span className="text-[var(--code-attr)]">alt</span>=
          <span className="text-[var(--code-str)]">&quot;avatar&quot;</span>{" "}
          <span className="text-[var(--code-tag)]">/&gt;</span>
          {"\n"}
          {"    "}
          <span className="text-[var(--code-tag)]">&lt;/&gt;</span>
          {"\n"}
          {"  "});
          {"\n"}
          {"}"}
        </pre>
      </div>
      <p className="mt-2 text-[11px] font-medium text-ink/55">
        <span className="text-accent">React.js</span>
        <span className="mx-1.5 text-ink/25">·</span>
        Next.js
      </p>
    </div>
  );
}

export default CodeEditor;

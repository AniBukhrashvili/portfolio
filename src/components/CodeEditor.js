function CodeEditor() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ink/5 p-3">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1e]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[10px] text-white/40">
            page.tsx
          </span>
        </div>
        <pre className="whitespace-pre-wrap px-3 py-2.5 font-mono text-[10px] leading-4 text-white/75">
          <span className="text-[#c586c0]">import</span> Image{" "}
          <span className="text-[#c586c0]">from</span>{" "}
          <span className="text-[#ce9178]">&quot;next/image&quot;</span>
          {"\n\n"}
          <span className="text-[#c586c0]">export default function</span>{" "}
          <span className="text-[#dcdcaa]">Card</span>() {"{"}
          {"\n"}
          {"  "}
          <span className="text-[#c586c0]">return</span> (
          {"\n"}
          {"    "}
          <span className="text-[#4ec9b0]">&lt;&gt;</span>
          {"\n"}
          {"      "}
          <span className="text-[#4ec9b0]">&lt;h1&gt;</span>
          {"\n"}
          {"        "}I&apos;m Ani, Frontend Developer
          {"\n"}
          {"      "}
          <span className="text-[#4ec9b0]">&lt;/h1&gt;</span>
          {"\n"}
          {"      "}
          <span className="text-[#4ec9b0]">&lt;Image</span>{" "}
          <span className="text-[#9cdcfe]">alt</span>=
          <span className="text-[#ce9178]">&quot;avatar&quot;</span>{" "}
          <span className="text-[#4ec9b0]">/&gt;</span>
          {"\n"}
          {"    "}
          <span className="text-[#4ec9b0]">&lt;/&gt;</span>
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

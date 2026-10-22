import { useEffect, useRef, useState } from "react";
import SpinIcon from "../assets/svgs/SpinIcon";

const slotDigits = ["7", "2", "9", "4", "1", "8", "0", "5", "3", "6"];
const slotLoop = 4;
const spinDuration = 3000;

const slotStrip = Array.from({ length: slotDigits.length * slotLoop }, (_, index) => {
  const start = index % slotDigits.length;
  return [0, 3, 6].map(
    (shift) => slotDigits[(start + shift) % slotDigits.length],
  );
});

function SlotCard() {
  const [offset, setOffset] = useState(0);
  const [motion, setMotion] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const spin = () => {
    if (spinning) return;

    const next = offset + 6 + Math.floor(Math.random() * 3);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setOffset(next % slotDigits.length);
      return;
    }

    setSpinning(true);
    setMotion(true);
    setOffset(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setMotion(false);
      setOffset(next % slotDigits.length);
      setSpinning(false);
    }, spinDuration + 60);
  };

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ink/5 p-3">
      <div className="relative min-h-[10.5rem] flex-1">
        <div className="slot-window relative h-full overflow-hidden rounded-lg border border-ink/10 bg-page [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
        <div
          className="slot-row-strip"
          style={{
            transform: `translateY(calc(${-offset} * 100cqh / 3))`,
            transition: motion
              ? `transform ${spinDuration}ms cubic-bezier(0.08, 0.72, 0.12, 1)`
              : "none",
          }}
          aria-hidden="true"
        >
          {slotStrip.map((group, index) => (
            <div
              key={index}
              className="slot-row-line grid grid-cols-3 divide-x divide-ink/10"
            >
              {group.map((digit, cell) => (
                <span
                  key={cell}
                  className={`flex items-center justify-center font-mono text-2xl font-semibold tabular-nums ${
                    digit === "7" ? "text-accent" : "text-ink"
                  }`}
                >
                  {digit}
                </span>
              ))}
            </div>
          ))}
        </div>
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-ink/10" />
          <div className="pointer-events-none absolute inset-x-0 top-2/3 h-px bg-ink/10" />
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-1/3 bg-accent/[0.08]" />
        </div>
        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          aria-label="Spin"
          className="absolute -bottom-2.5 -right-1.5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-page/90 text-ink shadow-sm backdrop-blur-sm  hover:border-accent/50 hover:text-accent disabled:opacity-40"
        >
          <SpinIcon className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
        </button>
      </div>
      <p className="mt-2 text-[11px] font-medium text-ink/55">
        <span className="text-accent">PixiJS</span>
      </p>
    </div>
  );
}

export default SlotCard;

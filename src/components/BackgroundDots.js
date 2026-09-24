import { useMemo } from "react";

const DOT_COUNT = 50;

function createDots() {
  return Array.from({ length: DOT_COUNT }, (_, id) => {
    const distance = 16 + Math.random() * 20;
    const angle = Math.random() * Math.PI * 2;

    return {
      id,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2.5 + Math.random() * 2.5}s`,
      delay: `${-Math.random() * 4}s`,
      tx: `${Math.cos(angle) * distance}px`,
      ty: `${Math.sin(angle) * distance}px`,
    };
  });
}

function BackgroundDots() {
  const dots = useMemo(createDots, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="bg-dot absolute h-[3px] w-[3px] rounded-full bg-white/30"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
            "--duration": dot.duration,
            "--tx": dot.tx,
            "--ty": dot.ty,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundDots;

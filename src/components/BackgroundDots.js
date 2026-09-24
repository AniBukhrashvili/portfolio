import { useMemo } from "react";

const DOT_COUNT = 60;

function createDots() {
  return Array.from({ length: DOT_COUNT }, (_, id) => {
    const travel = 3 + Math.random() * 4;

    return {
      id,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${20 + Math.random() * 16}s`,
      delay: `${-Math.random() * 20}s`,
      tx: `${(Math.random() - 0.5) * travel}px`,
      ty: `${(Math.random() - 0.5) * travel}px`,
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
          className="absolute h-[2px] w-[2px] rounded-full bg-white/25 animate-dot"
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

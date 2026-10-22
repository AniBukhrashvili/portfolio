import { useEffect, useRef } from "react";

function inkColor() {
  const channels = getComputedStyle(document.documentElement)
    .getPropertyValue("--ink")
    .trim();
  return `rgb(${channels})`;
}

function drawDino(ctx, x, y, frame, blink) {
  ctx.fillRect(x, y + 12, 8, 4);
  ctx.fillRect(x + 2, y + 10, 6, 3);
  ctx.fillRect(x + 6, y + 8, 16, 12);
  ctx.fillRect(x + 16, y + 1, 12, 10);
  ctx.fillRect(x + 26, y + 5, 4, 3);
  ctx.fillRect(x + 18, y + 14, 5, 3);

  if (!blink) {
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(x + 22, y + 3, 2, 2);
    ctx.restore();
  }

  if (frame === 0) {
    ctx.fillRect(x + 8, y + 20, 3, 6);
    ctx.fillRect(x + 15, y + 20, 3, 4);
  } else {
    ctx.fillRect(x + 10, y + 20, 3, 4);
    ctx.fillRect(x + 16, y + 20, 3, 6);
  }
}

function drawCactus(ctx, x, y, wide, height) {
  ctx.fillRect(x + (wide ? 4 : 2), y, wide ? 5 : 4, height);
  if (!wide) return;
  ctx.fillRect(x, y + 8, 4, 3);
  ctx.fillRect(x, y + 8, 3, 10);
  ctx.fillRect(x + 9, y + 12, 4, 3);
  ctx.fillRect(x + 10, y + 6, 3, 9);
}

function drawCloud(ctx, x, y) {
  ctx.fillRect(x + 4, y, 12, 5);
  ctx.fillRect(x, y + 4, 24, 6);
}

function DinoGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cssHeight = 148;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const state = {
      status: "idle",
      y: 0,
      vy: 0,
      tick: 0,
      speed: 5,
      score: 0,
      best: 0,
      ground: 0,
      spawn: 90,
      blink: 0,
      obstacles: [],
      clouds: [
        { x: 90, y: 22 },
        { x: 280, y: 36 },
      ],
    };

    const dinoX = 28;
    const dinoW = 28;
    const dinoH = 26;

    const reset = () => {
      state.status = "run";
      state.y = 0;
      state.vy = 0;
      state.score = 0;
      state.speed = 5;
      state.obstacles = [];
      state.spawn = 70;
      state.ground = 0;
    };

    const jump = () => {
      if (state.status === "dead") {
        reset();
        return;
      }
      if (state.status === "idle") state.status = "run";
      if (state.y === 0) state.vy = -9.2;
    };

    const onKey = (event) => {
      if (event.code !== "Space" && event.code !== "ArrowUp") return;
      const active =
        document.activeElement === canvas || canvas.matches(":hover");
      if (!active) return;
      event.preventDefault();
      jump();
    };

    const onPointer = () => {
      canvas.focus({ preventScroll: true });
      jump();
    };

    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", onPointer);

    let raf = 0;
    let lastTime = 0;
    let alive = true;
    const frameMs = 1000 / 60;

    const loop = (now) => {
      if (!alive) return;

      const delta = lastTime ? Math.min(now - lastTime, 34) : frameMs;
      lastTime = now;
      const scale = delta / frameMs;
      const step = scale * 1.25;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const floor = height - 22;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = inkColor();

      if (state.status === "run") {
        state.tick += step;
        state.score += state.speed * 0.08 * step;
        state.speed = Math.min(11, 5 + state.score / 180);
        state.ground = (state.ground + state.speed * step) % 16;
        state.vy += 0.48 * step;
        state.y = Math.min(0, state.y + state.vy * step);
        if (state.y === 0) state.vy = 0;

        state.spawn -= step;
        if (state.spawn <= 0) {
          const wide = Math.random() > 0.45;
          state.obstacles.push({
            x: width + 8,
            wide,
            h: wide ? 30 : 20,
          });
          state.spawn = 50 + Math.random() * 45;
        }

        state.obstacles.forEach((item) => {
          item.x -= state.speed * step;
        });
        state.obstacles = state.obstacles.filter((item) => item.x > -40);
        state.clouds.forEach((cloud) => {
          cloud.x -= state.speed * 0.25 * step;
          if (cloud.x < -30) cloud.x = width + 20;
        });

        const dinoTop = floor - dinoH + state.y;
        const crashed = state.obstacles.some(
          (item) =>
            dinoX + 6 < item.x + (item.wide ? 14 : 8) &&
            dinoX + dinoW - 8 > item.x &&
            dinoTop + 8 < floor &&
            dinoTop + dinoH - 2 > floor - item.h,
        );

        if (crashed) {
          state.status = "dead";
          state.best = Math.max(state.best, Math.floor(state.score));
        }
      } else {
        state.blink += scale;
      }

      ctx.globalAlpha = 0.45;
      state.clouds.forEach((cloud) => drawCloud(ctx, cloud.x, cloud.y));
      ctx.globalAlpha = 1;

      for (let x = -state.ground; x < width; x += 16) {
        ctx.fillRect(x, floor + 2, 10, 2);
      }

      state.obstacles.forEach((item) => {
        drawCactus(ctx, item.x, floor - item.h, item.wide, item.h);
      });

      const running = state.status === "run" && state.y === 0;
      drawDino(
        ctx,
        dinoX,
        floor - dinoH + state.y,
        running ? Math.floor(state.tick / 6) % 2 : 0,
        state.status !== "run" && state.blink % 150 > 140,
      );

      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "right";
      ctx.fillText(
        String(Math.floor(state.score)).padStart(5, "0"),
        width - 12,
        18,
      );

      if (state.best) {
        ctx.textAlign = "left";
        ctx.globalAlpha = 0.55;
        ctx.fillText(
          `HI ${String(state.best).padStart(5, "0")}`,
          12,
          18,
        );
        ctx.globalAlpha = 1;
      }

      if (state.status !== "run") {
        ctx.textAlign = "center";
        ctx.font = "14px Space Grotesk, ui-sans-serif, sans-serif";
        ctx.fillText(
          state.status === "dead" ? "Game over" : "Space or click to play",
          width / 2,
          height / 2 - 8,
        );
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      tabIndex={0}
      aria-label="Dinosaur game. Press space or click to jump."
      className="block h-[148px] w-full cursor-pointer outline-none"
    />
  );
}

export default DinoGame;

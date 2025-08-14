
"use client";
import { useEffect, useRef } from "react";
type Dot = { x: number; y: number; size: number; speed: number; alpha: number };
export default function PixelRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);
  const speedBoost = useRef(1);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);
    const count = Math.min(200, Math.floor((window.innerWidth * window.innerHeight) / 12000));
    dots.current = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: (Math.random() * 2 + 1) * devicePixelRatio,
      speed: (Math.random() * 0.6 + 0.4) * devicePixelRatio,
      alpha: Math.random() * 0.6 + 0.2,
    }));
    let raf = 0;
    let lastY = window.scrollY;
    const onScroll = () => {
      speedBoost.current = 1 + Math.min(2, Math.abs(window.scrollY - lastY) / 200);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return () => {};
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots.current) {
        ctx.fillStyle = `rgba(230,57,70,${d.alpha})`;
        ctx.fillRect(d.x, d.y, d.size, d.size);
        d.y += d.speed * speedBoost.current;
        if (d.y > canvas.height) { d.y = -d.size; d.x = Math.random() * canvas.width; }
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); };
  }, []);
  return <canvas className="pixel-canvas" ref={ref} aria-hidden="true" />;
}

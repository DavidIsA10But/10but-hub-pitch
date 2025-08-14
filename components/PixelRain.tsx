
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
    const maxCount = Math.min(320, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    dots.current = Array.from({ length: maxCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: (Math.random() * 2 + 1) * devicePixelRatio,
      speed: (Math.random() * 0.6 + 0.4) * devicePixelRatio,
      alpha: Math.random() * 0.6 + 0.2,
    }));
    let raf = 0;
    let visibleCount = 80;
    let sizeBoost = 1;
    let lastY = window.scrollY;
    const onScroll = () => {
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / (docH - window.innerHeight + 1)));
      visibleCount = Math.floor(60 + progress * (maxCount - 60));
      sizeBoost = 1 + progress * 0.6;
      speedBoost.current = 1 + Math.min(2, Math.abs(window.scrollY - lastY) / 200);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return () => {};
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i=0; i<visibleCount; i++) { const d = dots.current[i];
        ctx.fillStyle = `rgba(230,57,70,${d.alpha})`;
        ctx.fillRect(d.x, d.y, d.size*sizeBoost, d.size*sizeBoost);
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

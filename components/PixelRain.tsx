"use client";
import { useEffect, useRef, useState } from "react";

type Drop = { x: number; y: number; vy: number; size: number; drift: number };

export default function PixelRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [densityBoost, setDensityBoost] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const baseCount = Math.max(60, Math.floor((w * h) / 16000));
    let drops: Drop[] = [];
    const randomDrop = (): Drop => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.6 + Math.random() * 1.0,
      size: 2.6 + Math.random() * 2.0,
      drift: (Math.random() - 0.5) * 0.3,
    });

    const ensureDrops = () => {
      const target = baseCount + densityBoost;
      while (drops.length < target) drops.push(randomDrop());
      if (drops.length > target) drops.length = target;
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      setDensityBoost(Math.min(120, Math.floor(y / 120)));
    };
    window.addEventListener("scroll", onScroll);

    const onMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / w - 0.5);
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf = 0;
    const loop = () => {
      ensureDrops();
      ctx.clearRect(0, 0, w, h);
      for (const d of drops) {
        d.y += d.vy;
        d.x += d.drift + mouseX * 0.6;
        if (d.y > h) d.y = -5;
        if (d.x < -5) d.x = w + 5;
        if (d.x > w + 5) d.x = -5;
        ctx.fillRect(d.x, d.y, d.size, d.size);
      }
      raf = requestAnimationFrame(loop);
    };
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [densityBoost, mouseX]);

  return <canvas ref={ref} className="-z-10 absolute inset-0 pointer-events-none" />;
}
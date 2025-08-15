"use client";
import { useEffect, useRef } from "react";

export default function PixelRain() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const N = 160;
    const P = Array.from({ length: N }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: Math.random() * 1.5 + 0.5,
      r: Math.random() * 1.2 + 0.6,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const draw = () => {
      const scroll = window.scrollY || 0;
      const docH = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const f = Math.min(1, scroll / docH);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        const vy = p.s + f * 2.2;
        p.y += vy;
        if (p.y - 4 > h) {
          p.y = -4;
          p.x = Math.random() * w;
        }
        const radius = p.r + f * 1.6;
        const alpha = 0.18 + f * 0.45;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,57,70,${alpha.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" />;
}

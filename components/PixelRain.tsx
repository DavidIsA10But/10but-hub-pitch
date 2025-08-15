"use client";
import { useEffect, useRef } from "react";

export default function PixelRain() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const N = 180;
    type P = { x:number;y:number;s:number;r:number;vx:number };
    const PTS: P[] = Array.from({ length: N }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: Math.random() * 1.2 + 0.35,  // slower
      r: (Math.random() * 1.2 + 0.6) * 1.3, // +30%
      vx: (Math.random() - 0.5) * 0.2
    }));

    let mouseX = w/2, mouseY = h/2, gust = 0;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onClick = () => { gust = 1; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const draw = () => {
      const scroll = window.scrollY || 0;
      const docH = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const f = Math.min(1, scroll / docH);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < PTS.length; i++) {
        const p = PTS[i];
        const vy = p.s + f * 0.8; // slower than before
        p.y += vy;
        p.x += p.vx;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          const force = (160 - dist) / 160;
          p.x += (dx / (dist || 1)) * -0.25 * force;
          p.y += (dy / (dist || 1)) * -0.05 * force;
        }

        if (gust > 0.01) {
          p.x += (Math.random() - 0.5) * 1.0 * gust;
          p.y += (Math.random() - 0.5) * 0.5 * gust;
        }

        if (p.y - 6 > h) { p.y = -6; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      }

      gust *= 0.92;

      for (let i = 0; i < PTS.length; i++) {
        const p = PTS[i];
        const alpha = 0.16 + f * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,57,70,${alpha.toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" />;
}

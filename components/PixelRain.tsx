
"use client";
import { useEffect, useRef } from "react";
type Dot = { x:number; y:number; s:number; v:number; a:number };
export default function PixelRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function resize(){ c.width = window.innerWidth*DPR; c.height = window.innerHeight*DPR; }
    resize(); window.addEventListener("resize", resize);
    const MAX = 320;
    const dots: Dot[] = Array.from({length: MAX}).map(() => ({ x: Math.random()*c.width, y: Math.random()*c.height, s:(Math.random()*2+1)*DPR, v:(Math.random()*0.6+0.4)*DPR, a:Math.random()*0.6+0.2 }));
    let raf=0, visible=90, sizeBoost=1;
    const onScroll = () => {
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / (docH - window.innerHeight + 1)));
      visible = Math.floor(90 + progress * (MAX - 90));
      sizeBoost = 1 + progress * 0.6;
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    if (mq.matches) return () => { window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); };
    const render = () => {
      ctx.clearRect(0,0,c.width,c.height);
      for (let i=0; i<visible; i++) {
        const d = dots[i];
        ctx.fillStyle = `rgba(230,57,70,${d.a})`;
        ctx.fillRect(d.x, d.y, d.s*sizeBoost, d.s*sizeBoost);
        d.y += d.v; if (d.y > c.height) { d.y = -d.s; d.x = Math.random()*c.width; }
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); };
  }, []);
  return <canvas className="pixel-canvas" ref={ref} aria-hidden="true" />;
}


/* AI-EDIT START: PixelRain tuning
   - +30% pixel size
   - slower fall speed
   - scroll -> density increases
   - mouse move -> slight horizontal drift
*/
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
      vy: 0.6 + Math.random() * 1.0, // slower
      size: 2.6 + Math.random() * 2.0, // +30% approx
      drift: (Math.random() - 0.5) * 0.3,
    });

    const ensureDrops = () => {
      const target = baseCount + densityBoost;
      while (drops.length < target) drops.push(randomDrop());
      if (drops.length > target) drops.length = target;
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      setDensityBoost(Math.min(120, Math.floor(y / 120))); // increase with scroll
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
/* AI-EDIT END */
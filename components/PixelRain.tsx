
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

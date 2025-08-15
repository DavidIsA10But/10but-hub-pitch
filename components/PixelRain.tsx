"use client";
import { useEffect, useRef } from "react";
export default function PixelRain(){
  const ref = useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const c = ref.current!; const g = c.getContext("2d")!;
    let W=c.width=innerWidth, H=c.height=innerHeight;
    type P={x:number;y:number;r:number;s:number;vx:number};
    const pts: P[] = Array.from({length:180},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.2+0.6)*1.3,s:Math.random()*1.2+0.35,vx:(Math.random()-0.5)*0.2}));
    let mx=W/2,my=H/2,gust=0;
    const onRes=()=>{W=c.width=innerWidth;H=c.height=innerHeight;}; addEventListener("resize",onRes);
    const onMove=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY;}; addEventListener("mousemove",onMove);
    const onClick=()=>{gust=1}; addEventListener("click",onClick);
    let raf=0;
    const loop=()=>{
      const scroll = scrollY||0, docH=Math.max(1,document.body.scrollHeight-innerHeight), f=Math.min(1,scroll/docH);
      g.clearRect(0,0,W,H);
      for(const p of pts){
        const vy=p.s + f*0.8; // slower, increases with scroll
        p.y+=vy; p.x+=p.vx;
        const dx=p.x-mx, dy=p.y-my, d=Math.hypot(dx,dy);
        if(d<160){ const F=(160-d)/160; p.x += (dx/(d||1))*-0.25*F; p.y += (dy/(d||1))*-0.05*F; }
        if(gust>0.01){ p.x += (Math.random()-0.5)*1.0*gust; p.y += (Math.random()-0.5)*0.5*gust; }
        if(p.y-6>H){ p.y=-6; p.x=Math.random()*W; }
        if(p.x<-10) p.x=W+10; if(p.x>W+10) p.x=-10;
      }
      gust*=0.92;
      for(const p of pts){ const a=0.16+f*0.35; g.beginPath(); g.arc(p.x,p.y,p.r,0,Math.PI*2); g.fillStyle=`rgba(230,57,70,${a})`; g.fill(); }
      raf=requestAnimationFrame(loop);
    };
    loop();
    return ()=>{ cancelAnimationFrame(raf); removeEventListener("resize",onRes); removeEventListener("mousemove",onMove); removeEventListener("click",onClick); };
  },[]);
  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" />;
}

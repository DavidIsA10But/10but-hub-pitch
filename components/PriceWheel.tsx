"use client";
import { useEffect, useState } from "react";

export default function PriceWheel() {
  const [hours, setHours] = useState(0);
  const [euros, setEuros] = useState(0);

  useEffect(() => {
    let raf: number, t0 = performance.now();
    const duration = 2200;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - k, 3);
      setHours(Math.round(40 * e));
      setEuros(Math.round(5000 * e));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const segs = Array.from({ length: 12 }).map((_, i) => {
    const a0 = (i * Math.PI * 2) / 12;
    const a1 = ((i + 0.9) * Math.PI * 2) / 12;
    const r0 = 40, r1 = 90;
    const cx = 100, cy = 100;
    const x0 = cx + Math.cos(a0) * r0;
    const y0 = cy + Math.sin(a0) * r0;
    const x1 = cx + Math.cos(a1) * r0;
    const y1 = cy + Math.sin(a1) * r0;
    const x2 = cx + Math.cos(a1) * r1;
    const y2 = cy + Math.sin(a1) * r1;
    const x3 = cx + Math.cos(a0) * r1;
    const y3 = cy + Math.sin(a0) * r1;
    const d = `M ${x0} ${y0} L ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`;
    return <path key={i} d={d} fill="url(#seg)" opacity={0.85}/>;
  });

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        <defs>
          <linearGradient id="seg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <g className="origin-center animate-[spin_9s_linear_infinite]">
          {segs}
        </g>
        <circle cx="100" cy="100" r="35" fill="#fff"/>
        <text x="100" y="92" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="12" fill="#1A1A1A">Coût moyen</text>
        <text x="100" y="112" textAnchor="middle" fontFamily="Poppins, system-ui" fontSize="16" fontWeight="700" fill="#1A1A1A">{hours}h</text>
        <text x="100" y="132" textAnchor="middle" fontFamily="Poppins, system-ui" fontSize="16" fontWeight="700" fill="#1A1A1A">{euros.toLocaleString("fr-FR")}€</text>
      </svg>
      <div className="text-sm text-ink/60 text-center max-w-sm">
        Quand chaque startup recrute seule : heures perdues, coûts qui montent, opportunités manquées.
      </div>
    </div>
  );
}

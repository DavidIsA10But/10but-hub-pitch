import React from 'react';

function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-poppins mb-4">Faites de votre Hub un Écosystème de Talents</h1>
      <p className="text-lg mb-8">Rejoignez Sciences Po Paris & Wacano dans la transformation du recrutement</p>
      <a href="https://cal.com/david-10but/15min" className="bg-accent text-white px-6 py-3 rounded font-semibold">Réserver un appel de 15 minutes</a>
    </section>
  );
}

function NetworkAnimation() {
  const elements: JSX.Element[] = [];
  const points = [[120,60],[80,160],[160,240],[280,80],[260,180],[340,260],[460,60],[520,140],[480,220]];

  points.forEach((pt, i) => {
    elements.push(<circle key={i} cx={pt[0]} cy={pt[1]} r={8} fill="#E63946" />);
  });

  elements.push(<rect key="cv" x={300} y={140} width={40} height={40} rx={5} fill="#E63946" />);

  return (
    <div className="flex justify-center py-10">
      <svg viewBox="0 0 640 320" width="400" height="200">
        <g>{elements}</g>
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <Hero />
      <NetworkAnimation />
    </main>
  );
}

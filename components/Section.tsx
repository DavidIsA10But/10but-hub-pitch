
import { ReactNode } from "react";

export default function Section({ id, title, kicker, children }: { id?: string; title?: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} className="safe-content py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {kicker ? <p className="text-sm uppercase tracking-widest text-accent/80 font-poppins mb-2">{kicker}</p> : null}
        {title ? <h2 className="font-poppins text-2xl md:text-4xl font-semibold mb-6">{title}</h2> : null}
        <div className="text-base md:text-lg leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

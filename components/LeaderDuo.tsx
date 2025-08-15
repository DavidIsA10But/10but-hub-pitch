export default function LeaderDuo({
  ceo, cto
}: {
  ceo: { photo: string; name: string; quote: string },
  cto: { photo: string; name: string; quote: string }
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[ceo, cto].map((p, i) => (
        <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border bg-white/70">
          <img src={p.photo} alt={p.name} className="w-20 h-20 rounded-full object-cover border" />
          <div>
            <div className="font-poppins text-lg font-semibold">{p.name}</div>
            <blockquote className="text-ink/80 leading-relaxed">“{p.quote}”</blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LeaderQuote({
  photo, name, title, quote
}: { photo: string; name: string; title?: string; quote: string }) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl border bg-white/70" data-anim>
      <img src={photo} alt={name} className="w-20 h-20 rounded-full object-cover border" />
      <div>
        <div className="font-poppins text-lg font-semibold">{name}</div>
        {title ? <div className="text-sm text-ink/60 mb-2">{title}</div> : null}
        <blockquote className="text-ink/80 leading-relaxed">“{quote}”</blockquote>
      </div>
    </div>
  );
}

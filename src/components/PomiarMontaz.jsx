export default function PomiarMontaz({ text }) {
  return (
    <div className="px-6 py-8 min-h-[240px]">
      <h4 className="font-serif text-xl text-zinc-100 mb-4 leading-snug">
        Bezinwazyjny montaż – bez wiercenia i bez uszkodzenia okna
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

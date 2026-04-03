import { motion, useReducedMotion } from 'framer-motion'
import { MONTAZ_BEZINWAZYJNY } from '../data/products'

const highlights = [
  {
    title: 'Bez wiercenia',
    desc: 'Specjalne blaszki nierdzewne mocowane bez ingerencji w ramę okna.',
  },
  {
    title: 'Każdy typ okna',
    desc: 'PCV, drewniane i aluminiowe — dobieramy system do Twojego okna.',
  },
  {
    title: 'Ochrona gwarancji',
    desc: 'Roleta może zostać przyklejona bez wiercenia, gdy okno jest na gwarancji.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
}

// ── Standalone page section ───────────────────────────────────────────────────

function PomiarMontazSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="montaz"
      className="py-24 lg:py-36 bg-zinc-950"
      aria-labelledby="montaz-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-4">
            Montaż
          </p>
          <h2 id="montaz-heading" className="section-heading mb-2">
            Pomiar i Montaż
          </h2>
          <div className="gold-accent-line mx-auto" aria-hidden="true" />
          <p className="max-w-2xl mx-auto text-zinc-400 text-[15px] leading-relaxed mt-6">
            {MONTAZ_BEZINWAZYJNY}
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={reduceMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-zinc-900 rounded-sm p-6 border border-zinc-800"
            >
              <div className="w-8 h-0.5 bg-gold mb-4" aria-hidden="true" />
              <h3 className="font-serif text-lg text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── Modal tab version (minimal) ───────────────────────────────────────────────

function PomiarMontazTab({ text }) {
  return (
    <div className="px-6 py-8 min-h-[240px]">
      <h4 className="font-serif text-xl text-zinc-100 mb-4 leading-snug">
        Bezinwazyjny montaż – bez wiercenia i bez uszkodzenia okna
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function PomiarMontaz({ text, standalone = false }) {
  if (standalone) return <PomiarMontazSection />
  return <PomiarMontazTab text={text} />
}

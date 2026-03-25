import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Lat doświadczenia' },
  { value: '5 000+', label: 'Zrealizowanych projektów' },
  { value: '98%', label: 'Zadowolonych klientów' },
  { value: '24h', label: 'Czas realizacji wyceny' },
]

const features = [
  {
    title: 'Produkcja na zamówienie',
    desc: 'Każdy produkt mierzymy i szyjemy indywidualnie – żadnych kompromisów z jakością.',
  },
  {
    title: 'Materiały premium',
    desc: 'Współpracujemy wyłącznie ze sprawdzonymi dostawcami tkanin i profili aluminiowych.',
  },
  {
    title: 'Kompleksowy montaż',
    desc: 'Od pomiaru po instalację – zajmujemy się całym procesem.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  const animProps = (dir = 'left', delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: dir === 'left' ? -40 : 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        }

  return (
    <section
      id="o-nas"
      className="py-24 lg:py-36 bg-zinc-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Text Column ─────────────────────────────────────────────── */}
          <motion.div {...animProps('left')}>
            <p className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-4">
              O Firmie
            </p>
            <h2
              id="about-heading"
              className="section-heading mb-2"
            >
              Jakość w każdym
              <br />
              <span className="text-gold italic">detalu</span>
            </h2>
            <div className="gold-accent-line" aria-hidden="true" />

            <div className="space-y-4 text-zinc-400 leading-relaxed mb-10 text-[15px]">
              <p>
                Firma Rollo-MAX powstała w 2009 roku z pasji do rzemiosła i estetyki.
                Od początku naszą misją jest dostarczanie produktów najwyższej jakości,
                które nie tylko chronią przed słońcem, ale stanowią element dekoracyjny
                każdego wnętrza i elewacji.
              </p>
              <p>
                Specjalizujemy się w produkcji rolet zewnętrznych i wewnętrznych,
                żaluzji aluminiowych i drewnianych, plisów oraz markiz. Każdy produkt
                wykonujemy na indywidualne zamówienie, dbając o precyzję i estetykę
                wykonania.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-5 mb-12" aria-label="Nasze wyróżniki">
              {features.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-gold flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold block" />
                  </span>
                  <div>
                    <p className="text-zinc-200 font-medium text-sm">{f.title}</p>
                    <p className="text-zinc-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-zinc-800 pt-10"
              aria-label="Statystyki firmy"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <p className="font-serif text-3xl text-gold font-bold">{s.value}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Image Column ────────────────────────────────────────────── */}
          <motion.div
            {...animProps('right', 0.15)}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              {/* REPLACE: /assets/images/about/workshop.jpg */}
              <img
                src="https://picsum.photos/seed/about-workshop-rm/720/960"
                alt="Warsztat produkcyjny Rollo-MAX – precyzja i jakość w każdym etapie produkcji"
                className="w-full h-full object-cover"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" aria-hidden="true" />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-sm shadow-2xl shadow-black/50 max-w-[160px]"
              aria-hidden="true"
            >
              <p className="font-serif text-4xl font-bold text-zinc-950 leading-none">15+</p>
              <p className="text-zinc-950/60 text-xs uppercase tracking-wider mt-2 leading-tight">
                Lat tradycji i jakości
              </p>
            </div>

            {/* Decorative background block */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 bg-zinc-800/40 rounded-sm -z-10"
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

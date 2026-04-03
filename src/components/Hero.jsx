import { useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const fadeUp = useCallback((delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        },
  [reduceMotion])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sekcja główna – Rollo-MAX"
    >
      {/* ─── BACKGROUND ─────────────────────────────────────────────────────────
          VIDEO: To use a video background, replace the <img> below with:

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster="/assets/videos/hero-poster.jpg"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>

          REPLACE img src with: /assets/images/hero/hero-bg.jpg
      ────────────────────────────────────────────────────────────────────────── */}
      <img
        src="https://picsum.photos/seed/hero-rollomax/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-zinc-950/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">

          <motion.p
            {...fadeUp(0)}
            className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-6"
          >
            Producent Rolet  — od 2018 roku
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-100 leading-[1.08] mb-6"
          >
            Nowoczesne Rolety
            <br />
            <em className="not-italic text-gold">dla Twojego</em>
            <br />
            Domu
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Projektujemy i produkujemy rolety wewnętrzne na zamówienie. Jakość premium.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#produkty" className="btn-primary">
              Zobacz Produkty
            </a>
            <a href="#kontakt" className="btn-secondary">
              Skontaktuj się
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-6 mt-14"
          >
            {[
              '15+ lat doświadczenia',
              '5 000+ projektów'
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-zinc-500 text-sm">
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="block w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      )}
    </section>
  )
}

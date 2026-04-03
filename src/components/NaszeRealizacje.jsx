import { useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// DATA — replace placeholder URLs with real project photos from /public/assets/
// images: ['/assets/images/realizacje/{slug}-1.jpg', ...]
// ─────────────────────────────────────────────────────────────────────────────

const realizacje = [
  {
    id: 1,
    title: 'Salon – Warszawa',
    type: 'System 2 – Kaseta z prowadnicami',
    images: [
      'https://picsum.photos/seed/real-1a/800/600',
      'https://picsum.photos/seed/real-1b/800/600',
      'https://picsum.photos/seed/real-1c/800/600',
    ],
  },
  {
    id: 2,
    title: 'Sypialnia – Kraków',
    type: 'Rolety Zaciemniające Blackout',
    images: [
      'https://picsum.photos/seed/real-2a/800/600',
      'https://picsum.photos/seed/real-2b/800/600',
    ],
  },
  {
    id: 3,
    title: 'Biuro – Wrocław',
    type: 'Rolety Dzień-Noc',
    images: [
      'https://picsum.photos/seed/real-3a/800/600',
      'https://picsum.photos/seed/real-3b/800/600',
      'https://picsum.photos/seed/real-3c/800/600',
    ],
  },
  {
    id: 4,
    title: 'Kuchnia – Gdańsk',
    type: 'System 1 – Rollo-Lux',
    images: [
      'https://picsum.photos/seed/real-4a/800/600',
      'https://picsum.photos/seed/real-4b/800/600',
    ],
  },
  {
    id: 5,
    title: 'Pokój dziecięcy – Poznań',
    type: 'System 3 – Kaseta z okleiną',
    images: [
      'https://picsum.photos/seed/real-5a/800/600',
      'https://picsum.photos/seed/real-5b/800/600',
      'https://picsum.photos/seed/real-5c/800/600',
    ],
  },
  {
    id: 6,
    title: 'Gabinet – Łódź',
    type: 'System 4 – Rura nawijająca',
    images: [
      'https://picsum.photos/seed/real-6a/800/600',
      'https://picsum.photos/seed/real-6b/800/600',
    ],
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({ realizacja, onClose }) {
  const [index, setIndex] = useState(0)

  const prev = useCallback(() =>
    setIndex((i) => (i - 1 + realizacja.images.length) % realizacja.images.length), [realizacja])
  const next = useCallback(() =>
    setIndex((i) => (i + 1) % realizacja.images.length), [realizacja])

  // Keyboard: Escape closes, arrows navigate
  useState(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // Lock body scroll
  useState(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={realizacja.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-gold text-[10px] uppercase tracking-widest font-medium">{realizacja.type}</p>
            <h3 className="font-serif text-xl text-zinc-100">{realizacja.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Zamknij"
            className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <IconClose />
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-video bg-zinc-900 rounded-sm overflow-hidden">
          <img
            key={index}
            src={realizacja.images[index]}
            alt={`${realizacja.title} – zdjęcie ${index + 1} z ${realizacja.images.length}`}
            className="w-full h-full object-cover"
          />

          {realizacja.images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Poprzednie zdjęcie"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-950/70 hover:bg-zinc-950 text-zinc-300 hover:text-gold rounded-sm flex items-center justify-center transition-all"
              >
                <IconChevronLeft />
              </button>
              <button
                onClick={next}
                aria-label="Następne zdjęcie"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-950/70 hover:bg-zinc-950 text-zinc-300 hover:text-gold rounded-sm flex items-center justify-center transition-all"
              >
                <IconChevronRight />
              </button>

              {/* Counter */}
              <span className="absolute bottom-3 right-3 bg-zinc-950/80 text-zinc-300 text-xs px-2.5 py-1 rounded-sm">
                {index + 1} / {realizacja.images.length}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────

function RealizacjaCard({ realizacja, onOpen, reduceMotion }) {
  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group cursor-pointer"
      onClick={() => onOpen(realizacja)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-zinc-800">
        <img
          src={realizacja.images[0]}
          alt={realizacja.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-all duration-300"
          aria-hidden="true"
        />

        {/* Photo count */}
        {realizacja.images.length > 1 && (
          <span className="absolute top-3 right-3 bg-zinc-950/70 backdrop-blur-sm text-zinc-300 text-[10px] tracking-wide px-2 py-1 rounded-sm pointer-events-none">
            {realizacja.images.length} zdjęć
          </span>
        )}

        {/* Expand icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true">
          <span className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center text-zinc-950">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3">
        <h3 className="font-serif text-base text-zinc-100 leading-snug">{realizacja.title}</h3>
        <p className="text-zinc-500 text-xs mt-0.5 tracking-wide">{realizacja.type}</p>
      </div>
    </motion.article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function NaszeRealizacje() {
  const [lightbox, setLightbox] = useState(null)
  const reduceMotion = useReducedMotion()

  const openLightbox = useCallback((realizacja) => setLightbox(realizacja), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <section
      id="realizacje"
      className="py-24 lg:py-36 bg-zinc-950"
      aria-labelledby="realizacje-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-4">
            Galeria
          </p>
          <h2 id="realizacje-heading" className="section-heading mb-2">
            Nasze Realizacje
          </h2>
          <div className="gold-accent-line mx-auto" aria-hidden="true" />
          <p className="text-zinc-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            Przekonaj się, jak nasze rolety wyglądają w rzeczywistych wnętrzach. Każda realizacja to indywidualny projekt dopasowany do potrzeb klienta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizacje.map((r) => (
            <RealizacjaCard
              key={r.id}
              realizacja={r}
              onOpen={openLightbox}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-zinc-500 text-sm mb-6">
            Chcesz zobaczyć więcej lub porozmawiać o swoim projekcie?
          </p>
          <a href="#kontakt" className="btn-secondary">
            Skontaktuj się z nami
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Lightbox realizacja={lightbox} onClose={closeLightbox} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { types, products } from '../data/products'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconPlay() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v14l11-7-11-7z" />
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

// ── Media Modal ───────────────────────────────────────────────────────────────

function MediaModal({ product, initialTab = 'photos', onClose }) {
  const [tab, setTab] = useState(initialTab)
  const [photoIndex, setPhotoIndex] = useState(0)
  const videoRef = useRef(null)
  const modalRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Pause video when switching tabs
  useEffect(() => {
    if (tab !== 'video' && videoRef.current) {
      videoRef.current.pause()
    }
  }, [tab])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Focus trap — keep Tab cycling within the modal
  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    modal.focus()

    const onTab = (e) => {
      if (e.key !== 'Tab') return
      const focusable = modal.querySelectorAll(
        'button:not([tabindex="-1"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    modal.addEventListener('keydown', onTab)
    return () => modal.removeEventListener('keydown', onTab)
  }, [])

  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + product.images.length) % product.images.length)
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % product.images.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Media: ${product.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-4xl bg-zinc-900 rounded-sm shadow-2xl shadow-black/60 overflow-hidden outline-none"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <div>
            <span className="text-gold text-[10px] uppercase tracking-widest font-medium">
              {types.find((t) => t.id === product.type)?.label}
            </span>
            <h3 className="font-serif text-lg text-zinc-100 leading-tight">{product.title}</h3>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-1 bg-zinc-800 rounded-sm p-1 mr-10">
            <button
              onClick={() => setTab('photos')}
              className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-sm transition-all ${
                tab === 'photos'
                  ? 'bg-gold text-zinc-950'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Zdjęcia
            </button>
            <button
              onClick={() => setTab('video')}
              className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-sm transition-all flex items-center gap-1.5 ${
                tab === 'video'
                  ? 'bg-gold text-zinc-950'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <IconPlay />
              Film
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Zamknij"
            className="absolute top-4 right-4 p-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <IconClose />
          </button>
        </div>

        {/* Content */}
        <div className="relative bg-zinc-950">
          {tab === 'photos' && (
            <div className="relative">
              {/* Main photo */}
              <div className="aspect-video relative overflow-hidden">
                {/* REPLACE: product.images[photoIndex] → /assets/images/products/... */}
                <img
                  key={photoIndex}
                  src={product.images[photoIndex]}
                  alt={`${product.title} – zdjęcie ${photoIndex + 1} z ${product.images.length}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation arrows (only if multiple photos) */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    aria-label="Poprzednie zdjęcie"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-950/70 hover:bg-zinc-950 text-zinc-300 hover:text-gold rounded-sm flex items-center justify-center transition-all"
                  >
                    <IconChevronLeft />
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="Następne zdjęcie"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-950/70 hover:bg-zinc-950 text-zinc-300 hover:text-gold rounded-sm flex items-center justify-center transition-all"
                  >
                    <IconChevronRight />
                  </button>

                  {/* Dot indicators — decorative; prev/next arrows cover keyboard navigation */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPhotoIndex(i)}
                        tabIndex={-1}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === photoIndex ? 'bg-gold w-4' : 'bg-zinc-500 hover:bg-zinc-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {tab === 'video' && (
            <div className="aspect-video bg-zinc-950">
              {/* REPLACE: product.video → /assets/videos/products/{slug}.mp4 */}
              <video
                ref={videoRef}
                src={product.video}
                controls
                autoPlay
                className="w-full h-full"
                aria-label={`Film prezentacyjny: ${product.title}`}
              >
                Twoja przeglądarka nie obsługuje odtwarzacza wideo.
              </video>
            </div>
          )}
        </div>

        {/* Description footer */}
        <div className="px-5 py-4 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

// ── Product Card ──────────────────────────────────────────────────────────────

function ProductCard({ product, categoryLabel, onOpen, reduceMotion }) {
  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col bg-zinc-900 rounded-sm overflow-hidden"
    >
      {/* Thumbnail with play overlay */}
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        {/* REPLACE: product.images[0] → /assets/images/products/... */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/50 transition-all duration-300" aria-hidden="true" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-gold text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-sm pointer-events-none">
          {categoryLabel}
        </span>

        {/* Photo count badge */}
        {product.images.length > 1 && (
          <span className="absolute top-3 right-3 bg-zinc-950/70 backdrop-blur-sm text-zinc-300 text-[10px] tracking-wide px-2 py-1 rounded-sm pointer-events-none">
            {product.images.length} zdjęć
          </span>
        )}

        {/* Centre play button */}
        <button
          onClick={() => onOpen(product, 'video')}
          aria-label={`Odtwórz film prezentacyjny: ${product.title}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <span className="w-14 h-14 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center text-zinc-950 shadow-lg hover:bg-gold hover:scale-110 transition-all duration-200 pl-1">
            <IconPlay />
          </span>
        </button>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-lg text-zinc-100 leading-snug mb-2">{product.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed flex-1 line-clamp-2">{product.description}</p>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-zinc-800">
          <button
            onClick={() => onOpen(product, 'photos')}
            aria-label={`Otwórz galerię zdjęć: ${product.title}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs tracking-wider uppercase font-medium rounded-sm transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Zdjęcia
          </button>
          <button
            onClick={() => onOpen(product, 'video')}
            aria-label={`Odtwórz film: ${product.title}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gold/10 hover:bg-gold text-gold hover:text-zinc-950 text-xs tracking-wider uppercase font-medium rounded-sm transition-all border border-gold/30 hover:border-gold"
          >
            <IconPlay />
            Film
          </button>
        </div>
      </div>
    </motion.article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  // activeCategory filters by product `type`
  const [modal, setModal] = useState(null) // { product, tab }
  const reduceMotion = useReducedMotion()

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.type === activeCategory)

  const getTypeLabel = (id) =>
    types.find((t) => t.id === id)?.label ?? id

  const openModal = useCallback((product, tab) => {
    setModal({ product, tab })
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [])

  return (
    <section
      id="produkty"
      className="py-24 lg:py-36 bg-zinc-900/40"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-4">
            Portfolio
          </p>
          <h2 id="products-heading" className="section-heading mb-2">
            Nasze Produkty
          </h2>
          <div className="gold-accent-line mx-auto" aria-hidden="true" />
          <p className="text-zinc-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            Oferujemy szeroki wybór rolet wewnętrznych — każdy produkt szyjemy na zamówienie.
            Przeglądaj zdjęcia i filmy prezentacyjne, aby wybrać idealne rozwiązanie dla swojego wnętrza.
          </p>
        </div>

        {/* Category filter */}
        <div
          className="flex flex-wrap gap-2.5 justify-center mb-12"
          role="group"
          aria-label="Filtruj produkty według typu"
        >
          {types.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase rounded-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gold text-zinc-950 shadow-lg shadow-gold/20'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <motion.div
          layout={!reduceMotion}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryLabel={getTypeLabel(product.type)}
                onOpen={openModal}
                reduceMotion={reduceMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-zinc-500 text-sm mb-6">
            Nie widzisz tego, czego szukasz? Skontaktuj się — realizujemy niestandardowe zamówienia.
          </p>
          <a href="#kontakt" className="btn-secondary">
            Zapytaj o produkt
          </a>
        </div>

      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MediaModal
              product={modal.product}
              initialTab={modal.tab}
              onClose={closeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

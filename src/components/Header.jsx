import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#produkty', label: 'Produkty' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#o-nas', label: 'O Nas' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            className="group"
            aria-label="Rollo-MAX – strona główna"
          >
            <img
              src="/assets/images/logo.png"
              alt="Rollo-Max"
              className="h-32 w-auto invert sepia transition-opacity duration-200 group-hover:opacity-75"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Główna nawigacja" className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary text-xs py-2.5 px-6">
              Bezpłatna Wycena
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            aria-label={menuOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 -mr-2 text-zinc-400 hover:text-gold transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-zinc-950/98 backdrop-blur-md border-t border-zinc-800/60`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Nawigacja mobilna" className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-300 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="btn-primary text-center text-xs mt-2"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Bezpłatna Wycena
          </a>
        </nav>
      </div>
    </header>
  )
}

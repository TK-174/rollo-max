const footerLinks = [
  { href: '#hero', label: 'Start' },
  { href: '#produkty', label: 'Produkty' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#o-nas', label: 'O Nas' },
  { href: '#kontakt', label: 'Kontakt' },
]

const productLinks = [
  { href: '#produkty', label: 'Wewnętrzne Wolnowiszące' },
  { href: '#produkty', label: 'System 1 – Rollo-Lux' },
  { href: '#produkty', label: 'System 2 – Kaseta z prowadnicami' },
  { href: '#produkty', label: 'System 3 – Kaseta z okleiną' },
  { href: '#produkty', label: 'System 4 – Rura nawijająca' },
  { href: '#produkty', label: 'Rolety Dzień-Noc' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" aria-label="Rollo-MAX – strona główna" className="inline-block mb-5">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/logo.png`}
                alt="Rollo-Max"
                className="h-32 w-auto invert sepia"
              />
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Producent rolet wewnętrznych na zamówienie. Jakość i styl dla Twojego domu od 2018 roku.
            </p>
            {/* REPLACE: update social links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-sm bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-gold hover:bg-zinc-700 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-sm bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-gold hover:bg-zinc-700 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 7.333a4.667 4.667 0 110 9.334 4.667 4.667 0 010-9.334zm0 1.802a2.865 2.865 0 100 5.73 2.865 2.865 0 000-5.73z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Nawigacja stopki">
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest mb-5">Nawigacja</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Linki do produktów">
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest mb-5">Produkty</p>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact snippet */}
          <div>
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest mb-5">Kontakt</p>
            <address className="not-italic space-y-3 text-sm text-zinc-400">
              <p>ul. Szewska 2<br />64-100 Leszno</p>
              <p>
                <a href="tel:+48508164473" className="hover:text-gold transition-colors">
                  +48 508 164 473
                </a>
              </p>
              <p>
                <a href="mailto:rollo-max@wp.pl" className="hover:text-gold transition-colors">
                  rollo-max@wp.pl
                </a>
              </p>
              <p>Pon–Pt: 8:00–15:00</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-zinc-400 text-xs">
          <p>© {year} Rollo-MAX. Wszelkie prawa zastrzeżone.</p>
          <p>Zaprojektowane i wykonane przez <span className="text-gold">Tobiasz Kita</span></p>
        </div>
      </div>
    </footer>
  )
}

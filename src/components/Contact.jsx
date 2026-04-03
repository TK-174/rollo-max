import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useReducedMotion } from 'framer-motion'

const contactItems = [
  {
    label: 'Adres',
    value: 'ul. Przemysłowa 14, 00-000 Warszawa',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: '+48 000 000 000',
    href: 'tel:+48000000000',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'kontakt@rollo-max.pl',
    href: 'mailto:kontakt@rollo-max.pl',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Godziny otwarcia',
    value: 'Pon–Pt: 8:00–17:00\nSob: 9:00–13:00',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function SuccessScreen({ onReset }) {
  return (
    <div className="h-full min-h-[480px] flex flex-col items-center justify-center text-center p-10 bg-zinc-900 rounded-sm">
      <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl text-zinc-100 mb-3">Wiadomość wysłana!</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
        Dziękujemy za kontakt. Odpiszemy w ciągu 24 godzin roboczych z bezpłatną wyceną.
      </p>
      <button onClick={onReset} className="btn-secondary text-xs">
        Wyślij kolejną wiadomość
      </button>
    </div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const reduceMotion = useReducedMotion()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' })

  const onSubmit = async (data) => { // eslint-disable-line no-unused-vars
    setSubmitting(true)
    // REPLACE: integrate with your email service (e.g. EmailJS, Resend, FormSubmit)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setSubmitting(false)
    reset()
  }

  const slideProps = useCallback((dir, delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: dir === 'left' ? -30 : 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay, ease: 'easeOut' },
        },
  [reduceMotion])

  return (
    <section
      id="kontakt"
      className="py-24 lg:py-36 bg-zinc-950"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-xs tracking-[0.4em] uppercase mb-4">
            Kontakt
          </p>
          <h2 id="contact-heading" className="section-heading mb-2">
            Porozmawiajmy
          </h2>
          <div className="gold-accent-line mx-auto" aria-hidden="true" />
          <p className="text-zinc-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            Chętnie odpowiemy na pytania i przygotujemy bezpłatną wycenę.
            Skontaktuj się z nami — jesteśmy do dyspozycji.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* ── Contact Info ──────────────────────────────────────────── */}
          <motion.div {...slideProps('left')}>
            <h3 className="font-serif text-2xl text-zinc-100 mb-8">Dane Kontaktowe</h3>

            <ul className="space-y-6" aria-label="Dane kontaktowe firmy">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-sm bg-zinc-800 flex items-center justify-center text-gold"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-zinc-200 hover:text-gold transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-zinc-200 text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-4">
                Obserwuj nas
              </p>
              <div className="flex gap-3">
                {/* REPLACE href with your actual social media links */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rollo-MAX na Facebooku (otwiera nową kartę)"
                  className="w-10 h-10 rounded-sm bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold hover:bg-zinc-700 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rollo-MAX na Instagramie (otwiera nową kartę)"
                  className="w-10 h-10 rounded-sm bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold hover:bg-zinc-700 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 7.333a4.667 4.667 0 110 9.334 4.667 4.667 0 010-9.334zm0 1.802a2.865 2.865 0 100 5.73 2.865 2.865 0 000-5.73z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form ──────────────────────────────────────────── */}
          <motion.div {...slideProps('right', 0.1)}>
            {submitted ? (
              <SuccessScreen onReset={() => setSubmitted(false)} />
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
                aria-label="Formularz kontaktowy"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                      Imię i nazwisko <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jan Kowalski"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      {...register('name', { required: 'Imię i nazwisko jest wymagane' })}
                      className="form-input"
                    />
                    {errors.name && (
                      <p id="name-err" role="alert" className="text-red-400 text-xs mt-1.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+48 000 000 000"
                      {...register('phone')}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                    Adres e-mail <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jan@firma.pl"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                    {...register('email', {
                      required: 'Adres e-mail jest wymagany',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Podaj prawidłowy adres e-mail',
                      },
                    })}
                    className="form-input"
                  />
                  {errors.email && (
                    <p id="email-err" role="alert" className="text-red-400 text-xs mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                    Temat zapytania
                  </label>
                  <select
                    id="subject"
                    {...register('subject')}
                    className="form-input"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="wycena">Bezpłatna wycena</option>
                    <option value="rolety-zewnetrzne">Rolety zewnętrzne</option>
                    <option value="rolety-wewnetrzne">Rolety wewnętrzne</option>
                    <option value="zaluzje">Żaluzje</option>
                    <option value="markizy">Markizy i plisy</option>
                    <option value="montaz">Montaż i serwis</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
                    Wiadomość <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Opisz swoje potrzeby – chętnie przygotujemy bezpłatną wycenę..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                    {...register('message', { required: 'Treść wiadomości jest wymagana' })}
                    className="form-input resize-none"
                  />
                  {errors.message && (
                    <p id="message-err" role="alert" className="text-red-400 text-xs mt-1.5">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <p className="text-zinc-600 text-xs">
                  Pola oznaczone <span aria-hidden="true">*</span> są wymagane.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={submitting}
                >
                  {submitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

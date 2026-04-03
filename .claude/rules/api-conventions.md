# API Conventions

This is a **static site** — there is no backend or API.

## Data
- All content lives in `src/data/` as plain JS/JSON modules.
- Export named constants; import them where needed.
- Do not fetch data at runtime unless a clear requirement is added.

## External services
- If contact-form submission is added, prefer a serverless provider (Formspree, EmailJS, or Netlify Forms).
- Store any API keys in environment variables (`VITE_` prefix for Vite to expose them to the client).
- Never hardcode secrets in source files.

## GitHub Pages constraints
- No server-side rendering. All routing must be client-side or hash-based.
- The `base` in `vite.config.js` must match the GitHub repo name if deployed to a project page.

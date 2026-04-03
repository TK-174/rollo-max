# Rollo-MAX — Project Instructions

## Stack
- **React 18** + **Vite** (ESM, port 5173 by default)
- **Tailwind CSS** v3 with PostCSS/Autoprefixer
- **Framer Motion** for animations
- **react-hook-form** for forms
- Deployed to **GitHub Pages** via `gh-pages`

## Commands
| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Deploy | `npm run deploy` |

## File Structure
```
src/
├── App.jsx          # Root component + routing
├── main.jsx         # Entry point
├── index.css        # Global styles / Tailwind directives
├── components/      # Reusable UI components
└── data/            # Static content / config data
public/              # Static assets served as-is
```

## Code Style
- See `.claude/rules/code-style.md` for component and Tailwind conventions.

## Deployment
- Build output goes to `dist/`. The `npm run deploy` script pushes `dist/` to the `gh-pages` branch.
- Never commit `dist/` or `node_modules/`.

## Rules
@.claude/rules/code-style.md
@.claude/rules/api-conventions.md

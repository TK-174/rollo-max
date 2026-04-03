# Code Style

## React
- Functional components only; no class components.
- One component per file. File name matches component name (PascalCase).
- Keep components small and focused. Extract sub-components when JSX exceeds ~80 lines.
- Props: destructure at the top of the function signature.
- Avoid `useEffect` for data that can be derived; compute it inline.

## Tailwind CSS
- Use Tailwind utility classes directly in JSX — no separate CSS files for component styles.
- Responsive: mobile-first (`sm:`, `md:`, `lg:`).
- Avoid arbitrary values (`[...]`) unless absolutely necessary.
- Group classes: layout → spacing → typography → color → effects.

## Framer Motion
- Wrap animated elements with `<motion.div>` (or the appropriate element).
- Define variants as constants outside the component to avoid re-creation on render.
- Use `AnimatePresence` for enter/exit animations.

## General
- No `console.log` in committed code.
- Prefer `const` over `let`; never use `var`.
- No unused imports or variables.

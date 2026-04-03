# Testing

No automated test suite is configured yet.

## Manual testing checklist
- Run `npm run build` and verify it compiles without errors before deploying.
- Check `npm run preview` to confirm the production build renders correctly.
- Test at mobile (375px), tablet (768px), and desktop (1280px) viewport widths.
- Verify all Framer Motion animations don't break on reduced-motion preference.

## When adding tests
- Recommended: **Vitest** + **@testing-library/react** (compatible with this Vite setup).
- Add `"test": "vitest"` to `package.json` scripts.
- Unit-test pure data/utility functions in `src/data/`.
- Integration-test form validation logic (react-hook-form).

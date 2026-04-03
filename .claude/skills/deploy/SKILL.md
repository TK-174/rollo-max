# Deploy Skill

Deploy the site to GitHub Pages.

## Pre-flight checks
1. Confirm the working tree is clean (`git status`).
2. Run `npm run build` — abort if it fails.
3. Verify `vite.config.js` has the correct `base` set for the GitHub repo.

## Deploy
```bash
npm run deploy
```
This runs `gh-pages -d dist`, which pushes `dist/` to the `gh-pages` branch.

## Post-deploy
- Wait ~60 seconds, then open the GitHub Pages URL to confirm the deployment.
- Check the browser console for any 404s on assets (often a `base` misconfiguration).

## Rollback
To revert: find the previous commit hash on the `gh-pages` branch and force-push it.
```bash
git push origin <previous-hash>:gh-pages --force
```
Confirm with the user before doing this.

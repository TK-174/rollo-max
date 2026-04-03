# Security Review Skill

Perform a security review of this project.

## Steps

1. **Dependency audit** — run `npm audit` and report any high/critical vulnerabilities.
2. **Secret scan** — grep for hardcoded API keys, tokens, or passwords in `src/`.
3. **XSS surface** — check for `dangerouslySetInnerHTML` usage; confirm any user-controlled data is sanitised.
4. **Dependency pinning** — flag any `*` or overly loose version ranges in `package.json`.
5. **Public asset exposure** — review `public/` for files that shouldn't be publicly accessible.
6. **Content-Security-Policy** — note that the site has no server to set headers; recommend using `<meta http-equiv="Content-Security-Policy">` if needed.

## Output
Produce a numbered list of findings, each with:
- **Severity**: Critical / High / Medium / Low / Info
- **Location**: file + line (if applicable)
- **Description**: what the issue is
- **Recommendation**: how to fix it

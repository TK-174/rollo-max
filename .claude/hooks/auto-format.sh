#!/usr/bin/env bash
# PostToolUse hook — runs after Edit/Write to keep files tidy.
# Currently a no-op placeholder: add a formatter here if you add Prettier/ESLint.
#
# Example with Prettier (uncomment when configured):
# FILE=$(cat | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('file_path',''))" 2>/dev/null)
# if [[ "$FILE" =~ \.(jsx?|tsx?|css)$ ]]; then
#   npx prettier --write "$FILE" 2>/dev/null
# fi

exit 0

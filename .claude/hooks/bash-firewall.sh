#!/usr/bin/env bash
# PreToolUse hook — blocks dangerous shell commands before they run.
# Claude Code passes the tool input as JSON on stdin.

INPUT=$(cat)
CMD=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('command',''))" 2>/dev/null)

BLOCKED_PATTERNS=(
  "rm -rf /"
  "rm -rf \*"
  "format "
  "mkfs"
  "dd if="
  ":(){:|:&};:"
  "chmod -R 777 /"
  "> /dev/sda"
)

for pattern in "${BLOCKED_PATTERNS[@]}"; do
  if echo "$CMD" | grep -qF "$pattern"; then
    echo "BLOCKED: Dangerous command pattern detected: $pattern" >&2
    exit 2  # exit code 2 = block the tool call
  fi
done

exit 0

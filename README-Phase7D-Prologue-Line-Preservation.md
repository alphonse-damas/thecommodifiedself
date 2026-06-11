# Prologue Line Preservation Update

This package adds `scripts/generate-prologues.ps1`.

The generator reads raw text files from:

`archive/prologues-raw-text`

and writes generated TypeScript prologue files to:

`src/content/prologues`

Important change:

- Earlier versions split prologues only on blank lines.
- This version preserves each non-empty line as a separate rendered line/paragraph.
- This keeps poetic/novella line returns intact, such as:

PROLOGUE
The First Fire
History remembers victories far better than it remembers warnings.
That is perhaps why civilizations so often mistake survival for understanding.

Run from the project root:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\generate-prologues.ps1
npm run build
```

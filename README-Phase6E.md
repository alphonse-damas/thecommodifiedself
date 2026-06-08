# Phase 6E — App Folder Completion / Packaging Correction

This package preserves the Phase 6B world architecture and corrects the ZIP packaging issue by including the complete required `src/app` root files:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/favicon.ico`

## Notes

- The Worlds catalog remains clean: cover, title, and market only.
- World-level interpretation remains on individual `/worlds/[slug]` pages.
- This package is intended to replace the previous partial app-folder package.

## Install

Copy the `src` folder contents into your repository root, preserving folder structure.

Then run:

```bash
npm run dev
```

Verify:

- `/`
- `/worlds`
- `/worlds/the-other-half`
- `/map/identity`

# Phase 7A — World Catalog Evolution

## Objective
Transform `/worlds` from a visual bookshelf into a question-driven anthology index.

## Implemented Changes

- Reframed the catalog hero from **All Worlds** to **Fourteen Worlds. One Argument.**
- Added anthology-facing explanatory copy:
  - Each novella is a pressure point.
  - The full set asks what becomes of the self when the world learns how to price it.
- Added **Browse by Idea** to the left rail with counts and links to `/map/[idea]`.
- Expanded each world card with:
  - Market label
  - Atlas idea badges
  - One-line premise from `src/content/worldDetails.ts`
  - Hover overlay containing the world question
- Preserved the gold-on-black visual identity and existing cover-forward layout.

## Files Updated

- `src/app/worlds/page.tsx`

## Validation

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/worlds
```

Expected:

- Header reads **Fourteen Worlds. One Argument.**
- Left rail includes **Browse by Idea**.
- Each card shows market, idea badges, and a short premise.
- Hovering a card reveals the central world question.

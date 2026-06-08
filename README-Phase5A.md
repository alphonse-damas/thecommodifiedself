# Phase 5A — Atlas Essays Content Layer

This package extends Phase 4C by adding a database-like content layer for long-form Atlas essays.

## Adds

- `src/content/ideaEssays.ts`

This file stores the nine idea essays outside of the page component:

- Identity
- Desire
- Memory
- Power
- Control
- Truth
- Meaning
- Value
- Freedom

## Updates

- `src/app/map/[idea]/page.tsx`

The idea detail page now imports the essay by slug and renders an `Atlas Essay` section.

## Verification

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/map/identity
```

You should see a new section called:

```text
Atlas Essay
```

with the Identity essay loaded from:

```text
src/content/ideaEssays.ts
```

## Design Intent

The long-form written content is stored separately from the page so the site architecture stays clean and future essays can be edited without changing layout logic.


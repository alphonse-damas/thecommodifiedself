# Phase 5C — Idea Sigils / Dynamic Atlas Graphics

Adds a dynamic visual element to each idea page so the Atlas Note section no longer feels empty.

## New file

- `src/components/IdeaSigil.tsx`

## Updated file

- `src/app/map/[idea]/page.tsx`

## What changes visually

On each `/map/[idea]` page, the Atlas Note card now includes an **Idea Sigil**: a gold-on-black abstract SVG constellation built from the current idea and its related ideas.

Examples:

- `/map/identity` shows Identity at the center with Desire, Truth, and Value orbiting it.
- `/map/freedom` shows Freedom at the center with Control, Power, and Memory orbiting it.

## Purpose

The graphic is not decorative clip art. It makes the Atlas Note area feel intentional and reinforces the idea that the anthology is a connected intellectual system.

## Verify after install

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/map/freedom
```

Expected result:

- Hero / Idea Cluster
- Atlas Essay
- Atlas Note with Idea Sigil graphic
- Related Ideas
- Idea Pathways
- Related Markets
- Related Worlds

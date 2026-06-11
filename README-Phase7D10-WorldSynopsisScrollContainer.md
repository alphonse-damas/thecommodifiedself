# Phase 7D.10 Addendum — World Synopsis Scroll Container

This patch applies the same reader-experience pattern used for Opening Pages to the World Synopsis section.

## Changes

- The `Continue Reading / Collapse Synopsis` button now appears directly under `The story inside the world.`
- The `World Synopsis` label and `The story inside the world.` heading remain outside the internal scroll area.
- When expanded, the synopsis body remains inside a fixed-height internal scroll container.
- Existing visual styling is preserved.
- The change is applied globally through `src/app/worlds/[slug]/page.tsx` and the shared `ExpandableText` component.

## Verification

Run:

```powershell
npm run build
```

Expected: all static pages build successfully.

# Phase 7D.9 — Opening Pages Scroll Container

## Changes

- Moved the Opening Pages `Continue Reading / Collapse Prologue` control directly below the intro sentence.
- Kept the prologue body below the existing divider line.
- When expanded, the prologue now remains inside an internally scrollable reading area.
- Added reusable `ExpandableText` props:
  - `contentClassName`
  - `controlsClassName`
  - `scrollWhenExpanded`
  - `expandedMaxHeight`
- Preserved the existing visual styling and button treatment.
- Applies globally to all novella pages using `src/app/worlds/[slug]/page.tsx`.

## Files changed

- `src/components/ExpandableText.tsx`
- `src/app/worlds/[slug]/page.tsx`

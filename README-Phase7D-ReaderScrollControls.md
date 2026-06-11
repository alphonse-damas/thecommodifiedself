# Phase 7D Reader Scroll Controls

This update improves the Opening Pages reader experience on world detail pages.

## Changes

- Moved the Opening Pages expand/collapse control above the prologue text.
- When expanded, the prologue now stays inside a scrollable reading container instead of extending far down the page.
- Preserved the existing Continue Reading / Collapse Prologue behavior.
- Added reusable `controlsPosition` and `expandedContentClassName` props to `ExpandableText` so other sections can use the same pattern later.

## Files changed

- `src/components/ExpandableText.tsx`
- `src/app/worlds/[slug]/page.tsx`

## Behavior

Collapsed state:

- Shows the preview text.
- Continue Reading appears near the top of the Opening Pages section.

Expanded state:

- Shows Collapse Prologue near the top of the Opening Pages section.
- Full prologue scrolls inside the Opening Pages content area.

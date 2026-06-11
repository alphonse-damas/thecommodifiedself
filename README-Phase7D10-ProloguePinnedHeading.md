# Phase 7D.10 — Prologue Pinned Heading

This patch refines the Opening Pages reader experience.

## Changes

- Keeps the `Continue Reading / Collapse Prologue` control directly under the Opening Pages introduction.
- Pins the prologue label/title and prologue subtitle above the internal scroll area.
- Keeps the remaining prologue section headings and body content inside the fixed-height scroll container.
- Preserves the current visual styling and shared component behavior across all novella world pages.

## Files Updated

- `src/components/ExpandableText.tsx`
- `src/app/worlds/[slug]/page.tsx`

## Intended Reading Flow

Opening Pages intro and control remain visible at the top of the card.

The prologue heading and subtitle remain visible just above the scroll area.

The longer prologue body scrolls internally without lengthening the full page.

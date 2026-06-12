# Phase 7E.1 — Reader Controls Polish

This pass refines the accessibility toolbar introduced in Phase 7E.

## Changes

- Keeps the primary reading action visually dominant.
- Moves accessibility utilities to the far right of the toolbar row.
- Replaces the large `Read Aloud` / `Stop Reading` buttons with compact icon controls.
- Converts `A−` / `A+` into lightweight text controls rather than heavy bordered buttons.
- Preserves existing reader behavior:
  - Continue Reading / Collapse
  - Read Aloud / Stop Reading
  - Font increase / decrease
  - localStorage font-size persistence

## Goal

The accessibility controls remain available for readers who need them without overtaking the visual hierarchy of the page.

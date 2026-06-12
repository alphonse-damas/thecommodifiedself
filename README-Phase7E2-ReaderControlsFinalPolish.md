# Phase 7E.2 — Reader Controls Final Polish

## Purpose

Refine the accessibility toolbar so it supports impaired-vision readers without visually competing with the primary reading action.

## Changes

- Kept `Continue Reading / Collapse` as the dominant primary button.
- Grouped the accessibility controls immediately beside the primary button instead of floating them to the far right.
- Increased the read-aloud icon size for discoverability.
- Increased `A− / A+` size slightly for usability.
- Preserved compact styling so the controls remain visually subordinate.
- Preserved tooltips and accessible labels:
  - Read aloud
  - Stop reading
  - Decrease text size
  - Increase text size

## Applied Globally

The polish is implemented in:

`src/components/reader/ReaderToolbar.tsx`

Because the toolbar is shared by `ExpandableText`, the update applies to:

- World Synopsis
- Opening Pages

## Intended Layout

Collapsed:

`[Continue Reading]  🔊  A−  A+`

Expanded:

`[Collapse Synopsis]  🔊  A−  A+`

or

`[Collapse Prologue]  🔊  A−  A+`

## Phase Status

This completes the Phase 7E reader-control polish pass.

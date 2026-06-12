# Phase 7E.3 — Reader Control Bar v3

This refinement keeps the Phase 7E accessibility features while making the controls feel more integrated with the anthology's visual language.

## Updated behavior

- The primary action remains dominant: Continue Reading / Collapse.
- Reader utilities are grouped directly beside the primary action.
- The read-aloud control now uses an inline SVG icon instead of an emoji glyph.
- A− and A+ are restored as small outlined utility controls.
- Tooltips and aria labels are preserved.
- Global reader preferences remain unchanged.

## Final toolbar pattern

```text
[CONTINUE READING] [volume icon] [A−] [A+]
```

Expanded state:

```text
[COLLAPSE SYNOPSIS] [stop icon] [A−] [A+]
```

and

```text
[COLLAPSE PROLOGUE] [stop icon] [A−] [A+]
```

## Files changed

- `src/components/reader/ReaderToolbar.tsx`

## Notes

This is intended as the final Phase 7E polish pass before freezing Accessibility & Reader Controls.

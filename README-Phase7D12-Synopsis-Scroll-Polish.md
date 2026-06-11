# Phase 7D.12 — Synopsis Scroll Polish

This patch refines the reader controls for the World Synopsis and Opening Pages sections.

## Updates

- World Synopsis controls remain directly under the section heading.
- Synopsis body uses automatic internal scrolling only when the expanded content exceeds a readable threshold.
- Shorter synopses render naturally without unnecessary scrollbar noise.
- Opening Pages still uses a fixed-height internal scroll container when expanded.
- Added a reusable `custom-scrollbar` style for improved visibility on the dark anthology theme.
- Changes are applied through the shared `ExpandableText` component and the world page, so all novella world pages inherit the behavior.

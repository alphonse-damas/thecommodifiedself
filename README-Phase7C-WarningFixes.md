# Phase 7C Warning Fixes

This package preserves the Phase 7C world-canonization architecture and applies only two Next.js warning fixes:

1. `next.config.ts`
   - Adds `images.qualities: [75, 100]`
   - Preserves `reactCompiler: true`

2. `src/app/layout.tsx`
   - Adds `data-scroll-behavior="smooth"` to the root `<html>` element

No world, essay, atlas, market, or routing architecture files were intentionally changed.

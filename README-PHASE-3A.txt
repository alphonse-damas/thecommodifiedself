THE COMMODIFIED SELF — Phase 3A Worlds Architecture

Copy these files into the repository root of:
thecommodifiedself

Files included:
- src/lib/worlds.ts
- src/app/page.tsx
- src/app/worlds/page.tsx
- src/app/worlds/[slug]/page.tsx

What changed:
- Moved anthology catalog data into one shared data layer.
- Added /worlds as the full catalog page.
- Added /worlds/[slug] dynamic world pages.
- Wired homepage hero CTA to individual world pages.
- Reduced homepage catalog wall to selected worlds plus View Full Catalog.
- Preserved the black/gold/serif publishing imprint identity.

Suggested validation:
npm run build
npm run dev

Routes to test:
/
/worlds
/worlds/the-number
/worlds/proxy
/worlds/the-second-burning
/worlds/in-the-public-interest

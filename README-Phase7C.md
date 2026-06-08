# Phase 7C — World Essay Canonization + Content Adapter Update

This package updates the current anthology architecture without changing the page routing.

## What changed

### 1. `src/content/worldEssays.ts`
- Keeps the existing essay aggregation layer.
- Adds canonical metadata lookup from `src/content/worlds.ts`.
- `getWorldEssay(slug)` now returns novella-specific:
  - title
  - subtitle
  - compassNote
  - pressurePoint
  - threat
- Adds `getWorldConnections(slug)`.
- `getWorldRelationship(fromSlug, toSlug)` now reads the actual `atlasConnections` relationship text from canonical world metadata.

### 2. `src/content/worldDetails.ts`
- Rebuilt as an adapter over canonical `src/content/worlds.ts`.
- World synopsis, atlas reflection, author note, catalog line, and excerpt metadata now come from the richer novella source files.

### 3. `src/app/worlds/[slug]/page.tsx`
- World pages now use `getWorldConnections()` for related-world cards first.
- Falls back to legacy related worlds only if no canonical atlas connections exist.
- Excerpt previews can render text when available.

### 4. `src/lib/worlds.ts`
- Blackmail, Black Male primary market updated to `Minds`, per project direction.

## Expected effect

World pages should feel less generic. The World Compass, pressure point, threat, and Atlas Connections should now be grounded in each novella's source-of-truth content rather than global placeholder language.

## Recommended validation

```powershell
npm run build
```

Then spot-check:

```txt
http://localhost:3000/worlds/the-other-half
http://localhost:3000/worlds/who-cleans-galts-toilets
http://localhost:3000/worlds/when-gods-stay-quiet
http://localhost:3000/worlds/blackmail-black-male
```

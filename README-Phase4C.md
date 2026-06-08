# The Commodified Self - Phase 4C Idea Relationships

Milestone target: `anthology-v4-idea-relationships`

## Adds

- Relationship notes between idea clusters in `src/lib/ideas.ts`
- `getIdeaRelationshipNote`, `getRelatedIdeaLinks`, and `getRelationshipPairs` helpers
- A new Relationship Map section on `/map`
- Related idea chips inside each Atlas cluster
- Relationship pathway cards on `/map/[idea]`

## Updated files

- `src/lib/ideas.ts`
- `src/app/map/page.tsx`
- `src/app/map/[idea]/page.tsx`

## Purpose

Phase 4C makes the Atlas behave more like a real map. Ideas no longer appear only as separate clusters. They now point toward one another with short interpretive notes.

The navigation model becomes:

```text
Thesis
  ↓
Atlas
  ↓
Idea
  ↓
Related Idea
  ↓
World
```

## Routes to test

```text
/map
/map/identity
/map/desire
/map/memory
/map/power
/map/control
/map/truth
/map/meaning
/map/value
/map/freedom
```

## Validation

```powershell
cd C:\Users\alpho\thecommodifiedself
npm run build
npm run dev
```

Recommended tag after review:

```powershell
git add .
git commit -m "Add idea relationship layer to atlas"
git tag anthology-v4-idea-relationships
git push origin main
git push origin anthology-v4-idea-relationships
```

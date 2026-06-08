# The Commodified Self - Phase 4A Atlas / Map Architecture

Milestone target: `anthology-v4-atlas`

## Adds

- `src/app/map/page.tsx`
- `src/lib/ideas.ts`
- `ideas: string[]` on each world in `src/lib/worlds.ts`
- Header navigation link to `/map`
- Thesis page link to the Atlas

## New route

```text
/map
```

## Purpose

Phase 4A creates the idea-navigation layer of the anthology.

Current architecture:

```text
/thesis   = why the anthology exists
/markets  = where commodification happens
/worlds   = individual story worlds
/map      = how the ideas connect
```

## Idea clusters

- Identity
- Desire
- Memory
- Power
- Control
- Truth
- Meaning
- Value
- Freedom

## Install

Copy the `src` folder into the repository root:

```powershell
Copy-Item -Recurse -Force .\src\* C:\Users\alpho\thecommodifiedself\src\
cd C:\Users\alpho\thecommodifiedself
npm run build
npm run dev
```

Recommended tag after review:

```powershell
git add .
git commit -m "Add atlas map architecture"
git tag anthology-v4-atlas
git push origin main
git push origin anthology-v4-atlas
```

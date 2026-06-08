# The Commodified Self — Phase 4B

## Milestone
Phase 4B – Idea Pages Architecture

## Purpose
Phase 4A introduced `/map` as the anthology atlas. Phase 4B turns each atlas idea into its own navigable page.

## New Route
- `/map/[idea]`

Examples:
- `/map/identity`
- `/map/desire`
- `/map/memory`
- `/map/power`
- `/map/control`
- `/map/truth`
- `/map/meaning`
- `/map/value`
- `/map/freedom`

## New / Updated Files
- `src/lib/ideas.ts`
- `src/app/map/page.tsx`
- `src/app/map/[idea]/page.tsx`

## Idea Page Template
Each idea page includes:
- idea hero
- idea question
- atlas note / thesis
- related ideas
- related markets
- related worlds
- continue exploring CTA

## Architecture
Thesis → Atlas → Idea → Related Ideas → Markets → Worlds → Related Worlds

## Recommended tag after review
```bash
git tag anthology-v4-idea-pages
git push origin anthology-v4-idea-pages
```

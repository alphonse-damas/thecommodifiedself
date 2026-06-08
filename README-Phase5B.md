# Phase 5B — Idea Page Reading Flow

This phase tightens the `/map/[idea]` page layout after the Atlas Essays content layer.

## Change

The Atlas Essay now appears immediately after the Idea Cluster hero, before the Atlas Note and Related Ideas grid.

## Why

The essay is now the intellectual centerpiece of each idea page. Moving it higher removes the large visual gap created when the shorter Atlas Note card stretched beside the taller Related Ideas card.

## Updated Flow

```text
Idea Cluster
Atlas Essay
Atlas Note + Related Ideas
Idea Pathways
Related Markets
Related Worlds
Continue Exploring
```

## Updated File

```text
src/app/map/[idea]/page.tsx
```

## Proof After Install

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/map/freedom
```

You should see the Atlas Essay directly underneath the Freedom hero/Idea Cluster card.

# Phase 7D.8 — Editorial Harmonization

## Purpose
This pass applies the anthology-wide public-layer editorial standards established before Phase 8.

Public world pages should create curiosity, not resolution. They should reveal the world, the pressure, the contradiction, and the question — then stop before the first major revelation or no later than the midpoint revelation.

## Implemented Updates

### 1. Public Synopsis Overrides
`src/content/world-details.ts` now contains `editorialOverrides` for all 14 worlds.

Each override provides a tighter public-facing synopsis designed to:

- introduce the world,
- introduce the pressure,
- introduce the central contradiction,
- stop before major revelations,
- avoid ending/twist disclosure.

### 2. Atlas Reflection Overrides
`src/content/world-details.ts` also provides standardized public reflections for all 14 worlds.

Each reflection is intentionally concise and philosophical, answering:

> Why does this world exist inside The Commodified Self?

### 3. Prologue Preview Behavior
The world page now uses paragraph-based prologue previews rather than character-based truncation.

This keeps Opening Pages visually consistent across worlds and prevents long prologues from overwhelming the public page.

### 4. Atlas Companion Preview Expansion
The public Atlas Companion preview now includes:

- World Essay
- Critical Analysis
- Author Reflection
- Contrarian Perspective
- Academic Questions
- Reading Group Guide

This prepares the premium companion architecture without exposing companion content publicly.

## Editorial Standards

### Public Layer
Reveal:

- premise,
- central pressure,
- primary contradiction,
- core question.

Do not reveal:

- ending,
- major twist,
- final implication,
- full philosophical resolution.

### Atlas Companion Layer
The companion layer is philosophical, not merely literary.

It should include:

- World Essay: what the world argues.
- Critical Analysis: how well the novella succeeds, strains, or complicates that argument.
- Author Reflection: why the story was written.
- Contrarian Perspective: the strongest case against the novella.
- Academic Questions: discussion and research prompts.
- Reading Group Guide: structured reader-facing conversation prompts.

## Recommended Freeze Tag

After validating locally:

```powershell
git add .
git commit -m "Phase 7D.8 editorial harmonization"
git tag anthology-v7d8-editorial-harmonization
git push origin main
git push origin anthology-v7d8-editorial-harmonization
```

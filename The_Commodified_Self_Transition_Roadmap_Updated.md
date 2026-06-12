# The Commodified Self — Transition Roadmap (Updated)

## Phase 7E Freeze
Accessibility & Reader Controls completed and frozen.

### Completed
- Read Aloud
- Stop Reading
- Font Size Increase/Decrease
- Shared controls across World Synopsis and Opening Pages
- Tooltips and accessibility labels
- Reader Control Bar v3

---

## Added Roadmap Section: Future Accessibility & Reader Controls

### Tier 1 — MVP Accessibility Enhancements
1. Reading Mode (distraction-free view)
2. Persistent Reader Preferences (font size, narration, reading mode)
3. Estimated Reading Time
4. Keyboard Navigation

### Tier 2 — Premium Reader Experience
5. Reading Progress Tracking
6. Resume Reading
7. Dyslexia-Friendly Mode (Lexend / Atkinson Hyperlegible)
8. Line Height Controls

### Tier 3 — Anthology-Specific Reader Features
9. Atlas-Aware Reading
10. Canonical Reading Paths
11. Atlas Companion Audio Essays
12. Quote & Annotation System

### Features Explicitly Out of Scope
- Comments
- Likes
- Ratings
- Social feeds
- Gamification
- Achievement systems

### Priority Recommendation
After Phase 7E, development effort should shift to:

## Phase 8A — World Canon Registry

The World Canon Registry remains the highest-leverage roadmap item because it enables:
- Atlas navigation
- Reading paths
- Relationship graphs
- AI-guided exploration
- Premium companion content
- Canon consistency across the anthology

### Immediate Next Task
Create:

src/content/canon/worldCanonRegistry.ts

including:
- World Index
- Market Index
- Idea Index
- Connection Graph
- Contradiction Map
- Reading Order Graph
- Anthology Timeline


## Phase 8A — World Canon Registry

Status: COMPLETE

### Achievement

Implemented anthology canonical source of truth:

- World Index
- Market Index
- Idea Index
- Connection Graph
- Contradiction Map
- Reading Order Graph
- Anthology Timeline

### Registry Integration

Registry successfully wired into:

- /canon inspection page
- /worlds/[slug]

World pages now display:

- Canon Position
- Canon Question
- Canon Ideas
- Canon Pressure
- Reading Paths
- Canon Connections
- Canon Contradictions
- Previous / Next World navigation

### Validation

- Production build successful
- Static generation successful
- Canon navigation functioning
- Registry validation framework implemented

### Freeze Recommendation

Tag:

anthology-v8a-canon-registry

## Phase 8B — Canon Navigation Layer

Status: COMPLETE

Implemented:

- Registry-driven Connected Worlds
- Clickable Canon Idea Navigation
- Clickable Market Navigation
- Canon Trail
- Previous / Next World Navigation
- Registry-driven Atlas Compass
- Connection Type Indicators
- Connection Strength Indicators

Result:

The World Canon Registry now functions as the anthology navigation engine and canonical source of truth.


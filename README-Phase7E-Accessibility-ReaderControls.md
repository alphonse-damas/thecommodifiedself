# Phase 7E — Accessibility & Reader Controls

This phase adds reader accessibility controls to the public world pages without changing the visual identity of the anthology.

## Added

- Global `ReaderPreferencesProvider`
- Shared `ReaderToolbar`
- Browser-native Read Aloud / Stop Reading
- A− / A+ font size controls
- LocalStorage persistence for font size
- Applied globally through `ExpandableText`

## Coverage

Reader controls are enabled for:

- World Synopsis
- Opening Pages / Prologue

## Behavior

The toolbar appears in the same control row as Continue Reading / Collapse.

Collapsed state:

```text
[Continue Reading] [Read Aloud] [A−] [A+]
```

Expanded state:

```text
[Collapse Synopsis/Prologue] [Read Aloud or Stop Reading] [A−] [A+]
```

## Technical Notes

Read Aloud uses the browser-native Web Speech API:

```ts
window.speechSynthesis
SpeechSynthesisUtterance
```

No backend service, API key, audio file, or external dependency is required.

Font size is persisted using:

```text
tcs-font-scale
```

## Files Added

```text
src/context/ReaderPreferencesContext.tsx
src/components/reader/ReaderToolbar.tsx
README-Phase7E-Accessibility-ReaderControls.md
```

## Files Updated

```text
src/app/layout.tsx
src/app/worlds/[slug]/page.tsx
src/components/ExpandableText.tsx
```

## Phase 7E Exit Criteria

- Read Aloud works for World Synopsis
- Read Aloud works for Opening Pages
- Stop Reading cancels narration
- A− decreases reader text size
- A+ increases reader text size
- Font preference survives refresh and page navigation
- Production build passes

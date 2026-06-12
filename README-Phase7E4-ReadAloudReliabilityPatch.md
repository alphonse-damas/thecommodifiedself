# Phase 7E.4 — Read-Aloud Reliability Patch

## Purpose

Improve read-aloud reliability for long Opening Pages / prologue content on Android mobile browsers.

## Problem

Browser-native `speechSynthesis` can silently fail or stop when given one very long `SpeechSynthesisUtterance`, especially on Android Chrome/WebView. The World Synopsis often worked because it is shorter, while Opening Pages could fail because prologue text is much longer.

## Solution

The read-aloud system now chunks long text into smaller utterances and speaks them sequentially.

Reader experience is unchanged:

- Click Read Aloud once.
- The full section is read continuously.
- Click Stop once to stop narration.

## Updated File

- `src/context/ReaderPreferencesContext.tsx`

## Implementation Notes

- Added `chunkTextForSpeech()` to split long text into speech-safe chunks.
- Added `splitLongUnit()` to split long paragraphs by sentence/word boundaries when needed.
- Added `readingRunRef` to prevent stale chunks from continuing after Stop Reading or a new section begins.
- Preserved existing UI and ReaderToolbar behavior.
- Applies globally to World Synopsis and Opening Pages because both use the shared reader preferences context.

## Expected Impact

- Android mobile: improved reliability for long prologues.
- Windows/macOS desktop: should continue working normally.
- Future Phase 8 companion essays: better support for long-form read-aloud content.


# Phase 7D — Reader Experience Upgrade

Applied to the uploaded `thecommodifiedself-phase7d-content-layer.zip` baseline.

## Updates

- Added `src/components/ExpandableText.tsx`
- World detail pages now use `getPrologue(slug)` from `src/content/prologues.ts`
- Replaced the old excerpt placeholder with a public **Read the Prologue** section
- Prologues show the first 3 paragraphs by default and expand/collapse with reader controls
- World essays now use the same expandable/collapsible reading pattern
- Essay/prologue text is constrained to a narrower reading width for readability
- Replaced the public Author Note block with an **Atlas Companion** preview block
- Removed redundant Themes navigation from the homepage and Worlds page

## Test

Run:

```powershell
npm run build
npm run dev
```

Then inspect:

```text
http://localhost:3000/worlds/the-other-half
http://localhost:3000/worlds/who-cleans-galts-toilets
http://localhost:3000/worlds/when-gods-stay-quiet
```


## Phase 7D.1 Public Reader Experience Revision

This update adjusts the world detail page so that the public reader experience gives away less of the critical argument before purchase.

- Removed the full World Essay from the public page body.
- Moved World Essay into the Atlas Companion preview as premium companion material.
- Narrowed the prologue reading area to a book-like reading measure.
- Kept the prologue expandable/collapsible as the public reading sample.
- Clarified that Atlas Companion pages are a future premium reading layer.

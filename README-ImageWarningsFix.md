# Image Quality + Smooth Scroll Warning Fix

This package applies two Next.js 16 warning fixes:

1. Removed `quality={100}` from Next `<Image />` usages so images use the configured/default quality instead of requesting an unconfigured quality.
2. Added `data-scroll-behavior="smooth"` to the root `<html>` element in `src/app/layout.tsx` to acknowledge the global `scroll-behavior: smooth` setting in `globals.css`.

After copying these files into the repository, run:

```powershell
npm run build
npm run dev
```

Expected result: the previous `images.qualities [75]` warnings and smooth-scroll warning should be gone.

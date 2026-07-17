# Directive: Integrate Campus & Activity Photos

## Goal
Transform raw Google Drive download photos into high-performance, responsive, web-ready assets and map them to the Kidzee Bagalur website sections.

## Inputs
- Source photos folder: `drive-download-20260717T075440Z-1-001` (60 original photos)
- Script: `execution/process_photos.py`

## Tooling / Execution Steps
1. Run `python execution/process_photos.py` to auto-rotate EXIF orientation, resize, optimize, and generate catalog `public/photos/catalog.json`.
2. Map processed photos in `src/config/images.ts`.
3. Update components (`Hero.tsx`, `About.tsx`, `Programs.tsx`, `WhyChoose.tsx`, `DaycareBanner.tsx`, `Gallery.tsx`).
4. Build and verify with `npm run build`.

## Output Deliverables
- `public/photos/*.jpg` & `public/photos/thumbs/*.jpg`
- Updated `src/config/images.ts` and components with real campus images.

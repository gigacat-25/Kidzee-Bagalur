import os
import json
from PIL import Image, ImageOps

SRC_DIR = r"d:\The Scenc Co. Projects\Kidzee-Bagalur\drive-download-20260717T075440Z-1-001"
OUT_DIR = r"d:\The Scenc Co. Projects\Kidzee-Bagalur\public\photos"
THUMB_DIR = os.path.join(OUT_DIR, "thumbs")

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(THUMB_DIR, exist_ok=True)

files = sorted([f for f in os.listdir(SRC_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])

catalog = []

print(f"Starting photo processing for {len(files)} files...")

for idx, fname in enumerate(files, start=1):
    in_path = os.path.join(SRC_DIR, fname)
    clean_name = f"photo_{idx:02d}"
    
    web_jpg_rel = f"/photos/{clean_name}.jpg"
    thumb_jpg_rel = f"/photos/thumbs/{clean_name}.jpg"
    
    web_jpg_path = os.path.join(OUT_DIR, f"{clean_name}.jpg")
    thumb_jpg_path = os.path.join(THUMB_DIR, f"{clean_name}.jpg")

    with Image.open(in_path) as img:
        # Auto rotate based on EXIF
        img = ImageOps.exif_transpose(img)
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        orig_w, orig_h = img.size
        aspect = round(orig_w / orig_h, 2)
        orientation = "landscape" if orig_w >= orig_h else "portrait"
        
        # 1. Main web image (max 1600px)
        web_img = img.copy()
        web_img.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        web_img.save(web_jpg_path, "JPEG", quality=85, optimize=True)
        
        # 2. Thumbnail (max 600px)
        thumb_img = img.copy()
        thumb_img.thumbnail((600, 600), Image.Resampling.LANCZOS)
        thumb_img.save(thumb_jpg_path, "JPEG", quality=80, optimize=True)
        
        item = {
            "id": clean_name,
            "orig_name": fname,
            "url": web_jpg_rel,
            "thumb": thumb_jpg_rel,
            "width": web_img.size[0],
            "height": web_img.size[1],
            "aspect": aspect,
            "orientation": orientation
        }
        catalog.append(item)
        print(f"[{idx}/{len(files)}] Processed {fname} -> {clean_name}.jpg ({web_img.size[0]}x{web_img.size[1]})")

# Save catalog json
catalog_path = os.path.join(OUT_DIR, "catalog.json")
with open(catalog_path, "w", encoding="utf-8") as f:
    json.dump(catalog, f, indent=2)

print(f"\nSuccessfully processed {len(catalog)} photos into {OUT_DIR}")

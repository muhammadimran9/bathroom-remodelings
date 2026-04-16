#!/usr/bin/env python3
"""
Batch rename all images in the public/images directory to include
service-related keywords for improved SEO and search ranking.

This script renames images with bathroom remodeling keywords like:
- bathroom-remodel
- shower-remodel
- vanity-installation
- tile-installation
- etc.
"""

import os
import shutil
from pathlib import Path

# Image renaming mapping with SEO keywords
RENAME_MAPPING = {
    # Gallery Images
    "gallery-1.jpg": "bathroom-remodel-shower-renovation-chandler.jpg",
    "gallery-2.jpg": "luxury-bathroom-vanity-installation-chandler-az.jpg",
    "gallery-3.jpg": "modern-bathroom-design-remodel-chandler.jpg",
    "gallery-4.jpg": "small-bathroom-remodel-space-saving-chandler.jpg",
    "gallery-5.jpg": "white-bathroom-tile-installation-chandler-az.jpg",
    "gallery-6.jpg": "guest-bathroom-renovation-chandler-az.jpg",
    "gallery-7.jpg": "accessible-bathroom-remodel-curbless-shower-chandler.jpg",
    "gallery-8.jpg": "spa-shower-remodel-bathroom-upgrade-chandler-az.jpg",
    "gallery-9.jpg": "luxury-bathtub-freestanding-bathroom-chandler.jpg",
    "gallery-10.jpg": "curbless-shower-installation-bathroom-remodel-chandler.jpg",
    "gallery-11.jpg": "double-vanity-bathroom-storage-remodel-chandler-az.jpg",
    "gallery-12.jpg": "tile-accent-bathroom-feature-wall-chandler.jpg",
    
    # Main Images
    "bathroom-showcase.jpg": "luxury-bathroom-showcase-remodel-chandler-arizona.jpg",
    "about-bathroom.jpg": "professional-bathroom-remodeling-team-chandler-az.jpg",
    "kitchen-showcase.jpg": "home-improvement-showcase-chandler-arizona.jpg",
}

def rename_images():
    """Rename all images with SEO keywords."""
    base_dir = Path("/vercel/share/v0-project/public/images")
    
    if not base_dir.exists():
        print(f"Images directory not found: {base_dir}")
        return
    
    total = 0
    success = 0
    
    for old_name, new_name in RENAME_MAPPING.items():
        old_path = base_dir / old_name
        new_path = base_dir / new_name
        
        if old_path.exists():
            try:
                shutil.move(str(old_path), str(new_path))
                print(f"✓ Renamed: {old_name} → {new_name}")
                success += 1
            except Exception as e:
                print(f"✗ Failed to rename {old_name}: {e}")
        else:
            print(f"- Skipped: {old_name} (not found)")
        
        total += 1
    
    print(f"\nSummary: {success}/{total} images renamed with SEO keywords")
    print("Images now include service keywords for improved search ranking")

if __name__ == "__main__":
    rename_images()

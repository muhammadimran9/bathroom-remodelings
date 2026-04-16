#!/usr/bin/env python3
"""
Add EXIF geolocation metadata to all gallery images.
Chandler, Arizona coordinates: Latitude 33.30, Longitude -111.84
"""
import os
from pathlib import Path

try:
    from PIL import Image
    from PIL.ExifTags import TAGS
    import piexif
except ImportError:
    print("Installing required packages...")
    os.system("pip install pillow piexif -q")
    from PIL import Image
    from PIL.ExifTags import TAGS
    import piexif

# Coordinates for Chandler, Arizona
LATITUDE = 33.30
LONGITUDE = -111.84

def decimal_to_dms(decimal, is_latitude=True):
    """Convert decimal coordinates to degrees, minutes, seconds format."""
    abs_decimal = abs(decimal)
    degrees = int(abs_decimal)
    minutes = int((abs_decimal - degrees) * 60)
    seconds = ((abs_decimal - degrees) * 60 - minutes) * 60
    
    # Format as tuple of tuples for EXIF
    dms = ((degrees, 1), (minutes, 1), (int(seconds * 100), 100))
    return dms

def add_geotag_to_image(image_path, latitude, longitude):
    """Add geolocation EXIF data to an image."""
    try:
        # Open image
        img = Image.open(image_path)
        
        # Get existing EXIF data or create new
        try:
            exif_dict = piexif.load(image_path)
        except:
            exif_dict = {"0th": {}, "Exif": {}, "GPS": {}}
        
        # Convert coordinates
        lat_dms = decimal_to_dms(latitude, True)
        lon_dms = decimal_to_dms(longitude, False)
        
        # Set GPS data
        gps_ifd = {
            piexif.GPSIFD.GPSVersionID: ((2, 2, 0, 0),),
            piexif.GPSIFD.GPSLatitude: lat_dms,
            piexif.GPSIFD.GPSLatitudeRef: b"N",
            piexif.GPSIFD.GPSLongitude: lon_dms,
            piexif.GPSIFD.GPSLongitudeRef: b"W",
        }
        
        exif_dict["GPS"] = gps_ifd
        
        # Save with EXIF data
        exif_bytes = piexif.dump(exif_dict)
        img.save(image_path, "webp", exif=exif_bytes)
        
        print(f"✓ Added geotag to {Path(image_path).name}")
        return True
    except Exception as e:
        print(f"✗ Failed to process {image_path}: {str(e)}")
        return False

def main():
    """Add geotags to all gallery images."""
    gallery_dir = Path("/vercel/share/v0-project/public/images")
    
    if not gallery_dir.exists():
        print(f"Gallery directory not found: {gallery_dir}")
        return
    
    # Find all gallery WebP images
    gallery_images = sorted(gallery_dir.glob("gallery-*.webp"))
    
    if not gallery_images:
        print("No gallery images found.")
        return
    
    print(f"Found {len(gallery_images)} gallery images")
    print(f"Adding geotags: Latitude {LATITUDE}, Longitude {LONGITUDE}")
    print()
    
    success_count = 0
    for image_path in gallery_images:
        if add_geotag_to_image(str(image_path), LATITUDE, LONGITUDE):
            success_count += 1
    
    print()
    print(f"Successfully geotagged {success_count}/{len(gallery_images)} images")

if __name__ == "__main__":
    main()

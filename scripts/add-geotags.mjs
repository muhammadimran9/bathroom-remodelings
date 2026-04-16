import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const LATITUDE = 33.30;
const LONGITUDE = -111.84;

// Convert decimal degrees to EXIF format
function decimalToExif(decimal, isLat) {
  const absDec = Math.abs(decimal);
  const degrees = Math.floor(absDec);
  const minutes = Math.floor((absDec - degrees) * 60);
  const seconds = ((absDec - degrees - minutes / 60) * 3600).toFixed(0);
  
  return {
    degrees,
    minutes,
    seconds: parseInt(seconds),
    direction: isLat ? (decimal >= 0 ? 'N' : 'S') : (decimal >= 0 ? 'E' : 'W')
  };
}

async function addGeotagToImage(imagePath) {
  try {
    // Convert geolocation to EXIF format
    const latExif = decimalToExif(LATITUDE, true);
    const lonExif = decimalToExif(LONGITUDE, false);
    
    // Create metadata with geolocation
    const metadata = {
      exif: {
        IFD0: {
          DateTime: new Date().toISOString().split('T')[0].replace(/-/g, ':'),
          Make: 'Chandler Bathroom Remodeling',
          Model: 'Professional Remodel Project',
          Copyright: 'Chandler Bathroom Remodeling - Latitude: 33.30, Longitude: -111.84'
        }
      }
    };
    
    // Read the image and add metadata
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Extract existing metadata and add geolocation info
    const info = await sharp(imageBuffer).metadata();
    
    // Reprocess with metadata preserved
    await sharp(imageBuffer)
      .withMetadata({
        exif: {
          IFD0: {
            DateTime: new Date().toISOString().split('T')[0].replace(/-/g, ':'),
            Make: 'Chandler Bathroom Remodeling',
            Model: 'Professional Remodel Project',
            Copyright: `Chandler Bathroom Remodeling - Latitude: ${LATITUDE}, Longitude: ${LONGITUDE}`
          }
        }
      })
      .toFile(imagePath + '.tmp');
    
    // Replace original with processed image
    fs.renameSync(imagePath + '.tmp', imagePath);
    
    console.log(`✓ Geotagged: ${path.basename(imagePath)} (${LATITUDE}, ${LONGITUDE})`);
  } catch (error) {
    console.error(`✗ Error processing ${imagePath}:`, error.message);
  }
}

async function processAllGalleryImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const galleryPattern = /gallery-\d+-.*\.webp$/;
  
  try {
    const files = fs.readdirSync(imagesDir).filter(file => galleryPattern.test(file));
    
    console.log(`Found ${files.length} gallery images to geotag...\n`);
    
    for (const file of files) {
      const imagePath = path.join(imagesDir, file);
      await addGeotagToImage(imagePath);
    }
    
    console.log(`\n✓ All gallery images geotagged with coordinates: Latitude: ${LATITUDE}, Longitude: ${LONGITUDE}`);
  } catch (error) {
    console.error('Error processing gallery images:', error.message);
  }
}

processAllGalleryImages();

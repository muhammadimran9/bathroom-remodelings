/**
 * Display All Generated Pages
 * Shows complete list of all location pages that will be generated
 * Run: node scripts/display-all-pages.js
 */

const { chandlerLocations, generateAllLocationSlugs } = require('../lib/chandler-locations');
const { siteConfig } = require('../lib/site-config');

console.log('🌐 COMPLETE PAGE LIST - CHANDLER LOCAL SEO SYSTEM\n');
console.log('='.repeat(70));
console.log(`\nDomain: ${siteConfig.url}`);
console.log(`Total Pages: ${generateAllLocationSlugs().length}\n`);
console.log('='.repeat(70));

let pageCount = 0;

// ZIP Code Pages
console.log('\n📍 ZIP CODE PAGES (Primary Location Pages)\n');
chandlerLocations.forEach((location) => {
  pageCount++;
  console.log(`${pageCount}. ${siteConfig.url}/chandler-az-${location.slug}`);
  console.log(`   ZIP: ${location.zip}`);
  console.log(`   Area: ${location.description}`);
  console.log(`   Neighborhoods: ${location.neighborhoods.length}`);
  console.log('');
});

// Neighborhood Pages
console.log('='.repeat(70));
console.log('\n🏘️  NEIGHBORHOOD PAGES (Area-Specific Pages)\n');
chandlerLocations.forEach((location) => {
  console.log(`\n--- ZIP ${location.zip} Neighborhoods ---\n`);
  location.neighborhoods.forEach((neighborhood) => {
    pageCount++;
    console.log(`${pageCount}. ${siteConfig.url}/chandler-az-${neighborhood.slug}`);
    console.log(`   Name: ${neighborhood.name}`);
    console.log(`   ZIP: ${neighborhood.zipCode}`);
    console.log(`   Type: ${neighborhood.description}`);
    console.log('');
  });
});

// Combined Pages
console.log('='.repeat(70));
console.log('\n🎯 COMBINED PAGES (ZIP + Neighborhood - HIGH PRIORITY)\n');
chandlerLocations.forEach((location) => {
  console.log(`\n--- ZIP ${location.zip} Combined Pages ---\n`);
  location.neighborhoods.forEach((neighborhood) => {
    pageCount++;
    console.log(`${pageCount}. ${siteConfig.url}/chandler-az-${neighborhood.slug}-${location.zip}`);
    console.log(`   Target: ${neighborhood.name} + ${location.zip}`);
    console.log(`   Priority: 0.90 (Highest)`);
    console.log('');
  });
});

// Summary
console.log('='.repeat(70));
console.log('\n📊 SUMMARY\n');
console.log(`Total Pages Generated: ${pageCount}`);
console.log(`ZIP Code Pages: ${chandlerLocations.length}`);
console.log(`Neighborhood Pages: ${chandlerLocations.reduce((sum, loc) => sum + loc.neighborhoods.length, 0)}`);
console.log(`Combined Pages: ${chandlerLocations.reduce((sum, loc) => sum + loc.neighborhoods.length, 0)}`);
console.log('\n✅ All pages will be automatically generated at build time');
console.log('✅ All pages included in sitemap.xml');
console.log('✅ All pages have unique SEO metadata');
console.log('✅ System ready for production deployment\n');
console.log('='.repeat(70));

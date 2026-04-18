/**
 * SEO Metadata Validation Script
 * Validates all location pages have proper metadata within SEO limits
 * Run: node scripts/validate-seo-metadata.js
 */

const { chandlerLocations, generateAllLocationSlugs } = require('../lib/chandler-locations');
const { generateLocationMetadata, validateMetadata } = require('../lib/generate-location-metadata');
const { siteConfig } = require('../lib/site-config');

console.log('🔍 VALIDATING LOCAL SEO METADATA\n');
console.log('='.repeat(60));

const baseUrl = siteConfig.url;
const allSlugs = generateAllLocationSlugs();

let totalPages = 0;
let validPages = 0;
let invalidPages = 0;
const errors = [];

console.log(`\n📊 Total Pages to Validate: ${allSlugs.length}\n`);

// Validate each page
allSlugs.forEach((slug) => {
  totalPages++;
  const metadata = generateLocationMetadata(slug, baseUrl);
  
  if (!metadata) {
    invalidPages++;
    errors.push({
      slug,
      error: 'Failed to generate metadata'
    });
    return;
  }

  const validation = validateMetadata(metadata);
  
  if (validation.valid) {
    validPages++;
    console.log(`✅ ${slug}`);
    console.log(`   Title: ${metadata.title} (${metadata.title.length} chars)`);
    console.log(`   Desc: ${metadata.description.substring(0, 50)}... (${metadata.description.length} chars)`);
  } else {
    invalidPages++;
    console.log(`❌ ${slug}`);
    validation.errors.forEach(err => {
      console.log(`   ERROR: ${err}`);
    });
    errors.push({
      slug,
      error: validation.errors
    });
  }
  console.log('');
});

// Summary
console.log('='.repeat(60));
console.log('\n📈 VALIDATION SUMMARY\n');
console.log(`Total Pages: ${totalPages}`);
console.log(`Valid Pages: ${validPages} ✅`);
console.log(`Invalid Pages: ${invalidPages} ❌`);
console.log(`Success Rate: ${((validPages / totalPages) * 100).toFixed(2)}%`);

if (invalidPages > 0) {
  console.log('\n⚠️  ERRORS FOUND:\n');
  errors.forEach(({ slug, error }) => {
    console.log(`${slug}:`);
    if (Array.isArray(error)) {
      error.forEach(e => console.log(`  - ${e}`));
    } else {
      console.log(`  - ${error}`);
    }
  });
  process.exit(1);
} else {
  console.log('\n✅ ALL PAGES PASS SEO VALIDATION!');
  process.exit(0);
}

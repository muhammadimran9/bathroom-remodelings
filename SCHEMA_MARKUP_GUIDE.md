# 📋 SCHEMA MARKUP IMPLEMENTATION GUIDE
## ARZ Home Remodeling – JSON-LD Examples

---

## 📍 File Location
**All schema components:** [components/seo/json-ld.tsx](components/seo/json-ld.tsx)

---

## 1️⃣ LocalBusinessSchema

### Purpose
Tells search engines about your business, location, hours, and services.

### When to Use
- Homepage (required)
- Multiple pages for local prominence
- Service pages (recommended)

### Implementation Example

**Homepage Usage:**
```tsx
import { LocalBusinessSchema } from "@/components/seo/json-ld"

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://arzhomeremodeling.com",
  "name": "ARZ Home Remodeling",
  "image": "https://arzhomeremodeling.com/images/logo.png",
  "url": "https://arzhomeremodeling.com",
  "telephone": "(480) 555-0123",
  "email": "info@arzhomeremodeling.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Chandler",
    "addressRegion": "Arizona",
    "postalCode": "85225",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.3062,
    "longitude": -111.8413
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/arzhomeremodeling",
    "https://instagram.com/arzhomeremodeling",
    "https://twitter.com/arzhomeremodeling",
    "https://pinterest.com/arzhomeremodeling"
  ],
  "priceRange": "$$",
  "areaServed": [
    { "@type": "Place", "name": "Chandler, Arizona" },
    { "@type": "Place", "name": "Sun Lakes, Arizona" },
    { "@type": "Place", "name": "Ahwatukee, Arizona" },
    { "@type": "Place", "name": "Tempe, Arizona" },
    { "@type": "Place", "name": "Mesa, Arizona" },
    { "@type": "Place", "name": "South Phoenix, Arizona" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
```

### Search Result Display
Shows in Google Knowledge Panel with:
- ✅ Business hours
- ✅ Phone number (clickable)
- ✅ Address (with map)
- ✅ Star rating (4.9★)
- ✅ Service areas

---

## 2️⃣ ServiceSchema

### Purpose
Describes a specific service offered.

### When to Use
- All service pages (/bathroom-remodeling, /kitchen-remodeling, etc.)
- Area-specific service pages
- Service landing pages

### Implementation Example

**Service Page Usage:**
```tsx
import { ServiceSchema } from "@/components/seo/json-ld"

export default function BathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling"
        serviceDescription="Complete bathroom renovation services from concept to completion. Expert craftsmanship, premium finishes, luxury designs."
        serviceUrl="https://arzhomeremodeling.com/bathroom-remodeling"
      />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bathroom Remodeling",
  "description": "Complete bathroom renovation services from concept to completion",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "ARZ Home Remodeling",
    "telephone": "(480) 555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Chandler",
      "addressRegion": "Arizona",
      "postalCode": "85225",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Chandler, Arizona"
  },
  "url": "https://arzhomeremodeling.com/bathroom-remodeling"
}
```

---

## 3️⃣ BreadcrumbSchema

### Purpose
Helps Google understand page hierarchy and shows breadcrumb in search results.

### When to Use
- All service pages
- All area pages
- Nested page structures

### Implementation Example

**Service Page Usage:**
```tsx
import { BreadcrumbSchema } from "@/components/seo/json-ld"

const breadcrumbs = [
  { name: "Home", url: "https://arzhomeremodeling.com" },
  { name: "Bathroom Remodeling", url: "https://arzhomeremodeling.com/bathroom-remodeling" },
  { name: "Master Bathroom Remodeling", url: "https://arzhomeremodeling.com/bathroom-remodeling#master" },
]

export default function MasterBathPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://arzhomeremodeling.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bathroom Remodeling",
      "item": "https://arzhomeremodeling.com/bathroom-remodeling"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Master Bathroom Remodeling",
      "item": "https://arzhomeremodeling.com/bathroom-remodeling#master"
    }
  ]
}
```

### Search Result Display
Shows breadcrumb navigation above title:
```
Home > Bathroom Remodeling > Master Bathroom Remodeling
```

---

## 4️⃣ FAQSchema

### Purpose
Displays FAQs as rich snippets in search results.

### When to Use
- Pages with FAQ sections
- Homepage FAQs
- Service pages with common questions
- Area pages with area-specific FAQs

### Implementation Example

**Homepage Usage:**
```tsx
import { FAQSchema } from "@/components/seo/json-ld"

const faqs = [
  {
    question: "How much does a bathroom remodel cost?",
    answer: "Bathroom remodels typically range from $15,000 to $75,000+ depending on scope, materials, and finishes. We provide free estimates.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer: "Most bathroom remodels take 2-6 weeks depending on complexity. We'll provide a specific timeline during consultation.",
  },
  {
    question: "Do you offer financing?",
    answer: "Yes! We offer flexible financing with competitive rates and quick approval. Contact us for details.",
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a bathroom remodel cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bathroom remodels typically range from $15,000 to $75,000+ depending on scope, materials, and finishes. We provide free estimates."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a bathroom remodel take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most bathroom remodels take 2-6 weeks depending on complexity. We'll provide a specific timeline during consultation."
      }
    }
  ]
}
```

### Search Result Display
Shows expandable FAQ accordion:
```
[+] How much does a bathroom remodel cost?
    → Bathroom remodels typically range from $15,000 to $75,000+...

[+] How long does a bathroom remodel take?
    → Most bathroom remodels take 2-6 weeks depending...
```

---

## 5️⃣ ArticleSchema

### Purpose
Marks blog posts as articles for better indexing.

### When to Use
- All blog posts
- Long-form content pages

### Implementation Example

**Blog Post Usage:**
```tsx
import { ArticleSchema } from "@/components/seo/json-ld"

export default function BlogPost({ post }) {
  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`https://arzhomeremodeling.com/blog/${post.slug}`}
        image={post.featuredImage}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        author="ARZ Home Remodeling"
      />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Bathroom Remodeling",
  "description": "Learn everything you need to know about bathroom remodeling from experts.",
  "image": "https://arzhomeremodeling.com/images/bathroom-guide.jpg",
  "author": {
    "@type": "Organization",
    "name": "ARZ Home Remodeling"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ARZ Home Remodeling",
    "logo": {
      "@type": "ImageObject",
      "url": "https://arzhomeremodeling.com/images/logo.png"
    }
  },
  "url": "https://arzhomeremodeling.com/blog/bathroom-remodeling-guide",
  "datePublished": "2025-03-15T10:00:00Z",
  "dateModified": "2026-04-18T15:30:00Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://arzhomeremodeling.com/blog/bathroom-remodeling-guide"
  }
}
```

---

## 6️⃣ ReviewSchema ✨ NEW

### Purpose
Displays customer reviews and ratings in search results.

### When to Use
- Testimonials section
- Customer reviews page
- Service pages with reviews

### Implementation Example

**Testimonials Component:**
```tsx
import { ReviewSchema } from "@/components/seo/json-ld"

export default function Testimonials() {
  return (
    <>
      {testimonials.map((testimonial) => (
        <ReviewSchema
          key={testimonial.id}
          name={testimonial.title}
          description={testimonial.content}
          author={testimonial.authorName}
          datePublished={testimonial.date}
          rating={testimonial.rating}
          url={`https://arzhomeremodeling.com/#review-${testimonial.id}`}
        />
      ))}
      {/* render testimonials UI */}
    </>
  )
}
```

### Generated JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": "ARZ Home Remodeling transformed our bathroom into a luxury spa. The team was professional, clean, and delivered exceptional quality!",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ARZ Home Remodeling"
  },
  "datePublished": "2025-03-15",
  "url": "https://arzhomeremodeling.com/#review-sarah",
  "name": "Master Bathroom Transformation"
}
```

### Search Result Display
Shows review card with:
- ✅ Star rating (5★)
- ✅ Reviewer name
- ✅ Review excerpt
- ✅ Publication date

---

## 7️⃣ PriceSchema ✨ NEW

### Purpose
Shows service pricing in search results and Google Shopping.

### When to Use
- Service pages with pricing
- Pricing comparison pages
- Service package pages

### Implementation Example

**Service Page with Pricing:**
```tsx
import { PriceSchema } from "@/components/seo/json-ld"

export default function BathroomRemodelingPage() {
  return (
    <>
      <PriceSchema
        serviceName="Master Bathroom Remodeling"
        priceRange="$25,000 - $75,000"
        url="https://arzhomeremodeling.com/bathroom-remodeling"
        availability="InStock"
      />
      {/* rest of page */}
    </>
  )
}
```

### Generated JSON-LD Output (Price Range)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Master Bathroom Remodeling",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "ARZ Home Remodeling",
    "url": "https://arzhomeremodeling.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceRange": "$25,000 - $75,000",
    "availability": "https://schema.org/InStock",
    "url": "https://arzhomeremodeling.com/bathroom-remodeling"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
```

### Alternative: Fixed Price
```tsx
<PriceSchema
  serviceName="Bathroom Vanity Installation"
  price="$2,500"
  priceCurrency="USD"
  url="https://arzhomeremodeling.com/bathroom-vanity-installation"
/>
```

### Generated JSON-LD Output (Fixed Price)
```json
{
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "2500",
    "availability": "https://schema.org/InStock"
  }
}
```

### Search Result Display
Shows pricing in SERP:
```
Master Bathroom Remodeling
$25,000 - $75,000 | 4.9★ (127 reviews)
Professional bathroom remodeling services...
```

---

## 🧪 TESTING SCHEMA MARKUP

### Online Validators

**Google Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Paste URL or code
3. Click "Test"
4. Review validation results

**Schema.org Validator:**
1. Go to: https://schema.org/validator
2. Paste code or URL
3. View parsed JSON
4. Check for errors

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Missing required property | Schema incomplete | Add all required fields |
| Invalid value type | Wrong data format | Use correct type (string, number, array) |
| Unrecognized schema | Typo in @type | Use exact schema name from schema.org |
| Invalid URL | Malformed URL | Verify URL format |
| Invalid rating | Rating outside 1-5 | Use numbers 1, 2, 3, 4, or 5 |

---

## ✅ CURRENT IMPLEMENTATION STATUS

### Implemented ✅
- [x] LocalBusinessSchema (homepage & multiple pages)
- [x] ServiceSchema (all service pages)
- [x] BreadcrumbSchema (service + area pages)
- [x] FAQSchema (homepage, service, area pages)
- [x] ArticleSchema (blog posts)
- [x] ReviewSchema (component ready)
- [x] PriceSchema (component ready)

### Ready to Integrate 🟡
- [ ] ReviewSchema → Testimonials component
- [ ] PriceSchema → Service pages with pricing
- [ ] Additional AggregateRating on product pages

### Not Yet Implemented ⚪
- [ ] VideoSchema (if adding video content)
- [ ] EventSchema (if hosting events)
- [ ] CreativeWorkSchema (portfolio pieces)

---

## 📊 SCHEMA COVERAGE BY PAGE

| Page | LocalBusiness | Service | Breadcrumb | FAQ | Article | Review | Price |
|------|---------------|---------|-----------|-----|---------|--------|-------|
| Homepage | ✅ | - | - | ✅ | - | - | - |
| /bathroom-remodeling | ✅ | ✅ | ✅ | ✅ | - | - | 🟡 |
| /kitchen-remodeling | ✅ | ✅ | ✅ | ✅ | - | - | 🟡 |
| /gallery | ✅ | - | - | - | - | - | - |
| /blog/[slug] | ✅ | - | - | - | ✅ | - | - |
| /bathroom-remodeling-areas/[slug] | ✅ | ✅ | ✅ | ✅ | - | - | 🟡 |
| All Service Pages | ✅ | ✅ | ✅ | ✅ | - | - | 🟡 |

**Legend:** ✅ Implemented | 🟡 Ready to implement | - Not applicable

---

## 🚀 NEXT STEPS

1. **Test Current Schema**
   - Run all pages through Google Rich Results Test
   - Fix any validation errors

2. **Integrate ReviewSchema**
   - Add to testimonials component
   - Test with sample data

3. **Add PriceSchema**
   - Create pricing data structure
   - Add to service pages

4. **Monitor Search Console**
   - Check "Enhancements" report
   - Track rich snippet impressions
   - Monitor click-through rates

---

**Last Updated:** April 18, 2026  
**Status:** Production Ready ✅  
**Next Review:** Monitor in Search Console after 30 days

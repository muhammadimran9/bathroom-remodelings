import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  findLocationBySlug,
  getRelatedLocations,
  generateAllLocationSlugs,
  NeighborhoodData,
  ZipCodeData,
} from "@/lib/chandler-locations";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

// Generate static pages for all locations
export async function generateStaticParams() {
  const slugs = generateAllLocationSlugs();
  return slugs.map((slug) => ({
    location: slug,
  }));
}

// Generate metadata for each location page
export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const location = findLocationBySlug(params.location);

  if (!location) {
    return {};
  }

  const { type, zipData, neighborhood } = location;
  const displayName = neighborhood
    ? neighborhood.name
    : `${zipData.city}, AZ ${zipData.zip}`;

  const titles: Record<string, string> = {
    zip: `Bathroom Remodeling in ${zipData.city}, AZ ${zipData.zip}`,
    neighborhood: `Bathroom Remodeling in ${neighborhood?.name}, Chandler AZ`,
    combined: `Bathroom Remodeling in ${neighborhood?.name} (${zipData.zip}), Chandler AZ`,
  };

  const descriptions: Record<string, string> = {
    zip: `Professional bathroom remodeling services in ${zipData.city}, AZ ${zipData.zip}. ${neighborhood?.neighborhoods?.length || 0}+ neighborhoods served. Free consultation today.`,
    neighborhood: `Expert bathroom remodeling in ${neighborhood?.name}, Chandler AZ. Local specialists serving your community with custom designs. Call for a free estimate.`,
    combined: `Bathroom remodeling in ${neighborhood?.name} (ZIP ${zipData.zip}), Chandler AZ. Trusted local contractor with 20+ years experience. Get your free estimate today.`,
  };

  const title = titles[type];
  const description = descriptions[type];

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/chandler-az-${params.location}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/chandler-az-${params.location}`,
      type: "website",
    },
  };
}

/**
 * Unique content for each neighborhood
 * Prevents template repetition across pages
 */
const neighborhoodContent: Record<
  string,
  {
    hero: string;
    keyPoint1: string;
    keyPoint2: string;
    keyPoint3: string;
    faqTopics: string[];
  }
> = {
  ocotillo: {
    hero:
      "Luxury bathroom remodeling for Ocotillo's exclusive resort-style living",
    keyPoint1:
      "Premium fixtures and finishes that match Ocotillo's high-end aesthetic",
    keyPoint2:
      "Spa-inspired designs perfect for Ocotillo's desert luxury lifestyle",
    keyPoint3: "Expert waterproofing for Ocotillo's outdoor shower concepts",
    faqTopics: [
      "What bathroom features add the most value to Ocotillo homes?",
      "How do I design a spa bathroom for Ocotillo's desert climate?",
      "What luxury fixtures are popular in Ocotillo bathrooms?",
      "How do high-end finishes hold up in Ocotillo's desert sun?",
      "Should I invest in a steam shower or sauna in Ocotillo?",
      "How long does a luxury bathroom remodel take in Ocotillo?",
    ],
  },
  "fulton-ranch": {
    hero:
      "Accessible and elegant bathroom solutions for Fulton Ranch's active adult community",
    keyPoint1:
      "Aging-in-place design tailored for Fulton Ranch's mature demographic",
    keyPoint2:
      "Golf course community aesthetics that complement your home's view",
    keyPoint3:
      "Accessible showers and grab bars installed with style in mind",
    faqTopics: [
      "What makes a bathroom aging-friendly without looking clinical?",
      "Are grab bars and accessibility features available in stylish designs?",
      "How can I update my Fulton Ranch bathroom for easier daily living?",
      "What's the cost to add accessibility features to an existing bathroom?",
      "Can accessible bathrooms be beautiful and functional?",
      "What contractors specialize in accessible bathroom design?",
    ],
  },
  "arden-park": {
    hero:
      "Modern bathroom remodeling for Arden Park's family-oriented community",
    keyPoint1:
      "Durable finishes designed to withstand active family use and Arizona heat",
    keyPoint2:
      "Contemporary designs that appeal to families seeking modern living",
    keyPoint3: "Practical storage solutions for busy Arden Park households",
    faqTopics: [
      "What bathroom upgrades add value in Arden Park homes?",
      "How can I make my bathroom more family-friendly?",
      "What are the most practical tile choices for Arizona families?",
      "How long does an average bathroom remodel take?",
      "What's a reasonable budget for a family bathroom upgrade?",
      "How can I maximize storage in a family bathroom?",
    ],
  },
  "circle-g": {
    hero:
      "Smart and contemporary bathroom remodeling for Circle G's urban professionals",
    keyPoint1:
      "Modern fixtures and smart bathroom technology for tech-savvy homeowners",
    keyPoint2:
      "Efficient designs that maximize small urban bathroom spaces",
    keyPoint3: "Energy and water-efficient features for conscious living",
    faqTopics: [
      "What smart bathroom technology should I consider?",
      "How can I design a modern bathroom in a small space?",
      "What's the best way to maximize a cramped Circle G bathroom?",
      "Are smart toilets and fixtures worth the investment?",
      "How long do smart bathroom features typically last?",
      "What contractors specialize in modern urban bathroom design?",
    ],
  },
  "riggs-ranch": {
    hero:
      "New home customization for Riggs Ranch's growing residential community",
    keyPoint1:
      "Personalized bathroom design for newer construction homes in Riggs Ranch",
    keyPoint2: "Trendy finishes and fixtures popular with newer home builders",
    keyPoint3: "Maximizing builder-grade to premium bathroom upgrades",
    faqTopics: [
      "What bathroom upgrades are best for new construction homes?",
      "How can I personalize my new Riggs Ranch home's bathroom?",
      "What's included in a typical builder-grade bathroom?",
      "How much does it cost to upgrade from builder-grade fixtures?",
      "What bathroom trends are most timeless for new homes?",
      "Should I upgrade my bathroom before or after closing on my home?",
    ],
  },
  "sun-groves": {
    hero:
      "Sustainable and eco-conscious bathroom remodeling for Sun Groves residents",
    keyPoint1:
      "Water-efficient fixtures that reduce utility bills and environmental impact",
    keyPoint2:
      "Eco-friendly materials aligned with Sun Groves' environmental values",
    keyPoint3:
      "Green building practices in every aspect of your bathroom remodel",
    faqTopics: [
      "What's the best way to reduce water usage in my bathroom?",
      "Are eco-friendly bathroom fixtures as durable as standard ones?",
      "How much can I save with water-efficient fixtures?",
      "What materials are considered sustainable for bathroom remodeling?",
      "Do eco-friendly bathrooms cost more than conventional designs?",
      "How do WaterSense fixtures improve environmental impact?",
    ],
  },
  "warner-ranch": {
    hero:
      "Diverse bathroom remodeling solutions for Warner Ranch's varied communities",
    keyPoint1:
      "Customized designs that work with Warner Ranch's multiple village aesthetics",
    keyPoint2: "Budget-friendly to premium options for every homeowner's needs",
    keyPoint3:
      "Expert navigating of Warner Ranch's architectural design guidelines",
    faqTopics: [
      "How do I find bathroom contractors who know Warner Ranch's style requirements?",
      "What budget should I allocate for different bathroom renovation levels?",
      "How do design guidelines affect bathroom remodeling in Warner Ranch?",
      "What styles work best across different Warner Ranch villages?",
      "How can I get a bathroom upgrade approved in my community?",
      "What permits do I need for bathroom remodeling in Warner Ranch?",
    ],
  },
  "dobson-place": {
    hero:
      "Thoughtful bathroom upgrades for Dobson Place's established neighborhood",
    keyPoint1:
      "Balancing classic charm with modern functionality for existing homes",
    keyPoint2:
      "Respecting neighborhood character while adding contemporary conveniences",
    keyPoint3: "Preserving home's original appeal through selective upgrades",
    faqTopics: [
      "How can I modernize an older bathroom without losing character?",
      "What upgrades are most cost-effective for established homes?",
      "How do I maintain my home's style during a bathroom remodel?",
      "What's the best way to preserve original architectural details?",
      "How can a remodel increase home value in established neighborhoods?",
      "What contractors specialize in respectful home upgrades?",
    ],
  },
  "downtown-chandler": {
    hero:
      "Urban bathroom design for Downtown Chandler's modern professionals and creatives",
    keyPoint1:
      "Contemporary loft-style bathrooms perfect for urban living spaces",
    keyPoint2: "Trendy, Instagram-worthy designs that reflect city living",
    keyPoint3: "Maximizing style and function in urban bathroom spaces",
    faqTopics: [
      "What's the best contemporary bathroom style for urban lofts?",
      "How do I design an Instagram-worthy bathroom?",
      "What fixtures work best in small urban bathroom spaces?",
      "Are minimalist bathrooms practical for daily living?",
      "What design trends are taking over urban bathroom remodeling?",
      "How can I create a spa-like retreat in an urban bathroom?",
    ],
  },
  "clemente-ranch": {
    hero:
      "Balanced bathroom design for Clemente Ranch's suburban-urban lifestyle",
    keyPoint1:
      "Practical contemporary design that works with suburban home layouts",
    keyPoint2:
      "Blending urban style with family-friendly bathroom functionality",
    keyPoint3:
      "Smart design that serves both aesthetics and daily living needs",
    faqTopics: [
      "How do I balance style and functionality in my bathroom?",
      "What design elements work for both modern and traditional homes?",
      "How can I create a contemporary bathroom in a traditional home?",
      "What's a realistic timeline for a balanced remodel?",
      "How do I prevent over-design in a simple bathroom update?",
      "What bathroom elements offer the best return on investment?",
    ],
  },
  "kyrene-corridor": {
    hero:
      "Sophisticated bathroom solutions for Kyrene Corridor's cosmopolitan professionals",
    keyPoint1:
      "Cutting-edge design and innovative fixtures for forward-thinking homeowners",
    keyPoint2:
      "Commercial-grade quality in residential bathroom installations",
    keyPoint3: "Functional luxury that supports a sophisticated lifestyle",
    faqTopics: [
      "What are the latest innovations in bathroom technology?",
      "How do commercial fixtures work in residential settings?",
      "What defines luxury in modern bathroom design?",
      "Are high-tech bathrooms reliable long-term?",
      "What maintenance do luxury bathrooms require?",
      "How can I design a bathroom that impresses guests?",
    ],
  },
  "stellar-airpark": {
    hero:
      "Exclusive bathroom design for Stellar Airpark's discerning aviation enthusiasts",
    keyPoint1:
      "Bespoke bathroom experiences reflecting Stellar Airpark's unique lifestyle",
    keyPoint2:
      "Premium everything: materials, craftsmanship, and design exclusivity",
    keyPoint3:
      "One-of-a-kind designs that set your home apart from the ordinary",
    faqTopics: [
      "What makes a truly exclusive luxury bathroom design?",
      "How do I design a unique bathroom that reflects my personality?",
      "What's involved in creating a custom luxury bathroom?",
      "Are custom bathrooms a good investment in exclusive communities?",
      "How do I work with designers on bespoke bathroom concepts?",
      "What's the timeline for a custom luxury bathroom project?",
    ],
  },
};

export default function LocationPage({
  params,
}: {
  params: { location: string };
}) {
  const locationSlug = params.location;
  const location = findLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  const { type, zipData, neighborhood } = location;
  const isZipPage = type === "zip";
  const isNeighborhoodPage = type === "neighborhood" || type === "combined";
  const isLocalPage = neighborhood || isZipPage;

  const displayName = neighborhood
    ? neighborhood.name
    : `${zipData.city}, AZ ${zipData.zip}`;
  const pageContent =
    neighborhood && neighborhoodContent[neighborhood.slug]
      ? neighborhoodContent[neighborhood.slug]
      : null;

  const relatedLocations = getRelatedLocations(
    zipData.zip,
    neighborhood?.slug
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 lg:pt-48 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              {!isZipPage && (
                <>
                  <Link
                    href={`/chandler-az-${zipData.slug}`}
                    className="hover:text-primary"
                  >
                    {zipData.city}, AZ {zipData.zip}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
              <span className="text-foreground font-medium">{displayName}</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                {pageContent
                  ? pageContent.hero
                  : `Bathroom Remodeling in ${displayName}`}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {isZipPage
                  ? zipData.description
                  : neighborhood
                    ? neighborhood.description
                    : "Professional bathroom remodeling services with local expertise"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-medium">
                  Get Free Estimate
                </button>
                <a
                  href="tel:+14805550123"
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        {neighborhood && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-semibold mb-6">
                  {neighborhood.name} Bathroom Remodeling
                </h2>

                {/* Market Insights */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Local Market Insight
                    </h3>
                    <p className="text-muted-foreground">
                      {neighborhood.marketInsight}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Community Character
                    </h3>
                    <p className="text-muted-foreground">
                      {neighborhood.localContext}
                    </p>
                  </div>
                </div>

                {/* Home Styles */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Popular Home Styles in {neighborhood.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {neighborhood.homeStylesCommon.map((style, idx) => (
                      <span
                        key={idx}
                        className="bg-background px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Service Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-semibold mb-12">
              Our Bathroom Remodeling Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "Meet at your home to discuss vision and budget",
                },
                {
                  step: "02",
                  title: "Design & Planning",
                  desc: "Create detailed plans and 3D renderings",
                },
                {
                  step: "03",
                  title: "Permitting & Prep",
                  desc: "Handle all permits and site preparation",
                },
                {
                  step: "04",
                  title: "Expert Installation",
                  desc: "Professional installation with quality craftsmanship",
                },
                {
                  step: "05",
                  title: "Final Inspection",
                  desc: "Thorough walkthrough and punch list completion",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {pageContent && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl font-serif font-semibold mb-12">
                Common Questions About {neighborhood?.name} Bathrooms
              </h2>
              <div className="space-y-6">
                {pageContent.faqTopics.slice(0, 4).map((question, idx) => (
                  <details key={idx} className="bg-background p-6 rounded-lg group cursor-pointer">
                    <summary className="font-semibold flex justify-between items-center">
                      {question}
                      <span className="group-open:rotate-180 transition">
                        ▼
                      </span>
                    </summary>
                    <p className="text-muted-foreground mt-4">
                      We have extensive experience working with homes in{" "}
                      {neighborhood?.name} and understand the specific needs and
                      preferences of residents in this community. Our team is
                      familiar with local building codes, preferred styles, and
                      market values specific to this area.
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Locations */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Other Service Areas in {zipData.city}
            </h2>

            {/* Same ZIP neighborhoods */}
            {relatedLocations.sameZipNeighborhoods.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">
                  Other neighborhoods in {zipData.zip}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.sameZipNeighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/chandler-az-${n.slug}`}
                      className="p-4 border border-border rounded-lg hover:bg-secondary transition"
                    >
                      <h4 className="font-semibold mb-2">{n.name}</h4>
                      <p className="text-sm text-muted-foreground">{n.zipCode}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other ZIP codes */}
            {relatedLocations.otherZips.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Service areas by ZIP code
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.otherZips.map((zip) => (
                    <Link
                      key={zip.zip}
                      href={`/chandler-az-${zip.slug}`}
                      className="p-4 border border-border rounded-lg hover:bg-secondary transition"
                    >
                      <h4 className="font-semibold mb-2">{zip.zip}</h4>
                      <p className="text-sm text-muted-foreground">
                        {zip.neighborhoods.length} neighborhoods
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Ready to transform your {neighborhood?.name || displayName} bathroom?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our local team for a free consultation and detailed estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Schedule Consultation
              </button>
              <a
                href="tel:+14805550123"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold"
              >
                (480) 555-0123
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

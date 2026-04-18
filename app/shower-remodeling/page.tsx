import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import ServiceProcess from "@/components/service-process";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Shower Remodeling Chandler AZ - Frameless Glass",
  description: "Professional shower remodeling in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations and premium fixtures.",
  keywords: ["shower remodeling chandler az", "custom shower renovations chandler", "frameless glass shower doors", "bathroom shower remodel", "walk-in shower installation", "shower tile installation"],
  openGraph: {
    title: "Shower Remodeling Chandler AZ - Frameless Glass",
    description: "Professional shower remodeling in Chandler with custom tile, frameless glass enclosures and premium fixtures.",
    url: `${siteConfig.url}/shower-remodeling`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-remodeling-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower Remodeling - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Remodeling Chandler AZ - Frameless Glass",
    description: "Professional shower remodeling in Chandler with custom tile, frameless glass enclosures and premium fixtures.",
    images: [`${siteConfig.url}/images/shower-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling`,
  },
};

const faqs = [
  {
    question: "How long does a shower remodel take in Chandler, AZ?",
    answer: "Most shower remodels in Chandler take 3-7 days depending on complexity. Simple tile updates may take 3-4 days, while complete custom showers with frameless glass and built-in features take 5-7 days. We provide a detailed timeline during your consultation."
  },
  {
    question: "What is the cost of shower remodeling in Chandler?",
    answer: "Shower remodeling costs in Chandler typically range from $5,000-$15,000 depending on size, materials, and features. Basic tile showers start around $5,000, while luxury showers with premium tile, frameless glass, and custom features can exceed $15,000. We offer free estimates with transparent pricing."
  },
  {
    question: "Do you offer waterproof shower installations?",
    answer: "Yes! All our shower installations include professional waterproofing systems that exceed industry standards. We use RedGard or Schluter waterproofing membranes to protect your walls and subfloors from moisture damage."
  },
  {
    question: "Can you install frameless glass shower doors in Chandler?",
    answer: "Absolutely! We specialize in frameless glass shower enclosures that create a modern, spa-like appearance. We measure precisely and install custom-cut tempered glass with premium hardware."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function ShowerRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Shower Remodeling in Chandler, Arizona"
        serviceDescription="Professional shower remodeling in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations, and premium fixtures."
        serviceUrl={`${siteConfig.url}/shower-remodeling`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Shower Remodeling in Chandler, Arizona"
          subtitle="Custom Shower Renovations in Chandler AZ"
          description="Upgrade to a watertight, spa-inspired shower with premium tilework, glass, and fixtures tailored to your Chandler home."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower Remodeling", url: `${siteConfig.url}/shower-remodeling` },
          ]}
        />

        <ServiceProcess
          title="Shower Remodel Process"
          subtitle="Our Process"
          description="A streamlined, mess-managed shower remodel built for Chandler homeowners who want a faster, cleaner upgrade."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Measurements",
              description: "We review goals, measure your shower footprint, and plan waterproofing details.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selections",
              description: "Tile, glass, fixtures, and drainage layout tailored to your style and daily routine.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Prep",
              description: "Clean demolition, substrate repair, and moisture barrier installation for durability.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Tile & Fixture Install",
              description: "Precision tile setting, niche detailing, and valve/fixture installation for a spa feel.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Inspection & Walkthrough",
              description: "Sealing, testing, and a final walkthrough to confirm drainage, fit, and finish.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common shower remodeling challenges Chandler homeowners face."
          issues={[
            {
              problem: "Outdated shower surrounds that leak or collect mold.",
              solution: "Fully waterproofed systems with modern tile and sealed glass to stop leaks and mildew.",
            },
            {
              problem: "Cracked grout lines and failing caulk at corners.",
              solution: "New substrates, proper expansion joints, and premium sealants for long-term protection.",
            },
            {
              problem: "Cramped layouts with poor storage for toiletries.",
              solution: "Built-in niches, benches, and smarter layout options that open up the shower footprint.",
            },
            {
              problem: "Poor drainage and standing water on the shower floor.",
              solution: "Re-sloped pans and upgraded drains that keep water moving and surfaces safer.",
            },
            {
              problem: "Dated hardware that clashes with the rest of the bathroom.",
              solution: "Coordinated fixture packages in finishes that match your vanity, lighting, and trim.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Shower Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            {
              icon: "Sparkles",
              title: "Spa-Level Look",
              description: "Frameless glass, premium tile, and clean lines create a relaxing Chandler retreat.",
            },
            {
              icon: "ShieldCheck",
              title: "Leak Protection",
              description: "Moisture barriers and sealed corners protect walls and subflooring from damage.",
            },
            {
              icon: "Droplets",
              title: "Better Drainage",
              description: "Proper slopes and upgraded drains reduce standing water and keep grout cleaner.",
            },
            {
              icon: "TrendingUp",
              title: "Higher Home Value",
              description: "A modern shower is a top buyer priority in Chandler's competitive market.",
            },
            {
              icon: "Timer",
              title: "Faster Mornings",
              description: "Organized niches and improved lighting streamline daily routines.",
            },
          ]}
        />

        <Tips
          title="Shower Remodeling Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Simple, Chandler-friendly tips to keep your shower remodeling performing and looking its best."
          tips={[
            "Squeegee glass after each use to reduce water spots and mineral buildup.",
            "Use pH-neutral cleaners on natural stone and grout-safe products on tile.",
            "Run the exhaust fan for 20 minutes after showers to prevent humidity and mildew.",
            "Check caulk annually at corners and niches to maintain a watertight seal.",
            "Choose slip-resistant shower floors if you have kids, seniors, or mobility needs.",
          ]}
        />

        <ServiceCTA 
          title="Ready for a Chandler shower remodel that stays watertight?" 
          description="Get a custom shower plan, tile selections, and a clean installation schedule tailored to your home." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for Shower Remodeling in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with fast scheduling, reliable communication, and
                clean job sites. View our primary service area below and call if you need shower remodeling nearby.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Local crews familiar with East Valley homes</li>
                <li>• Same-week consultations when available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Shower Remodeling in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need fast shower remodeling in Chandler, AZ?" 
          description="Call now for a same-week consultation and clear pricing on your new shower." 
        />
      </main>
      <Footer />
    </>
  );
}
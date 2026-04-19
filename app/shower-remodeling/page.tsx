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
  title: "Shower Remodeling Chandler AZ | Tile & Glass",
  description: "Professional shower remodeling Chandler AZ. Tile shower installation cost, luxury shower remodel, shower tile remodel, acrylic shower remodel. Free quotes!",
  keywords: ["shower remodeling chandler az", "phoenix shower remodel chandler az", "luxury shower remodel chandler az", "small shower remodel chandler az", "acrylic shower remodel chandler az", "shower tile remodel chandler az", "tile shower installation cost chandler az", "shower stall remodeling chandler az", "handicap shower remodel chandler az", "remodel shower kits chandler az", "shower glass replacement chandler az", "shower pan replacement chandler az"],
  openGraph: {
    title: "Shower Remodeling Chandler AZ | Tile & Glass",
    description: "Professional shower remodeling Chandler AZ. Tile shower installation, luxury shower remodel, free quotes!",
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
    title: "Shower Remodeling Chandler AZ | Tile & Glass",
    description: "Professional shower remodeling Chandler AZ. Tile shower installation, luxury remodel!",
    images: [`${siteConfig.url}/images/shower-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling`,
  },
};

const faqs = [
  {
    question: "What is the tile shower installation cost in Chandler AZ?",
    answer: "Tile shower installation cost in Chandler AZ ranges from $5,000-$15,000 depending on size and materials. Shower tile remodel with basic tile starts around $5,000, while luxury shower remodel with premium tile and shower glass replacement can exceed $15,000. Free shower remodel estimates available!"
  },
  {
    question: "How long does shower remodeling take in Chandler AZ?",
    answer: "Most shower remodeling in Chandler AZ takes 3-7 days. Small shower remodel or acrylic shower remodel may take 3-4 days, while shower stall remodeling with custom tile and glass takes 5-7 days. We provide detailed timelines during consultation."
  },
  {
    question: "Do you offer handicap shower remodel in Chandler AZ?",
    answer: "Yes! We specialize in handicap shower remodel and ADA-compliant shower installations. Our barrier-free walk-in shower remodels include grab bars, built-in seating, and slip-resistant flooring for maximum safety and accessibility."
  },
  {
    question: "What shower replacement services do you offer in Chandler AZ?",
    answer: "Our shower replacement services include: shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement, shower drain replacement, and complete shower surround replacement. We handle all shower faucet replacement and shower cartridge replacement needs."
  },
  {
    question: "Do you offer shower glass replacement in Chandler AZ?",
    answer: "Yes! We offer complete shower glass replacement including glass shower door replacement, replacement shower doors glass, frameless glass shower doors, and sliding shower door replacement. Our shower door replacement services include shower door handle replacement and shower door gaskets replacement."
  },
  {
    question: "What remodel shower kits do you install in Chandler AZ?",
    answer: "We install various remodel shower kits including acrylic shower remodel kits, tile shower remodel kits, and shower tub replacement kits. Our phoenix shower remodel contractors can help you choose the best remodel plate shower options for your bathroom."
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
          title="Shower Remodeling Chandler AZ | Tile & Glass"
          subtitle="Luxury Shower Remodel & Tile Shower Installation Chandler AZ"
          description="Professional shower remodeling Chandler AZ. Tile shower installation, shower tile remodel, luxury shower remodel, acrylic shower remodel, and shower glass replacement. Free estimates!"
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

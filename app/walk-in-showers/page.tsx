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
  title: "Walk-In Showers Chandler AZ | Custom Installation",
  description: "Professional walk-in shower installation in Chandler, Arizona. Barrier-free designs, frameless glass, and ADA-compliant options. Free estimates available.",
  keywords: ["walk-in showers chandler az", "barrier-free showers", "curbless shower installation", "frameless walk-in shower", "ada compliant showers chandler"],
  openGraph: {
    title: "Walk-In Showers Chandler AZ | Custom Installation",
    description: "Professional walk-in shower installation in Chandler. Barrier-free designs and frameless glass options.",
    url: `${siteConfig.url}/walk-in-showers`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/walk-in-shower-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Walk-In Showers Installation - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk-In Showers Chandler AZ | Custom Installation",
    description: "Professional walk-in shower installation in Chandler. Barrier-free designs and frameless glass options.",
    images: [`${siteConfig.url}/images/walk-in-shower-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/walk-in-showers`,
  },
};

const faqs = [
  {
    question: "How much does a walk-in shower cost in Chandler, AZ?",
    answer: "Walk-in shower installation in Chandler typically costs $4,000-$12,000 depending on size, materials, and features. Basic curbless showers start around $4,000, while luxury walk-in showers with frameless glass and custom tile can exceed $12,000. We provide free estimates with transparent pricing."
  },
  {
    question: "Are walk-in showers good for seniors?",
    answer: "Yes! Walk-in showers are excellent for seniors and individuals with mobility challenges. We offer barrier-free, curbless designs with grab bars, built-in seating, and slip-resistant flooring for maximum safety and accessibility."
  },
  {
    question: "How long does walk-in shower installation take?",
    answer: "Most walk-in shower installations in Chandler take 4-7 days depending on complexity. Standard installations take 4-5 days, while custom designs with frameless glass enclosures may take 6-7 days. We provide detailed timelines during consultation."
  },
  {
    question: "Do you install curbless walk-in showers?",
    answer: "Absolutely! We specialize in curbless walk-in shower installations that provide seamless entry and modern aesthetics. Our team handles all waterproofing, drainage, and floor leveling for a perfect curbless design."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function WalkInShowersPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Walk-In Shower Installation in Chandler, Arizona"
        serviceDescription="Professional walk-in shower installation in Chandler, Arizona. Barrier-free designs, frameless glass enclosures, and ADA-compliant options."
        serviceUrl={`${siteConfig.url}/walk-in-showers`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Walk-In Showers in Chandler, Arizona"
          subtitle="Custom Walk-In Shower Installation in Chandler AZ"
          description="Transform your bathroom with a spacious, barrier-free walk-in shower featuring frameless glass, premium tile, and modern fixtures."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Walk-In Showers", url: `${siteConfig.url}/walk-in-showers` },
          ]}
        />

        <ServiceProcess
          title="Walk-In Shower Installation Process"
          subtitle="Our Process"
          description="A streamlined installation process designed to deliver your dream walk-in shower with minimal disruption."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Free Consultation",
              description: "We assess your space, discuss design preferences, and measure for your walk-in shower.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selection",
              description: "Choose tile, glass enclosure style, fixtures, and accessibility features for your needs.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Preparation",
              description: "Careful removal of existing fixtures, waterproofing installation, and drainage setup.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Installation",
              description: "Professional tile setting, glass enclosure installation, and fixture mounting.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Final Inspection",
              description: "Complete testing, sealing, and walkthrough to ensure perfect operation and finish.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Walk-In Showers"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom challenges that walk-in showers solve for Chandler homeowners."
          issues={[
            {
              problem: "Difficult bathtub entry for seniors or those with mobility issues.",
              solution: "Barrier-free, curbless walk-in showers with optional grab bars and built-in seating.",
            },
            {
              problem: "Cramped shower stalls that feel claustrophobic.",
              solution: "Spacious walk-in designs with frameless glass that open up the bathroom visually.",
            },
            {
              problem: "Outdated shower-tub combos that waste space.",
              solution: "Modern walk-in shower conversions that maximize usable bathroom space.",
            },
            {
              problem: "Poor drainage causing standing water and mold growth.",
              solution: "Properly sloped floors with linear drains for efficient water removal.",
            },
            {
              problem: "Slippery shower floors creating safety hazards.",
              solution: "Slip-resistant tile options and textured surfaces for safe footing.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Walk-In Showers in Chandler"
          subtitle="Why Choose Walk-In Showers"
          benefits={[
            {
              icon: "Accessibility",
              title: "Easy Access",
              description: "Barrier-free entry makes showering safer and more comfortable for all ages.",
            },
            {
              icon: "Sparkles",
              title: "Modern Aesthetics",
              description: "Frameless glass and clean lines create a spa-like, contemporary look.",
            },
            {
              icon: "Layout",
              title: "Space Efficiency",
              description: "Open designs make bathrooms feel larger and more spacious.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Home Value",
              description: "Walk-in showers are highly desirable features that boost property value.",
            },
            {
              icon: "Timer",
              title: "Easy Maintenance",
              description: "Fewer crevices and seamless surfaces make cleaning quick and simple.",
            },
          ]}
        />

        <Tips
          title="Walk-In Shower Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your walk-in shower and extend its lifespan in Chandler's climate."
          tips={[
            "Squeegee glass doors after each use to prevent water spots and mineral buildup.",
            "Use a daily shower spray to prevent soap scum and mildew formation.",
            "Clean grout lines monthly with a pH-neutral cleaner to maintain appearance.",
            "Check caulk seals quarterly and reapply as needed to prevent water damage.",
            "Run the bathroom exhaust fan during and after showers to reduce humidity.",
          ]}
        />

        <ServiceCTA 
          title="Ready for a custom walk-in shower in Chandler?" 
          description="Get a free consultation with design options, material selections, and transparent pricing." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Walk-In Shower Installation Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners throughout Chandler, Arizona and surrounding East Valley communities with professional walk-in shower installations.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Licensed and insured contractors</li>
                <li>• Same-week consultations available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Walk-In Showers in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need walk-in shower installation in Chandler, AZ?" 
          description="Call now for a free estimate and expert consultation on your walk-in shower project." 
        />
      </main>
      <Footer />
    </>
  );
}

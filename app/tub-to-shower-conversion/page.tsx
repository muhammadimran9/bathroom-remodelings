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
  title: "Tub to Shower Conversion Chandler AZ | Expert Install",
  description: "Professional tub to shower conversion in Chandler, Arizona. Convert your bathtub to a modern walk-in shower. Licensed contractors, free estimates.",
  keywords: ["tub to shower conversion chandler az", "bathtub to shower conversion", "convert tub to walk-in shower", "tub removal shower install", "bathroom conversion chandler"],
  openGraph: {
    title: "Tub to Shower Conversion Chandler AZ | Expert Install",
    description: "Professional tub to shower conversion in Chandler. Convert your bathtub to a modern walk-in shower.",
    url: `${siteConfig.url}/tub-to-shower-conversion`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tub-to-shower-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub to Shower Conversion - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub to Shower Conversion Chandler AZ | Expert Install",
    description: "Professional tub to shower conversion in Chandler. Convert your bathtub to a modern walk-in shower.",
    images: [`${siteConfig.url}/images/tub-to-shower-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion`,
  },
};

const faqs = [
  {
    question: "How much does tub to shower conversion cost in Chandler?",
    answer: "Tub to shower conversion in Chandler typically costs $5,000-$15,000 depending on shower size, materials, and features. Basic conversions start around $5,000, while custom walk-in showers with frameless glass can exceed $15,000. We provide free in-home estimates."
  },
  {
    question: "How long does a tub to shower conversion take?",
    answer: "Most tub to shower conversions are completed in 3-7 days. Simple conversions with prefab units take 3-4 days, while custom tile showers with glass enclosures may take 5-7 days. We provide a detailed timeline during consultation."
  },
  {
    question: "Will converting my tub to a shower affect home value?",
    answer: "In most cases, tub to shower conversions increase home value, especially in master bathrooms. However, we recommend keeping at least one bathtub in the home for families with young children and resale considerations."
  },
  {
    question: "Can you convert any bathtub to a shower?",
    answer: "Yes! We can convert alcove tubs, freestanding tubs, and corner tubs to showers. Our team handles all plumbing modifications, drainage adjustments, and waterproofing required for a successful conversion."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function TubToShowerConversionPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Tub to Shower Conversion in Chandler, Arizona"
        serviceDescription="Professional tub to shower conversion in Chandler, Arizona. Convert your bathtub to a modern walk-in shower with expert installation."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Tub to Shower Conversion in Chandler, Arizona"
          subtitle="Expert Bathtub to Shower Conversion in Chandler AZ"
          description="Transform your unused bathtub into a spacious, modern walk-in shower with professional conversion services."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion` },
          ]}
        />

        <ServiceProcess
          title="Tub to Shower Conversion Process"
          subtitle="Our Process"
          description="A complete conversion process that transforms your bathtub into a beautiful walk-in shower."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Free Consultation",
              description: "We assess your bathroom, discuss shower options, and plan the conversion layout.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design Planning",
              description: "Select tile, fixtures, glass enclosure style, and accessibility features.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Tub Removal",
              description: "Careful bathtub removal, plumbing modification, and subfloor preparation.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Shower Installation",
              description: "Waterproofing, tile installation, glass enclosure, and fixture mounting.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Final Walkthrough",
              description: "Complete testing, sealing, and inspection to ensure perfect results.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Tub to Shower Conversion"
          subtitle="Common Problems Fixed"
          description="We solve common bathroom challenges through professional tub to shower conversions."
          issues={[
            {
              problem: "Unused bathtubs taking up valuable bathroom space.",
              solution: "Convert to a spacious walk-in shower that utilizes the space more efficiently.",
            },
            {
              problem: "Difficult tub entry for seniors or those with mobility issues.",
              solution: "Barrier-free walk-in showers with optional grab bars and seating.",
            },
            {
              problem: "Outdated tub-shower combos that look dated.",
              solution: "Modern walk-in shower designs with contemporary tile and glass.",
            },
            {
              problem: "Mold and mildew buildup in old tub surrounds.",
              solution: "Fresh, properly waterproofed surfaces that resist mold growth.",
            },
            {
              problem: "Small bathrooms that feel cramped.",
              solution: "Open shower designs with frameless glass that visually expand the space.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Tub to Shower Conversion in Chandler"
          subtitle="Why Convert Your Tub"
          benefits={[
            {
              icon: "Layout",
              title: "More Space",
              description: "Walk-in showers often feel larger and more open than tub-shower combos.",
            },
            {
              icon: "Accessibility",
              title: "Easier Access",
              description: "Step-in or curbless entry is safer and more convenient for all ages.",
            },
            {
              icon: "Sparkles",
              title: "Modern Look",
              description: "Contemporary shower designs update your bathroom instantly.",
            },
            {
              icon: "Timer",
              title: "Quick Showers",
              description: "Walk-in showers are more practical for busy daily routines.",
            },
            {
              icon: "TrendingUp",
              title: "Home Value",
              description: "Modern showers are highly desirable to today's home buyers.",
            },
          ]}
        />

        <Tips
          title="Tub to Shower Conversion Tips"
          subtitle="Planning Your Conversion"
          description="Expert advice for planning and maintaining your new walk-in shower after conversion."
          tips={[
            "Keep at least one bathtub in your home if you have young children or plan to sell.",
            "Consider a curbless design for maximum accessibility and modern aesthetics.",
            "Choose slip-resistant tile for the shower floor to prevent accidents.",
            "Install a built-in niche for shampoo and soap storage to keep surfaces clear.",
            "Add a handheld showerhead for flexibility and easier cleaning.",
          ]}
        />

        <ServiceCTA 
          title="Ready to convert your tub to a shower in Chandler?" 
          description="Get a free consultation and see how a walk-in shower can transform your bathroom." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Tub to Shower Conversion Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide expert tub to shower conversion services throughout Chandler and the greater Phoenix area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured contractors</li>
                <li>• Free in-home estimates available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Tub to Shower Conversion in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need tub to shower conversion in Chandler, AZ?" 
          description="Contact us today for professional conversion services and a free estimate." 
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import ServiceFAQ from "@/components/services/service-faq";
import ServiceProcess from "@/components/services/service-process";
import IssuesSolved from "@/components/services/issues-solved";
import Benefits from "@/components/services/benefits";
import Tips from "@/components/services/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Bathtub Remodeling Chandler AZ | Professional Tub Renovations",
  description: "Expert bathtub remodeling in Chandler, Arizona. Modern tub installations, luxury upgrades, and professional renovations. Get your free bathtub remodeling estimate today.",
};

const faqs = [
  {
    question: "How much does bathtub remodeling cost in Chandler, AZ?",
    answer: "Bathtub remodeling in Chandler typically costs $2,000-$8,000 depending on tub type, materials, and complexity. Basic tub replacements start around $2,000, while luxury soaking tubs with custom surrounds can exceed $8,000. We provide free estimates with transparent pricing."
  },
  {
    question: "How long does bathtub remodeling take?",
    answer: "Most bathtub remodeling projects are completed in 2-5 days. Simple tub replacements take 2-3 days, while complete remodels with new plumbing and tile work may take 4-5 days. We provide a detailed timeline during your consultation."
  },
  {
    question: "Do you install freestanding bathtubs?",
    answer: "Yes! We install all types of bathtubs including freestanding soaking tubs, alcove tubs, whirlpool tubs, and air-jet tubs. Our team handles all plumbing connections, leveling, and finishing work."
  },
  {
    question: "Can you remodel a bathtub in an existing bathroom?",
    answer: "Absolutely! We specialize in bathtub remodeling for existing bathrooms. We assess your plumbing, reinforce the subfloor if needed, and ensure proper drainage and support for your new tub."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function BathtubRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathtub Remodeling in Chandler, Arizona"
        serviceDescription="Expert bathtub remodeling in Chandler, Arizona. Modern tub installations, luxury upgrades, and professional renovations."
        serviceUrl={`${siteConfig.url}/services/bathtub-remodeling`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathtub Remodeling in Chandler, Arizona"
          subtitle="Professional Bathtub Renovations in Chandler AZ"
          description="Transform your bathroom with expert bathtub remodeling services featuring modern designs, luxury materials, and professional installation."
          image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathtub Remodeling", url: `${siteConfig.url}/services/bathtub-remodeling` },
          ]}
        />

        <ServiceProcess
          title="Bathtub Remodeling Process"
          subtitle="Our Process"
          description="Professional bathtub remodeling with precise planning and quality installation for Chandler homeowners."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation",
              description: "We assess your space, discuss tub options, and plan the perfect bathtub remodeling solution.",
            },
            {
              number: "02",
              icon: "Bath",
              title: "Tub Selection",
              description: "Choose from alcove, freestanding, or soaking tubs with coordinated fixtures and finishes.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Prep",
              description: "Careful removal of old tub, plumbing updates, and surface preparation for installation.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Professional tub installation with proper leveling, plumbing connections, and waterproofing.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Finishing Touches",
              description: "Surround installation, trim work, and final testing to complete your bathtub remodeling.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Bathtub Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common bathtub remodeling challenges Chandler homeowners face."
          issues={[
            {
              problem: "Old, stained, or cracked bathtubs that look outdated.",
              solution: "Modern bathtub installations with fresh finishes and contemporary designs.",
            },
            {
              problem: "Uncomfortable tub depth or awkward positioning.",
              solution: "Ergonomic tub selection with proper depth and positioning for comfort.",
            },
            {
              problem: "Leaking tubs causing water damage.",
              solution: "Professional waterproofing and sealed installations to prevent leaks.",
            },
            {
              problem: "Limited storage around the bathtub area.",
              solution: "Built-in niches and coordinated storage solutions for bathing essentials.",
            },
            {
              problem: "Mismatched fixtures and outdated hardware.",
              solution: "Coordinated fixture packages that complement your bathroom design.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Bathtub Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            {
              icon: "Bath",
              title: "Luxury Comfort",
              description: "Modern tubs with ergonomic designs for ultimate relaxation and comfort.",
            },
            {
              icon: "ShieldCheck",
              title: "Leak Protection",
              description: "Professional waterproofing and sealed installations prevent water damage.",
            },
            {
              icon: "Sparkles",
              title: "Modern Aesthetics",
              description: "Contemporary tub designs that enhance your bathroom's visual appeal.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Home Value",
              description: "Quality bathtub remodeling adds significant value to your Chandler home.",
            },
            {
              icon: "Timer",
              title: "Quick Installation",
              description: "Efficient remodeling process minimizes disruption to your daily routine.",
            },
          ]}
        />

        <Tips
          title="Bathtub Remodeling Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly remodeled bathtub and extend its lifespan."
          tips={[
            "Use non-abrasive cleaners to protect enamel and acrylic finishes from scratches.",
            "Inspect caulk lines quarterly and reapply at the apron and corners as needed.",
            "Add slip-resistant mats or textured surfaces for safety, especially for seniors and children.",
            "Run warm water before filling to preheat the tub surface for longer heat retention.",
            "Choose WaterSense fixtures to reduce water usage without compromising performance.",
          ]}
        />

        <ServiceCTA 
          title="Ready for professional bathtub remodeling in Chandler?" 
          description="Get expert design consultation, quality materials, and professional installation for your dream bathtub." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for Bathtub Remodeling in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with professional bathtub remodeling services, quality materials, and expert installation.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured bathtub remodeling contractors</li>
                <li>• Free estimates and consultations available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Bathtub Remodeling in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need bathtub remodeling services in Chandler, AZ?" 
          description="Contact us today for a free consultation and estimate on your bathtub remodeling project." 
        />
      </main>
      <Footer />
    </>
  );
}
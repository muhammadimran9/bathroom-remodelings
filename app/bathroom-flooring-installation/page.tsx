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
  title: "Bathroom Flooring Installation Chandler AZ | Pro",
  description: "Professional bathroom flooring installation in Chandler, AZ. Waterproof tile, luxury vinyl, and stone flooring with expert installation.",
  keywords: ["bathroom flooring chandler", "waterproof flooring installation", "bathroom tile flooring", "luxury vinyl bathrooms", "stone flooring"],
  openGraph: {
    title: "Bathroom Flooring Installation Chandler AZ",
    description: "Professional bathroom flooring installation in Chandler with waterproof tile, luxury vinyl and stone options.",
    url: `${siteConfig.url}/bathroom-flooring-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/flooring-installation-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Flooring Installation - Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Flooring Installation Chandler AZ",
    description: "Professional bathroom flooring installation in Chandler with waterproof options.",
    images: [`${siteConfig.url}/images/flooring-installation-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-flooring-installation`,
  },
};

const faqs = [
  { question: "What is the best flooring for bathrooms in Chandler, AZ?", answer: "Porcelain tile, luxury vinyl plank, and natural stone are excellent choices for Chandler bathrooms. These materials resist moisture, are easy to clean, and handle Arizona's temperature variations well." },
  { question: "How much does bathroom flooring installation cost in Chandler?", answer: "Bathroom flooring installation in Chandler costs $5-$15 per square foot depending on material. Basic ceramic tile starts around $5/sq ft, while premium stone or luxury vinyl ranges from $10-$15/sq ft including installation." },
  { question: "How long does bathroom flooring installation take?", answer: "Most bathroom flooring installations take 2-4 days. Small bathrooms may be completed in 2 days, while larger bathrooms with complex layouts take 3-4 days including prep work and finishing." },
  { question: "Do you install heated bathroom floors?", answer: "Yes! We install radiant floor heating systems under tile and stone flooring for added comfort. This is especially popular in master bathrooms and provides luxury warmth during cooler months." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomFlooringInstallationPage() {
  return (
    <>
      <ServiceSchema serviceName="Bathroom Flooring Installation in Chandler, Arizona" serviceDescription="Professional bathroom flooring installation in Chandler, Arizona. Waterproof tile, luxury vinyl, and stone flooring." serviceUrl={`${siteConfig.url}/bathroom-flooring-installation`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Flooring Installation in Chandler, Arizona"
          subtitle="Waterproof Flooring Installation in Chandler AZ"
          description="Professional bathroom flooring installation with waterproof materials, expert craftsmanship, and durable finishes for your Chandler home."
          image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Bathroom Flooring Installation", url: `${siteConfig.url}/bathroom-flooring-installation` }]}
        />
        <ServiceProcess
          title="Bathroom Flooring Installation Process"
          subtitle="Our Process"
          description="Professional flooring installation with waterproof preparation and expert craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Assessment & Planning", description: "Evaluate subfloor condition, moisture levels, and plan the perfect flooring solution." },
            { number: "02", icon: "Layout", title: "Material Selection", description: "Choose from tile, luxury vinyl, or stone flooring with slip-resistant and waterproof options." },
            { number: "03", icon: "ShieldCheck", title: "Subfloor Preparation", description: "Level subfloors, install moisture barriers, and prepare surfaces for installation." },
            { number: "04", icon: "Hammer", title: "Flooring Installation", description: "Expert installation with precise cuts, proper spacing, and waterproof sealing." },
            { number: "05", icon: "Sparkles", title: "Finishing & Sealing", description: "Grout application, sealing, and final cleanup for a perfect bathroom floor." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Bathroom Flooring Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom flooring challenges Chandler homeowners face."
          issues={[
            { problem: "Water damage from inadequate waterproofing.", solution: "Professional moisture barriers and waterproof installation techniques." },
            { problem: "Slippery floors causing safety concerns.", solution: "Slip-resistant flooring materials with appropriate texture ratings." },
            { problem: "Cracked or loose tiles from poor installation.", solution: "Proper subfloor preparation and professional installation techniques." },
            { problem: "Grout staining and discoloration over time.", solution: "Quality grout products and proper sealing for long-lasting appearance." },
            { problem: "Flooring that doesn't match bathroom design.", solution: "Coordinated material selection that complements your bathroom style." }
          ]}
        />
        <Benefits
          title="Benefits of Professional Bathroom Flooring Installation"
          subtitle="Why It Matters"
          benefits={[
            { icon: "ShieldCheck", title: "Waterproof Protection", description: "Professional waterproofing prevents moisture damage and extends floor life." },
            { icon: "Sparkles", title: "Beautiful Appearance", description: "Expert installation creates stunning floors that enhance your bathroom design." },
            { icon: "Timer", title: "Long-Lasting Durability", description: "Quality materials and installation techniques ensure years of reliable performance." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Professional flooring installation adds significant value to your Chandler home." },
            { icon: "Layout", title: "Safety Features", description: "Slip-resistant materials and proper installation enhance bathroom safety." }
          ]}
        />
        <Tips
          title="Bathroom Flooring Installation Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly installed bathroom flooring."
          tips={[
            "Choose porcelain or ceramic tile for high-moisture areas like showers and tub surrounds.",
            "Use appropriate cleaning products for your specific flooring material to prevent damage.",
            "Seal grout lines annually to maintain water resistance and prevent staining.",
            "Install proper ventilation to reduce humidity and prevent moisture-related issues.",
            "Address any loose tiles or damaged grout immediately to prevent water intrusion."
          ]}
        />
        <ServiceCTA title="Ready for professional bathroom flooring installation?" description="Get expert consultation, quality materials, and professional installation for beautiful, waterproof bathroom floors." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Bathroom Flooring Installation Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional bathroom flooring installation services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• Licensed flooring installation contractors</li>
                <li>• Waterproof installation specialists</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Flooring Installation in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need bathroom flooring installation in Chandler, AZ?" description="Contact us for professional bathroom flooring installation with waterproof materials and expert craftsmanship." />
      </main>
      <Footer />
    </>
  );
}

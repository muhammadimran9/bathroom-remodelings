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
  title: "Bathroom Lighting Chandler AZ | Experts",
  description: "Modern lighting install: vanity, recessed. Chandler pros, free quotes. Transform your bathroom with expert lighting installation services.",
  keywords: ["bathroom lighting chandler az", "vanity lighting", "recessed lighting", "modern fixtures", "free quotes", "expert installation"],
  authors: [{ name: "Airforshare.online" }],
  publisher: "Airforshare.online",
  openGraph: {
    title: "Bathroom Lighting Chandler AZ | Experts",
    description: "Modern lighting install: vanity, recessed. Chandler pros, free quotes.",
    url: `${siteConfig.url}/bathroom-lighting-installation`,
    type: "website",
    locale: "en_US",
    siteName: "Airforshare",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-lighting-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Lighting Installation - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Lighting Chandler AZ | Experts",
    description: "Modern lighting install: vanity, recessed. Chandler pros, free quotes.",
    images: [`${siteConfig.url}/images/bathroom-lighting-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-lighting-installation`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  { question: "What type of lighting is best for bathrooms?", answer: "LED vanity lights, recessed ceiling lights, and moisture-rated fixtures work best in bathrooms. We recommend layered lighting with task lighting for grooming and ambient lighting for overall illumination." },
  { question: "How much does bathroom lighting installation cost in Chandler?", answer: "Bathroom lighting installation costs $200-$800 per fixture depending on complexity. Complete bathroom lighting upgrades typically range from $800-$2,500 including materials and installation." },
  { question: "Do you install dimmer switches for bathroom lights?", answer: "Yes! We install dimmer switches compatible with LED bathroom lighting for adjustable ambiance and energy savings. Dimmers are especially popular for vanity and ambient lighting." },
  { question: "Can you install lighting in shower areas?", answer: "Absolutely! We install moisture-rated recessed lights and fixtures specifically designed for wet locations. All shower lighting meets safety codes and IP ratings for bathroom use." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomLightingInstallationPage() {
  return (
    <>
      <ServiceSchema serviceName="Bathroom Lighting Installation in Chandler, Arizona" serviceDescription="Professional bathroom lighting installation in Chandler, Arizona. Vanity lights, recessed lighting, and modern fixtures." serviceUrl={`${siteConfig.url}/bathroom-lighting-installation`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Lighting Installation in Chandler, Arizona"
          subtitle="Modern Lighting Installation in Chandler AZ"
          description="Transform your bathroom with professional lighting installation featuring modern fixtures, energy-efficient LEDs, and expert electrical work."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Bathroom Lighting Installation", url: `${siteConfig.url}/bathroom-lighting-installation` }]}
        />
        <ServiceProcess
          title="Bathroom Lighting Installation Process"
          subtitle="Our Process"
          description="Professional lighting installation with modern fixtures and expert electrical work."
          steps={[
            { number: "01", icon: "Lightbulb", title: "Lighting Design", description: "Plan optimal lighting layout for task, ambient, and accent lighting needs." },
            { number: "02", icon: "Layout", title: "Fixture Selection", description: "Choose from vanity lights, recessed fixtures, and moisture-rated bathroom lighting." },
            { number: "03", icon: "Wrench", title: "Electrical Preparation", description: "Install wiring, switches, and electrical connections following safety codes." },
            { number: "04", icon: "Hammer", title: "Fixture Installation", description: "Mount and connect lighting fixtures with proper moisture protection." },
            { number: "05", icon: "Sparkles", title: "Testing & Finishing", description: "Test all lighting circuits and complete installation with clean finishing work." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Bathroom Lighting Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom lighting challenges Chandler homeowners face."
          issues={[
            { problem: "Poor lighting creating shadows during grooming tasks.", solution: "Strategic vanity and task lighting placement for optimal illumination." },
            { problem: "Outdated fixtures that don't match bathroom design.", solution: "Modern lighting fixtures that complement your bathroom's style and finishes." },
            { problem: "Inadequate lighting making the bathroom feel dark.", solution: "Layered lighting design with recessed, vanity, and ambient lighting options." },
            { problem: "High energy bills from inefficient lighting.", solution: "Energy-efficient LED fixtures that reduce electricity costs and last longer." },
            { problem: "Safety concerns with moisture and electrical fixtures.", solution: "Moisture-rated fixtures and proper electrical installation following safety codes." }
          ]}
        />
        <Benefits
          title="Benefits of Professional Bathroom Lighting Installation"
          subtitle="Why It Matters"
          benefits={[
            { icon: "Lightbulb", title: "Better Visibility", description: "Optimal lighting placement eliminates shadows and improves grooming tasks." },
            { icon: "Sparkles", title: "Modern Aesthetics", description: "Contemporary fixtures enhance your bathroom's visual appeal and style." },
            { icon: "ShieldCheck", title: "Safety Compliance", description: "Professional installation meets electrical codes and moisture protection standards." },
            { icon: "Timer", title: "Energy Efficiency", description: "LED fixtures reduce energy consumption and provide long-lasting performance." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Quality lighting installation adds value and appeal to your Chandler home." }
          ]}
        />
        <Tips
          title="Bathroom Lighting Installation Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly installed bathroom lighting."
          tips={[
            "Use LED bulbs for energy efficiency and longer lifespan in bathroom fixtures.",
            "Install dimmer switches for adjustable lighting and enhanced ambiance control.",
            "Choose fixtures with appropriate IP ratings for moisture protection in wet areas.",
            "Clean fixtures regularly with appropriate cleaners to maintain brightness and appearance.",
            "Consider motion sensors for convenience and energy savings in powder rooms."
          ]}
        />
        <ServiceCTA title="Ready for professional bathroom lighting installation?" description="Get expert lighting design, quality fixtures, and professional electrical installation for your bathroom." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Bathroom Lighting Installation Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional bathroom lighting installation services throughout Chandler, Arizona and surrounding areas.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby communities</li>
                <li>• Licensed electrical contractors</li>
                <li>• Modern LED lighting specialists</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Lighting Installation in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need bathroom lighting installation in Chandler, AZ?" description="Contact us for professional bathroom lighting installation with modern fixtures and expert electrical work." />
      </main>
      <Footer />
    </>
  );
}
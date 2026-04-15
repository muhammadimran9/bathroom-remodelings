import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceProcess from "@/components/service-process";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "ADA Bathroom Remodel Chandler | Airforshare",
  description: "ADA-compliant remodels: grab bars, walk-ins. Chandler experts, free estimates. Transform your bathroom with accessibility solutions.",
  keywords: ["ada bathroom remodel chandler", "grab bars installation", "walk-in showers", "accessible bathroom", "free estimates", "expert installation"],
  authors: [{ name: "Airforshare.online" }],
  publisher: "Airforshare.online",
  openGraph: {
    title: "ADA Bathroom Remodel Chandler | Airforshare",
    description: "ADA-compliant remodels: grab bars, walk-ins. Chandler experts, free estimates.",
    url: `${siteConfig.url}/bathroom-accessibility-remodeling`,
    type: "website",
    locale: "en_US",
    siteName: "Airforshare",
    images: [
      {
        url: `${siteConfig.url}/images/ada-bathroom-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "ADA Bathroom Remodeling - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA Bathroom Remodel Chandler | Airforshare",
    description: "ADA-compliant remodels: grab bars, walk-ins. Chandler experts, free estimates.",
    images: [`${siteConfig.url}/images/ada-bathroom-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-accessibility-remodeling`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  { question: "What makes a bathroom ADA compliant in Chandler?", answer: "ADA compliant bathrooms require specific clearances, grab bar placement, accessible fixtures, and barrier-free entries. We ensure all installations meet ADA guidelines for wheelchair accessibility and mobility assistance." },
  { question: "How much does bathroom accessibility remodeling cost?", answer: "Bathroom accessibility remodeling in Chandler costs $5,000-$15,000 depending on modifications needed. Basic grab bar installation starts around $500, while complete accessible bathroom remodels can exceed $15,000." },
  { question: "Do you install walk-in tubs for seniors?", answer: "Yes! We specialize in walk-in tub installation for seniors and individuals with mobility challenges. These tubs feature low thresholds, built-in seating, and safety features for independent bathing." },
  { question: "Can you make existing bathrooms wheelchair accessible?", answer: "Absolutely! We modify existing bathrooms for wheelchair accessibility including widening doorways, installing roll-in showers, lowering fixtures, and creating proper clearances for maneuvering." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomAccessibilityRemodelingPage() {
  return (
    <>
      <ServiceSchema serviceName="Bathroom Accessibility Remodeling in Chandler, Arizona" serviceDescription="Professional bathroom accessibility remodeling in Chandler, Arizona. ADA compliant bathrooms, grab bars, walk-in showers, and aging in place solutions." serviceUrl={`${siteConfig.url}/bathroom-accessibility-remodeling`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Accessibility Remodeling in Chandler, Arizona"
          subtitle="ADA Compliant Bathroom Remodeling in Chandler AZ"
          description="Create safe, accessible bathrooms with ADA compliant features, grab bars, walk-in showers, and aging in place solutions for your Chandler home."
          image="/images/home/photo-1584622650111-993a426fbf0a_geotagged.jpg"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Bathroom Accessibility Remodeling", url: `${siteConfig.url}/bathroom-accessibility-remodeling` }]}
        />
        <ServiceProcess
          title="Bathroom Accessibility Remodeling Process"
          subtitle="Our Process"
          description="Professional accessibility remodeling with ADA compliance and safety-focused design."
          steps={[
            { number: "01", icon: "Accessibility", title: "Accessibility Assessment", description: "Evaluate current bathroom layout and identify accessibility improvements needed." },
            { number: "02", icon: "Layout", title: "ADA Compliant Design", description: "Plan accessible layout with proper clearances, fixture heights, and safety features." },
            { number: "03", icon: "ShieldCheck", title: "Safety Installation", description: "Install grab bars, non-slip surfaces, and accessible fixtures following ADA guidelines." },
            { number: "04", icon: "Hammer", title: "Barrier Removal", description: "Remove barriers, widen doorways, and create accessible entries and pathways." },
            { number: "05", icon: "Sparkles", title: "Final Inspection", description: "Ensure all accessibility features meet ADA standards and safety requirements." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Bathroom Accessibility Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom accessibility challenges Chandler homeowners face."
          issues={[
            { problem: "High tub walls creating fall risks for seniors.", solution: "Walk-in tubs and curbless showers with low or no thresholds for safe entry." },
            { problem: "Lack of grab bars and safety support features.", solution: "Strategically placed grab bars and support rails installed into reinforced blocking." },
            { problem: "Narrow doorways preventing wheelchair access.", solution: "Doorway widening and accessible entry modifications for wheelchair clearance." },
            { problem: "Fixtures at uncomfortable or unreachable heights.", solution: "ADA compliant fixture heights and accessible controls for all users." },
            { problem: "Slippery surfaces causing safety concerns.", solution: "Non-slip flooring and textured surfaces for improved traction and safety." }
          ]}
        />
        <Benefits
          title="Benefits of Bathroom Accessibility Remodeling"
          subtitle="Why It Matters"
          benefits={[
            { icon: "Accessibility", title: "Independent Living", description: "Accessible features enable independent bathroom use and aging in place." },
            { icon: "ShieldCheck", title: "Enhanced Safety", description: "Grab bars, non-slip surfaces, and accessible design reduce fall risks." },
            { icon: "Timer", title: "Future-Proofing", description: "Accessible design accommodates changing mobility needs over time." },
            { icon: "TrendingUp", title: "Universal Appeal", description: "Accessible bathrooms appeal to buyers of all ages and abilities." },
            { icon: "Layout", title: "Improved Functionality", description: "Better layout and accessibility features enhance bathroom usability." }
          ]}
        />
        <Tips
          title="Bathroom Accessibility Remodeling Tips & Maintenance"
          subtitle="Keep It Safe & Functional"
          description="Expert tips to maintain your accessible bathroom features and ensure continued safety."
          tips={[
            "Test grab bars regularly to ensure they remain securely mounted and stable.",
            "Keep non-slip surfaces clean and free of soap residue that can reduce traction.",
            "Ensure adequate lighting throughout the bathroom for safe navigation.",
            "Consider motion-sensor lighting for hands-free operation and convenience.",
            "Schedule regular inspections of accessibility features to maintain safety standards."
          ]}
        />
        <ServiceCTA title="Ready for bathroom accessibility remodeling in Chandler?" description="Get expert consultation on ADA compliant features, safety installations, and aging in place solutions." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Bathroom Accessibility Remodeling Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional bathroom accessibility remodeling services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• ADA compliant remodeling specialists</li>
                <li>• Aging in place bathroom solutions</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Accessibility Remodeling in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need bathroom accessibility remodeling in Chandler, AZ?" description="Contact us for professional accessibility remodeling with ADA compliant features and safety installations." />
      </main>
      <Footer />
    </>
  );
}

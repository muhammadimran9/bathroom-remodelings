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
  title: "Small Bathroom Remodeling Chandler AZ | Space-Maximizing Designs",
  description: "Professional small bathroom remodeling in Chandler, Arizona. Space-saving designs, storage solutions, and modern fixtures. Get your small bathroom remodeling estimate today.",
};

const faqs = [
  { question: "How much does small bathroom remodeling cost in Chandler?", answer: "Small bathroom remodeling in Chandler typically costs $8,000-$20,000 depending on fixtures, materials, and layout changes. Basic updates start around $8,000, while luxury small bathroom remodels can exceed $20,000." },
  { question: "What are the best ways to make a small bathroom look bigger?", answer: "Light colors, large mirrors, glass shower doors, floating vanities, and good lighting make small bathrooms appear larger. We also recommend minimizing visual clutter and using consistent materials." },
  { question: "Can you add storage to a small bathroom remodel?", answer: "Yes! We specialize in creative storage solutions including built-in niches, floating shelves, vanity storage, and recessed medicine cabinets that maximize space without crowding." },
  { question: "How long does small bathroom remodeling take?", answer: "Small bathroom remodeling typically takes 1-3 weeks depending on complexity. Simple updates take 1-2 weeks, while complete remodels with plumbing changes may take 2-3 weeks." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function SmallBathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema serviceName="Small Bathroom Remodeling in Chandler, Arizona" serviceDescription="Professional small bathroom remodeling in Chandler, Arizona. Space-saving designs, storage solutions, and modern fixtures." serviceUrl={`${siteConfig.url}/services/small-bathroom-remodeling`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Small Bathroom Remodeling in Chandler, Arizona"
          subtitle="Space-Maximizing Bathroom Remodeling in Chandler AZ"
          description="Transform your small bathroom with space-saving designs, clever storage solutions, and modern fixtures that maximize every square foot."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Small Bathroom Remodeling", url: `${siteConfig.url}/services/small-bathroom-remodeling` }]}
        />
        <ServiceProcess
          title="Small Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Space-maximizing remodeling with smart design solutions and efficient layouts."
          steps={[
            { number: "01", icon: "Layout", title: "Space Analysis", description: "Evaluate current layout and identify opportunities to maximize space and functionality." },
            { number: "02", icon: "Ruler", title: "Design Planning", description: "Create space-saving design with optimal fixture placement and storage solutions." },
            { number: "03", icon: "Hammer", title: "Efficient Demolition", description: "Careful demolition in tight spaces with protection for surrounding areas." },
            { number: "04", icon: "Sparkles", title: "Smart Installation", description: "Install space-saving fixtures, storage solutions, and modern finishes." },
            { number: "05", icon: "ShieldCheck", title: "Final Optimization", description: "Complete installation with space-maximizing details and quality finishing." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Small Bathroom Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common small bathroom challenges Chandler homeowners face."
          issues={[
            { problem: "Cramped layout making the bathroom feel claustrophobic.", solution: "Open design concepts with glass, mirrors, and light colors to create spacious feel." },
            { problem: "Insufficient storage causing clutter and disorganization.", solution: "Built-in storage solutions, floating vanities, and creative storage niches." },
            { problem: "Poor lighting making the space feel dark and small.", solution: "Layered lighting design with recessed lights, vanity lighting, and natural light optimization." },
            { problem: "Outdated fixtures that overwhelm the small space.", solution: "Appropriately scaled fixtures and space-saving designs that fit the room proportions." },
            { problem: "Inefficient layout wasting valuable square footage.", solution: "Optimized layout planning that maximizes functionality within limited space." }
          ]}
        />
        <Benefits
          title="Benefits of Small Bathroom Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            { icon: "Layout", title: "Maximized Space", description: "Smart design solutions make small bathrooms feel larger and more functional." },
            { icon: "Sparkles", title: "Modern Aesthetics", description: "Contemporary designs and finishes create a fresh, updated appearance." },
            { icon: "Timer", title: "Improved Efficiency", description: "Better layout and storage solutions streamline daily routines." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Well-designed small bathrooms add significant value to your Chandler home." },
            { icon: "ShieldCheck", title: "Quality Materials", description: "Durable, space-appropriate materials that withstand daily use in compact spaces." }
          ]}
        />
        <Tips
          title="Small Bathroom Remodeling Tips & Maintenance"
          subtitle="Keep It Looking Spacious"
          description="Expert tips to maintain your newly remodeled small bathroom and maximize its impact."
          tips={[
            "Use light colors and reflective surfaces to maintain the spacious feel of your remodel.",
            "Keep countertops clutter-free by utilizing built-in storage and organizational systems.",
            "Clean mirrors and glass surfaces regularly to maintain brightness and openness.",
            "Use consistent materials and colors throughout to create visual continuity.",
            "Maximize natural light with appropriate window treatments and strategic mirror placement."
          ]}
        />
        <ServiceCTA title="Ready for small bathroom remodeling in Chandler?" description="Get expert space-maximizing design, smart storage solutions, and professional installation for your small bathroom." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Small Bathroom Remodeling Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional small bathroom remodeling services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• Space-maximizing design specialists</li>
                <li>• Small bathroom remodeling experts</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Small Bathroom Remodeling in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need small bathroom remodeling in Chandler, AZ?" description="Contact us for professional small bathroom remodeling with space-saving designs and smart solutions." />
      </main>
      <Footer />
    </>
  );
}
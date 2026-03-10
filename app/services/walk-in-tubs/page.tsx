import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Walk-In Tubs Installation | Chandler Bathroom Remodeling",
  description: "Safe and accessible walk-in tub installations in Chandler, Arizona. Enhanced bathing independence with therapeutic features. Free estimates available.",
};

export default function WalkInTubsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Safe & Accessible Walk-In Tub Installation"
          subtitle="Walk-In Tubs"
          description="Experience the ultimate in bathing safety and comfort with our walk-in tub installations. Designed for enhanced independence with therapeutic features and easy access."
          image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Walk-In Tubs", url: `${siteConfig.url}/services/walk-in-tubs` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Professional Walk-In Tub Installation in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Walk-in tubs provide the perfect solution for those who want to maintain their bathing independence while prioritizing safety. Our walk-in tub installations feature low-threshold doors, built-in safety features, and optional therapeutic elements that transform your bathroom into a personal spa retreat.
                </p>
                <p className="mb-6">
                  We offer a variety of walk-in tub styles and features, including air jets, hydrotherapy, heated surfaces, and quick-drain technology. Each installation is customized to meet your specific needs and bathroom layout while ensuring the highest standards of safety and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Benefits of Walk-In Tubs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Safety</h3>
                  <p className="text-muted-foreground">Low-threshold entry, built-in grab bars, and non-slip surfaces provide maximum safety for users of all mobility levels.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Therapeutic Benefits</h3>
                  <p className="text-muted-foreground">Optional hydrotherapy and air jet systems provide therapeutic benefits for arthritis, circulation, and muscle relief.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Maintained Independence</h3>
                  <p className="text-muted-foreground">Walk-in tubs allow users to maintain their bathing independence while providing peace of mind for family members.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Comfort Features</h3>
                  <p className="text-muted-foreground">Built-in seating, heated surfaces, and ergonomic design provide maximum comfort during bathing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Why Choose Our Walk-In Tub Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Certified Installation Specialists</h3>
                    <p className="text-muted-foreground">Our team is specially trained in walk-in tub installation, ensuring proper fit, seal, and safety features.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Brand Selection</h3>
                    <p className="text-muted-foreground">We offer walk-in tubs from leading manufacturers known for quality, safety, and innovative features.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Service</h3>
                    <p className="text-muted-foreground">From initial consultation to final testing, we handle every aspect of your walk-in tub installation project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How does a walk-in tub work?</h3>
                  <p className="text-muted-foreground">Walk-in tubs have a watertight door that allows you to enter the tub before filling it with water. The door seals securely to prevent leaks during use.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How long does it take to fill and drain?</h3>
                  <p className="text-muted-foreground">Modern walk-in tubs feature fast-fill faucets and quick-drain technology, typically filling in 6-8 minutes and draining in 2-3 minutes.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Will a walk-in tub fit in my existing bathroom?</h3>
                  <p className="text-muted-foreground">Most walk-in tubs are designed to fit in standard bathtub spaces. We'll measure your bathroom to ensure proper fit during consultation.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What therapeutic features are available?</h3>
                  <p className="text-muted-foreground">Options include hydrotherapy jets, air bubble systems, heated seating, aromatherapy, and chromotherapy lighting for a complete spa experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Enhanced Bathing Safety?"
          description="Contact us today for a free consultation on your walk-in tub installation project."
        />
      </main>
      <Footer />
    </>
  );
}
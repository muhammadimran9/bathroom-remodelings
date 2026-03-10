import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KOHLER® Walk-In Bath Installation | Chandler Bathroom Remodeling",
  description: "Premium KOHLER® walk-in bath solutions in Chandler, Arizona. Combining safety with luxury bathing experience. Free estimates available.",
};

export default function KohlerWalkInBathPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Premium KOHLER® Walk-In Bath Solutions"
          subtitle="KOHLER® Walk-In Bath"
          description="Experience the ultimate in bathing luxury and safety with KOHLER® Walk-In Bath installations. Premium quality, innovative features, and professional installation for enhanced independence."
          image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "KOHLER® Walk-In Bath", url: `${siteConfig.url}/services/kohler-walk-in-bath` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                KOHLER® Walk-In Bath Installation in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  KOHLER® Walk-In Baths represent the perfect fusion of safety, comfort, and luxury. These premium walk-in tubs feature KOHLER®'s renowned quality and innovative design, including low-threshold entry, built-in safety features, and optional therapeutic systems. Our certified installation ensures you receive the full benefit of KOHLER®'s engineering excellence.
                </p>
                <p className="mb-6">
                  Each KOHLER® Walk-In Bath is designed with user safety and comfort as top priorities. From the easy-access door to the comfortable seating and therapeutic options, every feature is engineered to provide a superior bathing experience while maintaining independence and dignity.
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
                Benefits of KOHLER® Walk-In Bath
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">KOHLER® Quality</h3>
                  <p className="text-muted-foreground">Backed by KOHLER®'s 150+ years of innovation and quality, ensuring reliable performance and lasting durability.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Advanced Safety Features</h3>
                  <p className="text-muted-foreground">Low-threshold entry, slip-resistant surfaces, built-in grab bars, and comfortable seating for maximum safety.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Therapeutic Options</h3>
                  <p className="text-muted-foreground">Optional hydrotherapy, heated surfaces, and other therapeutic features for enhanced comfort and wellness.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Elegant Design</h3>
                  <p className="text-muted-foreground">Beautiful aesthetics that complement your bathroom décor while providing superior functionality.</p>
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
                Why Choose Our KOHLER® Walk-In Bath Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Authorized KOHLER® Dealer</h3>
                    <p className="text-muted-foreground">As an authorized KOHLER® dealer, we provide genuine products with full manufacturer warranties and support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Installation Team</h3>
                    <p className="text-muted-foreground">Our certified installers are specially trained in KOHLER® Walk-In Bath installation procedures and safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Service</h3>
                    <p className="text-muted-foreground">From consultation to installation and follow-up, we provide complete service for your KOHLER® Walk-In Bath project.</p>
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
                  <h3 className="font-semibold text-foreground mb-3">What makes KOHLER® Walk-In Baths different?</h3>
                  <p className="text-muted-foreground">KOHLER® Walk-In Baths feature superior build quality, innovative safety features, and elegant design backed by KOHLER®'s industry-leading warranty and reputation.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How quickly can a KOHLER® Walk-In Bath be installed?</h3>
                  <p className="text-muted-foreground">Most KOHLER® Walk-In Bath installations can be completed in one day with minimal disruption to your daily routine.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What therapeutic features are available?</h3>
                  <p className="text-muted-foreground">KOHLER® offers various therapeutic options including hydrotherapy jets, heated surfaces, aromatherapy, and chromotherapy lighting systems.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Is financing available for KOHLER® Walk-In Baths?</h3>
                  <p className="text-muted-foreground">Yes, we offer financing options to help make your KOHLER® Walk-In Bath installation more affordable. Contact us for details on current programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Premium KOHLER® Walk-In Bath?"
          description="Contact us today for a free consultation on your KOHLER® Walk-In Bath installation."
        />
      </main>
      <Footer />
    </>
  );
}